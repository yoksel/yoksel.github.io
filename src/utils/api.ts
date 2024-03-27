// https://github.com/vercel/next.js/blob/canary/examples/blog-starter/lib/api.ts

import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { ArticleData, ArticleType, DataBySlag } from '../types';
import customMarkdownToHtml from './customMarkdownToHtml';
import { getSectionsList } from './getSectionsList';
import { postsDataBySlug, pagesDataBySlug } from '../../data/meta/articlesDataBySlug';

export const getDirectory = (type: ArticleType = 'post') => {
  let directoryPath = 'data/posts';

  if (type === 'page') {
    directoryPath = 'data/pages';
  }
  if (type === 'service-page') {
    directoryPath = 'data/service-pages';
  }

  return join(process.cwd(), directoryPath);
};

type Fields = (keyof ArticleData)[];

interface getArticleBySlugArgs {
  slug: string;
  fields: Fields;
  type?: ArticleType;
}

export async function getArticleBySlug({
  slug,
  fields = [],
  type = 'post',
}: getArticleBySlugArgs): Promise<ArticleData | undefined> {
  const articlesDataByType: DataBySlag = type === 'page' ? pagesDataBySlug : postsDataBySlug;
  const slugWithSlash = slug.startsWith('/') ? slug : `/${slug}`;
  const articlesData = articlesDataByType[slugWithSlash];

  if (!articlesData) {
    console.log(`Slug not found: ${slug}`);
    return;
  }

  const fullPath = join(getDirectory(type), articlesData.fullSlug);

  const moreDelimiter = '<!--more-->';

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const dataTyped = data;

    const filteredFields: ArticleData = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field: keyof ArticleData) => {
      if (field === 'slug') {
        filteredFields['slug'] = slug;
      } else if (field === 'content') {
        filteredFields['content'] = customMarkdownToHtml(content).replace(moreDelimiter, '');
      } else if (field === 'excerpt') {
        if (dataTyped['excerpt']) {
          filteredFields['excerpt'] = dataTyped['excerpt'];
        } else if (content.includes(moreDelimiter)) {
          const excerpt = content.split(moreDelimiter)?.[0];
          filteredFields['excerpt'] = customMarkdownToHtml(excerpt);
        }
      } else if (field && data[field] !== undefined) {
        filteredFields[field] = dataTyped[field];
      }
    });

    if (filteredFields.content) {
      filteredFields.content = await marked.parse(filteredFields.content || '');

      if (fields.includes('navItems')) {
        filteredFields.navItems = getSectionsList(filteredFields.content);
      }
    }

    if (articlesData.date) {
      filteredFields.date = articlesData.date;
    }

    return filteredFields;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllArticles(fields: Fields = [], type: ArticleType = 'post') {
  const articlesDataByType: DataBySlag = type === 'page' ? pagesDataBySlug : postsDataBySlug;
  const slugs = Object.keys(articlesDataByType);
  const articlesPromises = slugs.map(async (slug) => {
    const article = await getArticleBySlug({ slug, fields, type });

    if (!article) return;
    const transformed = { ...article, href: article.slug, text: article.title, type };

    delete transformed.title;
    delete transformed.slug;
    return transformed;
  });

  const asyncArticles = await Promise.all(articlesPromises);

  const articles = asyncArticles
    .filter((item) => Boolean(item))
    .sort((post1, post2) => {
      // sort articles by order in ascending order
      if (post1?.order && post2?.order) {
        return post1.order - post2.order;
      }

      if (post1?.date && post2?.date) {
        const time1InMs = new Date(post1.date).getTime();
        const time2InMs = new Date(post2.date).getTime();
        return time2InMs - time1InMs;
      }

      return 0;
    });
  return articles;
}

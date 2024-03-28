import React from 'react';
import type { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';
import { getAllArticles, getArticleBySlug } from '../utils/api';
import { postsDataBySlug } from '../../data/meta/articlesDataBySlug';
import { ArticleData, PrevNextItem, PrevNextProps, WidgetItem } from '../types';
import Layout from '../components/molecules/Layout';

export const getStaticPaths = (async () => {
  return {
    // List of all paths which should be created during the build
    paths: [...Object.keys(postsDataBySlug)],
    fallback: false, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const slugFromParams = context?.params?.slug;
  const slug = typeof slugFromParams === 'string' ? slugFromParams : undefined;

  if (!slug) {
    throw new Error('Article not found');
  }

  const slugWithSlash = slug.startsWith('/') ? slug : `/${slug}`;
  const article = await getArticleBySlug({
    slug,
    fields: ['title', 'slug', 'content', 'links', 'tags', 'navItems'],
    type: 'post',
  });

  if (!article) {
    throw new Error(`Article with slug "${slug}" not found`);
  }

  const posts = (await getAllArticles(['title', 'slug', 'order'], 'post')) as WidgetItem[];
  const pages = (await getAllArticles(['title', 'slug', 'order'], 'page')) as WidgetItem[];
  let prevNext: PrevNextProps = {};

  const currentIndex = posts.findIndex((post) => {
    return post.href === slugWithSlash;
  });

  if (currentIndex > -1) {
    const isNotFirst = currentIndex > 0;
    const isNotLast = currentIndex < posts.length;
    const next = isNotFirst ? posts[currentIndex - 1] : undefined;
    const prev = isNotLast ? posts[currentIndex + 1] : undefined;

    if (prev) {
      prevNext.prev = { ...prev, id: 'previous' };
    }
    if (next) {
      prevNext.next = { ...next, id: 'next' };
    }
  }

  return { props: { article, posts, pages, prevNext } };
}) satisfies GetStaticProps<{
  article: ArticleData;
  posts: WidgetItem[];
  pages: WidgetItem[];
  prevNext: PrevNextProps;
}>;

export default function Page({
  article,
  posts,
  pages,
  prevNext,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      isMain={false}
      article={article}
      posts={posts}
      pages={pages}
      prevNext={prevNext}
    ></Layout>
  );
}

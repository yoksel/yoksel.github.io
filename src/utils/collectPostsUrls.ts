import fs from 'node:fs';
import { join } from 'path';

import { getDirectory } from './api';
import { ArticleType, DataBySlag } from '../types';

const isFile = (fileName: string) => {
  return fs.lstatSync(fileName).isFile();
};

export function getArticlesSlugsFromFs(type: ArticleType = 'post'): string[] {
  const filesList = fs.readdirSync(getDirectory(type));

  return filesList.filter((fileName) => {
    const fullPath = join(getDirectory(type), fileName);
    return isFile(fullPath);
  });
}

function getArticlesLongSlugsByShort(type: ArticleType = 'post') {
  const slugs = getArticlesSlugsFromFs(type);
  const longSlugsByShort: DataBySlag = {};

  slugs.forEach((fullSlug) => {
    const dateMatch = fullSlug?.match(/\d{4}-\d{2}-\d{2}/);
    const date = dateMatch?.[0];
    let articleSlug = fullSlug.replace(`${date}-`, '').replace(`.md`, '');

    if (type === 'page') {
      articleSlug = `pages/${articleSlug}`;
    }

    if (articleSlug && date) {
      longSlugsByShort[`/${articleSlug}`] = {
        date,
        fullSlug,
      };
    } else {
      longSlugsByShort[`/${articleSlug}`] = {
        fullSlug,
      };
    }
  });

  return longSlugsByShort;
}

const formatObject = (content: DataBySlag) => JSON.stringify(content, null, '  ');

/** It is used on pages with slug in getStaticPaths()
 * Run `npm run getPosts` to get posts list
 */
const collectPostsUrls = () => {
  const postsSlugs = getArticlesLongSlugsByShort('post');
  const archivedPostsSlugs = getArticlesLongSlugsByShort('archive');
  const pagesSlugs = getArticlesLongSlugsByShort('page');
  const servicePagesSlugs = getArticlesLongSlugsByShort('service-page');

  const content = `/* npm run getPosts */
export const postsDataBySlug = ${formatObject(postsSlugs)};

export const archivedPostsDataBySlug = ${formatObject(archivedPostsSlugs)};

export const pagesDataBySlug = ${formatObject(pagesSlugs)};

export const servicePagesDataBySlug = ${formatObject(servicePagesSlugs)}`;

  fs.writeFileSync('data/meta/articlesDataBySlug.ts', content);

  console.log('Posts and pages data were written successfully');
};

collectPostsUrls();

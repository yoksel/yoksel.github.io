import fs from 'fs';
import { getArticlesSlugs } from './api';

/** It is used on pages with slug in getStaticPaths()
 * run `npm run getPosts` to get posts list
*/
const collectPostsUrls = () => {
  const slugs = getArticlesSlugs().map((slug) => `'/${slug.replace(/\.md$/, '')}'`);
  const content = `/* npm run getPosts */\n\nconst postList = [${slugs.join(', ')}];

export default postList;`;

  fs.writeFileSync('src/postsList.ts', content);
};

collectPostsUrls();

console.log(collectPostsUrls());

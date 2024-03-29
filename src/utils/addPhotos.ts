import fs from 'fs';
import { OrderBy, createApi } from 'unsplash-js';
import { Nullable } from 'unsplash-js/dist/helpers/typescript';
import dotenv from 'dotenv';
dotenv.config();

interface PhotoData {
  isVertical: boolean;
  color: Nullable<string>;
  altDescription: Nullable<string>;
  src: string;
  link: string;
}
// https://www.npmjs.com/package/unsplash-js
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_TOKEN!,
});

const photosFilePath = 'data/meta/photos.ts';

const getPhotosByPagePromise = (page: number = 1): Promise<PhotoData[]> => {
  return new Promise((resolve, reject) => {
    // users.photos(username, page, perPage, orderBy, stats)
    const orderBy = page % 2 === 1 ? OrderBy.LATEST : OrderBy.POPULAR;
    unsplash.users
      .getPhotos({ username: 'yoksel', page, perPage: 10, orderBy })
      .then((result) => {
        if (result.type === 'error') {
          throw new Error('Error in response from Unsplash');
        }
        if (!result.response.results) {
          throw new Error('No photos in response from Unsplash');
        }
        return result.response.results;
      })
      .then((photosDataSrc) => {
        const photosData: PhotoData[] = photosDataSrc.map((item) => {
          const { width, height, color, urls, links, alt_description: altDescription } = item;
          return {
            isVertical: height > width,
            color,
            altDescription,
            src: urls.small,
            link: links.html,
          };
        });

        resolve(photosData);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const formatObject = (content: PhotoData[]) => JSON.stringify(content, null, '  ');

export const getPhotos = async () => {
  const promises = [] as Promise<PhotoData[]>[];
  const pagesMax = 4;

  for (let i = 1; i <= pagesMax; i++) {
    promises.push(getPhotosByPagePromise(i));
  }

  const collectedDataLists = await Promise.all(promises);
  let collectedData: PhotoData[] = [];
  collectedDataLists.forEach((list) => {
    collectedData = collectedData.concat(list);
  });

  const content = `/* npm run getPhotos */

const photos = ${formatObject(collectedData)}

export default photos`;

  fs.writeFileSync(photosFilePath, content);

  console.log('\nJSON of photos from Unsplash was written to file\n');
};

getPhotos().catch((error) => {
  console.log(`${error}\n\n`);
});

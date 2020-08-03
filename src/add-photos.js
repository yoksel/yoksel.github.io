require('dotenv').config();
const fs = require('fs');
const fetch = require('node-fetch');
global.fetch = fetch;
const Unsplash = require('unsplash-js').default;
const { toJson } = require('unsplash-js');

const photosFilePath = 'static/assets/js/photos.js';
const token = process.env.UNSPLASH_TOKEN;

const unsplash = new Unsplash({ accessKey: token });

const getPhotosByPagePromise = (pageNum = 1) => {
  return new Promise((resolve, reject) => {
    // users.photos(username, page, perPage, orderBy, stats)
    const orderBy = pageNum % 2 === 1
      ? 'latest'
      : 'popular';
    unsplash.users.photos('yoksel', pageNum, 30, orderBy, false)
      .then(toJson)
      .then(json => {
        const cleanedData = json.map(item => {
          const {
            width,
            height,
            color,
            urls,
            links,
            alt_description: altDescription
          } = item;
          return {
            isVertical: height > width,
            color,
            altDescription,
            urls: {
              small: urls.small
            },
            link: links.html
          };
        });

        resolve(cleanedData);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const getPhotos = async () => {
  const promises = [];
  const pagesMax = 3;

  for (let i = 1; i <= pagesMax; i++) {
    promises.push(getPhotosByPagePromise(i));
  }

  const collectedDataList = await Promise.all(promises);
  const collectedData = [].concat(...collectedDataList);
  const collectedDataStr = `export default ${JSON.stringify(collectedData, null, '  ')}`;

  fs.writeFile(
    photosFilePath,
    collectedDataStr,
    (error) => {
      if (error) {
        throw new Error(`Write photos to file: ${error}`);
      }

      console.log('\n* JSON of photos from Unsplash was written to file *\n');
    }
  );
};

getPhotos()
  .catch(error => {
    console.log(`${error}\n\n`);
  });

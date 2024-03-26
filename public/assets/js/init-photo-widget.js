import photosData from './photos.js';
const maxPhotos = 6;
const colors = [
  'brown',
  'red',
  'pink',
  'orange',
  'beige',
  'yellow',
  'white',
  'green',
  'blue',
  'violet',
  'purple'
];

const getColorFromText = (text) => {
  for (const color of colors) {
    if (text.includes(color)) {
      return color;
    }
  }

  return null;
};

export const initPhotoWidget = () => {
  const widgetElement = document.querySelector('.widget--photos');

  if (!widgetElement) {
    return;
  }

  if (photosData.length > 0) {
    widgetElement.classList.remove('hidden');
  }

  const listElement = widgetElement.querySelector('.widget__list');
  listElement.classList.add('widget__list--grid');

  const indexes = new Set();

  const randomPhotos = [];

  while (randomPhotos.length < maxPhotos) {
    const newIndex = Math.floor(Math.random() * photosData.length);

    if (!indexes.has(newIndex)) {
      indexes.add(newIndex);
      randomPhotos.push(photosData[newIndex]);
    }
  };

  const itemsMarkup = randomPhotos.map(item => {
    const { color, link, urls, altDescription } = item;
    const colorFromText = getColorFromText(altDescription || '');

    return `<li style="background-color: ${colorFromText || color}">
      <a href="${link}">
        <img
          src="${urls.small}" alt=""
          loading="lazy"
        />
      </a>
    </li>`;
  });

  listElement.insertAdjacentHTML('afterbegin', itemsMarkup.join('\n'));
};

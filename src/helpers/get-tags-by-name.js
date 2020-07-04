import tagsData from '../data/meta/tags.json';

let tagsByName = null;

export const getTagsByName = (data) => {
  if (tagsByName) {
    return tagsByName;
  }

  tagsByName = tagsData.reduce((prev, item) => {
    prev[item.slug] = item.name;
    return prev;
  }, {});

  return tagsByName;
};

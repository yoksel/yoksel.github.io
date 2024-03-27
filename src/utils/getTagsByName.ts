import tagsData from '../../data/meta/tags.json';

interface Tag {
  name: string;
  slug: string;
}

interface TagsByName {
  [key: string]: string;
}

let tagsByName: TagsByName | null = null;

/** Returns object with tags by tag slug:
 * {
    "a11y": "доступность",
    "animation": "анимация",
    ...
  }
 */
export const getTagsByName = () => {
  if (tagsByName) {
    return tagsByName;
  }

  tagsByName = (tagsData as Tag[]).reduce((prev, item) => {
    prev[item.slug] = item.name;
    return prev;
  }, {} as TagsByName);

  return tagsByName;
};

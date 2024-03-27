import { PageUrl } from '../types';

interface Group {
  id?: string;
  name?: string;
  level?: string;
  text?: string;
}

export const getArticleNavItemsFromGroups = (groups: Group[]): PageUrl[] => {
  const navItems = groups.map((item) => {
    const { id, name, text } = item;
    const levelAsNumber = Number(item.level);
    let level = levelAsNumber > 2 ? levelAsNumber - 2 : 0;

    return {
      id,
      text: name || text,
      level,
    } as PageUrl;
  });

  return navItems.filter((item) => Boolean(item));
};

export const getSectionsList = (content: string) => {
  const elementsWithId = content?.matchAll(
    /<[^>]{1,20} id="(?<id>[^"]{1,200})"( data-name="(?<name>[^"]{1,200})")?><h(?<level>[^>]{1,})>(?<text>[^<]{1,})/g,
  );

  if (!elementsWithId) return;

  const groups = Array.from(elementsWithId).map((item) => {
    return item.groups!;
  });

  // Article navigation for sections with id
  return getArticleNavItemsFromGroups(groups);
};

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
  const sectionsWithId = content?.matchAll(
    /<[^>]{1,20} id="(?<id>[^"]{1,200})"( data-name="(?<name>[^"]{1,200})")?><h(?<level>[^>]{1,})>(?<text>[^<]{1,})/g,
  );
  const headingsWithId = content?.matchAll(
    /<h(?<level>[^>]{1,}) id="(?<id>[^"]{1,200})"( data-name="(?<name>[^"]{1,200})")?>(?<text>[^<]{1,})/g,
  );

  if (!(sectionsWithId || headingsWithId)) return;

  const sectionsGroups = Array.from(sectionsWithId).map((item) => {
    return item.groups!;
  });
  const headingsGroups = Array.from(headingsWithId).map((item) => {
    return item.groups!;
  });

  // Article navigation for sections with id
  return getArticleNavItemsFromGroups([...sectionsGroups, ...headingsGroups]);
};

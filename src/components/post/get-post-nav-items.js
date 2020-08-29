export const getPostNavItems = (elementsWithId) => {
  if (!elementsWithId) {
    return [];
  }
  const regexpNoName =
    '<([^>]{1,20}) id="([^>]{1,200})">([^>]{1,200})</[^>]{1,20}>';
  const regexpDataName = '<([^>]{1,20}) id="([^>]{1,200})" data-name="([^>]{1,200})">';

  // fix later
  return elementsWithId.map(item => {
    let regexp = new RegExp(regexpNoName);

    if (item.includes('data-name')) {
      regexp = new RegExp(regexpDataName);
    }

    const [, tag, id, name] = item.match(regexp);
    let level = 0;
    if (tag.length === 2 && tag.includes('h')) {
      const tagLevel = tag.substring(1, 2);
      level = tagLevel - 2;
    }

    return {
      id,
      name,
      level
    };
  });
};

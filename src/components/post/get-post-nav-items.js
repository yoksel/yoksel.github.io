export const getPostNavItems = (elementsWithId) => {
  if (!elementsWithId) {
    return [];
  }
  const regexpNoName =
    '<[^>]{1,20} id="([^>]{1,200})">([^>]{1,200})</[^>]{1,20}>';
  const regexpDataName = '<[^>]{1,20} id="([^>]{1,200})" data-name="([^>]{1,200})">';

  // fix later
  return elementsWithId.map(item => {
    let regexp = new RegExp(regexpNoName);

    if (item.includes('data-name')) {
      regexp = new RegExp(regexpDataName);
    }

    const [, id, name] = item.match(regexp);
    return {
      id,
      name
    };
  });
};

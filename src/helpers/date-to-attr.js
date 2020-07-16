export const dateToAttr = (date) => {
  if (!date) {
    return null;
  }

  return date
    .split('/')
    .reverse()
    .join('-');
};

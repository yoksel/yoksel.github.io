export const dateToAttr = (date) => {
  return date
    .split('/')
    .reverse()
    .join('-');
};

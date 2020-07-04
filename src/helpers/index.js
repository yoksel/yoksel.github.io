export { getTagsByName } from './get-tags-by-name';

export const postNodesToList = nodes => {
  return nodes.map(({ node }) => {
    const { id, frontmatter, fields } = node;

    return {
      id,
      title: frontmatter.title,
      url: fields.url
    };
  });
};

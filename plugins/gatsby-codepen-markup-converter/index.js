const visit = require('unist-util-visit');

// https://www.gatsbyjs.org/tutorial/remark-plugin-tutorial/

module.exports = ({ markdownAST }) => {
  const markerOfEmbededPen = 'data-slug-hash';
  const markerIgnoreCodepen = 'data-ignore-codepen';

  visit(markdownAST, 'html', node => {
    if (!node.value.includes(markerOfEmbededPen) || !node.value.trim()) {
      return;
    }

    // Ignore codepen for tests
    if (node.value.includes(markerIgnoreCodepen)) {
      return;
    }

    const urlMatch = node.value.match(
      /['"](https?:\/\/codepen\.io\/\S{3,20}\/pen\/\S{3,20})['"]/
    );

    const dataHeightMatch = node.value.match(/data-height=['"](\S{2,5})['"]/);
    const dataTabMatch = node.value.match(/data-default-tab=['"]([^'"]{2,20})/);
    const dataTitleMatch = node.value.match(/data-pen-title=['"]([^'"]{2,500})/);

    const penUrl = urlMatch[1];
    // Iframe needs url with /embed/
    // Url with /pen/ breaks demo & force random scroll on page
    const embedUrl = penUrl.replace('/pen', '/embed');
    const tab = dataTabMatch ? dataTabMatch[1] : 'result'
    const height = dataHeightMatch ? dataHeightMatch[1] : 300
    const title = dataTitleMatch ? dataTitleMatch[1] : 'no title'

    // Try to reproduce standard embedding codepen code
    const frameMarkup = `<iframe height="${height}"
      style="width: 100%"
      title="${title}"
      src="${embedUrl}?&default-tab=${tab}"
    ></iframe>`;

    // Remove line breaks to match replace p pattern
    node.value = node.value.replace(/\n/g, '');

    // Replace paragraph with iframe, remove script
    node.value = node.value.replace(/<script(.*)><\/script>/, '');
    node.value = node.value.replace(/<p(.*)>(.*)<\/p>/g, frameMarkup);
  });

  return markdownAST;
};

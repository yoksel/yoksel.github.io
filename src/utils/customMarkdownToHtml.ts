import Prism from 'prismjs';

export function addHighlightingReplacer(_: unknown, type: string, code: string) {
  const cleanCode = code
    .replace(/^\n/, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
  const highlightedCode = Prism.highlight(cleanCode, Prism.languages[type], 'type');
  return `<figure aria-label="Пример кода"><pre class="language-${type}"><code class="language-${type}">${highlightedCode}</code></pre></figure>`;
}

export function addAnchorsReplacer(_: unknown, level: string, id: string, text: string) {
  const openTag = `<h${level} id=${id}>`;
  const closeTag = `</h${level}>`;
  const textInLink = `<a href="#${id}">${text}</a>`;
  return `${openTag}${textInLink}${closeTag}`;
}

// https://github.com/yoksel/yoksel.github.io/blob/gatsby/plugins/gatsby-codepen-markup-converter/index.js
export function paragraphToDivReplacer(_: unknown, codepenWidget: string) {
  const urlMatch = codepenWidget.match(/['"](https?:\/\/codepen\.io\/\S{3,20}\/pen\/\S{3,20})['"]/);
  const dataHeightMatch = codepenWidget.match(/data-height=['"](\S{2,5})['"]/);
  const dataTabMatch = codepenWidget.match(/data-default-tab=['"]([^'"]{2,20})/);
  const dataTitleMatch = codepenWidget.match(/data-pen-title=['"]([^'"]{2,500})/);

  if (!urlMatch) return codepenWidget;

  const penUrl = urlMatch[1];

  // Iframe needs url with /embed/
  // Url with /pen/ breaks demo & force random scroll on page
  const embedUrl = penUrl.replace('/pen', '/embed').replace('http:', 'https:');
  const tab = dataTabMatch ? dataTabMatch[1] : 'result';
  const height = dataHeightMatch ? dataHeightMatch[1] : 300;
  const title = dataTitleMatch ? dataTitleMatch[1] : 'no title';

  // Try to reproduce standard embedding codepen code
  const frameMarkup = `<iframe height="${height}"
      style="width: 100%"
      title="${title}"
      src="${embedUrl}?&default-tab=${tab}"
    ></iframe>`;

  return frameMarkup;
}

export default function customMarkdownToHtml(markdown: string): string {
  const withCodeBlocks = markdown.replace(
    /<pre><code class="language-(?<type>\w+)">(?<code>[^<]+)<\/code><\/pre>/gms,
    addHighlightingReplacer,
  );

  // Replace codepen markup with iframes to avoid hydration errors
  // because server renders iframe while client does not changes markup
  const withCodepenAsIframes = withCodeBlocks.replace(
    /(?<codepenWidget><p class="codepen"(.*?)embed\/ei\.js"><\/script>)/gms,
    paragraphToDivReplacer,
  );

  // Wrap text in titles with link to enable anchors
  const withAnchorsInHeadings = withCodepenAsIframes.replace(
    /<h(?<level>[2-5]) id="(?<id>[^"]+)[^>]+>(?<text>[^\<]+)(.*)<\/h[2-5]>/gm,
    addAnchorsReplacer,
  );

  return withAnchorsInHeadings;
}

import Prism from 'prismjs';

export function addHighlightingReplacer(_: unknown, type: string, code: string) {
  const cleanCode = code.replace(/^\n/, '');
  const highlightedCode = Prism.highlight(cleanCode, Prism.languages[type], 'type');
  return `<figure aria-label="Пример кода"><pre class="language-${type}"><code class="language-${type}">${highlightedCode}</code></pre></figure>`;
}

export function addAnchorsReplacer(_: unknown, level: string, id: string, text: string) {
  const openTag = `<h${level} id=${id}>`;
  const closeTag = `</h${level}>`;
  const textInLink = `<a href="#${id}">${text}</a>`;
  return `${openTag}${textInLink}${closeTag}`;
}

export default function customMarkdownToHtml(markdown: string): string {
  const withCodeBlocks = markdown.replace(
    /<pre><code class="language-(?<type>\w+)">(?<code>[^<]+)<\/code><\/pre>/gms,
    addHighlightingReplacer,
  );

  // Wrap text in titles with link to enable anchors
  const withAnchorsInHeadings = withCodeBlocks.replace(
    /<h(?<level>[2-5]) id="(?<id>[^"]+)[^>]+>(?<text>[^\<]+)(.*)<\/h[2-5]>/gm,
    addAnchorsReplacer,
  );

  return withAnchorsInHeadings;
}

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

export function addLinksReplacer(_: unknown, text: string, href: string) {
  return `<a href="${href}">${text}</a>`;
}

export default function customMarkdownToHtml(markdown: string): string {
  // Handle markdown links
  const withLinks = markdown.replace(/\[(?<text>\S+)\]\((?<href>\S+)\)/gm, addLinksReplacer);

  // Add markup and highlighting to code blocks
  const withCodeBlocks = withLinks.replace(
    /```(?<type>html|css|js)(?<code>[^`]+)```/gm,
    addHighlightingReplacer,
  );

  // Wrap text in titles with link to enable anchors
  const withAnchors = withCodeBlocks.replace(
    /<h(?<level>[2-5]) id="(?<id>[^"]+)[^>]+>(?<text>[^\<]+)(.*)<\/h[2-5]>/gm,
    addAnchorsReplacer,
  );
  return withAnchors;
}

import customMarkdownToHtml, {
  addAnchorsReplacer,
  addHighlightingReplacer,
} from './customMarkdownToHtml';

const expectedResultForCssCode = `<figure aria-label="Пример кода"><pre class="language-css"><code class="language-css"><span class="token selector">body</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span><span class="token punctuation">}</span></code></pre></figure>`;

const expectedResultForHeading = `<h2 id=my-section><a href=\"#my-section\">section name</a></h2>`;

describe('addHighlightingReplacer()', () => {
  test('to highlighted code', () => {
    const result = addHighlightingReplacer(null, 'css', 'body {color: pink;}');

    expect(result).toBe(expectedResultForCssCode);
  });
});

describe('addAnchorsReplacer()', () => {
  test('to heading with link', () => {
    const result = addAnchorsReplacer(null, '2', 'my-section', 'section name');

    expect(result).toBe(expectedResultForHeading);
  });
});

describe('customMarkdownToHtml()', () => {
  test('to all custom markdown replaced', () => {
    const cssCodeString = '<pre><code class="language-css">body {color: pink;}</code></pre>';
    const headingString = '<h2 id="my-section">section name</h2>';
    const result = customMarkdownToHtml(`${cssCodeString} ${headingString}`);

    expect(result).toBe(`${expectedResultForCssCode} ${expectedResultForHeading}`);
  });
});

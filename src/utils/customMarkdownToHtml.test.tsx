import { render } from '@testing-library/react';
import customMarkdownToHtml, {
  addAnchorsReplacer,
  addHighlightingReplacer,
  addLinksReplacer,
} from './customMarkdownToHtml';

const expectedResultForCssCode = `<figure aria-label="Пример кода"><pre class="language-css"><code class="language-css"><span class="token selector">body</span> <span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span><span class="token punctuation">}</span></code></pre></figure>`;

const expectedResultForHeading = `<h2 id=my-section><a href=\"#my-section\">section name</a></h2>`;

const expectedResultForLink = '<a href="http://hello.com">hello</a>';

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

describe('addLinksReplacer()', () => {
  test('to get link', () => {
    const result = addLinksReplacer(null, 'hello', 'http://hello.com');

    expect(result).toBe(expectedResultForLink);
  });
});

describe('customMarkdownToHtml()', () => {
  test('to all custom markdown replaced', () => {
    const linkString = '[hello](http://hello.com)';
    const cssCodeString = '```css\nbody {color: pink;}```';
    const headingString = '<h2 id="my-section">section name</h2>';
    const result = customMarkdownToHtml(`${linkString} ${cssCodeString} ${headingString}`);

    expect(result).toBe(
      `${expectedResultForLink} ${expectedResultForCssCode} ${expectedResultForHeading}`,
    );
  });
});

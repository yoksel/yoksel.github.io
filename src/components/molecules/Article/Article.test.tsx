import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Article from '.';

const article = {
  title: 'Article title',
  content: 'Some long text',
  href: '#url',
  date: '2023-12-23',
  excerpt: '<b>Some html</b> here',
  links: [
    {
      text: 'link',
      href: '#test',
    },
  ],
  tags: ['svg', 'flexbox'],
};

describe('Article', () => {
  test('to have title', () => {
    const { getByRole } = render(<Article article={article} />);

    const link = getByRole('heading');
    expect(getByRole('heading')).toHaveTextContent(article.title);
  });

  test('to have date', () => {
    const { getByText } = render(<Article article={article} />);

    expect(getByText('23/12/2023')).toBeInTheDocument();
  });

  test('to have content', () => {
    const { getByText } = render(<Article article={article} />);

    expect(getByText(article.content)).toBeInTheDocument();
  });

  test('to have links list', () => {
    const { getByRole } = render(<Article article={article} />);

    const link = getByRole('link', { name: article.links[0].text });
    expect(link).toHaveAttribute('href', article.links[0].href);
  });

  test('to have tags list', () => {
    const { getByRole } = render(<Article article={article} />);

    const link = getByRole('link', { name: 'flexbox' });
    expect(link).toHaveAttribute('href', '/tags#flexbox');
  });
});

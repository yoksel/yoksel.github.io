import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ArticleCard from '.';

const post = {
  text: 'text',
  href: '#url',
  date: '22-12-2023',
  excerpt: 'Text',
};

describe('ArticleCard', () => {
  test('to have title with link', () => {
    const { getByRole } = render(<ArticleCard post={post} />);

    const link = getByRole('link', { name: post.text });
    expect(link).toHaveAttribute('href', post.href);
  });

  test('to have Read more link', () => {
    const { getByRole } = render(<ArticleCard post={post} />);

    const link = getByRole('link', { name: 'Читать дальше →' });
    expect(link).toHaveAttribute('href', post.href);
  });

  test('to have date', () => {
    const { getByText } = render(<ArticleCard post={post} />);

    expect(getByText(post.date)).toBeInTheDocument();
  });

  test('to have excerpt', () => {
    const { getByText } = render(<ArticleCard post={post} />);

    expect(getByText(post.excerpt)).toBeInTheDocument();
  });
});

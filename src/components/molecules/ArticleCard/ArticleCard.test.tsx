import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ArticleCard from '.';

const article = {
  text: 'text',
  href: '#url',
  date: '2023-12-23',
  excerpt: 'Text',
};

describe('ArticleCard', () => {
  test('to have title with link', () => {
    const { getByRole } = render(<ArticleCard article={article} />);

    const link = getByRole('link', { name: article.text });
    expect(link).toHaveAttribute('href', article.href);
  });

  test('to have Read more link', () => {
    const { getByRole } = render(<ArticleCard article={article} />);

    const link = getByRole('link', { name: 'Читать дальше →' });
    expect(link).toHaveAttribute('href', article.href);
  });

  test('to have date', () => {
    const { getByText } = render(<ArticleCard article={article} />);

    expect(getByText('23/12/2023')).toBeInTheDocument();
  });

  test('to have excerpt', () => {
    const { getByText } = render(<ArticleCard article={article} />);

    expect(getByText(article.excerpt)).toBeInTheDocument();
  });
});

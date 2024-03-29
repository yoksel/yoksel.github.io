import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ArticlesCardsList from '.';

const article = {
  text: 'text',
  href: '#url',
  date: '2023-12-22',
  excerpt: 'Text',
};

describe('ArticlesCardsList', () => {
  test('to have list', () => {
    const { getByRole } = render(<ArticlesCardsList items={[article, article]} />);

    const list = getByRole('list');
    expect(list).toBeInTheDocument();
  });

  test('to have titles with link', () => {
    const { getAllByRole } = render(<ArticlesCardsList items={[article, article]} />);

    const links = getAllByRole('link', { name: article.text });
    expect(links).toHaveLength(2);
  });

  test('to have Read more links', () => {
    const { getAllByRole } = render(<ArticlesCardsList items={[article, article]} />);

    const links = getAllByRole('link', { name: 'Читать дальше →' });
    expect(links).toHaveLength(2);
  });

  test('to have dates', () => {
    const { getAllByText } = render(<ArticlesCardsList items={[article, article]} />);

    expect(getAllByText('22/12/2023')).toHaveLength(2);
  });

  test('to have excerpts', () => {
    const { getAllByText } = render(<ArticlesCardsList items={[article, article]} />);

    expect(getAllByText(article.excerpt)).toHaveLength(2);
  });
});

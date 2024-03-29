import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ArticlesList from '.';

const article = {
  text: 'text',
  href: '#url',
  date: '2023-12-22',
  excerpt: 'Text',
};

describe('ArticlesList', () => {
  test('to have list', () => {
    const { getByRole } = render(<ArticlesList items={[article, article]} />);

    const list = getByRole('list');
    expect(list).toBeInTheDocument();
  });

  test('to have titles with link', () => {
    const { getAllByRole } = render(<ArticlesList items={[article, article]} />);

    const links = getAllByRole('link', { name: article.text });
    expect(links).toHaveLength(2);
  });
});

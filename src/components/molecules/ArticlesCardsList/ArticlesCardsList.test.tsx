import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ArticlesCardsList from '.';

const post = {
  text: 'text',
  href: '#url',
  date: '2023-12-22',
  excerpt: 'Text',
};

describe('ArticlesCardsList', () => {
  test('to have titles with link', () => {
    const { getByRole } = render(<ArticlesCardsList items={[post, post]} />);

    const list = getByRole('list');
    expect(list).toBeInTheDocument();
  });

  test('to have titles with link', () => {
    const { getAllByRole } = render(<ArticlesCardsList items={[post, post]} />);

    const links = getAllByRole('link', { name: post.text });
    expect(links).toHaveLength(2);
  });

  test('to have Read more links', () => {
    const { getAllByRole } = render(<ArticlesCardsList items={[post, post]} />);

    const links = getAllByRole('link', { name: 'Читать дальше →' });
    expect(links).toHaveLength(2);
  });

  test('to have dates', () => {
    const { getAllByText } = render(<ArticlesCardsList items={[post, post]} />);

    expect(getAllByText('22/12/2023')).toHaveLength(2);
  });

  test('to have excerpts', () => {
    const { getAllByText } = render(<ArticlesCardsList items={[post, post]} />);

    expect(getAllByText(post.excerpt)).toHaveLength(2);
  });
});

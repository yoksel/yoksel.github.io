import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ArticlesList from '.';

const post = {
  text: 'text',
  href: '#url',
  date: '22-12-2023',
  excerpt: 'Text',
};

describe('ArticlesList', () => {
  test('to have titles with link', () => {
    const { getByRole } = render(<ArticlesList items={[post, post]} />);

    const list = getByRole('list');
    expect(list).toBeInTheDocument();
  });

  test('to have titles with link', () => {
    const { getAllByRole } = render(<ArticlesList items={[post, post]} />);

    const links = getAllByRole('link', { name: post.text });
    expect(links).toHaveLength(2);
  });

  test('to have Read more links', () => {
    const { getAllByRole } = render(<ArticlesList items={[post, post]} />);

    const links = getAllByRole('link', { name: 'Читать дальше →' });
    expect(links).toHaveLength(2);
  });

  test('to have dates', () => {
    const { getAllByText } = render(<ArticlesList items={[post, post]} />);

    expect(getAllByText(post.date)).toHaveLength(2);
  });

  test('to have excerpts', () => {
    const { getAllByText } = render(<ArticlesList items={[post, post]} />);

    expect(getAllByText(post.date)).toHaveLength(2);
  });
});

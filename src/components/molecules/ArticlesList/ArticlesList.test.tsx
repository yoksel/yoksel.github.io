import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ArticlesList from '.';

const post = {
  text: 'text',
  href: '#url',
  date: '2023-12-22',
  excerpt: 'Text',
};

describe('ArticlesList', () => {
  test('to have list', () => {
    const { getByRole } = render(<ArticlesList items={[post, post]} />);

    const list = getByRole('list');
    expect(list).toBeInTheDocument();
  });

  test('to have titles with link', () => {
    const { getAllByRole } = render(<ArticlesList items={[post, post]} />);

    const links = getAllByRole('link', { name: post.text });
    expect(links).toHaveLength(2);
  });
});

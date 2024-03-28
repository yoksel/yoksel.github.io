import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Layout from '.';

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

const prevNext = {
  prev: {
    id: 'previous',
    href: '#back',
    text: 'Read this',
  },
  next: {
    id: 'next',
    href: '#forward',
    text: 'Read that',
  },
};

const widgetItem = {
  text: 'text',
  href: '#url',
  desc: 'description',
};

const defaultProps = {
  isMain: false,
  article,
  posts: [{ ...widgetItem, text: 'Post link' }],
  pages: [{ ...widgetItem, text: 'Page link' }],
  prevNext,
};

describe('Layout', () => {
  test('to have Home page links', () => {
    const { getAllByRole } = render(<Layout {...defaultProps} />);

    const homePageLinks = getAllByRole('link', { name: 'Про CSS' });
    expect(homePageLinks).toHaveLength(2);
  });

  test('to have article', () => {
    const { getByRole } = render(<Layout {...defaultProps} />);

    const articleHeading = getByRole('heading', { name: article.title });
    expect(articleHeading).toBeInTheDocument();
  });

  test('to have children', () => {
    const { getByRole } = render(
      <Layout {...defaultProps}>
        <a href="#childLink">childLinkText</a>
      </Layout>,
    );

    const childLink = getByRole('link', { name: 'childLinkText' });
    expect(childLink).toBeInTheDocument();
  });

  test('to have prev and next', () => {
    const { getByRole } = render(<Layout {...defaultProps} />);

    const prevLink = getByRole('link', { name: `← ${prevNext.prev.text}` });
    const nextLink = getByRole('link', { name: `${prevNext.next.text} →` });
    expect(prevLink).toBeInTheDocument();
    expect(nextLink).toBeInTheDocument();
  });

  test('to have posts and pages widgets', () => {
    const { getByRole } = render(<Layout {...defaultProps} />);

    const postLink = getByRole('link', { name: `Post link` });
    const pageLink = getByRole('link', { name: `Page link` });
    expect(postLink).toBeInTheDocument();
    expect(pageLink).toBeInTheDocument();
  });
});

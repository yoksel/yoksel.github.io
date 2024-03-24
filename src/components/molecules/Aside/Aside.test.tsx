import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Aside from '.';

const widgetItemSimple = {
  text: 'text',
  href: '#url',
  description: 'Description',
};

const defaultProps = {
  slug: 'about',
  isMain: false,
  articleType: 'page',
  posts: [{ ...widgetItemSimple, text: 'Post text' }],
  pages: [{ ...widgetItemSimple, text: 'Page text' }],
};

describe('Aside', () => {
  test('to be rendered', () => {
    const { getByRole } = render(<Aside {...defaultProps} />);

    expect(getByRole('heading', { name: 'Сайдбар' })).toBeInTheDocument();
  });

  test('has posts widget', () => {
    const { getByRole } = render(<Aside {...defaultProps} />);

    expect(getByRole('heading', { name: 'Статьи' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'Post text' })).toBeInTheDocument();
  });

  test('has pages widget', () => {
    const { getByRole } = render(<Aside {...defaultProps} />);

    expect(getByRole('heading', { name: 'Страницы' })).toBeInTheDocument();
    expect(getByRole('link', { name: 'Page text' })).toBeInTheDocument();
  });

  test('has projects widget', () => {
    const { getByRole } = render(<Aside {...defaultProps} />);

    expect(getByRole('heading', { name: 'Проекты' })).toBeInTheDocument();
  });
});

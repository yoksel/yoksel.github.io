import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from '.';

describe('Footer', () => {
  test('to be rendered', () => {
    const { getByRole } = render(
      <Footer
        isMain={true}
        slug="/home"
      />,
    );

    expect(getByRole('heading', { name: 'Нижняя навигация' })).toBeInTheDocument();
  });

  test('has link to home page for inner pages', () => {
    const { getByRole } = render(
      <Footer
        isMain={false}
        slug="/about"
      />,
    );

    expect(getByRole('link', { name: 'Про CSS' })).toBeInTheDocument();
  });

  test('has not link to home page for home page', () => {
    const { queryByRole } = render(
      <Footer
        isMain={true}
        slug="/home"
      />,
    );

    expect(queryByRole('link', { name: 'Про CSS' })).not.toBeInTheDocument();
  });
});

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import OptionalLink from '.';

describe('OptionalLink', () => {
  test('to be link if href is not equal to slug', () => {
    const href = '/test';
    const slug = '/hello';
    const text = 'hello';
    const className = 'test';

    const { getByRole } = render(
      <OptionalLink
        href={href}
        slug={slug}
        className={className}
      >
        {text}
      </OptionalLink>,
    );

    const link = getByRole('link');
    expect(link).toHaveAttribute('href', href);
    expect(link).toHaveTextContent(text);
    expect(link).toHaveAttribute('class', className);
  });

  test('not to be link if href is equal to slug', () => {
    const href = '/test';
    const slug = '/test';
    const text = 'hello';
    const className = 'test';

    const { getByText } = render(
      <OptionalLink
        href={href}
        slug={slug}
        className={className}
      >
        {text}
      </OptionalLink>,
    );
    const element = getByText(text);
    expect(element).not.toHaveRole('link');
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('class', className);
  });
});

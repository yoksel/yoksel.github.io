import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Link from '.';

describe('Link', () => {
  test('has href', () => {
    const href = '#test';
    const { getByRole } = render(<Link href={href}>hello</Link>);
    expect(getByRole('link')).toHaveAttribute('href', href);
    expect(getByRole('link')).toHaveTextContent('hello');
    expect(getByRole('link')).not.toHaveAttribute('rel');
  });

  test('has noreferrer if link is external', () => {
    const href = 'http://example.com/';
    const { getByRole } = render(<Link href={href}>hello</Link>);
    expect(getByRole('link')).toHaveAttribute('rel', 'noreferrer');
  });

  test('has className if provided', () => {
    const href = '#test';
    const className = 'test';
    const { getByRole } = render(
      <Link
        href={href}
        className={className}
      >
        hello
      </Link>,
    );
    expect(getByRole('link')).toHaveAttribute('class', className);
  });

  test('has data-name if provided', () => {
    const href = '#test';
    const dataName = 'test';
    const { getByRole } = render(
      <Link
        href={href}
        dataName={dataName}
      >
        hello
      </Link>,
    );
    expect(getByRole('link')).toHaveAttribute('data-name', dataName);
  });
});

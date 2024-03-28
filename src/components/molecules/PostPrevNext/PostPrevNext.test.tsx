import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import PostPrevNext from '.';

const previous = {
  id: 'previous',
  href: '#back',
  text: 'Read this',
};

const next = {
  id: 'next',
  href: '#forward',
  text: 'Read that',
};

describe('PostPrevNext', () => {
  test('to be rendered', () => {
    const { getByRole } = render(
      <PostPrevNext
        prev={previous}
        next={next}
      />,
    );

    const prevLink = getByRole('link', { name: `← ${previous.text}` });
    const nextLink = getByRole('link', { name: `${next.text} →` });

    expect(prevLink).toBeInTheDocument();
    expect(prevLink).toHaveAttribute('title', previous.text);
    expect(nextLink).toBeInTheDocument();
    expect(nextLink).toHaveAttribute('title', next.text);
  });

  test('to be rendered with one link', () => {
    const { getByRole } = render(<PostPrevNext next={next} />);

    const nextLink = getByRole('link', { name: `${next.text} →` });

    expect(nextLink).toBeInTheDocument();
    expect(nextLink).toHaveAttribute('title', next.text);
  });

  test('not to be rendered', () => {
    const { queryByRole } = render(
      <PostPrevNext
        prev={undefined}
        next={undefined}
      />,
    );

    expect(queryByRole('link', { name: `← ${previous.text}` })).not.toBeInTheDocument();
    expect(queryByRole('link', { name: `${next.text} →` })).not.toBeInTheDocument();
  });
});

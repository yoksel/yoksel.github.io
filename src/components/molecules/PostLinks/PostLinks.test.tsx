import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import PostLinks from '.';

const link = {
  id: 'id',
  href: '#link-url',
  text: 'Link text',
};

const linkWithIdWithText = {
  id: 'id',
  text: 'Link text',
};

const linkWithoutText = {
  id: 'id',
};

const linkWithHrefWithoutText = {
  id: 'id',
};

describe('PostLinks', () => {
  test('to be rendered', () => {
    const { getByText } = render(
      <PostLinks
        title="Links list"
        items={[link]}
      />,
    );

    expect(getByText('Links list')).toBeInTheDocument();
  });

  test('regular link', () => {
    const { getByRole } = render(
      <PostLinks
        title="Links list"
        items={[link]}
      />,
    );
    const element = getByRole('link', { name: 'Link text' });
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('href', link.href);
  });

  test('link with description', () => {
    const { getByRole, getByText } = render(
      <PostLinks
        title="Links list"
        items={[
          {
            ...link,
            desc: 'Link description',
          },
        ]}
      />,
    );

    expect(getByRole('link', { name: 'Link text' })).toBeInTheDocument();
    expect(getByText(`— Link description`)).toBeInTheDocument();
  });

  test('link with id and text', () => {
    const { getByRole, getByText } = render(
      <PostLinks
        title="Links list"
        items={[
          {
            id: 'id',
            text: 'Link text',
          },
        ]}
      />,
    );

    const linkElement = getByRole('link', { name: 'Link text' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', `#${link.id}`);
  });

  test('link with id and without text', () => {
    const { getByRole } = render(
      <PostLinks
        title="Links list"
        items={[linkWithoutText]}
      />,
    );

    const linkElement = getByRole('link', { name: `#${linkWithoutText.id}` });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', `#${link.id}`);
  });

  test('link with href and without text', () => {
    const { getByRole } = render(
      <PostLinks
        title="Links list"
        items={[
          {
            href: '#link',
          },
        ]}
      />,
    );

    const linkElement = getByRole('link', { name: `#link` });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '#link');
  });

  test('not to be rendered if no links', () => {
    const { queryByText } = render(
      <PostLinks
        title="Links list"
        items={[]}
      />,
    );

    expect(queryByText('Links list')).not.toBeInTheDocument();
  });

  test('not to be rendered if no id or href in links', () => {
    const { queryByText } = render(
      <PostLinks
        title="Links list"
        items={[{ href: '' }]}
      />,
    );

    expect(queryByText('Links list')).not.toBeInTheDocument();
  });
});

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ArticleTags from '.';

const items = ['a11y', 'animation'];

describe('ArticleTags', () => {
  test('to be rendered', () => {
    const { getByText } = render(<ArticleTags items={items} />);

    expect(getByText('Метки:')).toBeInTheDocument();
  });

  test('to have links', () => {
    const { getAllByRole } = render(<ArticleTags items={items} />);

    expect(getAllByRole('link')).toHaveLength(2);
  });

  test('not to be rendered', () => {
    const { queryByText } = render(<ArticleTags items={[]} />);

    expect(queryByText('Метки:')).not.toBeInTheDocument();
  });
});

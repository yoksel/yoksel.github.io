import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import PostTags from '.';

const items = ['a11y', 'animation'];

describe('PostTags', () => {
  test('to be rendered', () => {
    const { getByText } = render(<PostTags items={items} />);

    expect(getByText('Метки:')).toBeInTheDocument();
  });

  test('to have links', () => {
    const { getAllByRole } = render(<PostTags items={items} />);

    expect(getAllByRole('link')).toHaveLength(2);
  });

  test('not to be rendered', () => {
    const { queryByText } = render(<PostTags items={[]} />);

    expect(queryByText('Метки:')).not.toBeInTheDocument();
  });
});

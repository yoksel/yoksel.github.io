import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import PhotosWidget, { MAX_PHOTOS } from '.';

describe('PhotosWidget', () => {
  test('to be rendered', () => {
    const { getByRole } = render(<PhotosWidget />);

    expect(getByRole('heading', { name: 'Фотографии' })).toBeInTheDocument();
  });

  test('to have links', () => {
    const { getAllByRole } = render(<PhotosWidget />);

    // + 1 for footer link
    expect(getAllByRole('link')).toHaveLength(MAX_PHOTOS + 1);
  });

  test('to have images', () => {
    const { getAllByRole } = render(<PhotosWidget />);

    expect(getAllByRole('img')).toHaveLength(MAX_PHOTOS);
  });
});

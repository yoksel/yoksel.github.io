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

    expect(getAllByRole('link', { name: '' })).toHaveLength(MAX_PHOTOS);
  });

  test('to have images', () => {
    const { getAllByRole } = render(<PhotosWidget />);

    expect(getAllByRole('img')).toHaveLength(MAX_PHOTOS);
  });
});

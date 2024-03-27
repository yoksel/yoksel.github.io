import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ArticleDate from '.';

describe('ArticleDate', () => {
  test('to have correctly formatted text', () => {
    const { getByText } = render(<ArticleDate date="2013-12-23" />);

    expect(getByText('23/12/2013')).toBeInTheDocument();
  });
});

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ContentAsHtml from '.';

describe('ContentAsHtml', () => {
  test('to be rendered with link', () => {
    const content = '<a href="http://test.com">test</a>';

    const { getByRole } = render(<ContentAsHtml content={content} />);

    expect(getByRole('link')).toBeInTheDocument();
  });

  test('to be rendered with custom tag and className', () => {
    const content = '<a href="http://test.com">test</a>';

    const { getByRole } = render(
      <ContentAsHtml
        content={content}
        className="test"
        element="h2"
      />,
    );

    expect(getByRole('heading')).toHaveClass('test');
  });
});

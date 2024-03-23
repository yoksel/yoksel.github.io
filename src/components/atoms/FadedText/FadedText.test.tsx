import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import FadedText from '.';

describe('FadedText', () => {
  test('to be rendered', () => {
    const { getByText } = render(<FadedText>Hello</FadedText>);

    expect(getByText('Hello')).toBeInTheDocument();
  });

  test('with custom class', () => {
    const { getByText } = render(<FadedText className="test">Hello</FadedText>);

    expect(getByText('Hello')).toHaveClass('test');
  });
});

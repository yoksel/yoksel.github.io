import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import VisuallyHiddenText from '.';

describe('VisuallyHiddenText', () => {
  test('to be link if href is not equal to slug', () => {
    const text = 'hello';

    const { getByText } = render(<VisuallyHiddenText>{text}</VisuallyHiddenText>);

    const link = getByText(text);
    expect(getByText(text)).toBeInTheDocument();
  });
});

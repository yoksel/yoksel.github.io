import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import VisuallyHiddenText from '.';

describe('VisuallyHiddenText', () => {
  test('to be rendered', () => {
    const text = 'hello';

    const { getByText } = render(<VisuallyHiddenText>{text}</VisuallyHiddenText>);

    expect(getByText(text)).toBeInTheDocument();
  });

  test('to be heading if element provided', () => {
    const text = 'hello';

    const { getByRole } = render(<VisuallyHiddenText element="h3">{text}</VisuallyHiddenText>);

    expect(getByRole('heading', { name: text })).toBeInTheDocument();
  });
});

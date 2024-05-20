import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Widget from '.';

const defaultProps = {
  title: 'Widget title',
  id: 'myWidget',
  slug: '/about',
};

const widgetItemWithAll = {
  text: 'text',
  href: '#url',
  description: 'description',
  stars: 4,
  event: { href: '#url', name: 'Amazing event', date: '19-12-2023' },
};

describe('Widget', () => {
  test('to be rendered', () => {
    const { getByText } = render(
      <Widget
        {...defaultProps}
        items={[widgetItemWithAll]}
      />,
    );

    expect(getByText('Widget title')).toBeInTheDocument();
  });

  test('to have links', () => {
    const { getAllByRole } = render(
      <Widget
        {...defaultProps}
        items={[widgetItemWithAll, widgetItemWithAll]}
      />,
    );

    expect(getAllByRole('link')).toHaveLength(4);
  });

  test('link has description', () => {
    const { getByText } = render(
      <Widget
        {...defaultProps}
        items={[widgetItemWithAll]}
      />,
    );

    expect(getByText(widgetItemWithAll.description)).toBeInTheDocument();
  });

  test('link has stars', () => {
    const { getByText } = render(
      <Widget
        {...defaultProps}
        items={[widgetItemWithAll]}
      />,
    );

    expect(getByText('Звёзд на гитхабе:')).toBeInTheDocument();
  });

  test('link has event', () => {
    const { getByRole } = render(
      <Widget
        {...defaultProps}
        items={[widgetItemWithAll]}
      />,
    );

    expect(getByRole('link', { name: widgetItemWithAll.event.name })).toBeInTheDocument();
  });

  test('not to be rendered', () => {
    const { queryByText } = render(
      <Widget
        {...defaultProps}
        items={[]}
      />,
    );

    expect(queryByText('Widget title:')).not.toBeInTheDocument();
  });
});

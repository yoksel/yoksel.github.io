import type { Meta, StoryObj } from '@storybook/react';
import Widget from '.';

const widgetItemSimple = {
  text: 'text',
  href: '#url',
};

const widgetItemWithDescription = {
  ...widgetItemSimple,
  desc: 'description',
};

const widgetItemWithImage = {
  href: '#url',
  alt: 'Beautiful picture',
  imageSrc:
    'https://images.unsplash.com/photo-1602673452179-d372cc634ce1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE1MzIzMH0',
};

const widgetItemWithStars = {
  ...widgetItemSimple,
  stars: 4,
};

const widgetItemWithEvent = {
  ...widgetItemSimple,
  event: { href: '#url', name: 'Amazing event', date: '19-12-2023' },
};

const widgetItemWithAll = {
  ...widgetItemSimple,
  desc: 'description',
  stars: 4,
  ...widgetItemWithEvent,
};

const meta: Meta<typeof Widget> = {
  title: 'Molecules/Widget',
  parameters: { layout: 'centered' },
  component: Widget,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      widgetItemSimple,
      widgetItemWithDescription,
      widgetItemWithStars,
      widgetItemWithEvent,
      widgetItemWithAll,
    ],
  },
};

export const WithImages: Story = {
  args: {
    layout: 'grid',
    items: [widgetItemWithImage, widgetItemWithImage, widgetItemWithImage, widgetItemWithImage],
  },
};

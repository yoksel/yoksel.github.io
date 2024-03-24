import type { Meta, StoryObj } from '@storybook/react';
import Aside from './index';

const meta = {
  title: 'Molecules/Aside',
  component: Aside,
  tags: ['autodocs'],
} satisfies Meta<typeof Aside>;

export default meta;
type Story = StoryObj<typeof meta>;

const widgetItemSimple = {
  text: 'text',
  href: '#url',
  description: 'Description',
};

const defaultProps = {
  slug: 'about',
  isMain: false,
  articleType: 'page',
  posts: [widgetItemSimple],
  pages: [widgetItemSimple],
};

export const Default: Story = {
  args: defaultProps,
};

export const IsMain: Story = {
  args: { ...defaultProps, isMain: true },
};

import type { Meta, StoryObj } from '@storybook/react';
import ArticleTags from './index';

const meta: Meta<typeof ArticleTags> = {
  title: 'Molecules/ArticleTags',
  parameters: { layout: 'centered' },
  component: ArticleTags,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: ['a11y', 'animation'],
  },
};

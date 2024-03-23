import type { Meta, StoryObj } from '@storybook/react';
import PostTags from './index';

const meta: Meta<typeof PostTags> = {
  title: 'Molecules/PostTags',
  parameters: { layout: 'centered' },
  component: PostTags,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: ['a11y', 'animation'],
  },
};

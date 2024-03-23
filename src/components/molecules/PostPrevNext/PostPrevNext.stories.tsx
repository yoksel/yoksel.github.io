import type { Meta, StoryObj } from '@storybook/react';
import PostPrevNext from './index';

const meta: Meta<typeof PostPrevNext> = {
  title: 'Molecules/PostPrevNext',
  parameters: { layout: 'centered' },
  component: PostPrevNext,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    previous: {
      id: 'previous',
      href: '#back',
      text: 'Read this',
    },
    next: {
      id: 'next',
      href: '#forward',
      text: 'Read that',
    },
  },
};

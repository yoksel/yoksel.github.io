import type { Meta, StoryObj } from '@storybook/react';
import ArticlePrevNext from './index';

const meta: Meta<typeof ArticlePrevNext> = {
  title: 'Molecules/ArticlePrevNext',
  parameters: { layout: 'centered' },
  component: ArticlePrevNext,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    prev: {
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

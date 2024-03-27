import type { Meta, StoryObj } from '@storybook/react';
import ArticleDate from './index';

const meta = {
  title: 'Atoms/ArticleDate',
  component: ArticleDate,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: '2023-12-23',
  },
};

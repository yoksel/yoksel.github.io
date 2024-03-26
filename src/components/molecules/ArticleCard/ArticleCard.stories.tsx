import type { Meta, StoryObj } from '@storybook/react';
import ArticleCard from '.';

const ArticleCardItemSimple = {
  text: 'text',
  href: '#url',
  date: '22-12-2023',
  excerpt: '<b>Some html</b> here',
};

const meta: Meta<typeof ArticleCard> = {
  title: 'Molecules/ArticleCard',
  parameters: { layout: 'centered' },
  component: ArticleCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: ArticleCardItemSimple,
  },
};

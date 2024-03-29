import type { Meta, StoryObj } from '@storybook/react';
import ArticlesList from '.';

const article = {
  text: 'text',
  href: '#url',
  date: '22-12-2023',
  excerpt: '<b>Some html</b> here',
};

const meta: Meta<typeof ArticlesList> = {
  title: 'Molecules/ArticlesList',
  parameters: { layout: 'centered' },
  component: ArticlesList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [article, article],
  },
};

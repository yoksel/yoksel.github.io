import type { Meta, StoryObj } from '@storybook/react';
import ArticlesCardsList from '.';

const post = {
  text: 'text',
  href: '#url',
  date: '22-12-2023',
  excerpt: '<b>Some html</b> here',
};

const meta: Meta<typeof ArticlesCardsList> = {
  title: 'Molecules/ArticlesCardsList',
  parameters: { layout: 'centered' },
  component: ArticlesCardsList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [post, post],
  },
};

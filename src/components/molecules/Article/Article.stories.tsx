import type { Meta, StoryObj } from '@storybook/react';
import Article from '.';

const articleItemSimple = {
  title: 'Article title',
  content: 'Some long text',
  href: '#url',
  date: '2023-12-23',
  excerpt: '<b>Some html</b> here',
  links: [
    {
      text: 'link',
      href: '#test',
    },
  ],
  tags: ['svg', 'flexbox'],
};

const meta: Meta<typeof Article> = {
  title: 'Molecules/Article',
  parameters: { layout: 'centered' },
  component: Article,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    article: articleItemSimple,
  },
};

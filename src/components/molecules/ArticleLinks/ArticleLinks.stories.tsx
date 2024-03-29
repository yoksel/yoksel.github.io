import type { Meta, StoryObj } from '@storybook/react';
import ArticleLinks from './index';

const meta: Meta<typeof ArticleLinks> = {
  title: 'Molecules/ArticleLinks',
  parameters: { layout: 'centered' },
  component: ArticleLinks,
  tags: ['autodocs'],
};

const link = {
  id: 'id',
  href: '#link-url',
  text: 'Link text',
};

const linkWithDescription = {
  id: 'id',
  href: '#link-url',
  text: 'Link text',
  desc: 'Link description',
};

const linkWithLevel1 = {
  id: 'id',
  href: '#link-url',
  text: 'Link text',
  level: 1,
  desc: 'Link description',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Links list',
    items: [link, linkWithDescription, linkWithLevel1],
  },
};

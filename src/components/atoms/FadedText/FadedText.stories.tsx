import type { Meta, StoryObj } from '@storybook/react';
import FadedText from './index';

const meta = {
  title: 'Atoms/FadedText',
  component: FadedText,
  tags: ['autodocs'],
} satisfies Meta<typeof FadedText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'hello',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Header from './index';

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          width: 800,
          height: 250,
          marginTop: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isMain: false,
  },
};

export const IsMain: Story = {
  args: {
    isMain: true,
  },
};

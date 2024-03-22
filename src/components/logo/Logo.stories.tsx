import type { Meta, StoryObj } from '@storybook/react';
import Logo from './index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          width: 250,
          height: 250,
          marginBottom: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: { layout: 'centered' },
  component: Logo,

  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderOnMain: Story = {
  args: {
    isMain: true,
  },
};

export const HeaderOnInner: Story = {
  args: {
    isMain: false,
  },
};

export const FooterOnMain: Story = {
  args: {
    isMain: true,
    parent: 'footer',
  },
};

export const FooterOnInner: Story = {
  args: {
    isMain: false,
    parent: 'footer',
  },
};

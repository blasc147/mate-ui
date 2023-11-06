import { StarIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';

const Story: Meta<typeof Tag> = {
  component: Tag,
  title: 'Tag',
  argTypes: {

    themeColor: {
      options: [
        'success',
        'neutral',
        'primary',
        'secondary',
        'error',
        'info',
        'warning',
      ],
      control: { type: 'radio' },
    },
    size: {
      options: [
        'md',
        'sm',
      ],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],
};
export default Story;

type Story = StoryObj<typeof Tag>;

export const Pill: Story = {
  args: {
    children: 'Label',
    themeColor: 'primary',
    size:'md',
    variant: 'pill',
  },
};

export const Badge: Story = {
  args: {
    children: 'Label',
    themeColor: 'primary',
    size:'md',
    variant: 'badge',
  },
};

export const Status: Story = {
  args: {
    children: 'Label',
    themeColor: 'primary',
    size:'md',
    withDot: true,
    variant: 'status',
  },
};

export const Quiet: Story = {
  args: {
    children: 'Label',
    themeColor: 'primary',
    size:'md',
    withDot: true,
    variant: 'quiet',
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Label',
    themeColor: 'primary',
    size:'md',
    rightIcon: <StarIcon />,
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Label',
    themeColor: 'primary',
    size:'md',
    leftIcon: <StarIcon />,
  },
};

import { StarIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';

const Story: Meta<typeof Tag> = {
  component: Tag,
  title: 'Tag',
};
export default Story;

type Story = StoryObj<typeof Tag>;

export const PrimaryPill: Story = {
  args: {
    children: 'Label',
    colorScheme: 'primary',
    variant: 'pill',
  },
};

export const PrimaryBadge: Story = {
  args: {
    children: 'Label',
    colorScheme: 'primary',
    variant: 'badge',
  },
};

export const PrimaryStatus: Story = {
  args: {
    children: 'Label',
    colorScheme: 'primary',
    variant: 'status',
  },
};

export const PrimaryQuiet: Story = {
  args: {
    children: 'Label',
    colorScheme: 'primary',
    variant: 'quiet',
  },
};

export const Neutral: Story = {
  args: {
    children: 'Label',
    colorScheme: 'neutral',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Label',
    colorScheme: 'secondary',
  },
};

export const Info: Story = {
  args: {
    children: 'Label',
    colorScheme: 'info',
  },
};

export const Success: Story = {
  args: {
    children: 'Label',
    colorScheme: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Label',
    colorScheme: 'warning',
  },
};

export const Error: Story = {
  args: {
    children: 'Label',
    colorScheme: 'error',
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Label',
    rightIcon: <StarIcon />,
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Label',
    colorScheme: 'primary',
    leftIcon: <StarIcon />,
  },
};

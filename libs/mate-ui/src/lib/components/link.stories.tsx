import { BellIcon } from '@heroicons/react/24/solid';
import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './link';

const Story: Meta<typeof Link> = {
  component: Link,
  title: 'Link',
};
export default Story;

type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: 'Link',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Link',
    colorScheme: 'secondary',
  },
};

export const Neutral: Story = {
  args: {
    children: 'Link',
    colorScheme: 'neutral',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Link',
    colorScheme: 'destructive',
  },
};

export const PrimaryWithLeftIcon: Story = {
  args: {
    children: 'Link',
    leftIcon: <BellIcon />,
  },
};

export const PrimaryWithRightIcon: Story = {
  args: {
    children: 'Link',
    rightIcon: <BellIcon />,
  },
};

export const AsButton: Story = {
  args: {
    asChild: true,
    children: <button>LinkButton</button>,
  },
};

export const AsButtonDisabled: Story = {
  args: {
    asChild: true,
    children: <button disabled>LinkButton</button>,
  },
};

export const AsButtonLoading: Story = {
  args: {
    asChild: true,
    children: <button>LinkButton</button>,
    loading: true,
  },
};

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
    href: 'https://www.google.com',
    rel: 'noreferrer',
    target: '_blank',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Link',
    colorScheme: 'secondary',
    href: 'https://www.google.com',
    rel: 'noreferrer',
    target: '_blank',
  },
};

export const Neutral: Story = {
  args: {
    children: 'Link',
    colorScheme: 'neutral',
    href: 'https://www.google.com',
    rel: 'noreferrer',
    target: '_blank',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Link',
    colorScheme: 'destructive',
    href: 'https://www.google.com',
    rel: 'noreferrer',
    target: '_blank',
  },
};

export const PrimaryWithLeftIcon: Story = {
  args: {
    children: 'Link',
    leftIcon: <BellIcon />,
    href: 'https://www.google.com',
    rel: 'noreferrer',
    target: '_blank',
  },
};

export const PrimaryWithRightIcon: Story = {
  args: {
    children: 'Link',
    rightIcon: <BellIcon />,
    href: 'https://www.google.com',
    rel: 'noreferrer',
    target: '_blank',
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

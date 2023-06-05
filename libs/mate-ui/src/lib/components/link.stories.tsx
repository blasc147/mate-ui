import type { Meta } from '@storybook/react';
import { Link } from './link';
import { BellIcon } from '@heroicons/react/24/solid';

const Story: Meta<typeof Link> = {
  component: Link,
  title: 'Link',
};
export default Story;

export const Primary = {
  args: {
    children: 'Link',
  },
};

export const Secondary = {
  args: {
    children: 'Link',
    colorScheme: 'secondary',
  },
};

export const Neutral = {
  args: {
    children: 'Link',
    colorScheme: 'neutral',
  },
};

export const Destructive = {
  args: {
    children: 'Link',
    colorScheme: 'destructive',
  },
};

export const PrimaryWithLeftIcon = {
  args: {
    children: 'Link',
    leftIcon: <BellIcon />,
  },
};

export const PrimaryWithRightIcon = {
  args: {
    children: 'Link',
    rightIcon: <BellIcon />,
  },
};

export const AsButton = {
  args: {
    asChild: true,
    children: <button>LinkButton</button>,
  },
};

export const AsButtonDisabled = {
  args: {
    asChild: true,
    children: <button disabled>LinkButton</button>,
  },
};

export const AsButtonLoading = {
  args: {
    asChild: true,
    children: <button>LinkButton</button>,
    loading: true,
  },
};

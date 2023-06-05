import type { Meta } from '@storybook/react';
import { Button } from './button';
import { BellIcon, PlusIcon } from '@heroicons/react/24/solid';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default Story;

export const Primary = {
  args: {
    children: 'Button',
  },
};

export const Outlined = {
  args: {
    children: 'Button',
    variant: 'outlined',
    colorScheme: 'secondary',
  },
};

export const Ghost = {
  args: {
    children: 'Button',
    variant: 'ghost',
    colorScheme: 'destructive',
  },
};

export const WithRightIcon = {
  args: {
    children: 'Button',
    rightIcon: <PlusIcon />,
    colorScheme: 'neutral',
  },
};

export const WithLeftIcon = {
  args: {
    children: 'Button',
    leftIcon: <BellIcon />,
  },
};

export const Disabled = {
  args: {
    children: 'Button',
    disabled: true,
    leftIcon: <BellIcon />,
  },
};

export const Loading = {
  args: {
    children: 'Button',
    loading: true,
  },
};

export const LoadingWithIcon = {
  args: {
    children: 'Button',
    loading: true,
    leftIcon: <BellIcon />,
  },
};

export const AsLink = {
  args: {
    children: (
      <a href="https://www.google.com" rel="noreferrer" target="_blank">
        As Link
      </a>
    ),
    asChild: true,
  },
};

import { BellIcon } from '@heroicons/react/24/solid';
import type { Meta } from '@storybook/react';
import { IconButton } from './icon-button';

const Story: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'IconButton',
};
export default Story;

export const Primary = {
  args: {
    'aria-label': 'bell button',
    icon: <BellIcon />,
  },
};

export const Outlined = {
  args: {
    'aria-label': 'bell button',
    icon: <BellIcon />,
    colorScheme: 'secondary',
    variant: 'outlined',
  },
};

export const Ghost = {
  args: {
    'aria-label': 'bell button',
    icon: <BellIcon />,
    colorScheme: 'destructive',
    variant: 'ghost',
  },
};

export const Loading = {
  args: {
    'aria-label': 'bell button',
    icon: <BellIcon />,
    loading: true,
  },
};

export const Disabled = {
  args: {
    'aria-label': 'bell button',
    icon: <BellIcon />,
    disabled: true,
  },
};

export const AsLink = {
  args: {
    'aria-label': 'bell button',
    icon: <BellIcon />,
    asChild: true,
    children: (
      <a href="http://www.google.com" rel="noreferrer" target="_blank" />
    ),
  },
};

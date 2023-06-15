import { BellIcon } from '@heroicons/react/24/solid';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './icon-button';

const Story: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'IconButton',
};
export default Story;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    'aria-label': 'bell button',
    icon: <BellIcon />,
  },
};

export const Outlined: Story = {
  args: {
    'aria-label': 'bell button',
    icon: <BellIcon />,
    colorScheme: 'secondary',
    variant: 'outlined',
  },
};

export const Ghost: Story = {
  args: {
    'aria-label': 'bell button',
    icon: <BellIcon />,
    colorScheme: 'destructive',
    variant: 'ghost',
  },
};

export const Loading: Story = {
  args: {
    'aria-label': 'bell button',
    icon: <BellIcon />,
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    'aria-label': 'bell button',
    icon: <BellIcon />,
    disabled: true,
  },
};

export const AsLink: Story = {
  args: {
    'aria-label': 'bell button',
    icon: <BellIcon />,
    asChild: true,
    children: (
      <a href="http://www.google.com" rel="noreferrer" target="_blank" />
    ),
  },
};

import { BellIcon, PlusIcon } from '@heroicons/react/24/solid';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6zMgZETAVqw9TgqFxRY3IY/Mate-UI-2.0?type=design&node-id=12-229',
    },
  },
};
export default Story;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    colorScheme: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    colorScheme: 'destructive',
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Button',
    rightIcon: <PlusIcon />,
    colorScheme: 'neutral',
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Button',
    leftIcon: <BellIcon />,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
    leftIcon: <BellIcon />,
  },
};

export const Loading: Story = {
  args: {
    children: 'Button',
    loading: true,
  },
};

export const LoadingWithIcon: Story = {
  args: {
    children: 'Button',
    loading: true,
    leftIcon: <BellIcon />,
  },
};

export const AsLink: Story = {
  args: {
    children: (
      <a href="https://www.google.com" rel="noreferrer" target="_blank">
        As Link
      </a>
    ),
    asChild: true,
  },
};

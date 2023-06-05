import type { Meta } from '@storybook/react';
import { Tag } from './tag';
import { StarIcon } from '@heroicons/react/24/outline';

const Story: Meta<typeof Tag> = {
  component: Tag,
  title: 'Tag',
};
export default Story;

export const PrimaryPill = {
  args: {
    children: 'Label',
    colorScheme: 'primary',
    variant: 'pill',
  },
};

export const PrimaryBadge = {
  args: {
    children: 'Label',
    colorScheme: 'primary',
    variant: 'badge',
  },
};

export const PrimaryStatus = {
  args: {
    children: 'Label',
    colorScheme: 'primary',
    variant: 'status',
  },
};

export const PrimaryQuiet = {
  args: {
    children: 'Label',
    colorScheme: 'primary',
    variant: 'quiet',
  },
};

export const Neutral = {
  args: {
    children: 'Label',
    colorScheme: 'neutral',
  },
};

export const Secondary = {
  args: {
    children: 'Label',
    colorScheme: 'secondary',
  },
};

export const Info = {
  args: {
    children: 'Label',
    colorScheme: 'info',
  },
};

export const Success = {
  args: {
    children: 'Label',
    colorScheme: 'success',
  },
};

export const Warning = {
  args: {
    children: 'Label',
    colorScheme: 'warning',
  },
};

export const Error = {
  args: {
    children: 'Label',
    colorScheme: 'error',
  },
};

export const WithRightIcon = {
  args: {
    children: 'Label',
    rightIcon: <StarIcon />,
  },
};

export const WithLeftIcon = {
  args: {
    children: 'Label',
    colorScheme: 'primary',
    leftIcon: <StarIcon />,
  },
};

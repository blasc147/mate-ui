import { BellIcon } from '@heroicons/react/20/solid';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './alert';
import { CloseButton } from './close-button';
import { Link } from './link';

const Story: Meta<typeof Alert> = {
  component: Alert,
  title: 'Alert',
};

export default Story;

type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'primary',
  },
};

export const Neutral: Story = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'neutral',
  },
};

export const Info: Story = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'info',
  },
};

export const Success: Story = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'success',
  },
};

export const Warning: Story = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'warning',
  },
};

export const Error: Story = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'error',
  },
};

export const LeadingIcon: Story = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'primary',
    icon: <BellIcon />,
  },
};

export const LeadingIconError: Story = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'error',
    icon: <ExclamationTriangleIcon />,
  },
};

export const WithCloseButton: Story = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'primary',
    closeButton: <CloseButton />,
  },
};

export const WithTrailingLink: Story = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'primary',
    trailingLink: <Link>Details</Link>,
  },
};

export const WithBottomLink: Story = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'error',
    bottomLink: <Link colorScheme="destructive">Details</Link>,
  },
};

import type { Meta } from '@storybook/react';
import { Alert } from './alert';
import { BellIcon } from '@heroicons/react/20/solid';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { CloseButton } from './close-button';
import { Link } from './link';

const Story: Meta<typeof Alert> = {
  component: Alert,
  title: 'Alert',
};

export default Story;

export const Primary = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'primary',
  },
};

export const Neutral = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'neutral',
  },
};

export const Info = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'info',
  },
};

export const Success = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'success',
  },
};

export const Warning = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'warning',
  },
};

export const Error = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'error',
  },
};

export const LeadingIcon = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'primary',
    icon: <BellIcon />,
  },
};

export const LeadingIconError = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'error',
    icon: <ExclamationTriangleIcon />,
  },
};

export const WithCloseButton = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'primary',
    closeButton: <CloseButton />,
  },
};

export const WithTrailingLink = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'primary',
    trailingLink: <Link>Details</Link>,
  },
};

export const WithBottomLink = {
  args: {
    title: 'Title text',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.',
    colorScheme: 'error',
    bottomLink: <Link>Details</Link>,
  },
};

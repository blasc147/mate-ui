import type { Meta } from '@storybook/react';
import { Avatar, AvatarActionButton } from './avatar';
import { UserIcon } from '@heroicons/react/24/solid';
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid';

const Story: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
};
export default Story;

export const EmptyCircle = {
  args: {},
};

export const EmptySquare = {
  args: { shape: 'square' },
};

export const TextCircle = {
  args: { children: 'Aa' },
};

export const TextSquare = {
  args: { children: 'Aa', shape: 'square' },
};

export const IconCircle = {
  args: {
    children: <UserIcon className="h-6 w-6" />,
  },
};

export const IconSquare = {
  args: {
    children: <UserIcon className="h-6 w-6" />,
    shape: 'square',
  },
};

export const StatusOnline = {
  args: {
    children: <UserIcon className="h-6 w-6" />,
    status: 'online',
  },
};

export const StatusBusy = {
  args: {
    children: <UserIcon className="h-6 w-6" />,
    status: 'busy',
  },
};

export const StatusOffline = {
  args: {
    children: <UserIcon className="h-6 w-6" />,
    status: 'offline',
  },
};

export const WithLabel = {
  args: {
    children: <UserIcon className="h-6 w-6" />,
    label: 'Hugo',
  },
};

export const Action = {
  args: {
    children: <UserIcon className="h-6 w-6" />,
    actionButton: (
      <AvatarActionButton
        icon={<ArrowUturnLeftIcon />}
        onClick={() => alert(':click')}
      />
    ),
  },
};

export const ActionWithLabel = {
  args: {
    children: <UserIcon className="h-6 w-6" />,
    actionButton: (
      <AvatarActionButton
        icon={<ArrowUturnLeftIcon />}
        onClick={() => alert(':click')}
      />
    ),
    label: 'Hugo',
  },
};

export const ImgCircle = {
  args: {
    children: (
      <img
        alt="user"
        className="w-full h-full object-cover"
        src="avatar-img-1.jpg"
      />
    ),
  },
};

export const ImgSquare = {
  args: {
    children: (
      <img
        alt="user"
        className="w-full h-full object-cover"
        src="avatar-img-1.jpg"
      />
    ),
    shape: 'square',
  },
};

export const ImgWithAction = {
  args: {
    children: (
      <img
        alt="user"
        className="w-full h-full object-cover"
        src="avatar-img-1.jpg"
      />
    ),
    actionButton: (
      <AvatarActionButton
        icon={<ArrowUturnLeftIcon />}
        onClick={() => alert(':click')}
      />
    ),
    label: 'Mate',
  },
};
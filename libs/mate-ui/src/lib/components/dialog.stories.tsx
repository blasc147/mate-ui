import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  CheckIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import { cn } from '../utils';
import { Button } from './button';
import { Link } from './link';
import {
  DialogFooter,
  DialogHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  ColorScheme,
} from './dialog';

interface DialogProps {
  title: string;
  description: string;
  buttons: React.ReactNode;
  icon?: React.ReactNode;
  link?: React.ReactNode;
  className?: string;
  colorScheme?: ColorScheme;
  isCentered?: boolean;
}

function DialogComponent({
  title,
  description,
  buttons,
  icon,
  link,
  className,
  colorScheme = 'success',
  isCentered,
}: DialogProps) {
  return (
    <Dialog colorScheme={colorScheme} isCentered={isCentered}>
      <DialogTrigger asChild>
        <Button variant="outlined">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader icon={icon}>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>{buttons}</DialogFooter>
        {link}
      </DialogContent>
    </Dialog>
  );
}

const Story: Meta<typeof DialogComponent> = {
  component: DialogComponent,
  title: 'Dialog',
};
export default Story;

type Story = StoryObj<typeof DialogComponent>;

export const Success: Story = {
  args: {
    icon: <CheckIcon />,
    title: 'Success message',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
    buttons: (
      <Button type="submit" size="sm" className={cn('w-full')}>
        Button
      </Button>
    ),
  },
};

export const Critical: Story = {
  args: {
    icon: <ExclamationTriangleIcon />,
    title: 'Critical message',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
    buttons: (
      <Button
        type="submit"
        colorScheme="destructive"
        size="sm"
        className={cn('w-full')}
      >
        Button
      </Button>
    ),
    colorScheme: 'critical',
  },
};

export const SuccessSecondaryButton: Story = {
  args: {
    icon: <CheckIcon />,
    title: 'Success message',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
    buttons: (
      <>
        <Button variant="outlined" size="sm" className={cn('w-full', 'mr-4')}>
          Button
        </Button>
        <Button type="submit" size="sm" className={cn('w-full')}>
          Button
        </Button>
      </>
    ),
  },
};

export const CriticalSecondaryButton: Story = {
  args: {
    icon: <ExclamationTriangleIcon />,
    title: 'Critical message',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
    buttons: (
      <>
        <Button
          variant="outlined"
          colorScheme="destructive"
          size="sm"
          className={cn('w-full', 'mr-4')}
        >
          Button
        </Button>
        <Button
          type="submit"
          colorScheme="destructive"
          size="sm"
          className={cn('w-full')}
        >
          Button
        </Button>
      </>
    ),
    colorScheme: 'critical',
  },
};

export const SuccessBottomLink: Story = {
  args: {
    icon: <CheckIcon />,
    title: 'Success message',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
    buttons: (
      <Button
        type="submit"
        size="sm"
        className={cn('text-white', 'text-sm', 'font-medium', 'w-full')}
      >
        Button
      </Button>
    ),
    link: (
      <Link colorScheme="primary" size="sm" weight="light">
        Link
      </Link>
    ),
  },
};

export const CriticalBottomLink: Story = {
  args: {
    icon: <ExclamationTriangleIcon />,
    title: 'Critical message',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
    buttons: (
      <Button
        type="submit"
        size="sm"
        colorScheme="destructive"
        className={'w-full'}
      >
        Button
      </Button>
    ),
    link: (
      <Link colorScheme="neutral" size="sm" weight="light">
        Link
      </Link>
    ),
    colorScheme: 'critical',
  },
};

export const SuccessWithoutIcon: Story = {
  args: {
    title: 'Success message',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
    buttons: (
      <Button type="submit" size="sm" className={cn('w-full')}>
        Button
      </Button>
    ),
  },
};

export const CriticalWithoutIcon: Story = {
  args: {
    title: 'Critical message',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
    buttons: (
      <Button
        type="submit"
        colorScheme="destructive"
        size="sm"
        className={cn('w-full')}
      >
        Button
      </Button>
    ),
    colorScheme: 'critical',
  },
};

export const CenteredDialog: Story = {
  args: {
    icon: <CheckIcon />,
    title: 'Success message',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.',
    buttons: (
      <Button type="submit" size="sm" className={cn('w-full')}>
        Button
      </Button>
    ),
    isCentered: true,
  },
};

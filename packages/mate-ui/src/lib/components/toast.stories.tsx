/* eslint-disable tailwindcss/no-custom-classname */
import {
  SparklesIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/20/solid';
import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { cn } from '../utils';
import { Button } from './button';
import { Link } from './link';
import { Toast, ToastProvider } from './toast';
import { Avatar, AvatarImage } from './avatar';

interface ToastStoryArgs {
  themeColor: 'neutral' | 'primary' | 'success' | 'warning' | 'error';
}

const Story: Meta<typeof Toast> = {
  component: Toast,
  title: 'Toast',
  argTypes: {
    themeColor: {
      options: ['neutral', 'primary', 'success', 'warning', 'error'],
      control: { type: 'radio' },
    },
  },
};
export default Story;

export const ToastTheme = ({ themeColor }: ToastStoryArgs) => {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider>
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title={'Title'}
        description={'Message'}
        themeColor={themeColor}
        actionButton={<Link className='text-sm text-neutral-600'>Undo</Link>}
        leftElement={<ExclamationCircleIcon />}
        buttons={
          <>
            <Button variant="filled" size="sm" className={cn('mr-4')}>
              Button
            </Button>
            <Button
              variant="outlined"
              themeColor="neutral"
              type="submit"
              size="sm"
            >
              Button
            </Button>
          </>
        }
      />
    </ToastProvider>
  );
};

export const TitleWithButtons = ({ themeColor }: ToastStoryArgs) => {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider swipeDirection="right">
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title={'Message sent'}
        actionButton={<Link className='text-sm text-neutral-600'>Undo</Link>}
        themeColor={themeColor}
        buttons={
          <>
            <Button variant="filled" size="sm" className={cn('mr-4')}>
              Button
            </Button>
            <Button
              variant="outlined"
              type="submit"
              size="sm"
              themeColor="neutral"
            >
              Button
            </Button>
          </>
        }
      />
    </ToastProvider>
  );
};

export const TitleAndDescriptionWithButtons = ({ themeColor }: ToastStoryArgs) => {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider swipeDirection="right">
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title={'Message sent'}
        description={'Message'}
        actionButton={<Link className='text-sm text-neutral-600'>Undo</Link>}
        themeColor={ themeColor }
        buttons={
          <>
            <Button variant="filled" size="sm" className={cn('mr-4')}>
              Button
            </Button>
            <Button
              variant="outlined"
              type="submit"
              size="sm"
              themeColor="neutral"
            >
              Button
            </Button>
          </>
        }
      />
    </ToastProvider>
  );
};

export const OnlyTitle = ({ themeColor }: ToastStoryArgs) => {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider swipeDirection="right">
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title={'Message sent'}
        actionButton={<Link className='text-sm text-neutral-600'>Undo</Link>}
        themeColor={ themeColor }
      />
    </ToastProvider>
  );
};

export const TitleWithDescription = ({ themeColor }: ToastStoryArgs) => {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider swipeDirection="right">
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title={'Message sent'}
        description={'Message'}
        actionButton={<Link className='text-sm text-neutral-600'>Undo</Link>}
        themeColor={ themeColor }
      />
    </ToastProvider>
  );
};

export const TitleWithDescriptionAndLink = ({ themeColor }: ToastStoryArgs) => {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider swipeDirection="right">
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title={'Successfully saved!'}
        description={'Anyone with a link can now view this file.'}
        themeColor={ themeColor }
        buttons={<Link size='sm' href="https://www.google.com" rel="noreferrer" target="_blank">Link</Link>}
      />
    </ToastProvider>
  );
};

export const TitleWithDescriptionAndButton = ({ themeColor }: ToastStoryArgs) => {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider swipeDirection="right">
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title={'Breaking news on the go!'}
        description={'Enable push notifications to get alerts for major markets and crypto news.'}
        themeColor={ themeColor }
        buttons={<Button variant="filled" themeColor="primary" size="sm">Button</Button>}
      />
    </ToastProvider>
  );
};

export const TitleWithDescriptionAndLinks = ({ themeColor }: ToastStoryArgs) => {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider swipeDirection="right">
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title={'Successfully saved!'}
        description={'Anyone with a link can now view this file.'}
        themeColor={ themeColor }
        buttons={
          <>
            <Link size='sm' href="https://www.google.com" rel="noreferrer" target="_blank">Link</Link>
            <Link className='ml-3' weight='light' size='sm' href="https://www.google.com" rel="noreferrer" target="_blank">Link</Link>
          </>}
      />
    </ToastProvider>
  );
};

export const BottomButtonsPrimary = ({ themeColor }: ToastStoryArgs) => {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider>
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title={'Breaking news on the go!'}
        description={'Enable push notifications to get alerts for major markets and crypto news.'}
        themeColor={ themeColor }
        buttons={
          <>
            <Button variant="filled" size="sm" className={cn('mr-4')}>
              Button
            </Button>
            <Button
              variant="outlined"
              type="submit"
              size="sm"
              themeColor="neutral"
            >
              Button
            </Button>
          </>
        }
      />
    </ToastProvider>
  );
};

export const BottomButtonsAndLinkPrimary = ({ themeColor }: ToastStoryArgs) => {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider>
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title={'Breaking news on the go!'}
        description={'Enable push notifications to get alerts for major markets and crypto news.'}
        themeColor={ themeColor }
        buttons={
          <>
            <Button variant="filled" size="sm" className={cn('mr-4')}>
              Button
            </Button>
            <Link size='sm' href="https://www.google.com" rel="noreferrer" target="_blank">Link</Link>
          </>
        }
      />
    </ToastProvider>
  );
};

export const LeadingFigures = ({ themeColor }: ToastStoryArgs) => {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider swipeDirection="right">
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title={'Save up to 5% in your next purchase!'}
        leftElement={<SparklesIcon className="h-5 w-5 text-primary-500" />}
        themeColor={ themeColor }
        buttons={
          <>
            <Button variant="filled" size="sm" className={cn('mr-4')}>Button</Button>
            <Button
              variant="outlined"
              type="submit"
              size="sm"
              themeColor="neutral"
            >
              Button
            </Button>
          </>
        }
      />
    </ToastProvider>
  );
};

export const ToastWithAvatar = ({ themeColor }: ToastStoryArgs) => {
  const [open, setOpen] = useState(false);
  return (
    <ToastProvider swipeDirection="right">
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        title={'Save up to 5% in your next purchase!'}
        themeColor={ themeColor }
        avatarElement={<Avatar size='sm'><AvatarImage src="adam-smith.png" /></Avatar>}
        buttons={
          <>
            <Button variant="filled" size="sm" className={cn('mr-4')}>Button</Button>
            <Button
              variant="outlined"
              type="submit"
              size="sm"
              themeColor="neutral"
            >
              Button
            </Button>
          </>
        }
      />
    </ToastProvider>
  );
};

import { SparklesIcon } from '@heroicons/react/20/solid';
import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { cn } from '../utils';
import { Avatar } from './avatar';
import { Button } from './button';
import { Link } from './link';
import { Notification, NotificationProvider } from './notification';

const Story: Meta<typeof Notification> = {
  component: Notification,
  title: 'Notification',
};
export default Story;

export const SimpleMessage = () => {
  const [open, setOpen] = useState(false);
  return (
    <NotificationProvider swipeDirection="right">
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Notification open={open} onOpenChange={setOpen} title={'Message sent'} />
    </NotificationProvider>
  );
};

export const SimpleMessageWithIcon = () => {
  const [open, setOpen] = useState(false);
  return (
    <NotificationProvider swipeDirection="right">
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Notification
        open={open}
        onOpenChange={setOpen}
        title={'Message sent'}
        leftElement={
         <SparklesIcon className="h-6 w-6 text-primary-500"  />
         }
      />
    </NotificationProvider>
  );
};

export const SimpleMessageWithDescription = () => {
  const [open, setOpen] = useState(false);
  return (
    <NotificationProvider swipeDirection="right">
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Notification
        open={open}
        onOpenChange={setOpen}
        title={'Message sent'}
        description={'Anyone with a link can now view this file.'}
      />
    </NotificationProvider>
  );
};

export const SimpleMessageWithDescriptionAndButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <NotificationProvider swipeDirection="right">
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Notification
        open={open}
        onOpenChange={setOpen}
        title={'Message sent'}
        description={'Anyone with a link can now view this file.'}
        buttons={<Button size="sm">Button</Button>}
      />
    </NotificationProvider>
  );
};

export const Complete = () => {
  const [open, setOpen] = useState(false);
  return (
    <NotificationProvider>
      <Button
        onClick={() => setOpen(true)}
        variant="outlined"
        size="sm"
        className={cn('mr-4')}
      >
        Open
      </Button>
      <Notification
        open={open}
        onOpenChange={setOpen}
        className=""
        title={'Message sent'}
        description={'Anyone with a link can now view this file.'}
        actionButton={<Link>Undo</Link>}
        leftElement={
          <Avatar>
            <img
              alt="user"
              className="w-full h-full object-cover"
              src="avatar-img-1.jpg"
            />
          </Avatar>
        }
        buttons={
          <>
            <Button variant="outlined" size="sm" className={cn('mr-4')}>
              Button
            </Button>
            <Button type="submit" size="sm">
              Button
            </Button>
          </>
        }
      />
    </NotificationProvider>
  );
};

import {
  SparklesIcon,
  ExclamationCircleIcon,
  PlusIcon,
} from '@heroicons/react/20/solid';
import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { cn } from '../utils';
import { Button } from './button';
import { Link } from './link';
import { Toast, ToastProvider } from './toast';

const Story: Meta<typeof Toast> = {
  component: Toast,
  title: 'Toast',
};
export default Story;

export const SimpleMessageNeutral = () => {
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
        themeColor="neutral"
      />
    </ToastProvider>
  );
};

export const SimpleMessageNeutralWithIcon = () => {
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
        leftElement={<SparklesIcon className="h-6 w-6 text-neutral-500" />}
        themeColor="neutral"
      />
    </ToastProvider>
  );
};

export const SimpleMessageNeutralWithDescription = () => {
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
        description={'Anyone with a link can now view this file.'}
        themeColor="neutral"
      />
    </ToastProvider>
  );
};

export const SimpleMessageNeutralWithDescriptionAndButton = () => {
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
        description={'Anyone with a link can now view this file.'}
        buttons={<Button size="sm">Button</Button>}
        themeColor="neutral"
      />
    </ToastProvider>
  );
};

export const CompleteNeutral = () => {
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
        actionButton={<Link>Undo</Link>}
        themeColor="neutral"
        leftElement={
          <ExclamationCircleIcon className="text-neutral-700 w-5 h-5" />
        }
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
              leftIcon={<PlusIcon />}
              rightIcon={<PlusIcon />}
            >
              Button
            </Button>
          </>
        }
      />
    </ToastProvider>
  );
};

export const SimpleMessagePrimary = () => {
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
      <Toast open={open} onOpenChange={setOpen} title={'Message sent'} />
    </ToastProvider>
  );
};

export const SimpleMessagePrimaryWithIcon = () => {
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
        leftElement={<SparklesIcon className="h-6 w-6 text-primary-500" />}
      />
    </ToastProvider>
  );
};

export const SimpleMessagePrimaryWithDescription = () => {
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
        description={'Anyone with a link can now view this file.'}
      />
    </ToastProvider>
  );
};

export const SimpleMessagePrimaryWithDescriptionAndButton = () => {
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
        description={'Anyone with a link can now view this file.'}
        buttons={<Button size="sm">Button</Button>}
      />
    </ToastProvider>
  );
};

export const CompletePrimary = () => {
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
        actionButton={<Link>Undo</Link>}
        leftElement={
          <ExclamationCircleIcon className="text-primary-500 w-5 h-5" />
        }
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
              leftIcon={<PlusIcon />}
              rightIcon={<PlusIcon />}
            >
              Button
            </Button>
          </>
        }
      />
    </ToastProvider>
  );
};

export const SimpleMessageSuccess = () => {
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
        themeColor="success"
      />
    </ToastProvider>
  );
};

export const SimpleMessageSuccessWithIcon = () => {
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
        leftElement={<SparklesIcon className="h-6 w-6 text-success-500" />}
        themeColor="success"
      />
    </ToastProvider>
  );
};

export const SimpleMessageSuccessWithDescription = () => {
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
        description={'Anyone with a link can now view this file.'}
        themeColor="success"
      />
    </ToastProvider>
  );
};

export const SimpleMessageSuccessWithDescriptionAndButton = () => {
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
        description={'Anyone with a link can now view this file.'}
        buttons={<Button size="sm">Button</Button>}
        themeColor="success"
      />
    </ToastProvider>
  );
};

export const CompleteSuccess = () => {
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
        actionButton={<Link>Undo</Link>}
        themeColor="success"
        leftElement={
          <ExclamationCircleIcon className="text-success-500 w-5 h-5" />
        }
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
              leftIcon={<PlusIcon />}
              rightIcon={<PlusIcon />}
            >
              Button
            </Button>
          </>
        }
      />
    </ToastProvider>
  );
};

export const SimpleMessageWarning = () => {
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
        themeColor="warning"
      />
    </ToastProvider>
  );
};

export const SimpleMessageWarningWithIcon = () => {
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
        leftElement={<SparklesIcon className="h-6 w-6 text-warning-500" />}
        themeColor="warning"
      />
    </ToastProvider>
  );
};

export const SimpleMessageWarningWithDescription = () => {
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
        description={'Anyone with a link can now view this file.'}
        themeColor="warning"
      />
    </ToastProvider>
  );
};

export const SimpleMessageWarningWithDescriptionAndButton = () => {
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
        description={'Anyone with a link can now view this file.'}
        buttons={<Button size="sm">Button</Button>}
        themeColor="warning"
      />
    </ToastProvider>
  );
};

export const CompleteWarning = () => {
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
        actionButton={<Link>Undo</Link>}
        themeColor="warning"
        leftElement={
          <ExclamationCircleIcon className="text-warning-500 w-5 h-5" />
        }
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
              leftIcon={<PlusIcon />}
              rightIcon={<PlusIcon />}
            >
              Button
            </Button>
          </>
        }
      />
    </ToastProvider>
  );
};

export const SimpleMessageError = () => {
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
        themeColor="error"
      />
    </ToastProvider>
  );
};

export const SimpleMessageErrorWithIcon = () => {
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
        leftElement={<SparklesIcon className="h-6 w-6 text-error-500" />}
        themeColor="error"
      />
    </ToastProvider>
  );
};

export const SimpleMessageErrorWithDescription = () => {
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
        description={'Anyone with a link can now view this file.'}
        themeColor="error"
      />
    </ToastProvider>
  );
};

export const SimpleMessageErrorWithDescriptionAndButton = () => {
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
        description={'Anyone with a link can now view this file.'}
        buttons={<Button size="sm">Button</Button>}
        themeColor="error"
      />
    </ToastProvider>
  );
};

export const CompleteError = () => {
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
        actionButton={<Link>Undo</Link>}
        themeColor="error"
        leftElement={
          <ExclamationCircleIcon className="text-error-500 w-5 h-5" />
        }
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
              leftIcon={<PlusIcon />}
              rightIcon={<PlusIcon />}
            >
              Button
            </Button>
          </>
        }
      />
    </ToastProvider>
  );
};

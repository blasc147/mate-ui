import React from 'react';

import { cn } from '../..';
import { cva } from 'class-variance-authority';
import { CloseButton } from './close-button';
import * as Toast from '@radix-ui/react-toast';

const styles = {
  base: cn(
    'relative',
    'z-50',
    'flex',
    'w-[384px]',
    'rounded-md',
    'bg-white',
    'py-4',
    'shadow-md',
    'm-4'
  ),
  root: cn('ml-4'),
  leftElement: cn('ml-4'),
  title: cn('font-bold', 'font-sm'),
  close: cn('flex', 'items-start', 'ml-5', 'mt-1', 'pr-4'),
  actions: cn('ml-auto', 'flex'),
  description: cn('font-normal', 'font-sm'),
  buttons: cn('flex', 'mt-2'),
  viewport: cn('fixed', 'right-0', 'bottom-0', 'flex', 'flex-col', 'z-9'),
  border: cva(['w-1', 'rounded-r-[4px]'], {
    variants: {
      severity: {
        primary: ['bg-primary-500'],
      },
    },
  }),
};

type NotificationSeverity = 'primary';

interface NotificationProps extends Toast.ToastProps {
  className?: string;
  severity?: NotificationSeverity;
  leftElement?: React.ReactElement;
  buttons?: React.ReactElement;
  title?: string;
  description?: string;
  actionButton?: React.ReactElement;
}

const Notification = ({
  leftElement,
  className,
  title,
  description,
  buttons,
  actionButton,
  open,
  onOpenChange,
  severity = 'primary',
}: NotificationProps) => {
  return (
    <>
      <Toast.Root
        className={cn(styles.base, className)}
        open={open}
        onOpenChange={onOpenChange}
      >
        <div className={cn(styles.border({ severity }))}></div>
        {leftElement && <div className={styles.leftElement}>{leftElement}</div>}
        <div className={styles.root}>
          <Toast.Title className={styles.title}>{title}</Toast.Title>
          <Toast.Description className={styles.description}>
            {description}
          </Toast.Description>
          {buttons && <div className={styles.buttons}>{buttons}</div>}
        </div>
        <div className={styles.actions}>
          {actionButton && <div>{actionButton}</div>}
          <Toast.Close className={styles.close}>
            <CloseButton aria-label="notification-button"></CloseButton>{' '}
          </Toast.Close>
        </div>
      </Toast.Root>
      <Toast.Viewport className={styles.viewport} />
    </>
  );
};

const NotificationProvider: React.FC<Toast.ToastProviderProps> = ({
  children,
}) => {
  return <Toast.Provider>{children}</Toast.Provider>;
};

export {
  Notification,
  NotificationProvider,
  type NotificationProps,
  NotificationSeverity,
};

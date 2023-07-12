import React from 'react';

import { cn } from '../..';
import { cva } from 'class-variance-authority';
import { CloseButton } from './close-button';
import * as RadixToast from '@radix-ui/react-toast';

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
  title: cn('font-bold', 'font-sm', 'text-black'),
  close: cn('flex', 'items-start', 'ml-5', 'mt-1', 'pr-4'),
  actions: cn('ml-auto', 'flex'),
  description: cn('font-normal', 'font-sm', 'text-neutral-700'),
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

type ToastSeverity = 'primary';

interface ToastProps extends RadixToast.ToastProps {
  className?: string;
  severity?: ToastSeverity;
  leftElement?: React.ReactElement;
  buttons?: React.ReactElement;
  title?: string;
  description?: string;
  actionButton?: React.ReactElement;
}

const Toast = ({
  leftElement,
  className,
  title,
  description,
  buttons,
  actionButton,
  open,
  onOpenChange,
  severity = 'primary',
}: ToastProps) => {
  return (
    <>
      <RadixToast.Root
        className={cn(styles.base, className)}
        open={open}
        onOpenChange={onOpenChange}
      >
        <div className={cn(styles.border({ severity }))}></div>
        {leftElement && <div className={styles.leftElement}>{leftElement}</div>}
        <div className={styles.root}>
          <RadixToast.Title className={styles.title}>{title}</RadixToast.Title>
          <RadixToast.Description className={styles.description}>
            {description}
          </RadixToast.Description>
          {buttons && <div className={styles.buttons}>{buttons}</div>}
        </div>
        <div className={styles.actions}>
          {actionButton && <div>{actionButton}</div>}
          <RadixToast.Close className={styles.close}>
            <CloseButton aria-label="Toast-button"></CloseButton>{' '}
          </RadixToast.Close>
        </div>
      </RadixToast.Root>
      <RadixToast.Viewport className={styles.viewport} />
    </>
  );
};

const ToastProvider: React.FC<RadixToast.ToastProviderProps> = ({
  children,
}) => {
  return <RadixToast.Provider>{children}</RadixToast.Provider>;
};

export { Toast, ToastProvider, type ToastProps, ToastSeverity };

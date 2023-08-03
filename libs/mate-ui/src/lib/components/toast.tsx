import React from 'react';
import * as RadixToast from '@radix-ui/react-toast';
import { cva } from 'class-variance-authority';
import { cn } from '../..';
import { CloseButton } from './close-button';

const styles = {
  base: cn(
    'relative',
    'z-50',
    'flex',
    'w-[377px]',
    'w-full',
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
  actions: cn('ml-4', 'flex'),
  description: cn('font-normal', 'font-sm', 'text-neutral-700', 'mr-4'),
  buttons: cn('flex', 'mt-2'),
  viewport: cn('fixed', 'right-0', 'bottom-0', 'flex', 'flex-col', 'z-9'),
  border: cva(['w-1', 'rounded-r-[4px]'], {
    variants: {
      themeColor: {
        neutral: ['transparent'],
        primary: ['bg-primary-500'],
        success: ['bg-success-500'],
        warning: ['bg-warning-500'],
        error: ['bg-error-500'],
      },
    },
  }),
};

type ToastThemeColor = 'neutral' | 'primary' | 'success' | 'warning' | 'error';

interface ToastProps extends RadixToast.ToastProps {
  className?: string;
  themeColor?: ToastThemeColor;
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
  themeColor = 'primary',
}: ToastProps) => {
  return (
    <>
      <RadixToast.Root
        className={cn(styles.base, className)}
        open={open}
        onOpenChange={onOpenChange}
      >
        <div className={cn(styles.border({ themeColor }))}></div>
        {leftElement && <div className={styles.leftElement}>{leftElement}</div>}
        <div className={styles.root}>
          <div className="flex justify-between">
            <RadixToast.Title className={styles.title}>
              {title}
            </RadixToast.Title>
            <div className={cn(styles.actions, 'block md:hidden')}>
              <div className="flex">
                {actionButton && <div>{actionButton}</div>}
                <RadixToast.Close className={styles.close}>
                  <CloseButton aria-label="Toast-button"></CloseButton>
                </RadixToast.Close>
              </div>
            </div>
          </div>
          <RadixToast.Description className={styles.description}>
            {description}
          </RadixToast.Description>
          {buttons && <div className={styles.buttons}>{buttons}</div>}
        </div>
        <div className={cn(styles.actions, 'hidden md:block')}>
          <div className="flex">
            {actionButton && <div>{actionButton}</div>}
            <RadixToast.Close className={styles.close}>
              <CloseButton aria-label="Toast-button"></CloseButton>{' '}
            </RadixToast.Close>
          </div>
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

export { Toast, ToastProvider, type ToastProps, ToastThemeColor };

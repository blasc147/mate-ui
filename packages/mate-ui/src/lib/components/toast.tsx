/* eslint-disable tailwindcss/no-custom-classname */
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
    'py-3',
    'shadow-md',
    'm-4',
    'w-[335px]',
    'md:w-[377px]'
  ),
  root: cn('w-full', 'ml-4', 'flex', 'flex-col', 'md:flex-row'),
  leftElement: cva(['h-5', 'w-5', 'mb-2', 'md:mb-0', 'md:mr-4'], {
    variants: {
      themeColor: {
        neutral: ['text-grey-700'],
        primary: ['text-indigo-500'],
        success: ['text-green-500'],
        warning: ['text-yellow-500'],
        error: ['text-red-500'],
      },
    },
  }),
  avatarElement: cn('w-full', 'max-w-[32px]'),
  title: cn('font-bold', 'text-sm', 'text-black'),
  close: cn('flex', 'items-start', 'ml-5', 'mt-1', 'mr-[18px]'),
  actions: cn('flex'),
  description: cn('text-sm', 'text-grey-700'),
  buttons: cn('flex', 'mt-2'),
  viewport: cn('fixed', 'right-0', 'bottom-0', 'flex', 'flex-col', 'z-9'),
  border: cva(['w-1', 'rounded-r-[4px]'], {
    variants: {
      themeColor: {
        neutral: ['bg-transparent'],
        primary: ['bg-indigo-500'],
        success: ['bg-green-500'],
        warning: ['bg-yellow-500'],
        error: ['bg-red-500'],
      },
    },
  }),
};

type ToastThemeColor = 'neutral' | 'primary' | 'success' | 'warning' | 'error';

interface ToastProps extends RadixToast.ToastProps {
  className?: string;
  themeColor?: ToastThemeColor;
  leftElement?: React.ReactElement;
  avatarElement?: React.ReactElement;
  buttons?: React.ReactElement;
  title?: string;
  description?: string;
  actionButton?: React.ReactElement;
}

const Toast = ({
  leftElement,
  avatarElement,
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
        <div className={cn(styles.border({ themeColor }))}>&nbsp;</div>
        <div className={styles.root}>
          {leftElement && (
            <div className={cn(styles.leftElement({ themeColor }))}>
              {leftElement}
            </div>
          )}
          {avatarElement && (
            <div
              className={cn(
                styles.leftElement({ themeColor }),
                styles.avatarElement
              )}
            >
              {avatarElement}
            </div>
          )}
          <div className="flex flex-col">
            <RadixToast.Title className={styles.title}>
              {title}
            </RadixToast.Title>
            <RadixToast.Description className={styles.description}>
              {description}
            </RadixToast.Description>
            {buttons && <div className={styles.buttons}>{buttons}</div>}
          </div>
        </div>
        <div className={cn(styles.actions)}>
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

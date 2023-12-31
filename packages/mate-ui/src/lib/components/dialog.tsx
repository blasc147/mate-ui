/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../utils';
import { CloseButton } from './close-button';

export type ColorScheme = 'critical' | 'success';

interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
}
interface DialogProps extends DialogPrimitive.DialogPortalProps {
  colorScheme: ColorScheme;
  isCentered?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  contentAlignment?: 'center' | 'left';
}

const DialogContext = React.createContext<DialogProps>({
  colorScheme: 'success',
  isCentered: false,
  size: 'md',
  contentAlignment: 'left',
});

const styles = {
  base: cva(
    [
      'fixed',
      'z-50',
      'grid',
      'w-full',
      'bg-white',
      'gap-4',
      'rounded-lg',
      'p-6',
      'shadow-lg',
    ],
    {
      variants: {
        size: {
          xs: 'max-h-[404px] max-w-[346px]',
          sm: 'max-h-[604px] max-w-[518px]',
          md: 'max-h-[706px] max-w-[692px]',
          lg: 'max-h-[806px] max-w-[1036px]',
        },
      },
      defaultVariants: {
        size: 'md',
      },
    }
  ),
  header: cva(['flex', 'flex-col', 'text-center'], {
    variants: {
      contentAlignment: {
        center: 'items-center',
        left: 'items-left',
      },
    },
    defaultVariants: {
      contentAlignment: 'left',
    },
  }),
  description: cva(
    ['text-grey-700', 'font-regular', 'text-sm', 'mt-2', 'max-h-[300px]'],
    {
      variants: {
        contentAlignment: {
          center: 'text-center',
          left: 'text-left',
        },
        size: {
          xs: '',
          sm: '',
          md: '',
          lg: 'overflow-x-auto',
        },
      },
      defaultVariants: {
        contentAlignment: 'left',
      },
    }
  ),
  title: cva(['text-m', 'font-semibold', 'mt-3', 'text-grey-900'], {
    variants: {
      contentAlignment: {
        center: 'text-center',
        left: 'text-left',
      },
    },
    defaultVariants: {
      contentAlignment: 'left',
    },
  }),
};

const Dialog = ({
  colorScheme,
  isCentered = false,
  size,
  contentAlignment = 'center',
  ...props
}: DialogProps) => {
  return (
    <DialogContext.Provider
      value={{ colorScheme, isCentered, size, contentAlignment }}
    >
      <DialogPrimitive.Root {...props} />
    </DialogContext.Provider>
  );
};

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({
  className,
  children,
  ...props
}: DialogPrimitive.DialogPortalProps) => {
  const { isCentered } = React.useContext(DialogContext);
  return (
    <DialogPrimitive.Portal className={className} {...props}>
      <div
        className={cn(
          isCentered && 'fixed',
          'inset-0',
          'z-50',
          'flex',
          isCentered ? 'items-center' : 'items-start',
          'justify-center'
        )}
      >
        {children}
      </div>
    </DialogPrimitive.Portal>
  );
};
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed',
      'inset-0',
      'bg-grey-900/25',
      'z-50',
      'data-[state=open]:animate-fade-in',
      'data-[state=closed]:animate-fade-out',
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { size } = React.useContext(DialogContext);
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(styles.base({ size }), className)}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          asChild
          className={cn('absolute', 'top-4', 'right-4')}
        >
          <CloseButton />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children }, ref) => {
  React.useContext(DialogContext);
  return (
    <DialogPrimitive.Close ref={ref} asChild>
      {children}
    </DialogPrimitive.Close>
  );
});
DialogClose.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  children,
  icon,
  ...props
}: DialogHeaderProps) => {
  const { contentAlignment, colorScheme } = React.useContext(DialogContext);
  return (
    <div
      className={cn(styles.header({ contentAlignment }), className)}
      {...props}
    >
      {icon && (
        <div
          className={cn(
            'mb-3',
            'w-14',
            'h-14',
            'rounded-full',
            'border',
            'border-grey-300',
            'flex',
            'flex-wrap',
            'justify-center',
            'content-center'
          )}
        >
          <Slot
            className={cn('h-6', 'w-6', 'stroke-2', {
              'text-red-500': colorScheme === 'critical',
              'text-green-500': colorScheme === 'success',
            })}
          >
            {icon}
          </Slot>
        </div>
      )}
      {children}
    </div>
  );
};
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex', 'w-full', className)} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => {
  const { contentAlignment } = React.useContext(DialogContext);
  return (
    <DialogPrimitive.Title
      ref={ref}
      className={cn(styles.title({ contentAlignment }), className)}
      {...props}
    />
  );
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => {
  const { size, contentAlignment } = React.useContext(DialogContext);
  return (
    <DialogPrimitive.Description
      ref={ref}
      className={cn(styles.description({ contentAlignment, size }), className)}
      {...props}
    />
  );
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
};

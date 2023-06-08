'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Slot } from '@radix-ui/react-slot';
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
}

const DialogContext = React.createContext({
  colorScheme: 'success',
  isCentered: false,
});

const Dialog = ({ colorScheme, isCentered = false, ...props }: DialogProps) => {
  return (
    <DialogContext.Provider value={{ colorScheme, isCentered }}>
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
      'z-50',
      'bg-neutral-900',
      'opacity-25',
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'max-w-sm',
        'fixed',
        'z-50',
        'grid',
        'w-full',
        'bg-white',
        'gap-4',
        'rounded-lg',
        'p-6',
        'shadow-lg',
        className
      )}
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
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  children,
  icon,
  ...props
}: DialogHeaderProps) => {
  const { colorScheme } = React.useContext(DialogContext);
  return (
    <div
      className={cn(
        'flex',
        'flex-col',
        'text-center',
        'items-center',
        className
      )}
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
            'border-neutral-300',
            'flex',
            'flex-wrap',
            'justify-center',
            'content-center'
          )}
        >
          <Slot
            className={cn('h-6', 'w-6', 'stroke-2', {
              'text-error-500': colorScheme === 'critical',
              'text-success-500': colorScheme === 'success',
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
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-m', 'font-semibold', 'mt-3', className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(
      'text-neutral-700',
      'font-regular',
      'text-sm',
      'mt-2',
      className
    )}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};

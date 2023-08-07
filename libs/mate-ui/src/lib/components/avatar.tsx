'use client';
import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '../utils';


const styles = {
  root: cva(
    ['h-8', 'w-8', 'overflow-hidden', 'flex', 'items-center', 'justify-center'],
    {
      variants: {
        shape: {
          circle: ['rounded-full'],
          square: ['rounded-sm'],
        },
      },
      defaultVariants: {
        shape: 'circle',
      },
    }
  ),
  statusIcon: cva(
    [
      'h-2.5',
      'w-2.5',
      'absolute',
      'top-[22px]',
      'left-[22px]',
      'rounded-full',
      'border',
      'border-white',
    ],
    {
      variants: {
        variant: {
          online: ['bg-success-500'],
          offline: ['bg-neutral-300'],
          busy: ['bg-error-500'],
        },
      },
    }
  ),
  image: cn('h-full', 'w-full'),
  fallback: cva(
    [
      'flex',
      'h-full',
      'w-full',
      'items-center',
      'justify-center',
      'text-primary-500',
      'text-sm',
      'font-medium',
    ],
    {
      variants: {
        empty: {
          true: 'bg-neutral-300',
          false: 'bg-primary-200',
        },
      },
    }
  ),
  actionButton: cn(
    'h-6',
    'w-6',
    'bg-neutral-100',
    'absolute',
    'top-[15px]',
    'left-[15px]',
    'rounded-full',
    'flex',
    'justify-center',
    'items-center',
    'focus:outline-none',
    'focus-visible:ring-2',
    'ring-focus'
  ),
  actionButtonIcon: cn('fill-neutral-700', 'h-4', 'w-4'),
  label: cn(
    'pt-2.5',
    'font-regular',
    'text-xs',
    'text-center',
    'text-neutral-900',
    'absolute',
    'top-8'
  ),
};

interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  shape?: 'square' | 'circle';
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, shape, children, ...props }, ref) => (
  <span className="relative">
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(styles.root({ shape }), className)}
      {...props}
    >
      {children}
    </AvatarPrimitive.Root>
  </span>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn(styles.image, className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(styles.fallback({ empty: !props.children }), className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

interface AvatarActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

const AvatarActionButton = React.forwardRef<
  HTMLButtonElement,
  AvatarActionButtonProps
>(({ icon, className, ...props }, ref) => {
  return (
    <button ref={ref} className={cn(styles.actionButton, className)} {...props}>
      <Slot className={styles.actionButtonIcon}>{icon}</Slot>
    </button>
  );
});
AvatarActionButton.displayName = 'AvatarActionButton';

interface AvatarStatusProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant: 'online' | 'offline' | 'busy';
}

const AvatarStatus = React.forwardRef<HTMLSpanElement, AvatarStatusProps>(
  ({ variant, className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(styles.statusIcon({ variant }), className)}
      {...props}
    />
  )
);
AvatarStatus.displayName = 'AvatarStatus';

const AvatarLabel = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn(styles.label, className)} {...props} />
));

AvatarLabel.displayName = 'AvatarLabel';

export {
  Avatar,
  type AvatarProps,
  AvatarImage,
  AvatarFallback,
  AvatarActionButton,
  type AvatarActionButtonProps,
  AvatarStatus,
  type AvatarStatusProps,
  AvatarLabel,
};

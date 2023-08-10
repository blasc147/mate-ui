'use client';

import { cn } from '../utils';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React, { ReactNode } from 'react';

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
  rootSize: cva([], {
    variants: {
      size: {
        xs: ['h-5 w-5'],
        sm: ['h-8 w-8'],
        md: ['h-10 w-10'],
        lg: ['h-14 w-14'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }),
  statusIcon: cva(
    [
      'bottom-0',
      'right-0',
      'absolute',
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
        size: {
          xs: ['h-[6.25px] w-[6.25px]'],
          sm: ['h-[10px] w-[10px]'],
          md: ['h-[12.5px] w-[12.5px]'],
          lg: ['h-[17.5px] w-[17.5px]'],
        },
      },
      defaultVariants: {
        variant: 'online',
        size: 'md',
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
  actionButton2: cn(
    'h-6',
    'w-6',
    'bg-neutral-100',
    'absolute',
    'top-2.5',
    'left-2.5',
    'rounded-full',
    'flex',
    'justify-center',
    'items-center',
    'focus:outline-none',
    'focus-visible:ring-2',
    'ring-focus'
  ),
  actionButton: cva(
    [
      'h-6',
      'w-6',
      'bg-neutral-100',
      'absolute',
      'rounded-full',
      'flex',
      'justify-center',
      'items-center',
      'focus:outline-none',
      'focus-visible:ring-2',
      'ring-focus',
    ],
    {
      variants: {
        size: {
          xs: ['top-2.5', 'left-2.5'],
          sm: ['top-4', 'left-[18px]'],
          md: ['top-6', 'left-6'],
          lg: ['top-[36px]', 'left-[37px]'],
        },
      },
    }
  ),
  actionButtonIcon: cn('fill-neutral-700', 'h-4', 'w-4'),
  label: cva(
    [
      'mt-3',
      'font-regular',
      'text-xs',
      'text-center',
      'text-neutral-900',
      'absolute',
    ],
    {
      variants: {
        size: {
          xs: ['top-3.5'],
          sm: ['top-6'],
          md: ['top-8'],
          lg: ['top-12'],
        },
      },
      defaultVariants: {
        size: 'md',
      },
    }
  ),
  avatarIcon: cva([], {
    variants: {
      size: {
        xs: ['h-4 w-4'],
        sm: ['h-5 w-5'],
        md: ['h-6 w-6'],
        lg: ['h-8 w-8'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }),
};

type AvatarShapes = 'square' | 'circle';
type AvatarSizes = 'xs' | 'sm' | 'md' | 'lg';
type AvatarStatuses = 'online' | 'offline' | 'busy';

interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  shape?: AvatarShapes;
  size?: AvatarSizes;
}

const AvatarContext = React.createContext<AvatarProps>({
  size: 'md',
});

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, shape, size='md' , children, ...props }, ref) => (
  <span className="absolute">
    <AvatarContext.Provider value={{ size }}>
      <AvatarPrimitive.Root
        ref={ref}
        className={cn(
          styles.root({ shape }),
          styles.rootSize({ size }),
          className
        )}
        {...props}
      >
        {children}
      </AvatarPrimitive.Root>
    </AvatarContext.Provider>
  </span>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

interface AvatarImageProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {
  size?: AvatarSizes;
  status?: AvatarStatuses;
}

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  AvatarImageProps
>(({ className, status, ...props }, ref) => {
  const { size } = React.useContext(AvatarContext);
  return(
  <>
    <AvatarPrimitive.Image ref={ref} className={cn(styles.image, className)} {...props}/>
    {status && <AvatarStatus variant={status} />}
  </>
)});
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
  size?: AvatarSizes;
}

const AvatarActionButton = React.forwardRef<
  HTMLButtonElement,
  AvatarActionButtonProps
>(({ icon, className, ...props }, ref) => {
  const { size } = React.useContext(AvatarContext);
  return (
    <button ref={ref} className={cn(styles.actionButton({size}), className)} {...props}>
      <Slot className={styles.actionButtonIcon}>{icon}</Slot>
    </button>
  );
});
AvatarActionButton.displayName = 'AvatarActionButton';

interface AvatarStatusProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: AvatarStatuses;
}

const AvatarStatus = React.forwardRef<HTMLSpanElement, AvatarStatusProps>(
  ({ variant, className, ...props }, ref) => {
    const { size } = React.useContext(AvatarContext);
    return (
      <span
        ref={ref}
        className={cn(styles.statusIcon({ variant, size }), className)}
        {...props}
      />
    );
  }
);
AvatarStatus.displayName = 'AvatarStatus';

interface AvatarLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: AvatarSizes;
}

const AvatarLabel = React.forwardRef<HTMLSpanElement, AvatarLabelProps>(
  ({ className, ...props }, ref) => {
    const { size } = React.useContext(AvatarContext);
    return (
      <span ref={ref} className={cn(styles.label({size}), className)} {...props} />
    );
  }
);

AvatarLabel.displayName = 'AvatarLabel';

interface AvatarIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon: ReactNode;
  size?: AvatarSizes;
  status?: AvatarStatuses;
}

const AvatarIcon = React.forwardRef<HTMLSpanElement, AvatarIconProps>(
  ({ className, icon, status }, ref) => {
    const { size } = React.useContext(AvatarContext);
    return (
      <>
        <span ref={ref} className={cn(styles.avatarIcon({size}), className)}>{icon}</span>
        {status && <AvatarStatus variant={status}/>}
      </>
    );
  }
);

AvatarIcon.displayName = 'AvatarLabel';

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
  AvatarIcon,
};
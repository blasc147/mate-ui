'use client';

import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../utils';
import { CloseButton } from './close-button';

const styles = {
  root: cva(['relative', 'flex', 'p-4', 'border', 'rounded-md'], {
    variants: {
      colorScheme: {
        primary: ['bg-primary-100', 'border-primary-200'],
        neutral: ['bg-neutral-100', 'border-neutral-200'],
        info: ['bg-info-100', 'border-info-200'],
        success: ['bg-success-100', 'border-success-200'],
        warning: ['bg-warning-100', 'border-warning-200'],
        error: ['bg-error-100', 'border-error-200'],
      },
    },
    defaultVariants: {
      colorScheme: 'primary',
    },
  }),
  title: cn('text-neutral-900', 'font-semibold', 'text-sm'),
  description: cn('text-neutral-700', 'text-sm', 'mt-1'),
  icon: cva(['h-5', 'w-5', 'mr-4'], {
    variants: {
      colorScheme: {
        primary: 'text-primary-500',
        neutral: 'text-neutral-500',
        info: 'text-info-500',
        success: 'text-success-500',
        warning: 'text-warning-500',
        error: 'text-error-500',
      },
    },
    defaultVariants: {
      colorScheme: 'primary',
    },
  }),
  closeButton: cn('absolute', 'top-5', 'right-5'),
  bottomElement: 'mt-4',
  trailingElement: 'ml-auto',
};

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof styles.root> {
  icon?: React.ReactNode;
  trailingElement?: React.ReactNode;
  bottomElement?: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      icon,
      bottomElement,
      trailingElement,
      colorScheme,
      className,
      children,
      role,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role={role ?? 'alert'}
        className={cn(styles.root({ colorScheme }), className)}
        {...props}
      >
        {icon && <Slot className={styles.icon({ colorScheme })}>{icon}</Slot>}

        <div>
          {children}
          {bottomElement && (
            <Slot className={styles.bottomElement}>{bottomElement}</Slot>
          )}
        </div>

        {trailingElement && (
          <Slot className={styles.trailingElement}>{trailingElement}</Slot>
        )}
      </div>
    );
  }
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { asChild?: boolean }
>(({ asChild, className, children }, ref) => {
  const Comp = asChild ? Slot : 'p';
  return (
    <Comp ref={ref} className={cn(styles.title, className)}>
      {children}
    </Comp>
  );
});
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { asChild?: boolean }
>(({ asChild, className, children }, ref) => {
  const Comp = asChild ? Slot : 'p';
  return (
    <Comp ref={ref} className={cn(styles.description, className)}>
      {children}
    </Comp>
  );
});
AlertDescription.displayName = 'AlertDescription';

const AlertCloseButton = React.forwardRef<
  React.ComponentRef<typeof CloseButton>,
  React.ComponentPropsWithoutRef<typeof CloseButton> & { asChild?: boolean }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : CloseButton;
  return (
    <Comp ref={ref} className={cn(styles.closeButton, className)} {...props} />
  );
});
AlertCloseButton.displayName = 'AlertCloseButton';

export {
  Alert,
  type AlertProps,
  AlertTitle,
  AlertDescription,
  AlertCloseButton,
};

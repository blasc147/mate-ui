/* eslint-disable tailwindcss/no-custom-classname */
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../utils';
import { CloseButton } from './close-button';

const styles = {
  root: cva(['relative', 'flex', 'p-4', 'border', 'rounded-md'], {
    variants: {
      colorScheme: {
        primary: ['bg-indigo-100', 'border-indigo-200'],
        neutral: ['bg-grey-100', 'border-grey-200'],
        info: ['bg-blue-100', 'border-blue-200'],
        success: ['bg-green-100', 'border-green-200'],
        warning: ['bg-yellow-100', 'border-yellow-200'],
        error: ['bg-red-100', 'border-red-200'],
      },
    },
    defaultVariants: {
      colorScheme: 'primary',
    },
  }),
  title: cn('text-grey-900', 'font-semibold', 'text-sm'),
  description: cn('text-grey-700', 'text-sm', 'mt-1'),
  icon: cva(['h-5', 'w-5', 'mr-4'], {
    variants: {
      colorScheme: {
        primary: 'text-indigo-500',
        neutral: 'text-grey-500',
        info: 'text-blue-500',
        success: 'text-green-500',
        warning: 'text-yellow-500',
        error: 'text-red-500',
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

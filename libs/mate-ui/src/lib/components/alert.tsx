'use client';

import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../utils';
import { Slot } from '@radix-ui/react-slot';

const styles = {
  root: cva(['flex', 'gap-4', 'p-4', 'border', 'rounded-md'], {
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
  icon: cva(['h-5', 'w-5'], {
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
};

interface AlertProps extends VariantProps<typeof styles.root> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  trailingLink?: React.ReactNode;
  bottomLink?: React.ReactNode;
  closeButton?: React.ReactNode;
  className?: string;
}

function Alert({
  title,
  description,
  icon: _icon,
  bottomLink,
  trailingLink,
  closeButton,
  colorScheme,
  className,
}: AlertProps) {
  const icon = _icon && (
    <Slot className={styles.icon({ colorScheme })}>{_icon}</Slot>
  );

  return (
    <div className={cn(styles.root({ colorScheme }), className)}>
      {icon && <div className={cn('h-5', 'w-5')}>{icon}</div>}
      <div>
        <p className={cn('text-neutral-900', 'font-semibold', 'text-sm')}>
          {title}
        </p>
        <p className={cn('text-neutral-700', 'text-sm')}>{description}</p>
        {bottomLink && <div className={cn('pt-4')}>{bottomLink}</div>}
      </div>
      <div className={cn('ml-auto')}>
        {trailingLink}
        {closeButton}
      </div>
    </div>
  );
}

export { Alert, type AlertProps };
/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../utils';
import { Slot } from '@radix-ui/react-slot';

export type TagThemeColor =
  | 'success'
  | 'neutral'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'warning';

const styles = {
  root: cva(
    ['inline-flex', 'items-center', 'justify-center', 'gap-2', 'font-semibold'],
    {
      variants: {
        size: {
          md: ['text-sm'],
          sm: ['text-xs'],
        },
        variant: {
          pill: ['px-2', 'py-1', 'rounded-full'],
          badge: ['px-2', 'py-1', 'rounded'],
          status: ['px-2', 'py-1', 'rounded-full'],
          quiet: [],
        },
        themeColor: {
          neutral: [],
          primary: [],
          secondary: [],
          info: [],
          success: [],
          warning: [],
          error: [],
        },
      },
      compoundVariants: [
        // neutral
        {
          variant: ['pill', 'badge', 'status'],
          themeColor: 'neutral',
          className: ['bg-neutral-200'],
        },
        {
          variant: ['pill', 'badge'],
          themeColor: 'neutral',
          className: ['text-neutral-700'],
        },
        // primary
        {
          variant: ['pill', 'badge', 'status'],
          themeColor: 'primary',
          className: ['bg-primary-200'],
        },
        {
          variant: ['pill', 'badge'],
          themeColor: 'primary',
          className: ['text-primary-500'],
        },
        // secondary
        {
          variant: ['pill', 'badge', 'status'],
          themeColor: 'secondary',
          className: ['bg-secondary-200'],
        },
        {
          variant: ['pill', 'badge'],
          themeColor: 'secondary',
          className: ['text-secondary-600'],
        },
        // info
        {
          variant: ['pill', 'badge', 'status'],
          themeColor: 'info',
          className: ['bg-info-200'],
        },
        {
          variant: ['pill', 'badge'],
          themeColor: 'info',
          className: ['text-info-700'],
        },
        // success
        {
          variant: ['pill', 'badge', 'status'],
          themeColor: 'success',
          className: ['bg-success-100'],
        },
        {
          variant: ['pill', 'badge'],
          themeColor: 'success',
          className: ['text-success-700'],
        },
        // warning
        {
          variant: ['pill', 'badge', 'status'],
          themeColor: 'warning',
          className: ['bg-warning-100'],
        },
        {
          variant: ['pill', 'badge'],
          themeColor: 'warning',
          className: ['text-warning-700'],
        },
        // error
        {
          variant: ['pill', 'badge', 'status'],
          themeColor: 'error',
          className: ['bg-error-100'],
        },
        {
          variant: ['pill', 'badge'],
          themeColor: 'error',
          className: ['text-error-500'],
        },
        // status/quiet for any themeColor
        {
          variant: ['status', 'quiet'],
          className: ['text-neutral-900'],
        },
      ],
      defaultVariants: {
        variant: 'pill',
        themeColor: 'neutral',
        size: 'md',
      },
    }
  ),
  dot: cva(['rounded-full'], {
    variants: {
      size: {
        md: ['w-2', 'h-2'],
        sm: ['w-1.5', 'h-1.5'],
      },
      themeColor: {
        neutral: ['bg-neutral-700'],
        primary: ['bg-primary-500'],
        secondary: ['bg-secondary-600'],
        info: ['bg-info-500'],
        success: ['bg-success-500'],
        warning: ['bg-warning-500'],
        error: ['bg-error-500'],
      },
    },
    defaultVariants: {
      themeColor: 'neutral',
      size: 'md',
    },
  }),
  icon: cva([], {
    variants: {
      size: {
        md: ['w-3', 'h-3'],
        sm: ['w-2', 'h-2'],
      },
      themeColor: {
        neutral: ['text-neutral-700'],
        primary: ['text-primary-500'],
        secondary: ['text-secondary-600'],
        info: ['text-info-500'],
        success: ['text-success-500'],
        warning: ['text-warning-500'],
        error: ['text-error-500'],
      },
    },
    defaultVariants: {
      themeColor: 'neutral',
      size: 'md',
    },
  }),
};

interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof styles.root> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  withDot?: boolean;
}

const Tag = ({
  className,
  variant,
  themeColor,
  size,
  children,
  leftIcon: _leftIcon,
  rightIcon: _rightIcon,
  withDot = false,
  ...props
}: TagProps) => {
  const iconClasses = styles.icon({ themeColor, size });

  const leftIcon = _leftIcon && (
    <Slot className={iconClasses}>{_leftIcon}</Slot>
  );

  const rightIcon = _rightIcon && (
    <Slot className={iconClasses}>{_rightIcon}</Slot>
  );

  return (
    <span
      className={cn(styles.root({ variant, themeColor, size }), className)}
      {...props}
    >
      {VARIANTS_WITH_DOT.includes(variant) && withDot && (
        <span className={styles.dot({ themeColor, size })} />
      )}
      {leftIcon}
      {children}
      {rightIcon}
    </span>
  );
};

const VARIANTS_WITH_DOT: TagProps['variant'][] = ['status', 'quiet'];

export { Tag, type TagProps };

/* eslint-disable tailwindcss/no-custom-classname */
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
          className: ['bg-grey-200'],
        },
        {
          variant: ['pill', 'badge'],
          themeColor: 'neutral',
          className: ['text-grey-700'],
        },
        // primary
        {
          variant: ['pill', 'badge', 'status'],
          themeColor: 'primary',
          className: ['bg-indigo-200'],
        },
        {
          variant: ['pill', 'badge'],
          themeColor: 'primary',
          className: ['text-indigo-500'],
        },
        // secondary
        {
          variant: ['pill', 'badge', 'status'],
          themeColor: 'secondary',
          className: ['bg-teal-200'],
        },
        {
          variant: ['pill', 'badge'],
          themeColor: 'secondary',
          className: ['text-teal-600'],
        },
        // info
        {
          variant: ['pill', 'badge', 'status'],
          themeColor: 'info',
          className: ['bg-blue-200'],
        },
        {
          variant: ['pill', 'badge'],
          themeColor: 'info',
          className: ['text-blue-700'],
        },
        // success
        {
          variant: ['pill', 'badge', 'status'],
          themeColor: 'success',
          className: ['bg-green-100'],
        },
        {
          variant: ['pill', 'badge'],
          themeColor: 'success',
          className: ['text-green-700'],
        },
        // warning
        {
          variant: ['pill', 'badge', 'status'],
          themeColor: 'warning',
          className: ['bg-yellow-100'],
        },
        {
          variant: ['pill', 'badge'],
          themeColor: 'warning',
          className: ['text-yellow-700'],
        },
        // error
        {
          variant: ['pill', 'badge', 'status'],
          themeColor: 'error',
          className: ['bg-red-100'],
        },
        {
          variant: ['pill', 'badge'],
          themeColor: 'error',
          className: ['text-red-500'],
        },
        // status/quiet for any themeColor
        {
          variant: ['status', 'quiet'],
          className: ['text-grey-900'],
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
        neutral: ['bg-grey-700'],
        primary: ['bg-indigo-500'],
        secondary: ['bg-teal-600'],
        info: ['bg-blue-500'],
        success: ['bg-green-500'],
        warning: ['bg-yellow-500'],
        error: ['bg-red-500'],
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
        neutral: ['text-grey-700'],
        primary: ['text-indigo-500'],
        secondary: ['text-teal-600'],
        info: ['text-blue-500'],
        success: ['text-green-500'],
        warning: ['text-yellow-500'],
        error: ['text-red-500'],
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

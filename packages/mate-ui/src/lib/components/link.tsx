/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { LoaderIcon } from '../icons';
import { cn } from '../utils';

const styles = {
  root: cva(
    [
      'cursor-pointer',
      'select-none',
      'inline-flex',
      'items-center',
      'justify-center',
      'gap-2',
      'outline-none',
      'focus-visible:ring-2',
      'ring-offset-1',
      'ring-focus',
      'rounded',
      'group',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'data-[loading=true]:text-[transparent]',
    ],
    {
      variants: {
        size: {
          md: 'text-m',
          sm: 'text-sm',
        },
        weight: {
          default: 'font-semibold',
          light: 'font-regular',
        },
        colorScheme: {
          primary: [
            'text-primary-500',
            'hover:text-primary-700',
            'active:text-primary-800',
          ],
          secondary: [
            'text-secondary-600',
            'hover:text-secondary-700',
            'active:text-secondary-800',
          ],
          neutral: [
            'text-neutral-600',
            'hover:text-neutral-700',
            'active:text-neutral-800',
          ],
          destructive: [
            'text-error-500',
            'hover:text-error-700',
            'active:text-error-800',
          ],
        },
      },
      defaultVariants: {
        colorScheme: 'primary',
        size: 'md',
        weight: 'default',
      },
    }
  ),
  icon: cva(['inline', 'group-disabled:opacity-50'], {
    variants: {
      colorScheme: {
        primary: [
          'text-primary-500',
          'group-hover:text-primary-700',
          'group-active:text-primary-800',
        ],
        secondary: [
          'text-secondary-600',
          'group-hover:text-secondary-700',
          'group-active:text-secondary-800',
        ],
        neutral: [
          'text-neutral-600',
          'group-hover:text-neutral-700',
          'group-active:text-neutral-800',
        ],
        destructive: [
          'text-error-500',
          'group-hover:text-error-700',
          'group-active:text-error-800',
        ],
      },
      size: {
        sm: ['w-3', 'h-3'],
        md: ['w-4', 'h-4'],
      },
    },
    defaultVariants: {
      colorScheme: 'primary',
      size: 'md',
    },
  }),
};

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof styles.root> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      colorScheme,
      size,
      weight,
      asChild,
      loading,
      leftIcon: _leftIcon,
      rightIcon: _rightIcon,
      children: _children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'a';

    const iconVariantsClassesBase = styles.icon({
      colorScheme,
      size,
    });

    const iconVariantsClasses = cn(
      iconVariantsClassesBase,
      'group-data-[loading=true]:text-[transparent]'
    );

    const loadingSpinner = loading && (
      <LoaderIcon
        className={cn(iconVariantsClassesBase, 'absolute', 'animate-spin')}
      />
    );

    const leftIcon = _leftIcon && (
      <Slot className={iconVariantsClasses}>{_leftIcon}</Slot>
    );

    const rightIcon = _rightIcon && (
      <Slot className={iconVariantsClasses}>{_rightIcon}</Slot>
    );

    const children = asChild ? (
      React.isValidElement(_children) &&
      React.cloneElement(_children, {
        children: (
          <>
            {loadingSpinner}
            {leftIcon}
            {_children.props.children}
            {rightIcon}
          </>
        ),
      } as { children: React.ReactNode })
    ) : (
      <>
        {loadingSpinner}
        {leftIcon}
        {_children}
        {rightIcon}
      </>
    );

    return (
      <Comp
        {...props}
        data-loading={loading}
        ref={ref}
        className={cn(styles.root({ colorScheme, size, weight }), className)}
        children={children}
      />
    );
  }
);
Link.displayName = 'Link';

export { Link, type LinkProps };

'use-client';

import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { LoaderIcon } from '../icons';
import { cn } from '../utils';

const styles = {
  rootBase: cva(
    [
      'rounded-lg',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'outline-none',
      'font-semibold',
      'focus-visible:ring-2',
      'ring-offset-1',
      'ring-focus',
      'group',
    ],
    {
      variants: {
        variant: {
          filled: [],
          outlined: ['border'],
          ghost: [],
        },
        colorScheme: {
          primary: [],
          secondary: [],
          neutral: [],
          destructive: [],
        },
      },
      compoundVariants: [
        // primary
        {
          colorScheme: 'primary',
          variant: 'filled',
          className: [
            'text-white',
            'bg-primary-500',
            'hover:enabled:bg-primary-700',
            'active:enabled:bg-primary-800',
          ],
        },
        {
          colorScheme: 'primary',
          variant: ['outlined'],
          className: [
            'border-primary-500',
            'text-primary-500',
            'hover:enabled:bg-primary-500',
            'hover:enabled:text-white',
            'active:enabled:bg-primary-700',
            'active:enabled:border-primary-700',
            'active:enabled:text-white',
            'focus-visible:bg-white',
          ],
        },
        {
          colorScheme: 'primary',
          variant: 'ghost',
          className: [
            'text-primary-500',
            'hover:enabled:bg-primary-100',
            'active:enabled:bg-primary-200',
            'focus-visible:bg-white',
          ],
        },
        // secondary
        {
          colorScheme: 'secondary',
          variant: 'filled',
          className: [
            'text-white',
            'bg-secondary-500',
            'hover:enabled:bg-secondary-700',
            'active:enabled:bg-secondary-800',
          ],
        },
        {
          colorScheme: 'secondary',
          variant: 'outlined',
          className: [
            'border-secondary-500',
            'text-secondary-600',
            'hover:enabled:bg-secondary-500',
            'hover:enabled:text-white',
            'active:enabled:bg-secondary-700',
            'active:enabled:border-secondary-700',
            'active:enabled:text-white',
            'focus-visible:bg-white',
          ],
        },
        {
          colorScheme: 'secondary',
          variant: 'ghost',
          className: [
            'text-secondary-600',
            'hover:enabled:bg-secondary-100',
            'active:enabled:bg-secondary-200',
            'focus-visible:bg-white',
          ],
        },
        // neutral
        {
          colorScheme: 'neutral',
          variant: 'filled',
          className: [
            'text-neutral-900',
            'bg-neutral-300',
            'hover:enabled:bg-neutral-400',
            'active:enabled:bg-neutral-500',
          ],
        },
        {
          colorScheme: 'neutral',
          variant: 'outlined',
          className: [
            'text-neutral-700',
            'border-neutral-500',
            'hover:enabled:bg-neutral-600',
            'hover:enabled:border-neutral-600',
            'hover:enabled:text-white',
            'active:enabled:bg-neutral-700',
            'active:enabled:border-neutral-700',
            'active:enabled:text-white',
            'focus-visible:bg-white',
            'focus-visible:border-neutral-500',
          ],
        },
        {
          colorScheme: 'neutral',
          variant: 'ghost',
          className: [
            'text-neutral-700',
            'hover:enabled:bg-neutral-100',
            'active:enabled:bg-neutral-200',
            'focus-visible:bg-white',
          ],
        },
        // destructive
        {
          variant: 'filled',
          colorScheme: 'destructive',
          className: [
            'text-white',
            'bg-error-500',
            'hover:enabled:bg-error-700',
            'active:enabled:bg-error-800',
            'focus-visible:bg-error-500',
          ],
        },
        {
          variant: 'outlined',
          colorScheme: 'destructive',
          className: [
            'border-error-500',
            'text-error-700',
            'hover:enabled:bg-error-500',
            'hover:enabled:text-white',
            'active:enabled:bg-error-700',
            'active:enabled:border-error-700',
            'active:enabled:text-white',
            'focus-visible:bg-white',
            'focus-visible:text-error-500',
            'focus-visible:border-error-500',
          ],
        },
        {
          variant: 'ghost',
          colorScheme: 'destructive',
          className: [
            'text-error-700',
            'hover:enabled:bg-error-100',
            'active:enabled:bg-error-200',
            'focus-visible:bg-white',
          ],
        },
      ],
      defaultVariants: {
        colorScheme: 'primary',
        variant: 'filled',
      },
    }
  ),
  rootSize: cva([], {
    variants: {
      size: {
        sm: ['py-1.5', 'px-4', 'text-sm'],
        md: ['py-2', 'px-6', 'text-m'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }),
  icon: cva(['inline'], {
    variants: {
      variant: {
        filled: [],
        outlined: [],
        ghost: [],
      },
      colorScheme: {
        primary: [],
        secondary: [],
        neutral: [],
        destructive: [],
      },
      size: {
        sm: ['w-3', 'h-3'],
        md: ['w-4', 'h-4'],
      },
    },
    compoundVariants: [
      // primary
      {
        colorScheme: 'primary',
        variant: 'filled',
        className: ['text-white'],
      },
      {
        colorScheme: 'primary',
        variant: 'outlined',
        className: [
          'text-primary-500',
          'group-hover:enabled:text-white',
          'group-active:enabled:text-white',
        ],
      },
      {
        colorScheme: 'primary',
        variant: 'ghost',
        className: ['text-primary-500'],
      },
      // secondary
      {
        colorScheme: 'secondary',
        variant: 'filled',
        className: ['text-white'],
      },
      {
        colorScheme: 'secondary',
        variant: 'outlined',
        className: [
          'text-secondary-600',
          'group-hover:enabled:text-white',
          'group-active:enabled:text-white',
        ],
      },
      {
        colorScheme: 'secondary',
        variant: 'ghost',
        className: ['text-secondary-600'],
      },
      // neutral
      {
        colorScheme: 'neutral',
        variant: 'filled',
        className: ['text-neutral-700'],
      },
      {
        colorScheme: 'neutral',
        variant: 'outlined',
        className: [
          'text-neutral-700',
          'group-hover:enabled:text-white',
          'group-active:enabled:text-white',
        ],
      },
      {
        colorScheme: 'neutral',
        variant: 'ghost',
        className: ['text-neutral-700'],
      },
      // destructive
      {
        colorScheme: 'destructive',
        variant: 'filled',
        className: ['text-white'],
      },
      {
        colorScheme: 'destructive',
        variant: 'outlined',
        className: [
          'text-error-700',
          'group-hover:enabled:text-white',
          'group-active:enabled:text-white',
        ],
      },
      {
        colorScheme: 'destructive',
        variant: 'ghost',
        className: ['text-error-700'],
      },
    ],
    defaultVariants: {
      colorScheme: 'primary',
      variant: 'filled',
      size: 'md',
    },
  }),
};

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof styles.rootBase>,
    VariantProps<typeof styles.rootSize> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      colorScheme,
      size,
      disabled,
      loading,
      asChild,
      children: _children,
      leftIcon: _leftIcon,
      rightIcon: _rightIcon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    const baseIconVariantsClasses = styles.icon({
      colorScheme,
      variant,
      size,
    });

    const iconVariantsClasses = cn(
      baseIconVariantsClasses,
      'group-data-[loading=true]:text-[transparent]'
    );

    const leftIcon = _leftIcon && (
      <Slot className={iconVariantsClasses}>{_leftIcon}</Slot>
    );

    const rightIcon = _rightIcon && (
      <Slot className={iconVariantsClasses}>{_rightIcon}</Slot>
    );

    const loadingSpinner = loading && (
      <LoaderIcon
        className={cn(baseIconVariantsClasses, 'absolute', 'animate-spin')}
      />
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
        ref={ref}
        data-loading={loading}
        className={cn(
          styles.rootBase({ colorScheme, variant }),
          styles.rootSize({ size }),
          'inline-flex',
          'items-center',
          'justify-center',
          'gap-3',
          'data-[loading=true]:text-[transparent]',
          className
        )}
        disabled={loading || disabled}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, styles as buttonStyles, type ButtonProps };

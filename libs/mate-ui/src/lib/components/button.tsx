'use-client';

import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { LoaderIcon } from '../icons';
import { cn } from '../utils';

const styles = {
  rootBase: cva(
    [
      'rounded',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'outline-none',
      'font-semibold',
      'focus-visible:ring-2',
      'ring-offset-1',
      'ring-focus',
      'group',
      'border-transparent',
    ],
    {
      variants: {
        variant: {
          filled: [],
          outlined: ['border'],
          ghost: [],
        },
        themeColor: {
          primary: [],
          secondary: [],
          neutral: [],
          destructive: [],
        },
      },
      compoundVariants: [
        // primary
        {
          themeColor: 'primary',
          variant: 'filled',
          className: [
            'text-white',
            'bg-primary-500',
            'hover:enabled:bg-primary-700',
            'active:enabled:bg-primary-800',
          ],
        },
        {
          themeColor: 'primary',
          variant: ['outlined'],
          className: [
            'border-primary-500',
            'text-primary-500',
            'hover:enabled:bg-primary-100',
            'active:enabled:bg-primary-200',
            'focus-visible:bg-white',
          ],
        },
        {
          themeColor: 'primary',
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
          themeColor: 'secondary',
          variant: 'filled',
          className: [
            'text-white',
            'bg-secondary-500',
            'hover:enabled:bg-secondary-700',
            'active:enabled:bg-secondary-800',
          ],
        },
        {
          themeColor: 'secondary',
          variant: 'outlined',
          className: [
            'border-secondary-500',
            'text-secondary-600',
            'hover:enabled:bg-secondary-100',
            'active:enabled:bg-secondary-200',
            'focus-visible:bg-white',
          ],
        },
        {
          themeColor: 'secondary',
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
          themeColor: 'neutral',
          variant: 'filled',
          className: [
            'text-neutral-900',
            'bg-neutral-200',
            'hover:enabled:bg-neutral-300',
            'active:enabled:bg-neutral-400',
          ],
        },
        {
          themeColor: 'neutral',
          variant: 'outlined',
          className: [
            'text-neutral-700',
            'border-neutral-400',
            'hover:enabled:bg-neutral-100',
            'active:enabled:bg-neutral-200',
            'focus-visible:bg-white',
          ],
        },
        {
          themeColor: 'neutral',
          variant: 'ghost',
          className: [
            'text-neutral-700',
            'hover:enabled:bg-neutral-200',
            'active:enabled:bg-neutral-100',
            'focus-visible:bg-white',
          ],
        },
        // destructive
        {
          variant: 'filled',
          themeColor: 'destructive',
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
          themeColor: 'destructive',
          className: [
            'border-error-500',
            'text-error-700',
            'hover:enabled:bg-error-100',
            'active:enabled:bg-error-200',
            'focus-visible:bg-white',
          ],
        },
        {
          variant: 'ghost',
          themeColor: 'destructive',
          className: [
            'text-error-700',
            'hover:enabled:bg-error-100',
            'active:enabled:bg-error-200',
            'focus-visible:bg-white',
          ],
        },
      ],
      defaultVariants: {
        themeColor: 'primary',
        variant: 'filled',
      },
    }
  ),
  rootSize: cva([], {
    variants: {
      size: {
        sm: ['py-1.5', 'px-4', 'text-sm'],
        md: ['py-2', 'px-5', 'text-m', 'h-[40px]'],
        lg: ['py-2', 'px-6', 'text-m', 'h-[48px]'],
        xl: ['py-2', 'px-7', 'text-m', 'h-[60px]'],
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
      themeColor: {
        primary: [],
        secondary: [],
        neutral: [],
        destructive: [],
      },
      size: {
        sm: ['w-4', 'h-4'],
        md: ['w-5', 'h-5'],
        lg: ['w-6', 'h-6'],
        xl: ['w-7', 'h-7'],
      },
    },
    compoundVariants: [
      // primary
      {
        themeColor: 'primary',
        variant: 'filled',
        className: ['text-white'],
      },
      {
        themeColor: 'primary',
        variant: 'outlined',
        className: [
          'text-primary-500',
          'group-hover:enabled:text-white',
          'group-active:enabled:text-white',
        ],
      },
      {
        themeColor: 'primary',
        variant: 'ghost',
        className: ['text-primary-500'],
      },
      // secondary
      {
        themeColor: 'secondary',
        variant: 'filled',
        className: ['text-white'],
      },
      {
        themeColor: 'secondary',
        variant: 'outlined',
        className: [
          'text-secondary-600',
          'group-hover:enabled:text-white',
          'group-active:enabled:text-white',
        ],
      },
      {
        themeColor: 'secondary',
        variant: 'ghost',
        className: ['text-secondary-600'],
      },
      // neutral
      {
        themeColor: 'neutral',
        variant: 'filled',
        className: ['text-neutral-700'],
      },
      {
        themeColor: 'neutral',
        variant: 'outlined',
        className: [
          'text-neutral-700',
          'group-hover:enabled:text-white',
          'group-active:enabled:text-white',
        ],
      },
      {
        themeColor: 'neutral',
        variant: 'ghost',
        className: ['text-neutral-700'],
      },
      // destructive
      {
        themeColor: 'destructive',
        variant: 'filled',
        className: ['text-white'],
      },
      {
        themeColor: 'destructive',
        variant: 'outlined',
        className: [
          'text-error-700',
          'group-hover:enabled:text-white',
          'group-active:enabled:text-white',
        ],
      },
      {
        themeColor: 'destructive',
        variant: 'ghost',
        className: ['text-error-700'],
      },
    ],
    defaultVariants: {
      themeColor: 'primary',
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
      themeColor,
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
      themeColor,
      variant,
      size,
    });

    const iconVariantsClasses = cn(
      baseIconVariantsClasses,
      'group-data-[loading=true]:text-[transparent]'
    );

    const leftIcon = _leftIcon && (
      <Slot className={cn(iconVariantsClasses, 'mr-2')}>{_leftIcon}</Slot>
    );

    const rightIcon = _rightIcon && (
      <Slot className={cn(iconVariantsClasses, 'ml-2')}>{_rightIcon}</Slot>
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
          styles.rootBase({ themeColor, variant }),
          styles.rootSize({ size }),
          'inline-flex',
          'items-center',
          'justify-center',
          'data-[loading=true]:text-[transparent]',
          'data-[loading=true]:p-2',
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

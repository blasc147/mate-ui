'use client';

import { CheckIcon } from '@heroicons/react/24/outline';
import * as Label from '@radix-ui/react-label';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import { cva } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '../utils';

const styles = {
  root: cva(['inline-grid', 'gap-x-2', 'items-center'], {
    variants: {
      trailingControl: {
        true: 'grid-cols-[auto_40px]',
        false: 'grid-cols-[40px_auto]',
      },
    },
    defaultVariants: {
      trailingControl: false,
    },
  }),
  toggle: cva(
    [
      'inline-flex',
      'h-5',
      'w-10',
      'shrink-0',
      'cursor-pointer',
      'items-center',
      'rounded-full',
      'border-2',
      'border-transparent',
      'transition-colors',
      'enabled:hover:shadow-md',
      'focus-visible:outline-none',
      'focus-visible:ring',
      'focus-visible:ring-focus',
      'focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed',
      'disabled:data-[disabled]:bg-neutral-300',
      'data-[state=unchecked]:bg-neutral-400',
      'active:data-[state=unchecked]:bg-neutral-600',
      'hover:data-[state=unchecked]:bg-neutral-500',
      'group',
      'peer',
    ],
    {
      variants: {
        colorScheme: {
          primary: [
            'data-[state=checked]:bg-primary-500',
            'active:data-[state=checked]:bg-primary-700',
          ],
          destructive: [
            'data-[state=checked]:bg-error-700',
            'active:data-[state=checked]:bg-error-800',
          ],
        },
      },
      defaultVariants: {
        colorScheme: 'primary',
      },
    }
  ),
  checkIcon: cn(
    'pl-1',
    'h-3.5',
    'w-3.5',
    'absolute',
    'text-white',
    'group-data-[disabled]:text-neutral-500',
    'stroke-[4]'
  ),
  thumb: cn(
    'pointer-events-none',
    'block',
    'h-4',
    'w-4',
    'rounded-full',
    'shadow-lg',
    'ring-0',
    'transition-transform',
    'bg-white',
    'data-[disabled]:bg-neutral-500',
    'data-[state=checked]:translate-x-5',
    'data-[state=unchecked]:translate-x-0'
  ),
  label: cva(
    [
      'font-semibold',
      'text-sm',
      'text-neutral-900',
      'peer-data-[disabled]:text-neutral-600',
    ],
    {
      variants: {
        trailingControl: {
          true: 'order-first',
        },
      },
    }
  ),
  subtext: cva(
    [
      'col-span-full',
      'font-regular',
      'text-sm',
      'text-neutral-900',
      'peer-data-[disabled]:text-neutral-600',
    ],
    {
      variants: {
        trailingControl: {
          true: 'mr-[49px]',
          false: 'ml-[49px]',
        },
      },
      defaultVariants: {
        trailingControl: false,
      },
    }
  ),
};

interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  label?: string;
  subtext?: string;
  trailingControl?: boolean;
  colorScheme?: 'primary' | 'destructive';
}

const Toggle = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  ToggleProps
>(
  (
    {
      className,
      label,
      subtext,
      trailingControl,
      id: _id,
      colorScheme,
      ...props
    },
    ref
  ) => {
    const defaultId = React.useId();
    const id = _id ?? defaultId;

    return (
      <div className={cn(styles.root({ trailingControl }), className)}>
        <SwitchPrimitives.Root
          className={styles.toggle({ colorScheme })}
          id={id}
          ref={ref}
          {...props}
        >
          <CheckIcon className={styles.checkIcon} />

          <SwitchPrimitives.Thumb className={styles.thumb} />
        </SwitchPrimitives.Root>

        {label && (
          <Label.Root
            htmlFor={id}
            className={styles.label({ trailingControl })}
          >
            {label}
          </Label.Root>
        )}

        {subtext && (
          <Label.Root
            htmlFor={id}
            className={styles.subtext({ trailingControl })}
          >
            {subtext}
          </Label.Root>
        )}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';

export { Toggle, type ToggleProps };

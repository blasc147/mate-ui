/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import { CheckIcon } from '@heroicons/react/20/solid';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';
import { VariantProps, cva } from 'class-variance-authority';
import React, { useId } from 'react';
import { Indeterminate } from '../icons';
import { cn } from '../utils';

const styles = {
  base: cva(['flex'], {
    variants: {
      trailingControl: {
        true: 'flex-row-reverse justify-end',
        false: 'flex-row',
      },
    },
    defaultVariants: {
      trailingControl: false,
    },
  }),
  root: cva(
    [
      'h-5',
      'w-5',
      'bg-white',
      'disabled:bg-neutral-400',
      'disabled:border-neutral-400',
      'disabled:shadow-none',
      'hover:shadow-lg',
      'rounded-[0.188rem]',
      'border',
      'border-neutral-400',
      'focus:outline-none',
      'focus-visible:ring-2',
      'ring-focus',
      'ring-offset-1',
    ],
    {
      variants: {
        variant: {
          primary: [
            'active:border-primary-500',
            'focus:border-primary-500',
            'data-[state=checked]:bg-primary-500',
            'data-[state=checked]:active:bg-primary-700',
          ],
          error: [
            'border-error-700',
            'focus:!border-error-700',
            'data-[state=checked]:bg-error-700',
            'data-[state=checked]:active:bg-error-800',
          ],
        },
        trailingControl: {
          true: 'ml-2',
          false: 'ml-0',
        },
      },
      defaultVariants: {
        variant: 'primary',
        trailingControl: false,
      },
    }
  ),
  indicator: cn('text-white', 'flex', 'justify-center', 'items-center'),
  label: cn('text-sm', 'font-semibold', 'flex', 'flex-col'),
  subtext: cn('text-sm', 'font-normal', 'mt-1'),
  textContainer: cva(
    ['flex', 'flex-col', 'text-neutral-900', 'max-w-[244px]'],
    {
      variants: {
        trailingControl: {
          true: 'ml-0',
          false: 'ml-2',
        },
      },
      defaultVariants: {
        trailingControl: false,
      },
    }
  ),
};

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof RadixCheckbox.Root>,
    VariantProps<typeof styles.root> {
  label?: string;
  subtext?: string;
  indeterminate?: boolean;
  error?: boolean;
  trailingControl?: boolean;
  value?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof RadixCheckbox.Root>,
  CheckboxProps
>(
  (
    {
      className,
      id: externalId,
      label,
      subtext,
      indeterminate,
      error,
      trailingControl,
      ...props
    },
    ref
  ) => {
    const variant = error ? 'error' : 'primary';
    const defaultId = useId();
    const id = externalId ?? defaultId;
    return (
      <div className={cn(styles.base({ trailingControl }), className)}>
        <RadixCheckbox.Root
          ref={ref}
          className={styles.root({ variant, trailingControl })}
          id={id}
          {...props}
        >
          <RadixCheckbox.Indicator className={styles.indicator}>
            {indeterminate ? <Indeterminate /> : <CheckIcon />}
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <div
          className={cn(styles.textContainer({ trailingControl }), {
            'text-neutral-600': props.disabled,
          })}
        >
          <Label.Root htmlFor={id} className="cursor-pointer">
            <span className={styles.label}>{label}</span>
            <span className={styles.subtext}>{subtext}</span>
          </Label.Root>
        </div>
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';

export { Checkbox, type CheckboxProps };

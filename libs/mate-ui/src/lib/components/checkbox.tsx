'use client';

import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../utils';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckboxIndicatorIcon, Indeterminate } from '../icons';

const styles = {
  base: cva(['flex']),
  root: cva(
    [
      'h-5',
      'w-5',
      'bg-white',
      'hover:shadow-lg',
      'rounded-[0.188rem]',
      'border',
      'border-neutral-400',
      'focus:!border',
      'disabled:bg-neutral-400 !border-neutral-400 !shadow-none',
    ],
    {
      variants: {
        variant: {
          primary: [
            'active:!border-primary-500',
            'focus:!border-primary-500',
            'data-[state=checked]:bg-primary-500',
          ],
          error: [
            'active:!border-error-700',
            'focus:!border-error-700',
            'data-[state=checked]:bg-error-700',
          ],
        },
      },
    }
  ),
  indicator: cva(['text-white', 'flex', 'justify-center', 'items-center'], {
    variants: {},
    compoundVariants: [],
    defaultVariants: {},
  }),
  label: cva(['text-sm', 'font-semibold']),
  subtext: cva(['text-sm', 'font-normal', 'mt-1']),
  textContainer: cva(['flex', 'flex-col', 'ml-2', 'text-neutral-900']),
};

interface CheckboxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof styles.root> {
  label: string;
  subtext: string;
  indeterminate: boolean | undefined;
  disabled: boolean | undefined;
  error: boolean | undefined;
}

const Checkbox = ({
  className,
  label,
  subtext,
  indeterminate,
  disabled,
  error,
  ...props
}: CheckboxProps) => {
  const variant = error ? 'error' : 'primary';
  return (
    <div className={cn(styles.base(), className)}>
      <RadixCheckbox.Root
        className={cn(styles.root({ variant }), className)}
        disabled={disabled}
        id="c1"
      >
        <RadixCheckbox.Indicator className={cn(styles.indicator())}>
          {indeterminate ? <Indeterminate /> : <CheckboxIndicatorIcon />}
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <div
        className={cn(styles.textContainer(), {
          '!text-neutral-600': disabled,
        })}
      >
        <label  htmlFor="c1" className={cn(styles.label())}>{label}</label>
        <span className={cn(styles.subtext())}>{subtext}</span>
      </div>
    </div>
  );
};



export { Checkbox, type CheckboxProps };

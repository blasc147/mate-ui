'use client';
import React, { useId } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Indeterminate } from '../icons';
import * as Label from '@radix-ui/react-label';
import { CheckIcon } from '@heroicons/react/20/solid';

const styles = {
  base: cva(['flex']),
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
      'focus-visible:ring',
      'ring-focus',
    ],
    {
      variants: {
        variant: {
          primary: [
            'active:border-primary-500',
            'focus:border-primary-500',
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
  indicator: cn('text-white', 'flex', 'justify-center', 'items-center'),
  label: cn('text-sm', 'font-semibold', 'flex', 'flex-col'),
  subtext: cn('text-sm', 'font-normal', 'mt-1'),
  textContainer: cn('flex', 'flex-col', 'ml-2', 'text-neutral-900'),
};

interface CheckboxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof styles.root> {
  label?: string;
  subtext?: string;
  indeterminate?: boolean;
  disabled?: boolean;
  error?: boolean;
  defaultChecked?: boolean;
  value?: string | number | readonly string[];
  checked?: boolean;
  onCheckedChange?: (checked: boolean | 'indeterminate') => void;
  required?: boolean;
  name?: string;
}

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      className,
      label,
      subtext,
      indeterminate,
      disabled,
      error,
      value,
      checked,
      defaultChecked,
      onCheckedChange,
      required,
      name,
    },
    ref
  ) => {
    const variant = error ? 'error' : 'primary';
    const id = useId();
    return (
      <div className={cn(styles.base(), className)}>
        <RadixCheckbox.Root
          ref={ref}
          className={cn(styles.root({ variant }))}
          disabled={disabled}
          id={id}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
          required={required}
          name={name}
        >
          <RadixCheckbox.Indicator className={cn(styles.indicator)}>
            {indeterminate ? <Indeterminate /> : <CheckIcon />}
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <div
          className={cn(styles.textContainer, {
            'text-neutral-600': disabled,
          })}
        >
          <Label.Root htmlFor={id}>
            <span className={cn(styles.label)}> {label}</span>
            <span className={cn(styles.subtext)}>{subtext}</span>
          </Label.Root>
        </div>
      </div>
    );
  }
);

export { Checkbox, type CheckboxProps };

'use client';

import React, { useId } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as Label from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';
import { Circle } from 'lucide-react';

import { cn } from '../utils';

const styles = {
  base: cn(['flex', 'space-x-2']),
  root: cva(
    [
      'mt-[1px]',
      'aspect-square',
      'h-4',
      'w-4',
      'rounded-full',
      'border',
      'active:border-primary-500',
      'focus:outline-none',
      'focus-visible:ring-2',
      'ring-offset-1',
      'ring-focus',
      'disabled:cursor-not-allowed',
      'hover:shadow-lg',
      'disabled:data-[state=checked]:border-neutral-400',
      'disabled:data-[state=unchecked]:bg-neutral-400',
      'disabled:active:border-neutral-400',
      'group',
    ],
    {
      variants: {
        error: {
          false: [
            'active:border-primary-500',
            'focus:border-primary-500',
            'data-[state=checked]:border-primary-500',
            'data-[state=checked]:active:border-primary-700',
            'text-primary-500',
            'border-neutral-400',
          ],
          true: [
            'active:border-error-800',
            'focus:border-error-700',
            'data-[state=checked]:border-error-700',
            'data-[state=checked]:active:border-error-800',
            'text-error-700',
          ],
        },
      },
      defaultVariants: { error: false },
    }
  ),
  trailingControl: cn('flex', 'flex-col'),
  indicator: cn('flex', 'justify-center', 'items-center'),
  icon: cva(
    [
      'h-3',
      'w-3',
      'group-disabled:text-neutral-400',
      'group-disabled:fill-neutral-400',
    ],
    {
      variants: {
        error: {
          true: 'fill-error-700 active:fill-error-800 active:text-error-800',
          false:
            'fill-primary-500 active:fill-primary-700 active:text-primary-700',
        },
      },
      defaultVariants: { error: false },
    }
  ),
  label: cva(
    ['text-neutral-900', 'text-sm', 'font-semibold', 'flex', 'flex-col'],
    {
      variants: {
        disabled: { true: 'text-neutral-600' },
      },
      defaultVariants: { disabled: false },
    }
  ),
  subText: cva(['text-neutral-900', 'text-sm', 'font-normal'], {
    variants: {
      disabled: { true: 'text-neutral-600' },
    },
    defaultVariants: { disabled: false },
  }),
};

interface TextComponent {
  id: string;
  label?: string;
  subText?: string;
  disabled?: boolean;
}

interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  error?: boolean;
  trailingControl?: boolean;
  disabled?: boolean;
}

interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  value: string;
  label?: string;
  subText?: string;
}

const RadioGroupContext = React.createContext({
  error: false,
  trailingControl: false,
  disabled: false,
});

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(
  (
    {
      error = false,
      trailingControl = false,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <RadioGroupContext.Provider value={{ disabled, error, trailingControl }}>
        <RadioGroupPrimitive.Root
          className={cn('grid gap-2', className)}
          {...props}
          ref={ref}
        />
      </RadioGroupContext.Provider>
    );
  }
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const TextComponent = ({ id, label, subText, disabled }: TextComponent) => {
  return (
    <div className={cn(styles.trailingControl)}>
      <Label.Root htmlFor={id}>
        <span className={cn(styles.label({ disabled }))}>{label}</span>
      </Label.Root>
      <Label.Root htmlFor={id}>
        <span className={cn(styles.subText({ disabled }))}>{subText}</span>
      </Label.Root>
    </div>
  );
};

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(
  (
    { id: externalId, value, label, subText, className, children, ...props },
    ref
  ) => {
    const { error, trailingControl, disabled } =
      React.useContext(RadioGroupContext);
    const defaultId = useId();
    const id = externalId || defaultId;
    return (
      <div className={cn(styles.base, className)}>
        {trailingControl && (
          <TextComponent
            id={id}
            label={label}
            subText={subText}
            disabled={disabled}
          />
        )}
        <RadioGroupPrimitive.Item
          value={value}
          ref={ref}
          className={styles.root({ error })}
          id={id}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className={styles.indicator}>
            <Circle className={styles.icon({ error })} />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        {!trailingControl && (
          <TextComponent
            id={id}
            label={label}
            subText={subText}
            disabled={disabled}
          />
        )}
      </div>
    );
  }
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };

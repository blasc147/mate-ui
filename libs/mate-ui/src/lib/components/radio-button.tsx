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
      'aspect-square',
      'h-4',
      'w-4',
      'rounded-full',
      'border',
      'focus:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-offset-2',
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
            'text-primary-500',
            'border-neutral-400',
          ],
          true: [
            'active:border-error-700',
            'focus:border-error-700',
            'data-[state=checked]:border-error-700',
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
    ['h-3', 'w-3', 'group-disabled:text-neutral-400 group-disabled:fill-neutral-400'],
    {
      variants: {
        error: { true: 'fill-error-700', false: 'fill-primary-500' },
      },
      defaultVariants: { error: false },
    }
  ),
  label: cn('text-neutral-900', 'text-sm', 'font-semibold', 'flex', 'flex-col'),
  subText: cn('text-neutral-900', 'text-sm', 'font-normal', 'mt-1'),
};

interface TextComponent {
  id: string;
  label?: string;
  subText?: string;
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
      <RadioGroupContext.Provider
        value={{ disabled, error, trailingControl }}
      >
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

const TextComponent =({id, label, subText}: TextComponent)=>{
  return (
    <div className={cn(styles.trailingControl)}>
      <Label.Root htmlFor={id}>
        <span className={cn(styles.label)}>{label}</span>
      </Label.Root>
      <Label.Root htmlFor={id}>
        <span className={cn(styles.subText)}>{subText}</span>
      </Label.Root>
    </div>
  );
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ id:externalId, value, label, subText, className, children, ...props }, ref) => {
  const { error, trailingControl } = React.useContext(RadioGroupContext);
  const defaultId = useId();
  const id = externalId || defaultId;
  return (
    <div className={cn(styles.base, className)}>
      {trailingControl && (
        <TextComponent id={id} label={label} subText={subText} />
      )}
      <RadioGroupPrimitive.Item
        value={value}
        ref={ref}
        className={styles.root({ error })}
        id={id}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className={styles.indicator}>
          <Circle
            className={styles.icon({ error })}
          />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      {!trailingControl && (
        <TextComponent id={id} label={label} subText={subText} />
      )}
    </div>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };

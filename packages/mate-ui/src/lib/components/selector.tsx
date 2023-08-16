/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import * as React from 'react';
import * as SelectorPrimitive from '@radix-ui/react-select';
import { cn } from '../utils';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { VariantProps, cva } from 'class-variance-authority';

const SelectorGroup = SelectorPrimitive.Group;

const styles = {
  trigger: cva(
    [
      'flex',
      'w-full',
      'border',
      'border-neutral-400',
      'bg-white',
      'text-sm',
      'font-regular',
      'text-neutral-900',
      'placeholder:text-neutral-600',
      'disabled:bg-neutral-100',
      'disabled:text-neutral-700',
      'disabled:cursor-not-allowed',
      'relative',
      'z-1',
      'rounded',
      'border',
      'px-4',
      'focus:ring-1',
      'focus:ring-focus',
      'focus:border-focus',
      'font-semibold',
    ],
    {
      variants: {
        padding: {
          sm: ['py-2', 'h-8'],
          md: ['py-2.5', 'h-10'],
          lg: ['py-3', 'h-11'],
        },
      },
      defaultVariants: {
        padding: 'md',
      },
    }
  ),
  icon: cva(['h-4', 'w-4', 'absolute', 'right-2', 'z-10'], {
    variants: {
      position: {
        sm: ['top-2'],
        md: ['top-3'],
        lg: ['top-3.5'],
      },
    },
    defaultVariants: {
      position: 'md',
    },
  }),
};

interface SelectorProps
  extends React.ComponentPropsWithoutRef<typeof SelectorPrimitive.Root> {
  selectorSize?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SelectorContext = React.createContext<SelectorProps>({});

const Selector = React.forwardRef<
  React.ElementRef<typeof SelectorPrimitive.Root>,
  SelectorProps
>(({ className, selectorSize, children, ...props }, ref) => (
  <SelectorContext.Provider value={{ selectorSize }}>
    <SelectorPrimitive.Root {...props}>{children}</SelectorPrimitive.Root>
  </SelectorContext.Provider>
));

Selector.displayName = SelectorPrimitive.Root.displayName;

const SelectorTrigger = React.forwardRef<
  React.ElementRef<typeof SelectorPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectorPrimitive.Trigger> &
    VariantProps<typeof styles.trigger>
>(({ className, children, padding, ...props }, ref) => {
  const { selectorSize } = React.useContext(SelectorContext);
  return (
    <SelectorPrimitive.Trigger
      ref={ref}
      className={cn(styles.trigger({ padding: selectorSize }), className)}
      {...props}
    >
      {children}
      <SelectorPrimitive.Icon asChild>
        <ChevronDownIcon
          className={cn(styles.icon({ position: selectorSize }), className)}
        />
      </SelectorPrimitive.Icon>
    </SelectorPrimitive.Trigger>
  );
});
SelectorTrigger.displayName = SelectorPrimitive.Trigger.displayName;

const SelectorContent = React.forwardRef<
  React.ElementRef<typeof SelectorPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectorPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectorPrimitive.Portal>
    <SelectorPrimitive.Content
      ref={ref}
      className={cn(
        'relative',
        'z-50',
        'min-w-[8rem]',
        'overflow-hidden',
        'border-neutral-300',
        'rounded-md',
        'border',
        'shadow-md',
        'bg-white',
        'data-[state=open]:animate-in',
        'data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0',
        'data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95',
        'data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectorPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectorPrimitive.Viewport>
    </SelectorPrimitive.Content>
  </SelectorPrimitive.Portal>
));
SelectorContent.displayName = SelectorPrimitive.Content.displayName;

const SelectorLabel = React.forwardRef<
  React.ElementRef<typeof SelectorPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectorPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectorPrimitive.Label
    ref={ref}
    className={cn('', className)}
    {...props}
    asChild
  />
));
SelectorLabel.displayName = SelectorPrimitive.Label.displayName;

const SelectorValue = React.forwardRef<
  React.ElementRef<typeof SelectorPrimitive.Value>,
  React.ComponentPropsWithoutRef<typeof SelectorPrimitive.Value>
>(({ className, ...props }, ref) => (
  <SelectorPrimitive.Value
    ref={ref}
    className={cn('px-2 py-1.5 text-sm font-semibold', className)}
    {...props}
  />
));
SelectorValue.displayName = SelectorPrimitive.Value.displayName;

const SelectorItem = React.forwardRef<
  React.ElementRef<typeof SelectorPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectorPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectorPrimitive.Item
    ref={ref}
    className={cn(
      'relative',
      'flex',
      'cursor-default',
      'select-none',
      'items-center',
      'rounded',
      'outline-none',
      'transition-colors',
      'focus:bg-neutral-100',
      'active:bg-neutral-200',
      'data-[disabled]:pointer-events-none',
      'data-[disabled]:text-neutral-500',
      'py-2',
      'px-3',
      'text-neutral-700',
      'text-m',
      'font-regular',
      'text-left',
      'cursor-pointer',
      'bg-white',
      className
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectorPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </SelectorPrimitive.ItemIndicator>
    </span>
    <SelectorPrimitive.ItemText>{children}</SelectorPrimitive.ItemText>
  </SelectorPrimitive.Item>
));
SelectorItem.displayName = SelectorPrimitive.Item.displayName;

const SelectorSeparator = React.forwardRef<
  React.ElementRef<typeof SelectorPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectorPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectorPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px', className)}
    {...props}
  />
));
SelectorSeparator.displayName = SelectorPrimitive.Separator.displayName;

export {
  Selector,
  SelectorGroup,
  SelectorValue,
  SelectorTrigger,
  SelectorContent,
  SelectorLabel,
  SelectorItem,
  SelectorSeparator,
};

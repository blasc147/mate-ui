/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cva } from 'class-variance-authority';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import { cn } from '../utils';

const styles = {
  base: cn(['flex']),
  root: cva(
    [
      'flex',
      'flex-1',
      'items-center',
      'py-4',
      'px-6',
      'text-sm',
      'text-grey-900',
      'font-semibold',
      'border-2',
      'border-transparent',
      'border-t',
      'border-t-grey-400',
      'focus-visible:rounded-sm',
      'focus-visible:border-t-2',
      'focus-visible:border-indigo-400',
      'active:enabled:border-t-indigo-600',
      'hover:bg-grey-100',
      'disabled:text-grey-600',
      'data-[disabled]:hover:bg-transparent',
      '[&[data-state=open]>svg]:rotate-180',
      'transition-all',
      'outline-none',
    ],
    {
      variants: {
        leadingChevron: {
          false: ['justify-between'],
        },
      },
      defaultVariants: { leadingChevron: false },
    }
  ),
  chevron: cva(
    [
      'h-4',
      'w-4',
      'transition-transform',
      'duration-200',
      'stroke-2',
      'stroke-grey-700',
    ],
    {
      variants: {
        leadingChevron: {
          true: ['mr-5'],
          false: ['ml-5'],
        },
      },
      defaultVariants: { leadingChevron: false },
    }
  ),
  item: cn('flex', 'justify-center', 'items-center'),
  icon: cn('text-sm', 'text-grey-900'),
  content: cn(
    'overflow-hidden',
    'text-sm',
    'transition-all',
    'data-[state=closed]:animate-accordion-up',
    'data-[state=open]:animate-accordion-down',
    'text-grey-700'
  ),
  contentChild: cva(['p-6', 'pt-2'], {
    variants: {
      leadingChevron: {
        true: ['ml-9'],
      },
    },
    defaultVariants: { leadingChevron: false },
  }),
  label: cva(
    ['text-grey-900', 'text-sm', 'font-semibold', 'flex', 'flex-col'],
    {
      variants: {
        disabled: { true: 'text-grey-600' },
      },
      defaultVariants: { disabled: false },
    }
  ),
  subText: cva(['text-grey-900', 'text-sm', 'font-normal', 'mt-1'], {
    variants: {
      disabled: { true: 'text-grey-600' },
    },
    defaultVariants: { disabled: false },
  }),
};

interface ChevronProps {
  leadingChevron?: boolean;
}

type AccordionProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> & {
  leadingChevron?: boolean;
};

const ChevronComponent = ({ leadingChevron }: ChevronProps) => {
  return <ChevronDownIcon className={cn(styles.chevron({ leadingChevron }))} />;
};

const AccordionContext = React.createContext({
  leadingChevron: false,
});

const Accordion = ({ leadingChevron = false, ...props }: AccordionProps) => {
  return (
    <AccordionContext.Provider value={{ leadingChevron }}>
      <AccordionPrimitive.Root {...props} />
    </AccordionContext.Provider>
  );
};

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(styles.icon, className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { leadingChevron } = React.useContext(AccordionContext);
  return (
    <AccordionPrimitive.Header className={styles.base}>
      <AccordionPrimitive.Trigger
        ref={ref}
        className={styles.root({ leadingChevron })}
        {...props}
      >
        {leadingChevron && <ChevronComponent leadingChevron />}
        {children}
        {!leadingChevron && <ChevronComponent />}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { leadingChevron } = React.useContext(AccordionContext);
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(styles.content, className)}
      {...props}
    >
      <div className={styles.contentChild({ leadingChevron })}>{children}</div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion,
  type AccordionProps,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
};

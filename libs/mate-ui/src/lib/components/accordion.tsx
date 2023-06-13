"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@heroicons/react/24/outline"

import { cn } from "../utils"

interface ChevronProps {
  className: string;
}

type AccordionProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> & {
  leadingChevron?: boolean;
};

const ChevronComponent = ({ className }: ChevronProps) => {
  return (
    <ChevronDownIcon className={cn(
      'h-4',
      'w-4',
      'transition-transform',
      'duration-200',
      'stroke-2',
      'stroke-neutral-700',
      className,
    )} />
  )
}

const AccordionContext = React.createContext({
  leadingChevron: false,
});


const Accordion = ({ leadingChevron = false, ...props }: AccordionProps) => {
  return (
    <AccordionContext.Provider value={{ leadingChevron}}>
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
    className={cn('border-t', 'border-neutral-400', 'text-sm', 'text-neutral-900', className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { leadingChevron } = React.useContext(AccordionContext);
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          'flex',
          'flex-1',
          'items-center',
          !leadingChevron && 'justify-between',
          'py-4',
          'px-6',
          'text-sm',
          'text-neutral-700',
          'font-semibold',
          'transition-all',
          'focus:border',
          'border-primary-600',
          'hover:bg-neutral-100',
          'disabled:text-neutral-600',
          'data-[disabled]:hover:bg-transparent',
          '[&[data-state=open]>svg]:rotate-180',
          className
        )}
        {...props}
      >
        {leadingChevron && <ChevronComponent className={cn('mr-5')} />}
        {children}
        {!leadingChevron && <ChevronComponent className={cn('ml-5')} />}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden',
      'text-sm',
      'transition-all',
      'data-[state=closed]:animate-accordion-up',
      'data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    <div className={cn('p-6', 'pt-2')}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, type AccordionProps, AccordionItem, AccordionTrigger, AccordionContent }

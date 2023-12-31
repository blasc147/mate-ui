'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../utils';
import { Slot } from '@radix-ui/react-slot';

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  icon?: React.ReactNode;
  notifications?: number;
}

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <>
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        'inline-flex',
        'h-10',
        'items-center',
        'justify-center',
        'p-1',
        className
      )}
      {...props}
    />
    <div className={cn('h-1', 'border-b-2', 'border-grey-400', 'w-full')} />
  </>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ icon, notifications, children, className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'h-12',
      'flex',
      'items-center',
      'justify-center',
      'inline-flex',
      'whitespace-nowrap',
      'p-4',
      'text-sm',
      'font-regular',
      'text-grey-500',
      'outline-focus',
      'disabled:pointer-events-none',
      'disabled:opacity-50',
      'data-[state=active]:text-grey-900',
      'data-[state=active]:border-b-2',
      'data-[state=active]:border-indigo-600',
      'data-[state=inactive]:border-b-2',
      'data-[state=inactive]:border-grey-400',
      className
    )}
    {...props}
  >
    {icon && <Slot className={cn('h-4', 'w-4', 'mr-[0.625rem]')}>{icon}</Slot>}
    {children}
    {notifications && (
      <div
        className={cn(
          'w-[1.375rem]',
          'h-[1.563rem]',
          'rounded-full',
          'px-2',
          'py-1',
          'ml-[0.625rem]',
          'text-xs',
          'text-grey-700',
          'font-semibold',
          'bg-grey-200'
        )}
      >
        {notifications}
      </div>
    )}
  </TabsPrimitive.Trigger>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2',
      'ring-offset-background',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
      'focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };

'use client';

import { CheckIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as React from 'react';
import { cn } from '../utils';

const styles = {
  content: cn(
    'z-50',
    'min-w-[336px]',
    'overflow-hidden',
    'border',
    'border-neutral-300',
    'rounded-lg',
    'shadow-lg',
    'bg-white',
    'p-1',
    'data-[state=open]:animate-in',
    'data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0',
    'data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-95',
    'data-[state=open]:zoom-in-95',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2',
    'data-[side=top]:slide-in-from-bottom-2'
  ),

  item: cn(
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
    'font-regular'
  ),
};

const Dropdown = DropdownMenuPrimitive.Root;

const DropdownTrigger = DropdownMenuPrimitive.Trigger;

const DropdownGroup = DropdownMenuPrimitive.Group;

const DropdownRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownPortal = DropdownMenuPrimitive.Portal;

const DropdownSub = DropdownMenuPrimitive.Sub;

const DropdownSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(styles.item, 'data-[state=open]:bg-neutral-100', className)}
    {...props}
  >
    {children}
    <ChevronRightIcon className={cn('ml-auto', 'h-5', 'w-5')} />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(styles.content, className)}
    {...props}
  />
));
DropdownSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(styles.content, className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(styles.item, className)}
    {...props}
  />
));
DropdownItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownCheckItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(styles.item, 'pl-10', className)}
    {...props}
  >
    <span
      className={cn(
        'absolute',
        'left-3',
        'h-4',
        'w-4',
        'flex',
        'items-center',
        'justify-center'
      )}
    >
      <DropdownMenuPrimitive.ItemIndicator asChild>
        <CheckIcon className={cn('h-4', 'w-4')} />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownCheckItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(styles.item, 'pl-10', className)}
    {...props}
  >
    <span
      className={cn(
        'absolute',
        'left-3',
        'h-4',
        'w-4',
        'flex',
        'items-center',
        'justify-center'
      )}
    >
      <DropdownMenuPrimitive.ItemIndicator asChild>
        <span
          className={cn(
            'w-[7px]',
            'h-[7px]',
            'bg-neutral-700',
            'rounded-full',
            'block'
          )}
        />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownHeader = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'px-3',
      'py-2',
      'text-m',
      'font-semibold',
      'text-neutral-700',
      className
    )}
    {...props}
  />
));
DropdownHeader.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1', 'my-1', 'h-px', 'bg-neutral-300', className)}
    {...props}
  />
));
DropdownSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownText = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto',
        'text-xs',
        'font-regular',
        'text-neutral-600',
        className
      )}
      {...props}
    />
  );
};
DropdownText.displayName = 'DropdownText';

export {
  Dropdown,
  DropdownCheckItem,
  DropdownContent,
  DropdownGroup,
  DropdownHeader,
  DropdownItem,
  DropdownPortal,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSeparator,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownText,
  DropdownTrigger,
};

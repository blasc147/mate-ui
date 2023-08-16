'use client';
import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils';

export type Theme = 'dark' | 'light';
export type TooltipPlacement = 'top' | 'right' | 'left' | 'bottom' | undefined;
export type TooltipAlign = 'center' | 'start' | 'end' | undefined;

const styles = {
  root: cva(['text-sm', 'px-3', 'py-2', 'rounded', 'max-w-[272px]'], {
    variants: {
      theme: {
        dark: ['bg-neutral-700', 'text-white'],
        light: ['bg-neutral-300', 'text-neutral-900'],
      },
    },
    defaultVariants: {
      theme: 'dark',
    },
  }),
};

export interface TooltipProps
  extends TooltipPrimitive.TooltipPortalProps,
    VariantProps<typeof styles.root> {
  placement?: TooltipPlacement;
  align?: TooltipAlign;
  open: boolean;
  defaultOpen: boolean;
  content: string;
  className?: string;
  onOpenChange?: (open: boolean) => void;
}

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  placement,
  align,
  className,
  theme,
  ...props
}: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        delayDuration={0}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          side={placement}
          align={align}
          className={cn(styles.root({ theme }), className)}
          {...props}
        >
          {content}
          <TooltipPrimitive.Arrow
            className={cn('h-1', 'w-2', {
              'fill-neutral-700': theme === 'dark',
              'fill-neutral-300': theme === 'light',
            })}
          />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipProvider>
  );
}

/* eslint-disable tailwindcss/no-custom-classname */
import { cva } from 'class-variance-authority';
import { cn } from '../../utils';

export const styles = {
  root: cva(['inline-grid', 'gap-x-2', 'items-center'], {
    variants: {
      trailingControl: {
        true: 'grid-cols-[auto_40px]',
        false: 'grid-cols-[40px_auto]',
      },
    },
    defaultVariants: {
      trailingControl: false,
    },
  }),
  toggle: cva(
    [
      'inline-flex',
      'h-5',
      'w-10',
      'shrink-0',
      'cursor-pointer',
      'items-center',
      'rounded-full',
      'border-2',
      'border-transparent',
      'transition-colors',
      'enabled:hover:shadow-md',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'ring-focus',
      'ring-offset-1',
      'ring-stroke-focus',
      'ring-offset-fill-component',
      'disabled:cursor-not-allowed',
      'disabled:data-[disabled]:bg-fill-disabled',
      'group',
      'peer',
    ],
    {
      variants: {
        colorScheme: {
          primary: [
            'data-[state=unchecked]:bg-fill-disabled',
            'hover:data-[state=unchecked]:bg-grey-500',
            'active:data-[state=unchecked]:bg-grey-600',
            'data-[state=checked]:bg-primary',
            'data-[state=checked]:hover:bg-primary-hover',
            'active:data-[state=checked]:bg-primary-pressed',
          ],
          destructive: [
            'data-[state=unchecked]:bg-feedback-error-pale',
            'active:data-[state=unchecked]:bg-feedback-error-hover',
            'data-[state=checked]:bg-feedback-error',
            'active:data-[state=checked]:bg-feedback-error-pressed',
          ],
        },
      },
      defaultVariants: {
        colorScheme: 'primary',
      },
    }
  ),
  checkIcon: cn(
    'pl-1',
    'h-3.5',
    'w-3.5',
    'absolute',
    'text-content-inverse',
    'group-data-[disabled]:text-grey-500',
    'stroke-[4]'
  ),
  thumb: cn(
    'pointer-events-none',
    'block',
    'h-4',
    'w-4',
    'rounded-full',
    'shadow-lg',
    'ring-0',
    'transition-transform',
    'bg-fill-component',
    'data-[disabled]:bg-grey-500',
    'data-[state=checked]:translate-x-5',
    'data-[state=unchecked]:translate-x-0'
  ),
  label: cva(
    [
      'font-semibold',
      'text-sm',
      'text-content-strong',
      'peer-data-[disabled]:text-grey-600',
    ],
    {
      variants: {
        trailingControl: {
          true: 'order-first',
        },
      },
    }
  ),
  subtext: cva(
    [
      'col-span-full',
      'font-regular',
      'text-sm',
      'text-content-subtle',
      'peer-data-[disabled]:text-grey-600',
    ],
    {
      variants: {
        trailingControl: {
          true: 'mr-[49px]',
          false: 'ml-[49px]',
        },
      },
      defaultVariants: {
        trailingControl: false,
      },
    }
  ),
};

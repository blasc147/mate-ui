/* eslint-disable tailwindcss/no-custom-classname */
import { cva } from 'class-variance-authority';
import { cn } from '../../utils';

export const styles = {
  base: cva(['flex'], {
    variants: {
      trailingControl: {
        true: 'flex-row-reverse justify-end',
        false: 'flex-row',
      },
    },
    defaultVariants: {
      trailingControl: false,
    },
  }),
  root: cva(
    [
      'h-5',
      'w-5',
      'bg-fill-component',
      'disabled:bg-stroke',
      'disabled:border-stroke',
      'disabled:shadow-none',
      'hover:shadow-lg',
      'rounded-[0.188rem]',
      'border',
      'border-stroke',
      'focus:outline-none',
      'focus:border-stroke',
      'focus-visible:ring-2',
      'ring-stroke-focus',
      'ring-offset-1',
      'ring-offset-fill-component',
    ],
    {
      variants: {
        variant: {
          primary: [
            'active:border-primary',
            'focus:border-stroke-focus',
            'data-[state=checked]:bg-primary',
            'data-[state=checked]:border-primary',
            'data-[state=checked]:hover:bg-primary-hover',
            'data-[state=checked]:hover:border-primary-hover',
            'data-[state=checked]:active:bg-primary-pressed',
            'data-[state=checked]:active:border-primary-pressed',
          ],
          error: [
            'active:border-feedback-error-pressed',
            'border-feedback-error',
            'data-[state=checked]:bg-feedback-error',
            'data-[state=checked]:border-feedback-error',
            'data-[state=checked]:active:bg-feedback-error-pressed',
            'data-[state=checked]:active:border-feedback-error-pressed',
          ],
        },
        trailingControl: {
          true: 'ml-2',
          false: 'ml-0',
        },
      },
      defaultVariants: {
        variant: 'primary',
        trailingControl: false,
      },
    }
  ),
  indicator: cn(
    'text-content-inverse',
    'flex',
    'justify-center',
    'items-center'
  ),
  label: cn('text-sm', 'font-semibold', 'flex', 'flex-col'),
  subtext: cn('text-sm', 'font-normal', 'mt-1'),
  textContainer: cva(
    ['flex', 'flex-col', 'text-content-strong', 'max-w-[244px]'],
    {
      variants: {
        trailingControl: {
          true: 'ml-0',
          false: 'ml-2',
        },
      },
      defaultVariants: {
        trailingControl: false,
      },
    }
  ),
};

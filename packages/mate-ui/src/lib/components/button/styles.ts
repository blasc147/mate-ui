import { cva } from 'class-variance-authority';

const styles = {
  rootBase: cva(
    [
      'rounded',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'outline-none',
      'font-semibold',
      'focus-visible:ring-2',
      'ring-offset-1',
      'ring-focus',
      'group',
      'border-transparent',
      'hover:enabled:duration-200',
      'hover:enabled:ease-out',
    ],
    {
      variants: {
        variant: {
          filled: [],
          outlined: ['border'],
          ghost: [],
        },
        themeColor: {
          primary: [],
          secondary: [],
          neutral: [],
          destructive: [],
        },
      },
      compoundVariants: [
        // primary
        {
          themeColor: 'primary',
          variant: 'filled',
          className: [
            'text-white',
            'bg-indigo-500',
            'hover:enabled:bg-indigo-700',
            'active:enabled:bg-indigo-800',
          ],
        },
        {
          themeColor: 'primary',
          variant: ['outlined'],
          className: [
            'border-indigo-500',
            'text-indigo-500',
            'hover:enabled:bg-indigo-100',
            'active:enabled:bg-indigo-200',
            'focus-visible:bg-white',
          ],
        },
        {
          themeColor: 'primary',
          variant: 'ghost',
          className: [
            'text-indigo-500',
            'hover:enabled:bg-indigo-100',
            'active:enabled:bg-indigo-200',
            'focus-visible:bg-white',
          ],
        },
        // secondary
        {
          themeColor: 'secondary',
          variant: 'filled',
          className: [
            'text-white',
            'bg-teal-500',
            'hover:enabled:bg-teal-700',
            'active:enabled:bg-teal-800',
          ],
        },
        {
          themeColor: 'secondary',
          variant: 'outlined',
          className: [
            'border-teal-500',
            'text-teal-600',
            'hover:enabled:bg-teal-100',
            'active:enabled:bg-teal-200',
            'focus-visible:bg-white',
          ],
        },
        {
          themeColor: 'secondary',
          variant: 'ghost',
          className: [
            'text-teal-600',
            'hover:enabled:bg-teal-100',
            'active:enabled:bg-teal-200',
            'focus-visible:bg-white',
          ],
        },
        // neutral
        {
          themeColor: 'neutral',
          variant: 'filled',
          className: [
            'text-grey-900',
            'bg-grey-200',
            'hover:enabled:bg-grey-300',
            'active:enabled:bg-grey-400',
          ],
        },
        {
          themeColor: 'neutral',
          variant: 'outlined',
          className: [
            'text-grey-700',
            'border-grey-400',
            'hover:enabled:bg-grey-100',
            'active:enabled:bg-grey-200',
            'focus-visible:bg-white',
          ],
        },
        {
          themeColor: 'neutral',
          variant: 'ghost',
          className: [
            'text-grey-700',
            'hover:enabled:bg-grey-200',
            'active:enabled:bg-grey-100',
            'focus-visible:bg-white',
          ],
        },
        // destructive
        {
          variant: 'filled',
          themeColor: 'destructive',
          className: [
            'text-white',
            'bg-red-500',
            'hover:enabled:bg-red-700',
            'active:enabled:bg-red-800',
            'focus-visible:bg-red-500',
          ],
        },
        {
          variant: 'outlined',
          themeColor: 'destructive',
          className: [
            'border-red-500',
            'text-red-700',
            'hover:enabled:bg-red-100',
            'active:enabled:bg-red-200',
            'focus-visible:bg-white',
          ],
        },
        {
          variant: 'ghost',
          themeColor: 'destructive',
          className: [
            'text-red-700',
            'hover:enabled:bg-red-100',
            'active:enabled:bg-red-200',
            'focus-visible:bg-white',
          ],
        },
      ],
      defaultVariants: {
        themeColor: 'primary',
        variant: 'filled',
      },
    }
  ),
  rootSize: cva([], {
    variants: {
      size: {
        sm: ['py-1.5', 'px-4', 'text-sm', 'h-[32px]'],
        md: ['py-2', 'px-5', 'text-m', 'h-[40px]'],
        lg: ['py-2', 'px-6', 'text-m', 'h-[48px]'],
        xl: ['py-2', 'px-7', 'text-m', 'h-[60px]'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }),
  icon: cva(['inline'], {
    variants: {
      variant: {
        filled: [],
        outlined: [],
        ghost: [],
      },
      themeColor: {
        primary: [],
        secondary: [],
        neutral: [],
        destructive: [],
      },
      size: {
        sm: ['w-5', 'h-5'],
        md: ['w-5', 'h-5'],
        lg: ['w-6', 'h-6'],
        xl: ['w-6', 'h-6'],
      },
    },
    compoundVariants: [
      // primary
      {
        themeColor: 'primary',
        variant: 'filled',
        className: ['text-white'],
      },
      {
        themeColor: 'primary',
        variant: 'outlined',
        className: ['text-indigo-500'],
      },
      {
        themeColor: 'primary',
        variant: 'ghost',
        className: ['text-indigo-500'],
      },
      // secondary
      {
        themeColor: 'secondary',
        variant: 'filled',
        className: ['text-white'],
      },
      {
        themeColor: 'secondary',
        variant: 'outlined',
        className: [
          'text-teal-600',
          'group-hover:enabled:text-white',
          'group-active:enabled:text-white',
        ],
      },
      {
        themeColor: 'secondary',
        variant: 'ghost',
        className: ['text-teal-600'],
      },
      // neutral
      {
        themeColor: 'neutral',
        variant: 'filled',
        className: ['text-grey-700'],
      },
      {
        themeColor: 'neutral',
        variant: 'outlined',
        className: [
          'text-grey-700',
          'group-hover:enabled:text-white',
          'group-active:enabled:text-white',
        ],
      },
      {
        themeColor: 'neutral',
        variant: 'ghost',
        className: ['text-grey-700'],
      },
      // destructive
      {
        themeColor: 'destructive',
        variant: 'filled',
        className: ['text-white'],
      },
      {
        themeColor: 'destructive',
        variant: 'outlined',
        className: [
          'text-red-700',
          'group-hover:enabled:text-white',
          'group-active:enabled:text-white',
        ],
      },
      {
        themeColor: 'destructive',
        variant: 'ghost',
        className: ['text-red-700'],
      },
    ],
    defaultVariants: {
      themeColor: 'primary',
      variant: 'filled',
      size: 'md',
    },
  }),
};

export { styles };

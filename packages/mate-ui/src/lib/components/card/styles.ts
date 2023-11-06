import { cva } from 'class-variance-authority';

export const styles = {
  rootBase: cva(
    ['bg-background', 'bg-white', 'rounded-lg', 'flex', 'flex-col'],
    {
      variants: {
        cardStyle: {
          outline: ['border', 'border-grey-300'],
          shadow: ['shadow-md'],
        },
      },
    }
  ),
  padding: cva([], {
    variants: {
      padding: {
        none: ['py-6'],
        sm: ['p-4'],
        md: ['p-6'],
        lg: ['p-8'],
      },
    },
    defaultVariants: {
      padding: 'md',
    },
  }),
  headerStyle: cva(['flex', 'justify-between', 'relative', 'items-center'], {
    variants: {
      divider: {
        true: ['border-b', 'border-grey-300'],
      },
    },
    defaultVariants: {
      divider: false,
    },
  }),
  title: cva(['text-grey-900', 'font-semibold', 'relative'], {
    variants: {
      size: {
        sm: ['text-base'],
        md: ['text-xl'],
        lg: ['text-xl'],
        xl: ['text-xl'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }),
  imageStyle: cva(['w-full', 'h-auto'], {
    variants: {
      position: {
        leading: ['rounded-t-lg'],
        trailing: [],
      },
    },
    defaultVariants: {
      position: 'leading',
    },
  }),
};

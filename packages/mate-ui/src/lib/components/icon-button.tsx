import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import { LoaderIcon } from '../icons/loader';
import { cn } from '../utils';
import { buttonStyles } from './button';

const iconButtonVariantsSize = cva(
  ['inline-flex', 'items-center', 'justify-center'],
  {
    variants: {
      size: {
        sm: ['h-8 w-8'],
        md: ['h-10 w-10'],
        lg: ['h-12 w-12'],
        xl: ['h-14 w-14'],
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles.rootBase>,
    VariantProps<typeof iconButtonVariantsSize> {
  asChild?: boolean;
  loading?: boolean;
  'aria-label': string;
  icon: React.ReactNode;
  themeColor: 'primary' | 'secondary' | 'neutral' | 'destructive';
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant,
      themeColor,
      size,
      disabled,
      loading,
      asChild,
      children: _children,
      icon: _icon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    const iconClassNames = buttonStyles.icon({
      themeColor,
      variant,
      size,
    });

    const icon = loading ? (
      <LoaderIcon className={cn(iconClassNames, 'animate-spin')} />
    ) : (
      <Slot className={iconClassNames}>{_icon}</Slot>
    );

    const child = asChild
      ? React.isValidElement(_children) &&
        React.cloneElement(_children, {
          children: icon,
        } as { children: React.ReactNode })
      : icon;

    return (
      <Comp
        className={cn(
          buttonStyles.rootBase({ themeColor, variant }),
          iconButtonVariantsSize({ size }),
          className
        )}
        ref={ref}
        disabled={loading || disabled}
        children={child}
        {...props}
      />
    );
  }
);
IconButton.displayName = 'IconButton';

export { IconButton, type IconButtonProps };

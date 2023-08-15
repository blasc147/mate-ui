/* eslint-disable tailwindcss/no-custom-classname */
'use client';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils';

type CardSizes = 'none' | 'sm' | 'md' | 'lg';

enum CardStyles {
  Shadow = 'shadow',
  Outline = 'outline',
}

const styles = {
  rootBase: cva(
    ['bg-background', 'bg-white', 'rounded-lg', 'flex', 'flex-col'],
    {
      variants: {
        cardStyle: {
          outline: ['border', 'border-neutral-300'],
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
        true: ['border-b', 'border-neutral-300'],
      },
    },
    defaultVariants: {
      divider: false,
    },
  }),
  title: cva(['text-neutral-900', 'font-semibold', 'relative'], {
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

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof styles.rootBase> {
  padding?: CardSizes;
}

const CardContext = React.createContext<CardProps>({
  cardStyle: CardStyles.Outline,
});

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, padding, cardStyle, ...props }, ref) => {
    return (
      <CardContext.Provider value={{ padding }}>
        <div
          {...props}
          className={cn(styles.rootBase({ cardStyle }), className)}
        >
          {children}
        </div>
      </CardContext.Provider>
    );
  }
);
Card.displayName = 'Card';

const CardHeader = ({
  className,
  divider,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { divider?: boolean }) => {
  const { padding } = React.useContext(CardContext);
  return (
    <div
      className={cn(
        styles.padding({
          padding,
        }),
        styles.headerStyle({
          divider,
        }),
        className
      )}
      {...props}
    />
  );
};
CardHeader.displayName = 'CardHeader';

interface CardImageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof styles.imageStyle> {}

const CardImage = ({
  children,
  className,
  position,
  ...props
}: CardImageProps) => {
  const supportedImage =
    React.isValidElement(children) && children.type === 'img'
      ? React.cloneElement(children, {
          className: cn(
            styles.imageStyle({
              position,
            }),
            className
          ),
        } as { className: string })
      : null;

  return (
    <div
      className={cn(
        styles.imageStyle({
          position,
        }),
        className
      )}
      {...props}
    >
      {supportedImage}
    </div>
  );
};
CardImage.displayName = 'CardImage';

const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { padding } = React.useContext(CardContext);
  return (
    <div
      className={cn(
        styles.padding({
          padding,
        }),
        'overflow-x-auto',
        'flex',
        'flex-1',
        className
      )}
      {...props}
    />
  );
};
CardContent.displayName = 'CardContent';

interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof styles.title> {}

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  CardHeaderProps & {
    asChild?: boolean;
    supportiveText?: string;
  }
>(({ asChild, className, children, supportiveText, size }, ref) => {
  const Comp = asChild ? Slot : 'p';
  return (
    <div className="flex flex-col">
      <Comp ref={ref} className={cn(styles.title({ size }), className)}>
        {children}
      </Comp>
      {supportiveText && (
        <span
          className={cn(
            'text-neutral-700 ',
            'font-normal',
            size === 'md' ? 'text-base' : 'text-sm'
          )}
        >
          {supportiveText}
        </span>
      )}
    </div>
  );
});
CardTitle.displayName = 'CardTitle';

const CardFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { padding } = React.useContext(CardContext);
  return (
    <div
      className={cn(
        styles.padding({
          padding,
        }),
        'flex',
        className
      )}
      {...props}
    />
  );
};
CardFooter.displayName = 'CardFooter';

export { Card, CardContent, CardHeader, CardFooter, CardTitle, CardImage };

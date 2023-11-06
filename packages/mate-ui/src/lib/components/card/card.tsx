/* eslint-disable tailwindcss/no-custom-classname */
'use client';
import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../utils';
import { styles } from './styles';
import { CardHeaderProps, CardImageProps, CardProps } from './interfaces';

enum CardStyles {
  Shadow = 'shadow',
  Outline = 'outline',
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
            'text-grey-700 ',
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

export {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardImage,
  type CardProps,
};

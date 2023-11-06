/* eslint-disable tailwindcss/no-custom-classname */
'use client';
import * as React from 'react';
import { useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '../utils';
import { CloseButton } from './close-button';

const Drawer = SheetPrimitive.Root;

const DrawerTrigger = SheetPrimitive.Trigger;

const DrawerClose = SheetPrimitive.Close;

enum DrawerSides {
  Top = 'top',
  Left = 'left',
  Right = 'right',
  Bottom = 'bottom',
}

const DrawerPortal = ({
  className,
  ...props
}: SheetPrimitive.DialogPortalProps) => (
  <SheetPrimitive.Portal className={cn(className)} {...props} />
);
DrawerPortal.displayName = SheetPrimitive.Portal.displayName;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      'fixed',
      'inset-0',
      'bg-grey-900/25',
      'z-50',
      'data-[state=closed]:animate-fade-out',
      'data-[state=open]:animate-fade-in',
      className
    )}
    {...props}
    ref={ref}
  />
));
Drawer.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  [
    'fixed',
    'z-50',
    'bg-background',
    'rounded bg-white',
    'shadow-lg',
    'transition',
    'ease-in-out',
    'data-[state=open]:animate-in',
    'data-[state=closed]:animate-out',
    'data-[state=closed]:duration-300',
    'data-[state=open]:duration-500',
    'flex',
    'flex-col',
    'w-full',
    'md:w-auto',
  ],
  {
    variants: {
      side: {
        top: [
          'inset-x-0',
          'top-0',
          'data-[state=closed]:slide-out-to-top',
          'data-[state=open]:slide-in-from-top',
        ],
        bottom: [
          'inset-x-0',
          'bottom-0',
          'data-[state=closed]:slide-out-to-bottom',
          'data-[state=open]:slide-in-from-bottom',
        ],
        left: [
          'inset-y-0',
          'left-0',
          'md:w-[440px]',
          'sm:w-full',
          'data-[state=closed]:slide-out-to-left',
          'data-[state=open]:slide-in-from-left',
          'sm:max-w-full',
        ],
        right: [
          'inset-y-0',
          'right-0',
          'md:w-[440px]',
          'sm:w-full',
          'data-[state=closed]:slide-out-to-right',
          'data-[state=open]:slide-in-from-right',
          'sm:max-w-full',
        ],
      },
    },
    defaultVariants: {
      side: DrawerSides.Right,
    },
  }
);

interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  DrawerContentProps
>(({ side = 'right', className, children, ...props }, ref) => {
  const closeRef = useRef(null);
  const handlers = useSwipeable({
    onSwipedDown: () => (closeRef?.current as any)?.click(),
  });
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <SheetPrimitive.Content
        {...props}
        className={cn(sheetVariants({ side }), className)}
      >
        <div className="relative h-full">
          {children}
          <SheetPrimitive.Close
            ref={closeRef}
            className={cn([
              'absolute',
              'right-4',
              'top-4',
              'rounded-sm',
              'opacity-70',
              'ring-offset-background',
              'transition-opacity',
              'hover:opacity-100',
              'focus:outline-none',
              'focus:ring-2',
              'focus:ring-ring',
              'focus:ring-offset-2',
              'disabled:pointer-events-none',
              'data-[state=open]:bg-secondary',
              'z-10',
            ])}
          >
            <CloseButton aria-label="notification-button"></CloseButton>
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
          {side === DrawerSides.Bottom && (
            <div
              {...handlers}
              className={cn(
                'absolute',
                'w-full',
                'h-10',
                'block',
                'md:hidden',
                'top-0',
                'left-0',
                'flex',
                'justify-center',
                'items-center'
              )}
            >
              <div
                className={cn(
                  'right-[calc(50%-16px)]',
                  'top-2',
                  'h-1',
                  'w-10',
                  'bg-grey-400',
                  'rounded-2xl'
                )}
              ></div>
            </div>
          )}
        </div>
      </SheetPrimitive.Content>
    </DrawerPortal>
  );
});
DrawerContent.displayName = SheetPrimitive.Content.displayName;

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex',
      'flex-col',
      'text-left',
      'text-grey-900',
      'font-bold',
      'text-base',
      'sm:text-sm',
      'relative',
      className
    )}
    {...props}
  />
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'overflow-x-auto',
      'flex',
      'flex-1',
      'mb-12',
      'p-4',
      className
    )}
    {...props}
  />
);
DrawerBody.displayName = 'DrawerBody';

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex',
      'absolute',
      'bottom-0',
      'left-0',
      'p-4',
      'w-full',
      'bg-white',
      className
    )}
    {...props}
  />
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn('text-lg', 'font-semibold', className)}
    {...props}
  />
));
DrawerTitle.displayName = SheetPrimitive.Title.displayName;

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerBody,
  DrawerSides,
};

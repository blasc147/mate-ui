import { XMarkIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { cn } from '../utils';

const CloseButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, 'aria-label': ariaLabel, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        'focus:outline-none',
        'focus-visible:ring-2',
        'ring-focus',
        'rounded',
        className
      )}
      {...props}
      aria-label={ariaLabel ?? 'Close'}
    >
      <XMarkIcon
        className={cn('h-4', 'w-4', 'text-grey-700', 'active:text-grey-800')}
      />
    </button>
  );
});
CloseButton.displayName = 'CloseButton';

export { CloseButton };

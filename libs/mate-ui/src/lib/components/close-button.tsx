'use client';

import { XMarkIcon } from '@heroicons/react/20/solid';
import { cn } from '../utils';
import React from 'react';

type CloseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'focus:outline-none',
          'focus-visible:ring',
          'ring-focus',
          'rounded'
        )}
        {...props}
      >
        <XMarkIcon
          className={cn(
            'h-4',
            'w-4',
            'text-neutral-700',
            'active:text-neutral-800'
          )}
        />
      </button>
    );
  }
);
CloseButton.displayName = 'CloseButton';

export { CloseButton, type CloseButtonProps };

'use client';

import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils';
import { FormControlContext } from './form-control-context';
import { InputContext } from './input-context';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import {
  ERROR_MESSAGE_ID,
  HELPER_MESSAGE_ID,
  getValueByPriority,
} from './utils';

const styles = {
  input: cva(
    [
      'flex',
      'h-10',
      'w-full',
      'rounded',
      'border',
      'border-neutral-400',
      'bg-white',
      'px-4',
      'py-2.5',
      'text-sm',
      'font-regular',
      'text-neutral-900',
      'focus:ring-2',
      'focus:ring-primary-400',
      'focus:border-primary-400',
      'placeholder:text-neutral-600',
      'disabled:bg-neutral-100',
      'disabled:text-neutral-700',
      'disabled:cursor-not-allowed',
      'relative',
      'z-10',
    ],
    {
      variants: {
        hasInputLeftElement: {
          true: 'pl-10',
        },
        hasInputLeftAddon: {
          true: 'rounded-l-none',
        },
        hasInputRightElement: {
          true: [],
        },
        hasInputRightAddon: {
          true: 'rounded-r-none',
        },
        isError: {
          true: 'border-error-500',
        },
        hasInputGroup: {
          false: 'enabled:hover:shadow',
        },
      },
      compoundVariants: [
        {
          hasInputRightElement: false,
          isError: true,
          className: 'pr-10',
        },
        {
          hasInputRightElement: true,
          isError: false,
          className: 'pr-10',
        },
        {
          hasInputRightElement: true,
          isError: true,
          className: 'pr-[70px]', // pr-10 (right element) + pr-5 (error icon) + 2.5
        },
      ],
      defaultVariants: {
        hasInputLeftElement: false,
        hasInputLeftAddon: false,
        hasInputRightElement: false,
        hasInputRightAddon: false,
        hasInputGroup: false,
        isError: false,
      },
    }
  ),
  errorIndicatorContainer: cva(
    [
      'h-10',
      'flex',
      'justify-center',
      'items-center',
      'absolute',
      'z-20',
      'top-0',
    ],
    {
      variants: {
        hasInputRightElement: {
          true: ['w-5', 'right-10'],
          false: ['w-10', 'right-0'],
        },
        isSelect: {
          true: 'right-[30px]',
        },
      },
      defaultVariants: {
        hasInputRightElement: false,
        isSelect: false,
      },
    }
  ),
  errorIndicator: cn('h-5', 'w-5', 'text-error-500'),
};

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> &
    Required<Pick<React.InputHTMLAttributes<HTMLInputElement>, 'type'>>
>(({ className, id: currentId, ...props }, ref) => {
  const {
    hasInputLeftElement,
    hasInputLeftAddon,
    hasInputRightElement,
    hasInputRightAddon,
    hasInputGroup,
  } = React.useContext(InputContext);
  const {
    isError,
    externalId: contextId,
    defaultId,
    hasErrorMessage,
    hasHelperText,
  } = React.useContext(FormControlContext);
  const id = getValueByPriority({
    context: contextId,
    current: currentId,
    default: defaultId,
  });
  return (
    <div className={cn('relative', 'w-full')}>
      <input
        className={cn(
          styles.input({
            hasInputLeftElement,
            hasInputLeftAddon,
            hasInputRightElement,
            hasInputRightAddon,
            hasInputGroup,
            isError,
          }),
          className
        )}
        ref={ref}
        id={id}
        aria-describedby={
          props['aria-describedby'] ??
          (hasErrorMessage && isError
            ? `${id}-${ERROR_MESSAGE_ID}`
            : hasHelperText && !isError
            ? `${id}-${HELPER_MESSAGE_ID}`
            : undefined)
        }
        aria-invalid={props['aria-invalid'] ?? isError}
        {...props}
      />
      {isError && (
        <ErrorIndicator hasInputRightElement={hasInputRightElement} />
      )}
    </div>
  );
});
Input.displayName = 'Input';

const Select = React.forwardRef<
  HTMLSelectElement,
  React.HTMLAttributes<HTMLSelectElement>
>(({ className, id: currentId, ...props }, ref) => {
  const {
    hasInputLeftElement,
    hasInputLeftAddon,
    hasInputRightElement,
    hasInputRightAddon,
    hasInputGroup,
  } = React.useContext(InputContext);
  const {
    isError,
    externalId: contextId,
    defaultId,
    hasErrorMessage,
    hasHelperText,
  } = React.useContext(FormControlContext);
  const id = getValueByPriority({
    context: contextId,
    current: currentId,
    default: defaultId,
  });
  return (
    <div className={cn('relative', 'w-full')}>
      <select
        className={cn(
          styles.input({
            hasInputLeftElement,
            hasInputLeftAddon,
            hasInputRightElement,
            hasInputRightAddon,
            hasInputGroup,
            isError,
          }),
          className
        )}
        ref={ref}
        id={id}
        aria-describedby={
          props['aria-describedby'] ??
          (hasErrorMessage && isError
            ? `${id}-${ERROR_MESSAGE_ID}`
            : hasHelperText && !isError
            ? `${id}-${HELPER_MESSAGE_ID}`
            : undefined)
        }
        aria-invalid={props['aria-invalid'] ?? isError}
        {...props}
      />
      {isError && (
        <ErrorIndicator hasInputRightElement={hasInputRightElement} isSelect />
      )}
    </div>
  );
});
Select.displayName = 'Select';

const ErrorIndicator = ({
  hasInputRightElement,
  isSelect,
}: {
  hasInputRightElement?: boolean;
  isSelect?: boolean;
}) => {
  return (
    <div
      className={styles.errorIndicatorContainer({
        hasInputRightElement,
        isSelect,
      })}
    >
      <ExclamationCircleIcon className={styles.errorIndicator} />
    </div>
  );
};

export { Input, Select };

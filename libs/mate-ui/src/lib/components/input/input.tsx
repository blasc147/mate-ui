'use client';

import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
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
      'border-neutral-400',
      'bg-white',
      'py-2.5',
      'text-sm',
      'font-regular',
      'text-neutral-900',
      'placeholder:text-neutral-600',
      'disabled:bg-neutral-100',
      'disabled:text-neutral-700',
      'disabled:cursor-not-allowed',
      'relative',
      'z-10',
    ],
    {
      variants: {
        inputStyle: {
          outlined: [
            'rounded',
            'border',
            'px-4',
            'focus:ring-1',
            'focus:ring-focus',
            'focus:border-focus',
          ],
          underlined: [
            'border-t-0',
            'border-r-0',
            'border-l-0',
            'border-b-1',
            'focus:ring-0',
            'px-0',
          ],
        },
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
          false: [],
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
          className: 'pr-[70px]',
        },
        {
          hasInputGroup: false,
          inputStyle: 'outlined',
          className: 'enabled:hover:shadow',
        },
      ],
      defaultVariants: {
        hasInputLeftElement: false,
        hasInputLeftAddon: false,
        hasInputRightElement: false,
        hasInputRightAddon: false,
        hasInputGroup: false,
        isError: false,
        inputStyle: 'outlined',
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
    setInputFocused,
    hasHelperText,
    setInputEmpty,
    inputStyle,
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
            inputStyle,
          }),
          className
        )}
        ref={ref}
        id={id}
        onFocus={(e) => {
          props.onFocus?.(e);
          setInputFocused?.(true);
        }}
        onBlur={(e) => {
          props.onBlur?.(e);
          setInputEmpty?.(e?.target?.value === '');
          setInputFocused?.(false);
        }}
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

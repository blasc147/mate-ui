'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import * as React from 'react';
import { cn } from '../../utils';
import { FormControlContext } from './form-control-context';
import { getValueByPriority } from './utils';
import { cva } from 'class-variance-authority';

const styles = {
  label: cva(['text-xs', 'font-medium', 'text-neutral-700', 'block', 'mb-1'], {
    variants: {
      inputStyle: {
        underlined: [
          'absolute',
          'z-50',
          'transition-all',
          'duration-150',
          'ease-out',
          'text-sm',
          'text-neutral-600',
          'top-1',
          'block',
          'whitespace-nowrap',
          'overflow-hidden',
          'translate-y-[8px]',
          'transition-max-w',
          'duration-400',
        ],
        outlined: [],
      },
      isInputFocused: {
        true: [],
      },
      isInputEmpty: {
        true: [],
      },
      hasLeftElement: {
        true: [],
      },
      inputSize: { sm: [], md: [], lg: [] },
    },
    compoundVariants: [
      {
        inputStyle: 'underlined',
        isInputFocused: false,
        isInputEmpty: true,
        inputSize: 'sm',
        className: ['translate-y-[4px]'],
      },
      {
        inputStyle: 'underlined',
        isInputFocused: false,
        isInputEmpty: true,
        inputSize: 'md',
        className: ['translate-y-[6px]'],
      },
      {
        inputStyle: 'underlined',
        isInputFocused: false,
        isInputEmpty: true,
        inputSize: 'lg',
        className: ['translate-y-[10px]'],
      },
      {
        inputStyle: 'underlined',
        isInputFocused: false,
        isInputEmpty: true,
        hasLeftElement: true,
        className: ['pl-10'],
      },
      {
        inputStyle: 'underlined',
        isInputFocused: false,
        isInputEmpty: false,
        className: [
          'text-xs',
          'text-primary-500',
          'transform',
          '-translate-y-[14px]',
        ],
      },
      {
        inputStyle: 'underlined',
        isInputFocused: true,
        className: [
          'text-xs',
          'font-medium',
          'text-primary-500',
          'transform',
          '-translate-y-[14px]',
        ],
      },
    ],
    defaultVariants: {
      inputStyle: 'outlined',
      isInputFocused: false,
      isInputEmpty: true,
    },
  }),
};

interface FormLabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  mandatoryIndicator?: boolean;
  optionalIndicator?: boolean;
}

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  FormLabelProps
>(
  (
    {
      className,
      id,
      children,
      optionalIndicator,
      mandatoryIndicator,
      ...props
    },
    ref
  ) => {
    const {
      externalId: contextId,
      defaultId,
      inputStyle,
      isInputEmpty,
      hasLeftElement,
      inputSize,
    } = React.useContext(FormControlContext);

    const { isInputFocused } = React.useContext(FormControlContext);

    return (
      <LabelPrimitive.Root
        ref={ref}
        className={cn(
          styles.label({
            inputStyle,
            isInputFocused,
            isInputEmpty,
            hasLeftElement,
            inputSize,
          }),
          className
        )}
        htmlFor={getValueByPriority({
          context: contextId,
          current: id,
          default: defaultId,
        })}
        {...props}
      >
        {mandatoryIndicator && <MandatoryIndicator />}

        {children}

        {optionalIndicator && <OptionalIndicator />}
      </LabelPrimitive.Root>
    );
  }
);
FormLabel.displayName = LabelPrimitive.Root.displayName;

const MandatoryIndicator = () => (
  <span
    className={cn(
      'h-[3px]',
      'w-[3px]',
      'inline-block',
      'bg-error-500',
      'rounded-full',
      'align-text-top',
      'mr-[2px]'
    )}
  />
);

const OptionalIndicator = () => (
  <span className={cn('font-regular', 'text-xs', 'text-neutral-600')}>
    (optional)
  </span>
);

export { FormLabel };

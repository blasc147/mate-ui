'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import * as React from 'react';
import { cn } from '../../utils';
import { FormControlContext } from './form-control-context';
import { getValueByPriority } from './utils';

const styles = cn(
  'text-xs',
  'font-medium',
  'text-neutral-700',
  'block',
  'mb-1'
);

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
    const { externalId: contextId, defaultId } =
      React.useContext(FormControlContext);
    return (
      <LabelPrimitive.Root
        ref={ref}
        className={cn(styles, className)}
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
    {' '}
    (optional)
  </span>
);

export { FormLabel };

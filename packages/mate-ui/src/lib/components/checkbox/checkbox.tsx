'use client';

import { CheckIcon } from '@heroicons/react/20/solid';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';
import { VariantProps } from 'class-variance-authority';
import React, { useId } from 'react';
import { Indeterminate } from '../../icons';
import { cn } from '../../utils';
import { styles } from './styles';

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof RadixCheckbox.Root>,
    VariantProps<typeof styles.root> {
  label?: string;
  subtext?: string;
  indeterminate?: boolean;
  error?: boolean;
  trailingControl?: boolean;
  value?: string;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof RadixCheckbox.Root>,
  CheckboxProps
>(
  (
    {
      className,
      id: externalId,
      label,
      subtext,
      indeterminate,
      error,
      trailingControl,
      ...props
    },
    ref
  ) => {
    const variant = error ? 'error' : 'primary';
    const defaultId = useId();
    const id = externalId ?? defaultId;
    return (
      <div className={cn(styles.base({ trailingControl }), className)}>
        <RadixCheckbox.Root
          ref={ref}
          className={styles.root({ variant, trailingControl })}
          id={id}
          {...props}
        >
          <RadixCheckbox.Indicator className={styles.indicator}>
            {indeterminate ? <Indeterminate /> : <CheckIcon />}
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <div
          className={cn(styles.textContainer({ trailingControl }), {
            'text-content-subtle': props.disabled,
          })}
        >
          <Label.Root htmlFor={id} className="cursor-pointer">
            <span className={styles.label}>{label}</span>
            <span className={styles.subtext}>{subtext}</span>
          </Label.Root>
        </div>
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';

export { Checkbox, type CheckboxProps };

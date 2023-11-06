import { CheckIcon } from '@heroicons/react/24/outline';
import * as Label from '@radix-ui/react-label';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';
import { cn } from '../../utils';
import { styles } from './style';

interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  label?: string;
  subtext?: string;
  trailingControl?: boolean;
  colorScheme?: 'primary' | 'destructive';
}

const Toggle = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  ToggleProps
>(
  (
    {
      className,
      label,
      subtext,
      trailingControl,
      id: _id,
      colorScheme,
      ...props
    },
    ref
  ) => {
    const defaultId = React.useId();
    const id = _id ?? defaultId;

    return (
      <div className={cn(styles.root({ trailingControl }), className)}>
        <SwitchPrimitives.Root
          className={styles.toggle({ colorScheme })}
          id={id}
          ref={ref}
          {...props}
        >
          <CheckIcon className={styles.checkIcon} />

          <SwitchPrimitives.Thumb className={styles.thumb} />
        </SwitchPrimitives.Root>

        {label && (
          <Label.Root
            htmlFor={id}
            className={styles.label({ trailingControl })}
          >
            {label}
          </Label.Root>
        )}

        {subtext && (
          <Label.Root
            htmlFor={id}
            className={styles.subtext({ trailingControl })}
          >
            {subtext}
          </Label.Root>
        )}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';

export { Toggle, type ToggleProps };

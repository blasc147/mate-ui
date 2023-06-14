'use client';

import { forwardRef, useContext } from 'react';
import { cn } from '../../utils';
import { FormControlContext } from './form-control-context';
import { HELPER_MESSAGE_ID, getValueByPriority } from './utils';

const styles = cn('text-neutral-600', 'text-xs', 'font-regular', 'mt-1.5');

const FormHelperText = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { defaultId, externalId: contextId } = useContext(FormControlContext);
  const id = getValueByPriority({
    context: contextId,
    current: undefined,
    default: defaultId,
  });
  return (
    <p
      id={props.id ?? `${id}-${HELPER_MESSAGE_ID}`}
      ref={ref}
      className={cn(styles, className)}
      {...props}
    />
  );
});

FormHelperText.displayName = 'FormHelperText';

export { FormHelperText };

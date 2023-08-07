'use client';

import React from 'react';
import { cn } from '../../utils';
import { FormControlContext } from './form-control-context';
import { ERROR_MESSAGE_ID, getValueByPriority } from './utils';

const styles = cn('text-error-700', 'text-xs', 'font-regular', 'mt-1.5');   

const FormErrorMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const {
    isError,
    defaultId,
    externalId: contextId,
  } = React.useContext(FormControlContext);
  const id = getValueByPriority({
    context: contextId,
    current: undefined,
    default: defaultId,
  });
  if (!isError) return null;
  return (
    <p
      id={props.id ?? `${id}-${ERROR_MESSAGE_ID}`}
      ref={ref}
      className={cn(styles, className)}
      {...props}
    />
  );
});

FormErrorMessage.displayName = 'FormErrorMessage';

export { FormErrorMessage };

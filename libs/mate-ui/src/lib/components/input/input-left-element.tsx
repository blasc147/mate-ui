'use client';

import React from 'react';
import { cn } from '../../utils';
import { FormControlContext } from './form-control-context';
import { cva } from 'class-variance-authority';

const styles = {
  root: cva(
    [
      'absolute',
      'flex',
      'items-center',
      'h-10',
      'w-10',
      'top-0',
      'left-0',
      'z-20',
    ],
    {
      variants: {
        inputStyle: {
          underlined: ['justify-start'],
          outlined: ['justify-center'],
        },
      },
    }
  ),
};

const InputLeftElement = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { inputStyle } = React.useContext(FormControlContext);
  return (
    <div
      ref={ref}
      className={cn(styles.root({ inputStyle }), className)}
      {...props}
    />
  );
});

InputLeftElement.displayName = 'InputLeftElement';

export { InputLeftElement };

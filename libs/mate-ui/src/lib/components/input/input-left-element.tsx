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
        inputSize: {
          sm: ['h-8'],
          md: ['h-10'],
          lg: ['h-12'],
        },
      },
    }
  ),
};

const InputLeftElement = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { inputStyle, inputSize } = React.useContext(FormControlContext);
  return (
    <div
      ref={ref}
      className={cn(styles.root({ inputStyle, inputSize }), className)}
      {...props}
    />
  );
});

InputLeftElement.displayName = 'InputLeftElement';

export { InputLeftElement };

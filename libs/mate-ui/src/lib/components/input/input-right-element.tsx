'use client';

import React from 'react';
import { cn } from '../../utils';
import { FormControlContext } from './form-control-context';
import { cva } from 'class-variance-authority';
import { InputStyles } from './input';

const styles = {
  root: cva(
    [
      'absolute',
      'flex',
      'justify-center',
      'items-center',
      'w-10',
      'top-0',
      'right-0',
      'z-20',
    ],
    {
      variants: {
        inputStyle: {
          underlined: ['justify-end'],
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

const InputRightElement = React.forwardRef<
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

InputRightElement.displayName = 'InputRightElement';

export { InputRightElement };

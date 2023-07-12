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
      'justify-center',
      'items-center',
      'h-10',
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
      },
    }
  ),
};

const InputRightElement = React.forwardRef<
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

InputRightElement.displayName = 'InputRightElement';

export { InputRightElement };

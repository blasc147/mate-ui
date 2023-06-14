'use client';

import React from 'react';
import { cn } from '../../utils';

const styles = cn(
  'absolute',
  'flex',
  'justify-center',
  'items-center',
  'h-10',
  'w-10',
  'top-0',
  'left-0',
  'z-20'
);

const InputLeftElement = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn(styles, className)} {...props} />;
});

InputLeftElement.displayName = 'InputLeftElement';

export { InputLeftElement };

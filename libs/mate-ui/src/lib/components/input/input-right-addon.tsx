'use client';

import React from 'react';
import { cn } from '../../utils';

const styles = cn(
  'flex',
  'items-center',
  'justify-center',
  'h-10',
  'border',
  'border-neutral-400',
  'bg-white',
  'border-l-0',
  'rounded-r-sm'
);

const InputRightAddon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn(styles, className)} {...props} />;
});

InputRightAddon.displayName = 'InputRightAddon';

export { InputRightAddon };

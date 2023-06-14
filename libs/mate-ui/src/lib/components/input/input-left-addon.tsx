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
  'border-r-0',
  'rounded-l-sm'
);

const InputLeftAddon = React.forwardRef<
  HTMLDivElement,
  React.HtmlHTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn(styles, className)} {...props} />;
});
InputLeftAddon.displayName = 'InputLeftAddon';

export { InputLeftAddon };

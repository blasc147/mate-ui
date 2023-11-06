import React from 'react';
import { cn } from '../../utils';

const styles = cn(
  'flex',
  'items-center',
  'justify-center',
  'h-10',
  'border',
  'border-grey-400',
  'bg-white',
  'border-l-0',
  'rounded-r'
);

const InputRightAddon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn(styles, className)} {...props} />;
});

InputRightAddon.displayName = 'InputRightAddon';

export { InputRightAddon };

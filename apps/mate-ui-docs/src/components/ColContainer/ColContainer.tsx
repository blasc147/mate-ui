import { ReactNode } from 'react';
import { cn } from '@truenorth/mate-ui';

interface ColContainerProps {
  children: ReactNode;
  className?: string;
}

function ColContainer({ children, className }: ColContainerProps) {
  return (
    <div
      className={cn(
        className,
        'flex gap-5 pt-12 m-full flex-wrap justify-between'
      )}
    >
      {children}
    </div>
  );
}

export { ColContainer };

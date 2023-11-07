import { ReactNode } from 'react';
import { cn } from '@chaco/mate-ui';

interface ColContainerProps {
  children: ReactNode;
  className?: string;
}

function ColContainer({ children, className }: ColContainerProps) {
  return (
    <div
      className={cn(
        className,
        'flex gap-5 pt-12 m-full flex-wrap justify-between flex-col 2xl:flex-row'
      )}
    >
      {children}
    </div>
  );
}

export { ColContainer };

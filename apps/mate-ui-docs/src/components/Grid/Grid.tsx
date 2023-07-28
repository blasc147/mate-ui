import React from 'react';
import { cn } from '@truenorth/mate-ui';

interface GridProps {
  justify?: 'center' | 'between';
  children: React.ReactNode;
}

interface ColProps extends GridProps {
  direction?: 'row' | 'col';
  size?: 'main' | 'aside';
  className?: string;
}

export const Row: React.FC<GridProps> = (props) => {
  return <div className="flex gap-6 mb-5 justify-center">{props.children}</div>;
};

export const Col: React.FC<ColProps> = (props) => {
  return (
    <div
      className={cn(props.className, 'flex', {
        'flex-col': props.direction === 'col',
        'lg:w-[70%] w-full': props.size === 'main',
        'lg:w-1/4 w-full': props.size === 'aside',
        [`justify-${props.justify}`]: !!props.justify,
      })}
    >
      {props.children}
    </div>
  );
};

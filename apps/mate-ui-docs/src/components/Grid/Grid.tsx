import { cn } from '@chaco/mate-ui';
import React from 'react';

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
  return <div className="mb-5 flex justify-center gap-6">{props.children}</div>;
};

export const Col: React.FC<ColProps> = (props) => {
  return (
    <div
      className={cn(props.className, 'flex', {
        'flex-col': props.direction === 'col',
        '2xl:w-[70%] w-full': props.size === 'main',
        '2xl:w-1/4 w-full': props.size === 'aside',
        [`justify-${props.justify}`]: !!props.justify,
      })}
    >
      {props.children}
    </div>
  );
};

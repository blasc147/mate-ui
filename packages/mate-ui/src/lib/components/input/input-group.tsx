'use client';

import React from 'react';
import { cn } from '../../utils';
import { InputContext as Context } from './input-context';
import { InputLeftElement as LeftElement } from './input-left-element';
import { InputRightAddon as RightIcon } from './input-right-addon';
import { InputRightElement as RightElement } from './input-right-element';
import { InputLeftAddon as LeftAddon } from './input-left-addon';
import { childrenHasComponent } from './utils';
import { FormControlContext as ControlContext } from './form-control-context';

interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ children, className, ...props }, ref) => {
    const hasInputLeftElement = childrenHasComponent({
      children,
      component: LeftElement,
    });
    const hasInputLeftAddon = childrenHasComponent({
      children,
      component: LeftAddon,
    });
    const hasInputRightElement = childrenHasComponent({
      children,
      component: RightElement,
    });
    const hasInputRightAddon = childrenHasComponent({
      children,
      component: RightIcon,
    });

    const { inputStyle } = React.useContext(ControlContext);

    return (
      <Context.Provider
        value={{
          hasInputGroup: true,
          hasInputLeftElement,
          hasInputLeftAddon,
          hasInputRightElement,
          hasInputRightAddon,
        }}
      >
        <div
          ref={ref}
          className={cn(
            'relative',
            'flex',
            'rounded',
            inputStyle === 'outlined' ? 'hover:shadow' : '',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </Context.Provider>
    );
  }
);

InputGroup.displayName = 'InputGroup';

export { InputGroup };

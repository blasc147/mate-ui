'use client';

import React from 'react';
import { cn } from '../../utils';
import { InputContext } from './input-context';
import { InputLeftElement } from './input-left-element';
import { InputRightAddon } from './input-right-addon';
import { InputRightElement } from './input-right-element';
import { InputLeftAddon } from './input-left-addon';
import { childrenHasComponent } from './utils';
import { FormControlContext } from './form-control-context';

interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ children, className, ...props }, ref) => {
    const hasInputLeftElement = childrenHasComponent({
      children,
      component: InputLeftElement,
    });
    const hasInputLeftAddon = childrenHasComponent({
      children,
      component: InputLeftAddon,
    });
    const hasInputRightElement = childrenHasComponent({
      children,
      component: InputRightElement,
    });
    const hasInputRightAddon = childrenHasComponent({
      children,
      component: InputRightAddon,
    });

    const { inputStyle } = React.useContext(FormControlContext);

    return (
      <InputContext.Provider
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
      </InputContext.Provider>
    );
  }
);

InputGroup.displayName = 'InputGroup';

export { InputGroup, InputContext };

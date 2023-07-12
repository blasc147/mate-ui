'use client';

import React, { useId } from 'react';
import { FormControlContext, InputStyleType } from './form-control-context';
import { FormErrorMessage } from './form-error-message';
import { FormHelperText } from './form-helper-text';
import { InputContext } from './input-context';
import { childrenHasComponent } from './utils';
import { InputLeftElement } from './input-left-element';
import { InputLeftAddon } from './input-left-addon';

interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  isError?: boolean;
  inputStyle?: InputStyleType;
}

const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({ isError, inputStyle = 'outlined', id, ...props }, ref) => {
    const defaultId = useId();

    const [isInputFocused, setInputFocused] = React.useState(false);

    const [isInputEmpty, setInputEmpty] = React.useState(true);

    const child = props?.children;

    const hasErrorMessage = childrenHasComponent({
      children: child,
      component: FormErrorMessage,
    });
    const hasHelperText = childrenHasComponent({
      children: child,
      component: FormHelperText,
    });

    const formGroup = React.Children.toArray(child)[1] as React.ReactElement;

    const hasLeftElement =
      childrenHasComponent({
        children: formGroup?.props?.children,
        component: InputLeftElement,
      }) ||
      childrenHasComponent({
        children: formGroup?.props?.children,
        component: InputLeftAddon,
      });

    return (
      <FormControlContext.Provider
        value={{
          defaultId,
          externalId: id,
          isError,
          hasErrorMessage,
          hasHelperText,
          isInputFocused,
          inputStyle,
          setInputFocused,
          isInputEmpty,
          setInputEmpty,
          hasLeftElement,
        }}
      >
        <div ref={ref} {...props} />
      </FormControlContext.Provider>
    );
  }
);

FormControl.displayName = 'FormControl';

export { FormControl, InputContext };

'use client';

import React, { useId } from 'react';
import {
  FormControlContext,
  InputSizeType,
  InputStyleType,
} from './form-control-context';
import { FormErrorMessage } from './form-error-message';
import { FormHelperText } from './form-helper-text';
import { childrenHasComponent } from './utils';
import { InputLeftElement } from './input-left-element';
import { InputLeftAddon } from './input-left-addon';

interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  isError?: boolean;
  inputStyle?: InputStyleType;
  inputSize?: InputSizeType;
}

const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  (
    { isError, inputStyle = 'outlined', inputSize = 'md', id, ...props },
    ref
  ) => {
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
          inputSize,
        }}
      >
        <div
          ref={ref}
          className={inputStyle === 'underlined' ? 'relative h-10' : ''}
          {...props}
        />
      </FormControlContext.Provider>
    );
  }
);

FormControl.displayName = 'FormControl';

export { FormControl };

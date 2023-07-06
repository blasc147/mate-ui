'use client';

import React, { useId } from 'react';
import { FormControlContext, InputStyleType } from './form-control-context';
import { FormErrorMessage } from './form-error-message';
import { FormHelperText } from './form-helper-text';
import { InputContext } from './input-context';
import { childrenHasComponent } from './utils';

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

    const hasErrorMessage = childrenHasComponent({
      children: props.children,
      component: FormErrorMessage,
    });
    const hasHelperText = childrenHasComponent({
      children: props.children,
      component: FormHelperText,
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
        }}
      >
        <div ref={ref} {...props} />
      </FormControlContext.Provider>
    );
  }
);

FormControl.displayName = 'FormControl';

export { FormControl, InputContext };

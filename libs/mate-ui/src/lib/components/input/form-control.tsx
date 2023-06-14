'use client';

import React, { useId } from 'react';
import { FormControlContext } from './form-control-context';
import { FormErrorMessage } from './form-error-message';
import { FormHelperText } from './form-helper-text';
import { InputContext } from './input-context';
import { childrenHasComponent } from './utils';

interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  isError?: boolean;
}

const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({ isError, id, ...props }, ref) => {
    const defaultId = useId();
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
        }}
      >
        <div ref={ref} {...props} />
      </FormControlContext.Provider>
    );
  }
);

FormControl.displayName = 'FormControl';

export { FormControl, InputContext };

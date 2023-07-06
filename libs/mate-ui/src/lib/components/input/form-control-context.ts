'use client';

import React from 'react';

export type InputStyleType = 'outlined' | 'underlined' | null | undefined;

interface FormControlContextProps {
  isError?: boolean;
  defaultId: string;
  externalId?: string;
  hasHelperText?: boolean;
  hasErrorMessage?: boolean;
  inputStyle?: InputStyleType;
  isInputFocused?: boolean;
  setInputFocused?: (focused: boolean) => void;
  isInputEmpty?: boolean;
  setInputEmpty?: (hasValue: boolean) => void;
}

const FormControlContext = React.createContext<FormControlContextProps>({
  defaultId: '',
});

export { FormControlContext };

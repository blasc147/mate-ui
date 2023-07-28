'use client';

import React from 'react';

export type InputStyleType = 'outlined' | 'underlined' | null | undefined;

export type InputSizeType = 'sm' | 'md' | 'lg' | null | undefined;

interface FormControlContextProps {
  isError?: boolean;
  defaultId: string;
  externalId?: string;
  hasHelperText?: boolean;
  hasErrorMessage?: boolean;
  inputStyle?: InputStyleType;
  hasLeftElement?: boolean;
  isInputFocused?: boolean;
  setInputFocused?: (focused: boolean) => void;
  isInputEmpty?: boolean;
  setInputEmpty?: (hasValue: boolean) => void;
  inputSize?: InputSizeType;
}

const FormControlContext = React.createContext<FormControlContextProps>({
  defaultId: '',
});

export { FormControlContext };

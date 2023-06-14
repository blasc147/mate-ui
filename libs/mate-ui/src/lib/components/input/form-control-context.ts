'use client';

import React from 'react';

interface FormControlContextProps {
  isError?: boolean;
  defaultId: string;
  externalId?: string;
  hasHelperText?: boolean;
  hasErrorMessage?: boolean;
}

const FormControlContext = React.createContext<FormControlContextProps>({
  defaultId: '',
});

export { FormControlContext };

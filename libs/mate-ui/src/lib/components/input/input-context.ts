'use client';

import React from 'react';

interface InputContextProps {
  hasInputGroup?: boolean;
  hasInputLeftElement?: boolean;
  hasInputLeftAddon?: boolean;
  hasInputRightElement?: boolean;
  hasInputRightAddon?: boolean;
}

const InputContext = React.createContext<InputContextProps>({});

export { InputContext };

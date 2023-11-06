'use client';
import React, { createContext, useContext, useState } from 'react';

interface PreviewContextType {
  onPreview: boolean;
  setOnPreview: React.Dispatch<React.SetStateAction<boolean>>;
}

const PreviewContext = createContext<PreviewContextType>({
  onPreview: false,
  setOnPreview: () => {},
});

interface PreviewProviderProps {
  children: React.ReactNode;
}
export const PreviewProvider: React.FC<PreviewProviderProps> = ({
  children,
}) => {
  const [onPreview, setOnPreview] = useState<boolean>(false);

  return (
    <PreviewContext.Provider value={{ onPreview, setOnPreview }}>
      {children}
    </PreviewContext.Provider>
  );
};

export const usePreview = () => {
  return useContext(PreviewContext);
};

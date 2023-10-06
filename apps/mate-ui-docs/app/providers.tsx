'use client';

import * as React from 'react';
import { ThemeProvider } from 'next-themes';

//al pasarlo como children no estamos rompiendo y convirtiendo todos los hijos en client

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

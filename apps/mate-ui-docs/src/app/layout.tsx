'use client';
import React from 'react';
import '@styles';
import { PreviewProvider, Sidenav, ThemeProvider, Footer } from '@components';
import { cn } from '@chaco/mate-ui';
import { inter } from '../styles/fonts';
import { ThemeToggle } from '../components/Toggles/theme-toggle';

type Props = {
  children: React.ReactElement;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn('min-h-screen font-default antialiased', inter.className)}
      >
        <ThemeProvider>
          <PreviewProvider>
            <div className="flex flex-col lg:flex-row">
              <Sidenav />
              <ThemeToggle />
              <div className="h-full w-full max-w-[1536px] px-6 py-8 md:px-8 md:py-14">
                {children}
              </div>
            </div>
          </PreviewProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;

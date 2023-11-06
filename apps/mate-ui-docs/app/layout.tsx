import React from 'react';
import '@styles';
import { Sidenav } from '../components/Sidenav';
import { Providers } from './providers';
import { ThemeToggle } from '../components/toggle';

type Props = {
  children: React.ReactElement;
};

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
          <Providers>
            <div className="hidden sm:hidden lg:flex lg:h-full ">
              <div className="hidden h-full px-8 py-6 lg:block lg:w-[16rem]">
                <Sidenav />
              </div>
              <div className="mx-auto flex h-full w-full max-w-[1536px] flex-col gap-4 px-8">
                <ThemeToggle></ThemeToggle>
                {children}
              </div>
            </div>
          </Providers>
        </body>
      </html>
    </>
  );
};

export default RootLayout;

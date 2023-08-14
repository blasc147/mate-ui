'use client';
import React from 'react';
import '@styles';


type Props = {
  children: React.ReactElement;
};

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </>
  );
};

export default RootLayout;
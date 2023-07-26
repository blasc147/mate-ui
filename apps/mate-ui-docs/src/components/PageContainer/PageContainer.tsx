import Head from 'next/head';
import { ReactNode } from 'react';

function PageContainer({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      {children}
    </>
  );
}

export { PageContainer };

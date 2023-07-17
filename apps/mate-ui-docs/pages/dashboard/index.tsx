import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { BaseLayout } from '../../src/layouts/BaseLayout';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col">
      <header className="flex w-full">
        <div className="flex flex-col w-full pb-12">
          <h3 className="text-3xl font-semibold text-neutral-900 pb-6">
            Dashboard
          </h3>
          <h5 className="text-xl text-neutral-700">
            Explore some examples of layouts built using Mate UI components
          </h5>
        </div>
      </header>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Page;

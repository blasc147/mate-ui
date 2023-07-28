import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { BaseLayout } from '@/layouts/BaseLayout';
import { Components, PageContainer } from '@components';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Page: NextPageWithLayout = () => {
  return (
    <PageContainer>
      <div className="flex flex-col">
        <header className="flex w-full">
          <div className="flex flex-col w-full max-w-[49rem]">
            <h3 className="text-3xl font-semibold text-neutral-900 pb-6">
              Components
            </h3>
            <h5 className="text-xl text-neutral-700">
              Components are the building blocks of the Mate UI design system.
              Thoughtfully designed and thoroughly tested with the goal to
              ensure visual consistency, responsiveness, and accessibility.
            </h5>
          </div>
        </header>
        <Components />
      </div>
    </PageContainer>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Page;

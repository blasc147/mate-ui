import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { BaseLayout } from '@/layouts/BaseLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@truenorth/mate-ui';
import { Dashboard, PageContainer } from '@components';
import { List } from '@components';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const tabs = [
  { key: 'dashboard', name: 'Dashboard', component: <Dashboard /> },
  { key: 'list', name: 'List', component: <List /> },
];

const Page: NextPageWithLayout = () => {
  return (
    <PageContainer>
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
        <Tabs defaultValue={tabs[0].name}>
          <TabsList>
            {tabs.map((tab) => {
              return (
                <TabsTrigger key={tab.key} value={tab.name}>
                  {tab.name}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {tabs.map((tab) => {
            return (
              <TabsContent key={tab.key} value={tab.name}>
                {tab.component}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </PageContainer>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Page;

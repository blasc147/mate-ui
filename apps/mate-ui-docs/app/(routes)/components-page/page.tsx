import React from 'react';
import { Components } from './section-components-table';

export const metadata = {
  title: 'Mate UI',
  description: 'Mate UI Component Library',
  icons: {
    icon: '/assets/favicon.png',
  },
  viewport: {
    width: 'device-width',
    height: 'device-height',
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
  },
};

const Page = () => {
  return (
    <div className="flex flex-col">
      <header className="flex w-full">
        <div className="flex w-full flex-col">
          <h3 className="pb-6 text-3xl font-semibold text-neutral-900">
            Components
          </h3>
          <h5 className="max-w-[688px] text-xl text-neutral-700">
            Components are the building blocks of the Mate UI design system.
            Thoughtfully designed and thoroughly tested with the goal to ensure
            visual consistency, responsiveness, and accessibility.
          </h5>
        </div>
      </header>
      <Components />
    </div>
  );
};

export default Page;

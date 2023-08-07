import React from 'react';
import { Components } from '@components';

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
  );
};

export default Page;

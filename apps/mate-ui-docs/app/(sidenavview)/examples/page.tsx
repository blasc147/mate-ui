import { Examples } from '@components';

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
          <div className="flex w-full flex-col pb-12">
            <h3 className="pb-6 text-3xl font-semibold text-neutral-900">
              Dashboard
            </h3>
            <h5 className="text-xl text-neutral-700">
              Explore some examples of layouts built using Mate UI components
            </h5>
          </div>
        </header>
        <Examples/>
      </div>
  );
};

export default Page;

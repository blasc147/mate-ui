import { BaseDashboard } from '@components';

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
      <BaseDashboard />
  );
};

export default Page;

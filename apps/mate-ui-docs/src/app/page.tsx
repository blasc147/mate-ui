import { AboutMateSection } from './(landing)/section-about-mate';
import { HeaderSection } from './(landing)/section-header';
import { ProductsSection } from './(landing)/section-products';
import { RecipeSection } from './(landing)/section-recipe';
import { ResourcesSection } from './(landing)/section-resources';

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
    <div className="flex flex-col items-center justify-center">
      <HeaderSection />
      <ProductsSection />
      <ResourcesSection />
      <RecipeSection />
      <AboutMateSection />
    </div>
  );
};

export default Page;

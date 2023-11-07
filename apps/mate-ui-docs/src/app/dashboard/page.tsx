'use client';
import {
  Breadcrumbs,
  ComponentList,
  DescriptionHeader,
  usePreview,
} from '@components';
import { BaseDashboard } from './base-dashboard-section';
import { ProjectUrls } from '@/constants/routes';
import { IconButton } from '@chaco/mate-ui';
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid';

const listItems = [
  'Button',
  'Card',
  'Icon Button',
  'Input',
  'Selector',
  'Table',
];

const Page = () => {
  const { onPreview, setOnPreview } = usePreview();
  return (
    <div className="flex flex-col gap-3">
      {onPreview ? (
        <IconButton
          className="absolute right-8 top-2"
          aria-label={''}
          icon={<ArrowUturnLeftIcon />}
          themeColor={'primary'}
          onClick={() => setOnPreview(false)}
        />
      ) : (
        <>
          <Breadcrumbs
            prevPageName={'Examples'}
            currentPageName={'Dashboard'}
          />
          <DescriptionHeader
            paragraphText="Responsive, consumer-facing dashboard for servicing a financial account, such as a bank account."
            title="Dashboard"
            hasPreviewButtons
            onViewCodeLink={ProjectUrls.Github}
          />
        </>
      )}

      <BaseDashboard />
      <ComponentList className="mt-12" listItems={listItems} />
    </div>
  );
};

export default Page;

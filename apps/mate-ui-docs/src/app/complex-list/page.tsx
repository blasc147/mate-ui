'use client';
import {
  Breadcrumbs,
  ComponentList,
  DescriptionHeader,
  usePreview,
} from '@components';
import { CardSection } from './section-card';
import { ProjectUrls } from '@/constants/routes';
import { IconButton } from '@truenorth/mate-ui';
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid';
export type { Cell } from 'react-table';

const listItems = [
  'Checkbox',
  'Icon Button',
  'Input',
  'Selector',
  'Table',
  'Tag',
];

const Page = () => {
  const { onPreview, setOnPreview } = usePreview();
  return (
    <div className="flex flex-col gap-3">
      {onPreview ? (
        <IconButton
          className="absolute right-8 top-2"
          aria-label={'onPreview'}
          icon={<ArrowUturnLeftIcon />}
          themeColor={'primary'}
          onClick={() => setOnPreview(false)}
        />
      ) : (
        <>
          <Breadcrumbs
            prevPageName={'Examples'}
            currentPageName={'Complex List'}
          />
          <DescriptionHeader
            paragraphText="Responsive design for a complex list, featuring different types of content."
            title="Complex List"
            hasPreviewButtons
            onViewCodeLink={ProjectUrls.Github}
          />
        </>
      )}

      <CardSection />
      <ComponentList listItems={listItems} />
    </div>
  );
};

export default Page;

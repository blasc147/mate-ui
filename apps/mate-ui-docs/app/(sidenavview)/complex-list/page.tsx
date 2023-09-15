'use client';
import React from 'react';
import { ProjectUrls, Routes } from '@/constants/routes';
import { Breadcrumbs, ComponentList, DescriptionHeader } from '@components';
import { openInNewTab } from '@/utils/openInNewTab';
import { CardSection } from './section-card';
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
  return (
    <div className="flex flex-col gap-3">
      <Breadcrumbs prevPageName={'Examples'} currentPageName={'Complex List'} />
      <DescriptionHeader
        paragraphText="Responsive design for a complex list, featuring different types of content."
        title="Complex List"
        onPreview={() => openInNewTab(Routes.DashboardPreview)}
        hasPreviewButtons
        onViewCode={() => openInNewTab(ProjectUrls.Github)}
      />
      <CardSection />
      <ComponentList listItems={listItems} />
    </div>
  );
};

export default Page;

'use client';
import React from 'react';
import { Routes } from '@/constants/routes';
import {
  Breadcrumbs,
  ComponentList,
  DescriptionHeader,
  BaseDashboard,
} from '@components';
import { openInNewTab } from '@/utils/openInNewTab';


const listItems = [
  'Button',
  'Card',
  'Icon Button',
  'Input',
  'Selector',
  'Table',
];

const Page = () => {
  return (
    <div className="flex flex-col gap-3">
      <Breadcrumbs prevPageName={'Examples'} currentPageName={'Dashboard'} />

      <DescriptionHeader
        paragraphText="Responsive, consumer-facing dashboard for servicing a financial account, such as a bank account."
        onPreview={() => openInNewTab(Routes.DashboardPreview)}
        title="Dashboard"
        hasPreviewButtons
      />
      <BaseDashboard />
      <ComponentList className='mt-12' listItems={listItems} />
    </div>
  );
};

export default Page;

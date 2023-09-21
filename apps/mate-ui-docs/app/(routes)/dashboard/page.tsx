'use client';
import React from 'react';
import { Breadcrumbs, ComponentList, DescriptionHeader } from '@components';
import { BaseDashboard } from './base-dashboard-section';
import { openInNewTab } from '@/utils/openInNewTab';
import { ProjectUrls, Routes } from '@/constants/routes';

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
        onViewCode={() => openInNewTab(ProjectUrls.Github)}
      />
      <BaseDashboard />
      <ComponentList className="mt-12" listItems={listItems} />
    </div>
  );
};

export default Page;

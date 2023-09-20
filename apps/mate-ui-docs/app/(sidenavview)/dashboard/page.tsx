'use client';
import React from 'react';
import { ProjectUrls, Routes } from 'apps/mate-ui-docs/app/_constants/routes';
import { Breadcrumbs, ComponentList, DescriptionHeader } from '@components';
import { openInNewTab } from 'apps/mate-ui-docs/app/_utils/openInNewTab';
import { BaseDashboard } from './base-dashboard-section';

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

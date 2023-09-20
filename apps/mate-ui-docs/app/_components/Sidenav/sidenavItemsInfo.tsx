import React from 'react';
import { Routes } from 'apps/mate-ui-docs/app/_constants/routes';

export interface SidenavItemInfo {
  label: string;
  path: string;
  rightIcon?: React.ReactNode;
  submenuItems?: SidenavItemInfo[];
}

export const sidenavItemsTop: SidenavItemInfo[] = [
  {
    label: 'Introduction',
    path: Routes.Introduction,
  },
  {
    label: 'Examples',
    path: Routes.Examples,
    submenuItems: [
      {
        label: 'Dashboard',
        path: Routes.Dashboard,
      },
      {
        label: 'Complex List',
        path: Routes.ComplexList,
      },
    ],
  },
];

export const sidenavItemsBottom: SidenavItemInfo[] = [
  {
    label: 'Getting Started',
    path: Routes.GettingStarted,
  },
  {
    label: 'Foundations',
    path: Routes.Foundations,
  },
  {
    label: 'Components',
    path: Routes.Components,
  },
  {
    label: 'Patterns',
    path: Routes.Patterns,
  },
];

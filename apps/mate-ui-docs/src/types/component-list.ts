import { ReactNode } from 'react';

export enum Status {
  Ready = 'Ready',
  InProgress = 'In progress',
}

export interface Component {
  name: string;
  description: string;
  status: Status;
  figmaLink: string;
  storybookLink: string;
}

export interface LinkItem {
  name: string;
  description: string;
  link: string;
  icon: ReactNode;
}

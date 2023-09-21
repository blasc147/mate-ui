import React from 'react';
import { ProjectUrls } from '@/constants/routes';
import { FigmaIcon, GithubIcon, StorybookIcon } from '@icons';
import { Component, LinkItem, Status } from '@/types/component-list';

export const componentsData: Component[] = [
  {
    name: 'Accordion',
    description: 'Reveals or hides associated sections of content.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2161-5141&mode=design&t=lm3buiMyWrhngtae-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/accordion--default',
  },
  {
    name: 'Alert',
    description:
      'Provides important information that may or may not require action or acknowledgement.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2040-4471&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/alert--primary',
  },
  {
    name: 'Avatar',
    description: 'A thumbnail representation of a single user or entity.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2039-4462&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/avatar--empty-circle',
  },
  {
    name: 'Button',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=4868-35180&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/button--primary-all-variants-and-sizes',
  },
  {
    name: 'Card',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=4628-32150&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/card--outline-card',
  },
  {
    name: 'Checkbox',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2039-4465&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/checkbox--simple-checkbox',
  },
  {
    name: 'DatePicker',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2039-4468&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/datepicker--simple-date-picker',
  },
  {
    name: 'Drawer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=4500-19378&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/docs/drawer--docs',
  },
  {
    name: 'Dropdown',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=4277-24021&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/dropdown--simple',
  },
  {
    name: 'Header',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2462-12023&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/header--h-1',
  },
  {
    name: 'IconButton',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=4870-36158&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/iconbutton--primary',
  },
  {
    name: 'Input',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2039-4460&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/docs/input--docs',
  },
  {
    name: 'Link',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2039-4463&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/link--primary',
  },
  {
    name: 'Modal',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2040-4472&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/dialog--success',
  },
  {
    name: 'Multiselector',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=4552-33797&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/docs/multiselector--docs',
  },
  {
    name: 'RadioButton',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2412-7645&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/radio-button--default',
  },
  {
    name: 'Selector',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=4545-23599&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/docs/selector--docs',
  },
  {
    name: 'Table',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2040-4470&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/table--default',
  },
  {
    name: 'Tabs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2039-4467&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/tabs--default-tablist',
  },
  {
    name: 'Tag',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2039-4461&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/tag--primary-pill',
  },
  {
    name: 'Toast',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2040-4473&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/toast--simple-message',
  },
  {
    name: 'Toggle',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2412-7646&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/toggle--simple-toggle',
  },
  {
    name: 'Tooltip',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    status: Status.Ready,
    figmaLink:
      'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2039-4466&mode=design&t=qMcouYM8P8NgTrz9-0',
    storybookLink:
      'https://mate-ui-storybook.vercel.app/?path=/story/tooltip--default',
  },
];

export const linkItems: LinkItem[] = [
  {
    name: 'Figma',
    description: 'Documentation, anatomy, variants and examples.',
    link: ProjectUrls.Figma,
    icon: <FigmaIcon />,
  },
  {
    name: 'Storybook',
    description:
      'Library of isolated component builds ready for development and testing.',
    link: ProjectUrls.Storybook,
    icon: <StorybookIcon />,
  },
  {
    name: 'Github',
    description:
      'Library of isolated component builds ready for development and testing.',
    link: ProjectUrls.Github,
    icon: <GithubIcon />,
  },
];

import React from 'react';
import type { Meta } from '@storybook/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AccordionProps as AccordionRootProps,
} from './accordion';

interface AccordionItem {
  key: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  leadingChevron?: boolean;
  disabled?: boolean;
  type?: AccordionRootProps['type'];
}

const accordionItem = [
  {
    key: 'titleOne',
    title: 'Title one',
    content: (
      <p>
        The accordion component delivers large amounts of content in a small
        space through progressive disclosure.
      </p>
    ),
  },
];

const accordionMultipleItems = [
  {
    key: 'titleOne',
    title: 'Title one',
    content: (
      <p>
        The accordion component delivers large amounts of content in a small
        space through progressive disclosure.
      </p>
    ),
  },
  {
    key: 'titleTwo',
    title: 'Title two',
    content: (
      <p>
        The accordion component delivers large amounts of content in a small
        space through progressive disclosure.{' '}
      </p>
    ),
  },
];

function AccordionComponent({
  disabled = false,
  type = 'single',
  items,
  leadingChevron = false,
}: AccordionProps) {
  return (
    <Accordion
      type={type}
      collapsible={type === 'single' ? true : undefined}
      disabled={disabled}
      leadingChevron={leadingChevron}
    >
      {items.map((item) => {
        return (
          <AccordionItem value={item.key} key={item.key}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

const Story: Meta<typeof AccordionComponent> = {
  component: AccordionComponent,
  title: 'Accordion',
};
export default Story;

export const Default = {
  args: {
    items: accordionItem,
  },
};

export const AllowMultiple = {
  args: {
    items: accordionMultipleItems,
    type: 'multiple',
  },
};

export const NotAllowMultiple = {
  args: {
    items: accordionMultipleItems,
    type: 'single',
  },
};

export const LeadingChevron = {
  args: {
    items: accordionItem,
    leadingChevron: true,
  },
};

export const Disabled = {
  args: {
    items: accordionItem,
    disabled: true,
  },
};

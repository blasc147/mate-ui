import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionProps as AccordionRootProps,
  AccordionTrigger,
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
  tags: ['autodocs'],
};
export default Story;

type Story = StoryObj<typeof AccordionComponent>;

export const Default: Story = {
  args: {
    items: accordionItem,
  },
};

export const AllowMultiple: Story = {
  args: {
    items: accordionMultipleItems,
    type: 'multiple',
  },
};

export const NotAllowMultiple: Story = {
  args: {
    items: accordionMultipleItems,
    type: 'single',
  },
};

export const LeadingChevron: Story = {
  args: {
    items: accordionItem,
    leadingChevron: true,
  },
};

export const Disabled: Story = {
  args: {
    items: accordionItem,
    disabled: true,
  },
};

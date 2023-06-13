import type { Meta } from '@storybook/react';

import { RadioGroup, RadioGroupItem } from './radio-button';

interface RadioButtonProps {
  error?: boolean;
  trailingControl?: boolean;
  disabled?: boolean;
  items: Items[]
}

interface Items {
  key: string;
  label?: string;
  subText?: string;
}

const items: Items[] = [
  {
    key: 'label1',
  },
  {
    key: 'label2',
  },
];

const itemsWithLabel: Items[] = [
  {
    key: 'label1',
    label: 'Label One',
  },
  {
    key: 'label2',
    label: 'Label Two',
  },
];

const itemsWithLabelAndSubText: Items[] = [
  {
    key: 'label1',
    label: 'Label One',
    subText: 'Additional text to accompany the label',
  },
  {
    key: 'label2',
    label: 'Label Two',
    subText: 'Additional text to accompany the label',
  },
];

function RadioButtonComponent({
  error = false,
  trailingControl = false,
  disabled = false,
  items = [],
}: RadioButtonProps) {
  return (
    <RadioGroup
      defaultValue="option-one"
      error={error}
      trailingControl={trailingControl}
      disabled={disabled}
    >
      {items.map(item =>{
        return (
          <RadioGroupItem
            value={item.key}
            id={item.key}
            key={item.key}
            disabled={disabled}
            label={item.label}
            subText={item.subText}
          />
        );
      })}
    </RadioGroup>
  );
}

const Story: Meta<typeof RadioButtonComponent> = {
  component: RadioButtonComponent,
  title: 'Radio Button',
};
export default Story;

export const Default = {
  args: {
    items
  },
};

export const DefaultWithLabel = {
  args: {
    items: itemsWithLabel,
  },
};

export const DefaultWithLabelAndSubText = {
  args: {
    items: itemsWithLabelAndSubText,
  },
};

export const Error = {
  args: {
    items,
    error: true,
  },
};
export const ErrorWithLabel = {
  args: {
    items: itemsWithLabel,
    error: true,
  },
};

export const ErrorWithLabelAndSubText = {
  args: {
    items: itemsWithLabelAndSubText,
    error: true,
  },
};

export const Disabled = {
  args: {
    items,
    disabled: true,
  },
};

export const DisabledWithLabel = {
  args: {
    items: itemsWithLabel,
    disabled: true,
  },
};

export const TrailingControlWithLabel = {
  args: {
    items: itemsWithLabel,
    trailingControl: true,
  },
};

export const TrailingControlWithLabelAndSubText = {
  args: {
    items: itemsWithLabelAndSubText,
    trailingControl: true,
  },
};


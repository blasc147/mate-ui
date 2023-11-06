import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './radio-button';

interface RadioButtonProps {
  error?: boolean;
  trailingControl?: boolean;
  disabled?: boolean;
  items: Items[];
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
      {items.map((item) => {
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
  tags: ['autodocs'],
};
export default Story;

type Story = StoryObj<typeof RadioButtonComponent>;

export const Default: StoryObj = {
  args: {
    items,
  },
};

export const DefaultWithLabel: StoryObj = {
  args: {
    items: itemsWithLabel,
  },
};

export const DefaultWithLabelAndSubText: StoryObj = {
  args: {
    items: itemsWithLabelAndSubText,
  },
};

export const Error: StoryObj = {
  args: {
    items,
    error: true,
  },
};
export const ErrorWithLabel: StoryObj = {
  args: {
    items: itemsWithLabel,
    error: true,
  },
};

export const ErrorWithLabelAndSubText: StoryObj = {
  args: {
    items: itemsWithLabelAndSubText,
    error: true,
  },
};

export const Disabled: StoryObj = {
  args: {
    items,
    disabled: true,
  },
};

export const DisabledWithLabel: StoryObj = {
  args: {
    items: itemsWithLabel,
    disabled: true,
  },
};

export const DisabledWithLabelAndSubtext: StoryObj = {
  args: {
    items: itemsWithLabelAndSubText,
    disabled: true,
  },
};

export const TrailingControlWithLabel: StoryObj = {
  args: {
    items: itemsWithLabel,
    trailingControl: true,
  },
};

export const TrailingControlWithLabelAndSubText: StoryObj = {
  args: {
    items: itemsWithLabelAndSubText,
    trailingControl: true,
  },
};

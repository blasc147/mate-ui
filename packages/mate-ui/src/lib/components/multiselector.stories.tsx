import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorItem,
  MultiSelectorTrigger,
  MultiSelectorFormField,
  MultiSelectorItemProps,
} from './multiselector';

const Story: Meta<typeof MultiSelector> = {
  component: MultiSelector,
  title: 'MultiSelector',
  decorators: [(Story: any) => <div className="w-[250px]">{<Story />}</div>],
  tags: ['autodocs'],
};
export default Story;

type Story = StoryObj<typeof MultiSelector>;

const items: MultiSelectorItemProps[] = [
  {
    value: 'Item1',
    label: 'Item1',
    checked: false,
  },
  {
    value: 'Item2',
    label: 'Item2',
    checked: false,
  },
  {
    value: 'Item3',
    label: 'Item3',
    checked: false,
  },
  {
    value: 'Item4',
    label: 'Item4',
    checked: false,
  },
  {
    value: 'Item5',
    label: 'Item5',
    checked: false,
  },
];

export const MultipleSelection = () => {
  const [selectedItems, setSelectedItems] = useState(items);

  const handleCheckedChange = (value: string, checked: boolean) => {
    const newItems = selectedItems.map((checkbox: MultiSelectorItemProps) => {
      if (checkbox.value === value) {
        return {
          ...checkbox,
          checked: checked,
        };
      }
      return checkbox;
    });
    setSelectedItems(newItems);
  };
  return (
    <MultiSelector
      selectedItems={selectedItems}
      onDeleteAll={() => setSelectedItems(items)}
      onDelete={(value) => handleCheckedChange(value, false)}
      placeholder="Select"
    >
      <MultiSelectorTrigger>
        <MultiSelectorFormField className="lg:w-[336px]" />
      </MultiSelectorTrigger>
      <MultiSelectorContent className="w-[220px] lg:w-[336px]">
        {selectedItems.map((item) => (
          <MultiSelectorItem
            key={item.value as string}
            value={item.value}
            checked={item.checked}
            onCheckedChange={(checked) =>
              handleCheckedChange(item.value as string, checked as boolean)
            }
          >
            {item.label}
          </MultiSelectorItem>
        ))}
      </MultiSelectorContent>
    </MultiSelector>
  );
};

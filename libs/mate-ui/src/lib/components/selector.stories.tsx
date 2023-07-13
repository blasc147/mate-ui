import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  Selector,
  SelectorContent,
  SelectorItem,
  SelectorTrigger,
  SelectorValue,
} from './selector';
import { FormLabel, Input } from './input';

const Story: Meta<typeof Selector> = {
  component: Selector,
  title: 'Selector',
  decorators: [(Story: any) => <div className="w-[250px]">{<Story />}</div>],
  tags: ['autodocs'],
};
export default Story;

type Story = StoryObj<typeof Selector>;

export const SimpleSelector = () => {
  return (
    <FormLabel>
      Label
      <Selector>
        <SelectorTrigger>
          <SelectorValue placeholder="Select" />
        </SelectorTrigger>
        <SelectorContent>
          <SelectorItem value="light">Light</SelectorItem>
          <SelectorItem value="dark">Dark</SelectorItem>
          <SelectorItem value="system">System</SelectorItem>
        </SelectorContent>
      </Selector>
    </FormLabel>
  );
};

import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const Story: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox',
};
export default Story;

type Story = StoryObj<typeof Checkbox>;

export const SimpleCheckbox: Story = {
  args: {},
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

<<<<<<< HEAD
export const WithLabel: Story = {
=======
export const WithLabel = {
>>>>>>> 3081a68 (add notification component)
  args: {
    label: 'Label',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Label',
    subtext: 'Additional text to accompany the label',
  },
};

export const WithLabelAndSubtext: Story = {
  args: {
    label: 'Label',
    subtext: 'Additional text to accompany the label',
  },
};

export const WithError: Story = {
  args: {
    error: true,
    label: 'Label',
    subtext: 'Additional text to accompany the label',
  },
};

export const TrailingControl: Story = {
  args: {
    label: 'Label',
    subtext: 'Additional text to accompany the label',
    trailingControl: true,
  },
};

  

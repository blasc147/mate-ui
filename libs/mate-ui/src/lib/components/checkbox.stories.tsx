import type { Meta } from '@storybook/react';
import { Checkbox } from './checkbox';

const Story: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox',
};
export default Story;

export const SimpleCheckbox = {
  args: {},
};

export const Indeterminate = {
  args: {
    indeterminate: true,
  },
};

export const WithLabel = {
  args: {
    label: 'Label',
  },
};

export const Disabled = {
    args: {
      disabled: true,
      label: 'Label',
      subtext: 'Additional text to accompany the label',
    },
  };

export const WithLabelAndSubtext = {
  args: {
    label: 'Label',
    subtext: 'Additional text to accompany the label',
  },
};

export const WithError = {
    args: {
      error: true,
      label: 'Label',
      subtext: 'Additional text to accompany the label',
    },
  };
  
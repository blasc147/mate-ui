import type { Meta } from '@storybook/react';
import { Checkbox } from './checkbox';
import { StarIcon } from '@heroicons/react/24/outline';

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

export const WhithLabel = {
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

export const WhithLabelAndSubtext = {
  args: {
    label: 'Label',
    subtext: 'Additional text to accompany the label',
  },
};

export const WhithError = {
    args: {
      error: true,
      label: 'Label',
      subtext: 'Additional text to accompany the label',
    },
  };
  
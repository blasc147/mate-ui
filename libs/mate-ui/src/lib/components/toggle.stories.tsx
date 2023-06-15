import type { Meta } from '@storybook/react';
import { Toggle } from './toggle';

const Story: Meta<typeof Toggle> = {
  component: ({ children }) => <>{children}</>,
  title: 'Toggle',
};
export default Story;

export const SimpleToggle = {
  args: {
    children: <Toggle />,
  },
};

export const DestructiveColorScheme = {
  args: {
    children: <Toggle colorScheme="destructive" />,
  },
};

export const ToggleWithLabel = {
  args: {
    children: <Toggle label="Label" />,
  },
};

export const ToggleWithLabelAndSubText = {
  args: {
    children: (
      <Toggle label="Label" subtext="Additional text to accompany the label" />
    ),
  },
};

export const MultipleTogglesInline = {
  args: {
    children: (
      <div className="flex gap-4 items-start">
        <Toggle
          label="Label"
          subtext="Additional text to accompany the label"
        />
        <Toggle
          label="Label"
          subtext="Additional text to accompany the label"
        />
        <Toggle
          label="Label"
          subtext="Additional text to accompany the label"
        />
      </div>
    ),
  },
};

export const TrailingControl = {
  args: {
    children: (
      <Toggle
        label="Label"
        subtext="Additional text to accompany the label"
        trailingControl
      />
    ),
  },
};

export const MultipleTogglesInlineTrailingControl = {
  args: {
    children: (
      <div className="flex gap-5">
        <Toggle
          label="Label"
          subtext="Additional text to accompany the label"
          trailingControl
        />
        <Toggle
          label="Label"
          subtext="Additional text to accompany the label"
          trailingControl
        />
      </div>
    ),
  },
};

export const Disabled = {
  args: {
    children: (
      <Toggle
        label="Label"
        subtext="Additional text to accompany the label"
        disabled
      />
    ),
  },
};

export const DisabledChecked = {
  args: {
    children: (
      <Toggle
        label="Label"
        subtext="Additional text to accompany the label"
        disabled
        checked
      />
    ),
  },
};

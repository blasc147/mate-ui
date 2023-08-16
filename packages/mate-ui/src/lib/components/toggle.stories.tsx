import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './toggle';

const Story: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Toggle',
};
export default Story;

type Story = StoryObj<typeof Toggle>;

export const SimpleToggle: Story = {
  render: () => <Toggle />,
};

export const DestructiveColorScheme: Story = {
  render: () => <Toggle colorScheme="destructive" />,
};

export const ToggleWithLabel: Story = {
  render: () => <Toggle label="Label" />,
};

export const ToggleWithLabelAndSubText: Story = {
  render: () => (
    <Toggle label="Label" subtext="Additional text to accompany the label" />
  ),
};

export const MultipleTogglesInline: Story = {
  render: () => (
    <div className="flex gap-4">
      <Toggle label="Label" subtext="Additional text to accompany the label" />
      <Toggle label="Label" subtext="Additional text to accompany the label" />
      <Toggle label="Label" subtext="Additional text to accompany the label" />
    </div>
  ),
};

export const MultipleTogglesInlineVertically: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toggle label="Label" subtext="Additional text to accompany the label" />
      <Toggle label="Label" subtext="Additional text to accompany the label" />
      <Toggle label="Label" subtext="Additional text to accompany the label" />
    </div>
  ),
};

export const TrailingControl: Story = {
  render: () => (
    <Toggle
      label="Label"
      subtext="Additional text to accompany the label"
      trailingControl
    />
  ),
};

export const MultipleTogglesInlineTrailingControl: Story = {
  render: () => (
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
};

export const Disabled: Story = {
  render: () => (
    <Toggle
      label="Label"
      subtext="Additional text to accompany the label"
      disabled
    />
  ),
};

export const DisabledChecked: Story = {
  render: () => (
    <Toggle
      label="Label"
      subtext="Additional text to accompany the label"
      disabled
      checked
    />
  ),
};

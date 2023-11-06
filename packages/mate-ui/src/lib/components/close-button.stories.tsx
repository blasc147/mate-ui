import type { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from './close-button';

const Story: Meta<typeof CloseButton> = {
  component: CloseButton,
  title: 'CloseButton',
  tags: ['autodocs'],
};
export default Story;

type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {
  render: () => <CloseButton onClick={() => alert('Closed')} />,
};

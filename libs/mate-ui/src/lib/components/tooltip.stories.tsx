import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from './button';
import { Tooltip, TooltipProps } from './tooltip';

function TooltipComponent({
  content,
  theme = 'dark',
  placement,
  align,
  defaultOpen = false,
}: TooltipProps) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleTooltipOpenChange = (open: boolean) => {
    setTooltipOpen(open);
  };
  return (
    <TooltipProvider>
      <Tooltip
        content={content}
        open={tooltipOpen}
        defaultOpen={defaultOpen}
        onOpenChange={handleTooltipOpenChange}
        theme={theme}
        placement={placement}
        align={align}
      >
        <Button>Hover me</Button>
      </Tooltip>
    </TooltipProvider>
  );
}

const Story: Meta<typeof TooltipComponent> = {
  component: TooltipComponent,
  title: 'Tooltip',
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center h-screen">
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<typeof TooltipComponent>;

export default Story;

export const Default: Story = {
  args: {
    content: 'Tooltip body text. Lorem ipsum dolor sit amet.',
    defaultOpen: false,
  },
};

export const TopEnd: Story = {
  args: {
    content: 'Tooltip body text. Lorem ipsum dolor sit amet.',
    defaultOpen: false,
    placement: 'top',
    align: 'end',
  },
};

export const TopStart: Story = {
  args: {
    content: 'Tooltip body text. Lorem ipsum dolor sit amet.',
    defaultOpen: false,
    placement: 'top',
    align: 'start',
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip body text. Lorem ipsum dolor sit amet.',
    defaultOpen: false,
    placement: 'right',
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip body text. Lorem ipsum dolor sit amet.',
    defaultOpen: false,
    placement: 'left',
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip body text. Lorem ipsum dolor sit amet.',
    defaultOpen: false,
    placement: 'bottom',
  },
};

export const Light: Story = {
  args: {
    content: 'Tooltip body text. Lorem ipsum dolor sit amet.',
    defaultOpen: false,
    placement: 'top',
    theme: 'light',
  },
};

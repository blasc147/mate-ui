import { useState } from 'react';
import { Meta } from '@storybook/react';
import { Tooltip, TooltipProps } from './tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Button } from './button';

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
      <div className="flex justify-center items-center h-screen">
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
      </div>
    </TooltipProvider>
  );
}

const Story: Meta<typeof TooltipComponent> = {
  component: TooltipComponent,
  title: 'Tooltip',
};

export default Story;

export const Default = {
  args: {
    content: 'Tooltip body text. Lorem ipsum dolor sit amet.',
    defaultOpen: false,
  },
};

export const TopEnd = {
  args: {
    content: 'Tooltip body text. Lorem ipsum dolor sit amet.',
    defaultOpen: false,
    placement: 'top',
    align: 'end',
  },
};

export const TopStart = {
  args: {
    content: 'Tooltip body text. Lorem ipsum dolor sit amet.',
    defaultOpen: false,
    placement: 'top',
    align: 'start',
  },
};

export const Right = {
  args: {
    content: 'Tooltip body text. Lorem ipsum dolor sit amet.',
    defaultOpen: false,
    placement: 'right',
  },
};

export const Left = {
  args: {
    content: 'Tooltip body text. Lorem ipsum dolor sit amet.',
    defaultOpen: false,
    placement: 'left',
  },
};

export const Bottom = {
  args: {
    content: 'Tooltip body text. Lorem ipsum dolor sit amet.',
    defaultOpen: false,
    placement: 'bottom',
  },
};

export const Light = {
  args: {
    content: 'Tooltip body text. Lorem ipsum dolor sit amet.',
    defaultOpen: false,
    placement: 'top',
    theme: 'light',
  },
};

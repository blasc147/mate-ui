import { Avatar, AvatarActionButton, AvatarFallback, AvatarImage, AvatarLabel, AvatarIcon } from './avatar';
import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid';
import { UserIcon } from '@heroicons/react/24/solid';
import type { Meta, StoryObj } from '@storybook/react';


const Story: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Avatar',
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'radio' },
    },
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?node-id=5530%3A5024&mode=dev',
    },
  },
  // tags: ['autodocs'],
};
export default Story;

type Story = StoryObj<typeof Avatar>;

export const EmptyCircle: Story = {
  args: {
    size:'xs',
    shape: 'circle',
    children: <AvatarFallback />
  },
};

export const EmptySquare: Story = {
  args: {
    size:'xs',
    shape: 'square',
    children: <AvatarFallback />
  },
};

export const TextCircle: Story = {
  args: {
    size:'xs',
    shape: 'circle',
    children: <AvatarFallback>Aa</AvatarFallback>
  },
};

export const TextSquare: Story = {
  args: {
    size:'xs',
    shape: 'square',
    children: <AvatarFallback>Aa</AvatarFallback>
  },
};

export const IconCircle: Story = {
  args: {
    size: 'xs',
    shape: 'circle',
    children: (
      <AvatarFallback>
        <AvatarIcon icon={<UserIcon />} />
      </AvatarFallback>
    ),
  },
};

export const IconSquare: Story = {
  args: {
    size: 'xs',
    shape: 'square',
    children: (
      <AvatarFallback>
        <AvatarIcon icon={<UserIcon />} />
      </AvatarFallback>
    ),
  },
};

export const ImageCircle: Story = {
  args: {
    size:'xs',
    shape: 'circle',
    children: <AvatarImage src="avatar-img-1.jpg" />
  },
};

export const ImageSquare: Story = {
  args: {
    size:'xs',
    shape: 'square',
    children: <AvatarImage src="avatar-img-1.jpg" />
  },
};

export const StatusOnline: Story = {
  args: {
    size: 'xs',
    children: (
      <>
        <AvatarFallback>
          <AvatarIcon icon={<UserIcon />} status="online"/>
        </AvatarFallback>
      </>
    ),
  },
};

export const StatusBusy: Story = {
  args: {
    size: 'xs',
    children: (
      <>
        <AvatarFallback>
          <AvatarIcon icon={<UserIcon />} status="busy" />
        </AvatarFallback>
      </>
    ),
  },
};

export const StatusOffline: Story = {
  args: {
    size: 'xs',
    children: (
      <>
        <AvatarFallback>
          <AvatarIcon icon={<UserIcon />} status="offline" />
        </AvatarFallback>
      </>
    ),
  },
};

export const ImageWithStatusOnline: Story = {
  args: {
    size: 'xs',
    children: <AvatarImage src="avatar-img-1.jpg" status="online" /> ,
  },
};

export const ImageWithStatusBusy: Story = {
  args: {
    size: 'xs',
    children: <AvatarImage src="avatar-img-1.jpg" status="busy" /> ,
  },
};

export const ImageWithStatusOffline: Story = {
  args: {
    size: 'xs',
    children: <AvatarImage src="avatar-img-1.jpg" status="offline" /> ,
  },
};

export const WithLabel: Story = {
  args: {
    size: 'xs',
    shape: 'circle',
    children: (
      <>
        <AvatarFallback>
          <AvatarIcon icon={<UserIcon />} />
          <AvatarLabel>Hugo</AvatarLabel>
        </AvatarFallback>
      </>
    ),
  },
};

export const WithActionButton: Story = {
  args: {
    size: 'xs',
    children: (
      <>
        <AvatarImage src="avatar-img-1.jpg"/>
        <AvatarActionButton
          icon={<ArrowUturnLeftIcon />}
          onClick={() => alert('Hello')}
        />
      </>
    ),
  },
};

export const WithActionButtonAndLabel: Story = {
  args: {
    size: 'xs',
    children: (
      <>
        <AvatarFallback>
          <AvatarIcon icon={<UserIcon />} />
        </AvatarFallback>
        <AvatarActionButton
          icon={<ArrowUturnLeftIcon />}
          onClick={() => alert('Hello')}
        />
        <AvatarLabel>Hugo</AvatarLabel>
      </>
    ),
  },
};

export const ImageWithActionButtonAndLabel: Story = {
  args: {
    size: 'xs',
    children: (
      <>
        <AvatarImage src="avatar-img-1.jpg" />
        <AvatarActionButton
          icon={<ArrowUturnLeftIcon />}
          onClick={() => alert('Hello')}
        />
        <AvatarLabel>Hugo</AvatarLabel>
      </>
    ),
  },
};
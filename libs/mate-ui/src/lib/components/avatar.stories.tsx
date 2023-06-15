import { ArrowUturnLeftIcon } from '@heroicons/react/20/solid';
import { UserIcon } from '@heroicons/react/24/solid';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Avatar,
  AvatarActionButton,
  AvatarFallback,
  AvatarImage,
  AvatarLabel,
  AvatarStatus,
} from './avatar';

const Story: Meta<typeof Avatar> = {
  title: 'Avatar',
};
export default Story;

type Story = StoryObj<typeof Avatar>;

export const EmptyCircle: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback />
    </Avatar>
  ),
};

export const EmptySquare: Story = {
  render: () => (
    <Avatar shape="square">
      <AvatarFallback />
    </Avatar>
  ),
};

export const TextCircle: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>Aa</AvatarFallback>
    </Avatar>
  ),
};

export const TextSquare: Story = {
  render: () => (
    <Avatar shape="square">
      <AvatarFallback>Aa</AvatarFallback>
    </Avatar>
  ),
};

export const IconCircle: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>
        <UserIcon className="h-6 w-6" />
      </AvatarFallback>
    </Avatar>
  ),
};

export const IconSquare: Story = {
  render: () => (
    <Avatar shape="square">
      <AvatarFallback>
        <UserIcon className="h-6 w-6" />
      </AvatarFallback>
    </Avatar>
  ),
};

export const ImageCircle: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="avatar-img-1.jpg" />
    </Avatar>
  ),
};

export const ImageSquare: Story = {
  render: () => (
    <Avatar shape="square">
      <AvatarImage src="avatar-img-1.jpg" />
    </Avatar>
  ),
};

export const StatusOnline: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>
        <UserIcon className="h-6 w-6" />
      </AvatarFallback>
      <AvatarStatus variant="online" />
    </Avatar>
  ),
};

export const StatusBusy: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>
        <UserIcon className="h-6 w-6" />
      </AvatarFallback>
      <AvatarStatus variant="busy" />
    </Avatar>
  ),
};

export const StatusOffline: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>
        <UserIcon className="h-6 w-6" />
      </AvatarFallback>
      <AvatarStatus variant="offline" />
    </Avatar>
  ),
};

export const ImageWithStatus: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="avatar-img-1.jpg" />
      <AvatarStatus variant="online" />
    </Avatar>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>
        <UserIcon className="h-6 w-6" />
      </AvatarFallback>
      <AvatarLabel>Hugo</AvatarLabel>
    </Avatar>
  ),
};

export const WithActionButton: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>
        <UserIcon className="h-6 w-6" />
      </AvatarFallback>
      <AvatarActionButton
        icon={<ArrowUturnLeftIcon />}
        onClick={() => alert('Hello')}
      />
    </Avatar>
  ),
};

export const WithActionButtonAndLabel: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>
        <UserIcon className="h-6 w-6" />
      </AvatarFallback>
      <AvatarActionButton
        icon={<ArrowUturnLeftIcon />}
        onClick={() => alert('Hello')}
      />
      <AvatarLabel>Hugo</AvatarLabel>
    </Avatar>
  ),
};

export const ImageWithActionButtonAndLabel: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="avatar-img-1.jpg" />
      <AvatarActionButton
        icon={<ArrowUturnLeftIcon />}
        onClick={() => alert('Hello')}
      />
      <AvatarLabel>Hugo</AvatarLabel>
    </Avatar>
  ),
};

export const MultipleAvatarsInHorizontalLine: Story = {
  render: () => (
    <div className="flex gap-5">
      <Avatar>
        <AvatarFallback>Aa</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarFallback>
          <UserIcon className="h-6 w-6" />
        </AvatarFallback>
        <AvatarStatus variant="online" />
      </Avatar>

      <Avatar>
        <AvatarImage src="avatar-img-1.jpg" />
        <AvatarActionButton
          icon={<ArrowUturnLeftIcon />}
          onClick={() => alert('Hello')}
        />
        <AvatarLabel>Hugo</AvatarLabel>
      </Avatar>
    </div>
  ),
};

export const MultipleAvatarsInVerticalLine: Story = {
  render: () => (
    <div className="flex flex-col gap-5">
      <Avatar>
        <AvatarFallback>Aa</AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarFallback>
          <UserIcon className="h-6 w-6" />
        </AvatarFallback>
        <AvatarStatus variant="online" />
      </Avatar>

      <Avatar>
        <AvatarImage src="avatar-img-1.jpg" />
        <AvatarActionButton
          icon={<ArrowUturnLeftIcon />}
          onClick={() => alert('Hello')}
        />
        <AvatarLabel>Hugo</AvatarLabel>
      </Avatar>
    </div>
  ),
};

export const WithCustomSizes: Story = {
  render: () => (
    <div className="flex gap-2.5">
      <Avatar className="h-4 w-4">
        <AvatarFallback>
          <UserIcon className="h-2 w-2" />
        </AvatarFallback>
      </Avatar>

      <Avatar className="h-6 w-6">
        <AvatarFallback>
          <UserIcon className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>

      <Avatar>
        <AvatarFallback>
          <UserIcon className="h-6 w-6" />
        </AvatarFallback>
      </Avatar>

      <Avatar className="h-10 w-10">
        <AvatarFallback>
          <UserIcon className="h-8 w-8" />
        </AvatarFallback>
      </Avatar>
    </div>
  ),
};

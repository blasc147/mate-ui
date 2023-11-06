import { BellIcon, PlusIcon } from '@heroicons/react/24/solid';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/yCUtLVdoonjfiDd9eNWIDS/Mate-UI-3.0?type=design&node-id=2022-4752&mode=design&t=wPRhmXh9qSdthywd-0',
    },
  },
  tags: ['autodocs'],
};
export default Story;

type Story = StoryObj<typeof Button>;

export const PrimaryAllVariantsAndSizes: Story = {
  render: () => (
    <>
      <div className="grid w-fit grid-flow-col gap-4">
        <Button variant="filled" themeColor="primary" size="xl">
          Button
        </Button>
        <Button variant="outlined" themeColor="primary" size="xl">
          Button
        </Button>
        <Button variant="ghost" themeColor="primary" size="xl">
          Button
        </Button>
      </div>
      <div className="grid w-fit grid-flow-col gap-4 pt-4">
        <Button variant="filled" themeColor="primary" size="lg">
          Button
        </Button>
        <Button variant="outlined" themeColor="primary" size="lg">
          Button
        </Button>
        <Button variant="ghost" themeColor="primary" size="lg">
          Button
        </Button>
      </div>
      <div className="grid w-fit grid-flow-col gap-4 pt-4">
        <Button variant="filled" themeColor="primary" size="md">
          Button
        </Button>
        <Button variant="outlined" themeColor="primary" size="md">
          Button
        </Button>
        <Button variant="ghost" themeColor="primary" size="md">
          Button
        </Button>
      </div>
      <div className="grid w-fit grid-flow-col gap-4 pt-4">
        <Button variant="filled" themeColor="primary" size="sm">
          Button
        </Button>
        <Button variant="outlined" themeColor="primary" size="sm">
          Button
        </Button>
        <Button variant="ghost" themeColor="primary" size="sm">
          Button
        </Button>
      </div>
    </>
  ),
};

export const SecondaryAllVariantsAndSizes: Story = {
  render: () => (
    <>
      <div className="grid w-fit grid-flow-col gap-4">
        <Button variant="filled" themeColor="secondary" size="xl">
          Button
        </Button>
        <Button variant="outlined" themeColor="secondary" size="xl">
          Button
        </Button>
        <Button variant="ghost" themeColor="secondary" size="xl">
          Button
        </Button>
      </div>
      <div className="grid w-fit grid-flow-col gap-4 pt-4">
        <Button variant="filled" themeColor="secondary" size="lg">
          Button
        </Button>
        <Button variant="outlined" themeColor="secondary" size="lg">
          Button
        </Button>
        <Button variant="ghost" themeColor="secondary" size="lg">
          Button
        </Button>
      </div>
      <div className="grid w-fit grid-flow-col gap-4 pt-4">
        <Button variant="filled" themeColor="secondary" size="md">
          Button
        </Button>
        <Button variant="outlined" themeColor="secondary" size="md">
          Button
        </Button>
        <Button variant="ghost" themeColor="secondary" size="md">
          Button
        </Button>
      </div>
      <div className="grid w-fit grid-flow-col gap-4 pt-4">
        <Button variant="filled" themeColor="secondary" size="sm">
          Button
        </Button>
        <Button variant="outlined" themeColor="secondary" size="sm">
          Button
        </Button>
        <Button variant="ghost" themeColor="secondary" size="sm">
          Button
        </Button>
      </div>
    </>
  ),
};

export const NeutralAllVariantsAndSizes: Story = {
  render: () => (
    <>
      <div className="grid w-fit grid-flow-col gap-4">
        <Button variant="filled" themeColor="neutral" size="xl">
          Button
        </Button>
        <Button variant="outlined" themeColor="neutral" size="xl">
          Button
        </Button>
        <Button variant="ghost" themeColor="neutral" size="xl">
          Button
        </Button>
      </div>
      <div className="grid w-fit grid-flow-col gap-4 pt-4">
        <Button variant="filled" themeColor="neutral" size="lg">
          Button
        </Button>
        <Button variant="outlined" themeColor="neutral" size="lg">
          Button
        </Button>
        <Button variant="ghost" themeColor="neutral" size="lg">
          Button
        </Button>
      </div>
      <div className="grid w-fit grid-flow-col gap-4 pt-4">
        <Button variant="filled" themeColor="neutral" size="md">
          Button
        </Button>
        <Button variant="outlined" themeColor="neutral" size="md">
          Button
        </Button>
        <Button variant="ghost" themeColor="neutral" size="md">
          Button
        </Button>
      </div>
      <div className="grid w-fit grid-flow-col gap-4 pt-4">
        <Button variant="filled" themeColor="neutral" size="sm">
          Button
        </Button>
        <Button variant="outlined" themeColor="neutral" size="sm">
          Button
        </Button>
        <Button variant="ghost" themeColor="neutral" size="sm">
          Button
        </Button>
      </div>
    </>
  ),
};

export const DestructiveAllVariantsAndSizes: Story = {
  render: () => (
    <>
      <div className="grid w-fit grid-flow-col gap-4">
        <Button variant="filled" themeColor="destructive" size="xl">
          Button
        </Button>
        <Button variant="outlined" themeColor="destructive" size="xl">
          Button
        </Button>
        <Button variant="ghost" themeColor="destructive" size="xl">
          Button
        </Button>
      </div>
      <div className="grid w-fit grid-flow-col gap-4 pt-4">
        <Button variant="filled" themeColor="destructive" size="lg">
          Button
        </Button>
        <Button variant="outlined" themeColor="destructive" size="lg">
          Button
        </Button>
        <Button variant="ghost" themeColor="destructive" size="lg">
          Button
        </Button>
      </div>
      <div className="grid w-fit grid-flow-col gap-4 pt-4">
        <Button variant="filled" themeColor="destructive" size="md">
          Button
        </Button>
        <Button variant="outlined" themeColor="destructive" size="md">
          Button
        </Button>
        <Button variant="ghost" themeColor="destructive" size="md">
          Button
        </Button>
      </div>
      <div className="grid w-fit grid-flow-col gap-4 pt-4">
        <Button variant="filled" themeColor="destructive" size="sm">
          Button
        </Button>
        <Button variant="outlined" themeColor="destructive" size="sm">
          Button
        </Button>
        <Button variant="ghost" themeColor="destructive" size="sm">
          Button
        </Button>
      </div>
    </>
  ),
};

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    themeColor: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    themeColor: 'destructive',
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Button',
    rightIcon: <PlusIcon />,
    themeColor: 'neutral',
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Button',
    leftIcon: <BellIcon />,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Button',
    loading: true,
  },
};

export const LoadingWithIcon: Story = {
  args: {
    children: 'Button',
    loading: true,
    leftIcon: <BellIcon />,
  },
};

export const AsLink: Story = {
  render: () => (
    <>
      <div className="grid w-fit grid-flow-col gap-4">
        <Button variant="filled" themeColor="primary" size="xl" asChild>
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            As Link
          </a>
        </Button>
        <Button variant="outlined" themeColor="primary" size="xl" asChild>
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            As Link
          </a>
        </Button>
        <Button variant="ghost" themeColor="primary" size="xl" asChild>
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            As Link
          </a>
        </Button>
      </div>
      <div className="grid w-fit grid-flow-col gap-4 pt-4">
        <Button variant="filled" themeColor="primary" size="lg" asChild>
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            As Link
          </a>
        </Button>
        <Button variant="outlined" themeColor="primary" size="lg" asChild>
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            As Link
          </a>
        </Button>
        <Button variant="ghost" themeColor="primary" size="lg" asChild>
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            As Link
          </a>
        </Button>
      </div>
      <div className="grid w-fit grid-flow-col gap-4 pt-4">
        <Button variant="filled" themeColor="primary" size="md" asChild>
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            As Link
          </a>
        </Button>
        <Button variant="outlined" themeColor="primary" size="md" asChild>
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            As Link
          </a>
        </Button>
        <Button variant="ghost" themeColor="primary" size="md" asChild>
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            As Link
          </a>
        </Button>
      </div>
      <div className="grid w-fit grid-flow-col gap-4 pt-4">
        <Button variant="filled" themeColor="primary" size="sm" asChild>
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            As Link
          </a>
        </Button>
        <Button variant="outlined" themeColor="primary" size="sm" asChild>
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            As Link
          </a>
        </Button>
        <Button variant="ghost" themeColor="primary" size="sm" asChild>
          <a href="https://www.google.com" rel="noreferrer" target="_blank">
            As Link
          </a>
        </Button>
      </div>
    </>
  ),
};

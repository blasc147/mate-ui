import { BellIcon } from '@heroicons/react/20/solid';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertCloseButton, AlertDescription, AlertTitle } from './alert';
import { Link } from './link';

const Story: Meta<typeof Alert> = {
  component: Alert,
  title: 'Alert',
  tags: ['autodocs'],
};

export default Story;

type Story = StoryObj<typeof Alert>;

export const Primary: Story = {
  render: () => (
    <Alert colorScheme="primary">
      <AlertTitle>Title text</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </AlertDescription>
    </Alert>
  ),
};

export const Neutral: Story = {
  render: () => (
    <Alert colorScheme="neutral">
      <AlertTitle>Title text</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  render: () => (
    <Alert colorScheme="info">
      <AlertTitle>Title text</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert colorScheme="success">
      <AlertTitle>Title text</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert colorScheme="warning">
      <AlertTitle>Title text</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </AlertDescription>
    </Alert>
  ),
};

export const Error: Story = {
  render: () => (
    <Alert colorScheme="error">
      <AlertTitle>Title text</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </AlertDescription>
    </Alert>
  ),
};

export const LeadingIcon: Story = {
  render: () => (
    <Alert colorScheme="primary" icon={<BellIcon />}>
      <AlertTitle>Title text</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </AlertDescription>
    </Alert>
  ),
};

export const LeadingIconError: Story = {
  render: () => (
    <Alert colorScheme="error" icon={<ExclamationTriangleIcon />}>
      <AlertTitle>Title text</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </AlertDescription>
    </Alert>
  ),
};

export const WithCloseButton: Story = {
  render: () => (
    <Alert>
      <AlertCloseButton onClick={() => alert('Close')} />
      <AlertTitle>Title text</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </AlertDescription>
    </Alert>
  ),
};

export const WithTrailingLink: Story = {
  render: () => (
    <Alert
      trailingElement={
        <Link href="https://www.google.com" target="_blank" rel="noreferrer">
          Details
        </Link>
      }
    >
      <AlertTitle>Title text</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </AlertDescription>
    </Alert>
  ),
};

export const WithBottomLink: Story = {
  render: () => (
    <Alert
      colorScheme="error"
      bottomElement={
        <Link
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
          colorScheme="destructive"
        >
          Details
        </Link>
      }
    >
      <AlertTitle>Title text</AlertTitle>

      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </AlertDescription>
    </Alert>
  ),
};

export const WithIconAndBottomLinkAndCloseButton: Story = {
  render: () => (
    <Alert
      colorScheme="error"
      icon={<ExclamationTriangleIcon />}
      bottomElement={
        <Link
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
          colorScheme="destructive"
        >
          Details
        </Link>
      }
    >
      <AlertCloseButton onClick={() => alert('Close')} />
      <AlertTitle>Title text</AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </AlertDescription>
    </Alert>
  ),
};

export const TitleAsH5: Story = {
  render: () => (
    <Alert colorScheme="primary">
      <AlertTitle asChild>
        <h5>Title text</h5>
      </AlertTitle>
      <AlertDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
      </AlertDescription>
    </Alert>
  ),
  name: 'Title as H5',
};

export const DescriptionAsSpan: Story = {
  render: () => (
    <Alert colorScheme="primary">
      <AlertTitle>Title text</AlertTitle>
      <AlertDescription asChild>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
        </span>
      </AlertDescription>
    </Alert>
  ),
};

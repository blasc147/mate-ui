import type { Meta, StoryObj } from '@storybook/react';
import { Header, HeaderSupportiveText } from './header';

const Story: Meta<typeof Header> = {
  title: 'Header',
};

export default Story;

type Story = StoryObj<typeof Header>;

export const H1: Story = {
  render: () => <Header variant="h1">Header</Header>,
  name: 'H1',
};

export const H1WithSupportiveText: Story = {
  render: () => (
    <>
      <Header variant="h1">Header</Header>
      <HeaderSupportiveText variant="h1">Supportive text</HeaderSupportiveText>
    </>
  ),
  name: 'H1 with Supportive Text',
};

export const H2: Story = {
  render: () => <Header variant="h2">Header</Header>,
  name: 'H2',
};

export const H2WithSupportiveText: Story = {
  render: () => (
    <>
      <Header variant="h2">Header</Header>
      <HeaderSupportiveText variant="h2">Supportive text</HeaderSupportiveText>
    </>
  ),
  name: 'H2 with Supportive Text',
};

export const H3: Story = {
  render: () => <Header variant="h3">Header</Header>,
  name: 'H3',
};

export const H3WithSupportiveText: Story = {
  render: () => (
    <>
      <Header variant="h3">Header</Header>
      <HeaderSupportiveText variant="h3">Supportive text</HeaderSupportiveText>
    </>
  ),
  name: 'H3 with Supportive Text',
};

export const H4: Story = {
  render: () => <Header variant="h4">Header</Header>,
  name: 'H4',
};

export const H4WithSupportiveText: Story = {
  render: () => (
    <>
      <Header variant="h4">Header</Header>
      <HeaderSupportiveText variant="h4">Supportive text</HeaderSupportiveText>
    </>
  ),
  name: 'H4 with Supportive Text',
};

export const H5: Story = {
  render: () => <Header variant="h5">Header</Header>,
  name: 'H5',
};

export const H5WithSupportiveText: Story = {
  render: () => (
    <>
      <Header variant="h5">Header</Header>
      <HeaderSupportiveText variant="h5">Supportive text</HeaderSupportiveText>
    </>
  ),
  name: 'H5 with Supportive Text',
};

export const H1AsH2: Story = {
  render: () => (
    <Header variant="h1" asChild>
      <h2>Header</h2>
    </Header>
  ),
  name: 'H1 as H2',
};

export const SupportiveTextAsH2: Story = {
  render: () => (
    <>
      <Header variant="h1">Header</Header>
      <HeaderSupportiveText variant="h1" asChild>
        <h2>Supportive text</h2>
      </HeaderSupportiveText>
    </>
  ),
  name: 'Supportive Text as H2',
};

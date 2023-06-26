import {
  CheckBadgeIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import type { Meta, StoryObj } from '@storybook/react';
import { cn } from '../../utils';
import { Avatar, AvatarImage } from '../avatar';
import { Button } from '../button';
import { IconButton } from '../icon-button';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Select,
} from './';
import { FormLabel } from './form-label';

const Story: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
  decorators: [(Story) => <div className="w-[250px]">{<Story />}</div>],
  tags: ['autodocs'],
};

export default Story;

type Story = StoryObj<typeof Input>;

export const EmptyInput: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <Input type="text" />
    </FormControl>
  ),
};

export const FilledInput: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <Input type="text" defaultValue="text" />
    </FormControl>
  ),
};

export const PlaceholderInput: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <Input type="text" placeholder="text" />
    </FormControl>
  ),
};

export const HiddenInput: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <Input type="password" defaultValue="text" />
    </FormControl>
  ),
};

export const DisabledInput: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <Input disabled type="text" />
    </FormControl>
  ),
};

export const DisabledInputWithText: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <Input disabled value="text" type="text" />
    </FormControl>
  ),
};

export const WithSelect: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
    </FormControl>
  ),
};

export const InputWithoutLabel: Story = {
  render: () => (
    <FormControl>
      <Input type="text" />
    </FormControl>
  ),
};

export const WithOptionalLabelIndicator: Story = {
  render: () => (
    <FormControl>
      <FormLabel optionalIndicator>Label</FormLabel>
      <Input type="text" />
    </FormControl>
  ),
};

export const WithMandatoryLabelIndicator: Story = {
  render: () => (
    <FormControl>
      <FormLabel mandatoryIndicator>Label</FormLabel>
      <Input type="text" />
    </FormControl>
  ),
};

export const InError: Story = {
  render: () => (
    <FormControl isError>
      <FormLabel>Label</FormLabel>
      <Input type="text" />
      <FormErrorMessage>Some error text</FormErrorMessage>
    </FormControl>
  ),
};

export const SelectInError: Story = {
  render: () => (
    <FormControl isError>
      <FormLabel>Label</FormLabel>
      <Select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </Select>
      <FormErrorMessage>Some error text</FormErrorMessage>
    </FormControl>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <Input type="text" />
      <FormHelperText>Some help text</FormHelperText>
    </FormControl>
  ),
};

export const WithHelperTextAndInError: Story = {
  render: () => (
    <FormControl isError>
      <FormLabel>Label</FormLabel>
      <Input type="text" />
      <FormHelperText>Some help text</FormHelperText>
      <FormErrorMessage>Some error text</FormErrorMessage>
    </FormControl>
  ),
};

export const WithLeadingIconElement: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <InputGroup>
        <InputLeftElement>
          <MagnifyingGlassCircleIcon className="text-neutral-700 h-5 w-5" />
        </InputLeftElement>
        <Input type="text" />
      </InputGroup>
    </FormControl>
  ),
};

export const WithTrailingIconElement: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <InputGroup>
        <Input type="text" />
        <InputRightElement>
          <CheckBadgeIcon className="text-neutral-700 h-5 w-5" />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  ),
};

export const WithTrailingIconElementAndInError: Story = {
  render: () => (
    <FormControl isError>
      <FormLabel>Label</FormLabel>
      <InputGroup>
        <Input type="text" />
        <InputRightElement>
          <CheckBadgeIcon className="text-neutral-700 h-5 w-5" />
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>Some error text</FormErrorMessage>
    </FormControl>
  ),
};

export const WithLeadingAvatarElement: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <InputGroup>
        <InputLeftElement>
          <Avatar className="h-6 w-6">
            <AvatarImage src="avatar-img-1.jpg" />/
          </Avatar>
        </InputLeftElement>
        <Input type="text" />
      </InputGroup>
    </FormControl>
  ),
};

export const WithTrailingAvatarElement: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <InputGroup>
        <Input type="text" />
        <InputRightElement>
          <Avatar className="h-6 w-6">
            <AvatarImage src="avatar-img-1.jpg" />/
          </Avatar>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  ),
};

export const WithLeadingTextElement: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <InputGroup>
        <InputLeftElement>
          <span className="text-sm font-bold text-neutral-900">$</span>
        </InputLeftElement>
        <Input type="text" />
      </InputGroup>
    </FormControl>
  ),
};

export const WithTrailingTextElement: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <InputGroup>
        <Input type="text" className="pr-[60px]" />
        <InputRightElement className="w-[60px]">
          <span className="font-semibold text-sm text-neutral-900">USD</span>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  ),
};

export const WithLeadingSelectElement: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <InputGroup>
        <InputLeftElement className="w-[80px] flex justify-start pl-1">
          <select
            className={cn(
              'border-0',
              'focus:ring-focus',
              'focus:ring-2',
              'focus:ring-offset-2',
              'rounded-l-sm',
              'text-xs',
              'font-semibold',
              'text-neutral-900'
            )}
          >
            <option>+1</option>
            <option>+2</option>
          </select>
        </InputLeftElement>
        <Input type="text" className="pl-[80px]" />
      </InputGroup>
    </FormControl>
  ),
};

export const WithTrailingSelectElement: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <InputGroup>
        <Input type="text" className="pr-[100px]" />
        <InputRightElement className="w-[100px] flex justify-end pr-1">
          <select
            className={cn(
              'border-0',
              'focus:ring-focus',
              'focus:ring-2',
              'focus:ring-offset-2',
              'rounded-r-sm',
              'text-xs',
              'font-semibold',
              'text-neutral-900'
            )}
          >
            <option>USD</option>
            <option>ARS</option>
          </select>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  ),
};

export const WithTrailingIconButton: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <InputGroup>
        <Input type="text" />
        <InputRightElement>
          <IconButton
            aria-label="delete"
            variant="ghost"
            colorScheme="neutral"
            icon={<XMarkIcon />}
            size="sm"
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  ),
};

export const InputWithExternalAddons: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <InputGroup>
        <InputLeftAddon className="flex justify-center items-center w-28 bg-neutral-200">
          <span className="text-sm font-regular text-neutral-700">
            https://
          </span>
        </InputLeftAddon>
        <Input type="text" />
        <InputRightAddon className="flex justify-center items-center w-20 bg-neutral-200">
          <span className="text-sm font-regular text-neutral-700">.com</span>
        </InputRightAddon>
      </InputGroup>
    </FormControl>
  ),
};

export const InputWithExternalAddonsAndInError: Story = {
  render: () => (
    <FormControl isError>
      <FormLabel>Label</FormLabel>
      <InputGroup>
        <InputLeftAddon className="flex justify-center items-center w-28 bg-neutral-200">
          <span className="text-sm font-regular text-neutral-700">
            https://
          </span>
        </InputLeftAddon>
        <Input type="text" />
        <InputRightAddon className="flex justify-center items-center w-20 bg-neutral-200">
          <span className="text-sm font-regular text-neutral-700">.com</span>
        </InputRightAddon>
      </InputGroup>
      <FormErrorMessage>Some error text</FormErrorMessage>
    </FormControl>
  ),
};

export const ElementCommonUseCase: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <InputGroup>
        <InputLeftElement>
          <MagnifyingGlassCircleIcon className="text-neutral-700 h-5 w-5" />
        </InputLeftElement>
        <Input type="text" />
        <InputRightElement>
          <IconButton
            aria-label="delete"
            variant="ghost"
            colorScheme="neutral"
            icon={<XMarkIcon />}
            size="sm"
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  ),
};

export const ElementAndAddonCommonUseCase: Story = {
  render: () => (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <InputGroup>
        <InputLeftElement>
          <MagnifyingGlassIcon className="text-neutral-700 h-5 w-5" />
        </InputLeftElement>
        <Input type="text" />
        <InputRightAddon className="flex justify-center items-center px-1">
          <Button colorScheme="neutral" variant="filled" size="sm">
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </FormControl>
  ),
};

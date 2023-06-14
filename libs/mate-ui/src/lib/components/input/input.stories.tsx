import {
  CheckBadgeIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import type { Meta } from '@storybook/react';
import { Avatar } from '../avatar';
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
import { cn } from '../../utils';

const Story: Meta<typeof Input> = {
  component: ({ children }) => <div className="w-[250px]">{children}</div>,
  title: 'Input',
};
export default Story;

export const EmptyInput = {
  args: {
    children: (
      <FormControl>
        <FormLabel>Label</FormLabel>
        <Input type="text" />
      </FormControl>
    ),
  },
};

export const FilledInput = {
  args: {
    children: (
      <FormControl>
        <FormLabel>Label</FormLabel>
        <Input type="text" defaultValue="text" />
      </FormControl>
    ),
  },
};

export const PlaceholderInput = {
  args: {
    children: (
      <FormControl>
        <FormLabel>Label</FormLabel>
        <Input type="text" placeholder="text" />
      </FormControl>
    ),
  },
};

export const HiddenInput = {
  args: {
    children: (
      <FormControl>
        <FormLabel>Label</FormLabel>
        <Input type="password" defaultValue="text" />
      </FormControl>
    ),
  },
};

export const DisabledInput = {
  args: {
    children: (
      <FormControl>
        <FormLabel>Label</FormLabel>
        <Input disabled type="text" />
      </FormControl>
    ),
  },
};

export const DisabledInputWithText = {
  args: {
    children: (
      <FormControl>
        <FormLabel>Label</FormLabel>
        <Input disabled value="text" type="text" />
      </FormControl>
    ),
  },
};

export const WithSelect = {
  args: {
    children: (
      <FormControl>
        <FormLabel>Label</FormLabel>
        <Select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      </FormControl>
    ),
  },
};

export const InputWithoutLabel = {
  args: {
    children: (
      <FormControl>
        <Input type="text" />
      </FormControl>
    ),
  },
};

export const WithOptionalLabelIndicator = {
  args: {
    children: (
      <FormControl>
        <FormLabel optionalIndicator>Label</FormLabel>
        <Input type="text" />
      </FormControl>
    ),
  },
};

export const WithMandatoryLabelIndicator = {
  args: {
    children: (
      <FormControl>
        <FormLabel mandatoryIndicator>Label</FormLabel>
        <Input type="text" />
      </FormControl>
    ),
  },
};

export const InError = {
  args: {
    children: (
      <FormControl isError>
        <FormLabel>Label</FormLabel>
        <Input type="text" />
        <FormErrorMessage>Some error text</FormErrorMessage>
      </FormControl>
    ),
  },
};

export const SelectInError = {
  args: {
    children: (
      <FormControl isError>
        <FormLabel>Label</FormLabel>
        <Select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
        <FormErrorMessage>Some error text</FormErrorMessage>
      </FormControl>
    ),
  },
};

export const WithHelperText = {
  args: {
    children: (
      <FormControl>
        <FormLabel>Label</FormLabel>
        <Input type="text" />
        <FormHelperText>Some help text</FormHelperText>
      </FormControl>
    ),
  },
};

export const WithHelperTextAndInError = {
  args: {
    children: (
      <FormControl isError>
        <FormLabel>Label</FormLabel>
        <Input type="text" />
        <FormHelperText>Some help text</FormHelperText>
        <FormErrorMessage>Some error text</FormErrorMessage>
      </FormControl>
    ),
  },
};

export const WithLeadingIconElement = {
  args: {
    children: (
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
  },
};

export const WithTrailingIconElement = {
  args: {
    children: (
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
  },
};

export const WithTrailingIconElementAndInError = {
  args: {
    children: (
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
  },
};

export const WithLeadingAvatarElement = {
  args: {
    children: (
      <FormControl>
        <FormLabel>Label</FormLabel>
        <InputGroup>
          <InputLeftElement>
            <Avatar className="[&>span]:h-6 [&>span]:w-6 flex items-center justify-center">
              <img
                alt="user"
                className="w-full h-full object-cover"
                src="avatar-img-1.jpg"
              />
            </Avatar>
          </InputLeftElement>
          <Input type="text" />
        </InputGroup>
      </FormControl>
    ),
  },
};

export const WithTrailingAvatarElement = {
  args: {
    children: (
      <FormControl>
        <FormLabel>Label</FormLabel>
        <InputGroup>
          <Input type="text" />
          <InputRightElement>
            <Avatar className="[&>span]:h-6 [&>span]:w-6 flex items-center justify-center">
              <img
                alt="user"
                className="w-full h-full object-cover"
                src="avatar-img-1.jpg"
              />
            </Avatar>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    ),
  },
};

export const WithLeadingTextElement = {
  args: {
    children: (
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
  },
};

export const WithTrailingTextElement = {
  args: {
    children: (
      <FormControl>
        <FormLabel>Label</FormLabel>
        <InputGroup>
          <Input type="text" className='pr-[60px]' />
          <InputRightElement className='w-[60px]'>
            <span className="font-semibold text-sm text-neutral-900">USD</span>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    ),
  },
};

export const WithLeadingSelectElement = {
  args: {
    children: (
      <FormControl>
        <FormLabel>Label</FormLabel>
        <InputGroup>
          <InputLeftElement className="w-[80px] flex justify-start pl-1">
            <select
              className={cn(
                'border-0',
                'focus:ring-primary-400',
                'focus:ring',
                'focus:ring-offset-1',
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
  },
};

export const WithTrailingSelectElement = {
  args: {
    children: (
      <FormControl>
        <FormLabel>Label</FormLabel>
        <InputGroup>
          <Input type="text" className="pr-[100px]" />
          <InputRightElement className="w-[100px] flex justify-end pr-1">
            <select
              className={cn(
                'border-0',
                'focus:ring-primary-400',
                'focus:ring',
                'focus:ring-offset-1',
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
  },
};

export const WithTrailingIconButton = {
  args: {
    children: (
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
  },
};

export const InputWithExternalAddons = {
  args: {
    children: (
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
  },
};

export const InputWithExternalAddonsAndInError = {
  args: {
    children: (
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
  },
};

export const ElementCommonUseCase = {
  args: {
    children: (
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
  },
};

export const ElementAndAddonCommonUseCase = {
  args: {
    children: (
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
  },
};

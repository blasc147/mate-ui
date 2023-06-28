import { FaceSmileIcon } from '@heroicons/react/20/solid';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from './button';
import {
  Dropdown,
  DropdownCheckboxItem,
  DropdownContent,
  DropdownGroup,
  DropdownHeader,
  DropdownItem,
  DropdownSeparator,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownTrigger,
} from './dropdown';

const Story: Meta = {
  title: 'Dropdown',
};
export default Story;

type Story = StoryObj;

export const Simple: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outlined">Button</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>Item</DropdownItem>
        <DropdownItem>Item</DropdownItem>
        <DropdownItem>Item</DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outlined">Button</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownHeader>Header</DropdownHeader>
        <DropdownItem>Item</DropdownItem>
        <DropdownItem>Item</DropdownItem>
        <DropdownItem>Item</DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outlined">Button</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownHeader>Header</DropdownHeader>
        <DropdownItem>Item</DropdownItem>
        <DropdownItem disabled>Item</DropdownItem>
        <DropdownItem>Item</DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outlined">Button</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownHeader>Header</DropdownHeader>

        <DropdownGroup>
          <DropdownItem>Item</DropdownItem>
          <DropdownItem>Item</DropdownItem>
          <DropdownItem>Item</DropdownItem>
        </DropdownGroup>

        <DropdownSeparator />
        <DropdownGroup>
          <DropdownItem>Item</DropdownItem>
          <DropdownItem>Item</DropdownItem>
        </DropdownGroup>

        <DropdownSeparator />
        <DropdownGroup>
          <DropdownItem>Item</DropdownItem>
        </DropdownGroup>
      </DropdownContent>
    </Dropdown>
  ),
};

export const WithLeadingIcon: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outlined">Button</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownHeader>Header</DropdownHeader>

        <DropdownItem>Item</DropdownItem>

        <DropdownItem className="gap-2">
          <FaceSmileIcon className="h-5 w-5" />
          Item
        </DropdownItem>

        <DropdownItem className="gap-2">
          <FaceSmileIcon className="h-5 w-5" />
          Item
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const WithTrailingIcon: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outlined">Button</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownHeader>Header</DropdownHeader>

        <DropdownItem>Item</DropdownItem>

        <DropdownItem className="justify-between">
          Item
          <FaceSmileIcon className="h-5 w-5" />
        </DropdownItem>

        <DropdownItem className="justify-between">
          Item
          <FaceSmileIcon className="h-5 w-5" />
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const WithTrailingText: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="outlined">Button</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownHeader>Header</DropdownHeader>

        <DropdownItem>Item</DropdownItem>

        <DropdownItem className="justify-between">
          <span>Item</span>
          <span className="font-regular text-xs text-neutral-600">Text</span>
        </DropdownItem>

        <DropdownItem className="justify-between">
          <span>Item</span>
          <span className="font-regular text-xs text-neutral-600">Text</span>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const WithCheckbox: Story = (() => {
  const Component = () => {
    const [checkedA, setCheckedA] = useState(false);
    const [checkedB, setCheckedB] = useState(false);

    return (
      <Dropdown>
        <DropdownTrigger asChild>
          <Button variant="outlined">Button</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownHeader>Header</DropdownHeader>

          <DropdownItem>Item</DropdownItem>
          <DropdownCheckboxItem
            checked={checkedA}
            onCheckedChange={setCheckedA}
          >
            Item
          </DropdownCheckboxItem>
          <DropdownCheckboxItem
            checked={checkedB}
            onCheckedChange={setCheckedB}
          >
            Item
          </DropdownCheckboxItem>
        </DropdownContent>
      </Dropdown>
    );
  };

  return {
    render: Component,
  };
})();

export const WithSubElements: Story = (() => {
  const Component = () => {
    const [checkedA, setCheckedA] = useState(false);
    const [checkedB, setCheckedB] = useState(false);
    return (
      <Dropdown>
        <DropdownTrigger asChild>
          <Button variant="outlined">Button</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownHeader>Header</DropdownHeader>

          <DropdownItem>Item</DropdownItem>

          <DropdownSub>
            <DropdownSubTrigger>Item</DropdownSubTrigger>
            <DropdownSubContent>
              <DropdownItem>Item</DropdownItem>
              <DropdownItem>Item</DropdownItem>
              <DropdownItem>Item</DropdownItem>
            </DropdownSubContent>
          </DropdownSub>

          <DropdownSub>
            <DropdownSubTrigger>Item</DropdownSubTrigger>
            <DropdownSubContent>
              <DropdownItem>Item</DropdownItem>

              <DropdownItem className="justify-between">
                Item
                <FaceSmileIcon className="h-5 w-5" />
              </DropdownItem>

              <DropdownItem className="justify-between">
                <span>Item</span>
                <span className="font-regular text-xs text-neutral-600">
                  Text
                </span>
              </DropdownItem>

              <DropdownItem className="gap-2" disabled>
                <FaceSmileIcon className="h-5 w-5" />
                Item
              </DropdownItem>
            </DropdownSubContent>
          </DropdownSub>

          <DropdownSub>
            <DropdownSubTrigger>Item</DropdownSubTrigger>
            <DropdownSubContent>
              <DropdownItem>Item</DropdownItem>
              <DropdownCheckboxItem
                checked={checkedA}
                onCheckedChange={setCheckedA}
                disabled
              >
                Item
              </DropdownCheckboxItem>
              <DropdownCheckboxItem
                checked={checkedB}
                onCheckedChange={setCheckedB}
              >
                Item
              </DropdownCheckboxItem>
            </DropdownSubContent>
          </DropdownSub>
        </DropdownContent>
      </Dropdown>
    );
  };

  return {
    render: Component,
  };
})();

export const WithMultipleAddons: Story = (() => {
  const Component = () => {
    const [checkedA, setCheckedA] = useState(false);
    const [checkedB, setCheckedB] = useState(false);
    const [checkedC, setCheckedC] = useState(false);
    const [checkedD, setCheckedD] = useState(false);

    return (
      <Dropdown>
        <DropdownTrigger asChild>
          <Button variant="outlined">Button</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownHeader>Header</DropdownHeader>

          <DropdownItem>Item</DropdownItem>

          <DropdownSub>
            <DropdownSubTrigger className="gap-2">
              <FaceSmileIcon className="h-5 w-5" />
              Item
            </DropdownSubTrigger>
            <DropdownSubContent>
              <DropdownItem>Item</DropdownItem>

              <DropdownSub>
                <DropdownSubTrigger className="p-0">
                  <DropdownCheckboxItem
                    checked={checkedA}
                    onCheckedChange={setCheckedA}
                  >
                    Item
                  </DropdownCheckboxItem>
                </DropdownSubTrigger>

                <DropdownSubContent>
                  <DropdownItem>Item</DropdownItem>

                  <DropdownSub>
                    <DropdownSubTrigger className="p-0">
                      <DropdownCheckboxItem
                        className="gap-2"
                        checked={checkedB}
                        onCheckedChange={setCheckedB}
                      >
                        <FaceSmileIcon className="h-5 w-5" />
                        Item
                      </DropdownCheckboxItem>
                    </DropdownSubTrigger>

                    <DropdownSubContent>
                      <DropdownItem>Item</DropdownItem>
                      <DropdownItem>Item</DropdownItem>
                      <DropdownItem>Item</DropdownItem>
                    </DropdownSubContent>
                  </DropdownSub>

                  <DropdownCheckboxItem
                    className="gap-2"
                    checked={checkedC}
                    onCheckedChange={setCheckedC}
                  >
                    <FaceSmileIcon className="h-5 w-5" />
                    Item
                    <span className="font-regular text-xs text-neutral-600 ml-auto">
                      Text
                    </span>
                  </DropdownCheckboxItem>
                </DropdownSubContent>
              </DropdownSub>

              <DropdownCheckboxItem
                checked={checkedD}
                onCheckedChange={setCheckedD}
              >
                Item
              </DropdownCheckboxItem>
            </DropdownSubContent>
          </DropdownSub>

          <DropdownItem className="gap-2">
            <FaceSmileIcon className="h-5 w-5" />
            Item
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    );
  };

  return {
    render: Component,
  };
})();

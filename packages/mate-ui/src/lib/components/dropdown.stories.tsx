import { FaceSmileIcon } from '@heroicons/react/20/solid';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from './button';
import { Checkbox } from './checkbox';
import {
  Dropdown,
  DropdownCheckItem,
  DropdownContent,
  DropdownGroup,
  DropdownHeader,
  DropdownItem,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSeparator,
  DropdownSub,
  DropdownSubContent,
  DropdownSubTrigger,
  DropdownText,
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
      <DropdownContent className="min-w-[336px]">
        <DropdownHeader>Header</DropdownHeader>

        <DropdownItem className="gap-2">
          <FaceSmileIcon className="h-5 w-5" />
          Item
        </DropdownItem>

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
      <DropdownContent className="min-w-[336px]">
        <DropdownHeader>Header</DropdownHeader>

        <DropdownItem className="justify-between">
          Item <FaceSmileIcon className="h-5 w-5" />
        </DropdownItem>

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
      <DropdownContent className="min-w-[336px]">
        <DropdownHeader>Header</DropdownHeader>

        <DropdownItem className="justify-between">
          Item
          <DropdownText>Text</DropdownText>
        </DropdownItem>

        <DropdownItem className="justify-between">
          Item
          <DropdownText>Text</DropdownText>
        </DropdownItem>

        <DropdownItem className="justify-between">
          Item
          <DropdownText>Text</DropdownText>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  ),
};

export const WithCheckItems: Story = (() => {
  const Component = () => {
    const [checkedA, setCheckedA] = useState(false);
    const [checkedB, setCheckedB] = useState(true);
    const [checkedC, setCheckedC] = useState(false);

    return (
      <Dropdown>
        <DropdownTrigger asChild>
          <Button variant="outlined">Button</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownCheckItem checked={checkedA} onCheckedChange={setCheckedA}>
            Item
          </DropdownCheckItem>

          <DropdownCheckItem checked={checkedB} onCheckedChange={setCheckedB}>
            Item
          </DropdownCheckItem>

          <DropdownCheckItem checked={checkedC} onCheckedChange={setCheckedC}>
            Item
          </DropdownCheckItem>
        </DropdownContent>
      </Dropdown>
    );
  };

  return {
    render: Component,
  };
})();

export const WithRadioItems: Story = (() => {
  type Options = 'a' | 'b' | 'c';

  const Component = () => {
    const [selectedOption, setSelectedOption] = useState<Options>('b');

    return (
      <Dropdown>
        <DropdownTrigger asChild>
          <Button variant="outlined">Button</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownRadioGroup
            value={selectedOption}
            onValueChange={(value) => setSelectedOption(value as Options)}
          >
            <DropdownRadioItem value={'a' satisfies Options}>
              Item
            </DropdownRadioItem>

            <DropdownRadioItem value={'b' satisfies Options}>
              Item
            </DropdownRadioItem>

            <DropdownRadioItem value={'c' satisfies Options}>
              Item
            </DropdownRadioItem>
          </DropdownRadioGroup>
        </DropdownContent>
      </Dropdown>
    );
  };

  return {
    render: Component,
  };
})();

export const WithSubElements: Story = (() => {
  type Options = 'a' | 'b' | 'c';

  const Component = () => {
    const [checkedA, setCheckedA] = useState(false);
    const [checkedB, setCheckedB] = useState(true);
    const [checkedC, setCheckedC] = useState(false);

    const [selectedOption, setSelectedOption] = useState<Options>('b');

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
              <DropdownCheckItem
                checked={checkedA}
                onCheckedChange={setCheckedA}
              >
                Item
                <DropdownText>Text</DropdownText>
              </DropdownCheckItem>
              <DropdownCheckItem
                checked={checkedB}
                onCheckedChange={setCheckedB}
              >
                Item
              </DropdownCheckItem>
              <DropdownCheckItem
                checked={checkedC}
                onCheckedChange={setCheckedC}
              >
                Item
              </DropdownCheckItem>
            </DropdownSubContent>
          </DropdownSub>

          <DropdownSub>
            <DropdownSubTrigger>Item</DropdownSubTrigger>
            <DropdownSubContent>
              <DropdownRadioGroup
                value={selectedOption}
                onValueChange={(value) => setSelectedOption(value as Options)}
              >
                <DropdownRadioItem value={'a' satisfies Options}>
                  Item
                  <DropdownText>Text</DropdownText>
                </DropdownRadioItem>

                <DropdownRadioItem value={'b' satisfies Options}>
                  Item
                </DropdownRadioItem>

                <DropdownRadioItem value={'c' satisfies Options}>
                  Item
                </DropdownRadioItem>
              </DropdownRadioGroup>
            </DropdownSubContent>
          </DropdownSub>

          <DropdownSub>
            <DropdownSubTrigger>Item</DropdownSubTrigger>
            <DropdownSubContent>
              <DropdownItem className="justify-between">
                Item
                <FaceSmileIcon className="h-5 w-5" />
              </DropdownItem>

              <DropdownItem className="justify-between">
                Item
                <DropdownText>Text</DropdownText>
              </DropdownItem>

              <DropdownSub>
                <DropdownSubTrigger>Item</DropdownSubTrigger>
                <DropdownSubContent>
                  <DropdownItem>Item</DropdownItem>
                  <DropdownItem>Item</DropdownItem>
                  <DropdownItem>Item</DropdownItem>
                </DropdownSubContent>
              </DropdownSub>
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
    return (
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
            Item
            <FaceSmileIcon className="ml-auto h-5 w-5" />
          </DropdownItem>

          <DropdownItem className="gap-2">
            Item
            <DropdownText>Text</DropdownText>
          </DropdownItem>

          <DropdownItem className="items-end gap-2">
            Item
            <DropdownText>Text</DropdownText>
            <FaceSmileIcon className="h-5 w-5" />
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    );
  };

  return {
    render: Component,
  };
})();

export const WithCheckboxComponent: Story = (() => {
  const Component = () => {
    const [checkedA, setCheckedA] = useState<boolean>(false);
    const [checkedB, setCheckedB] = useState<boolean>(true);
    const [checkedC, setCheckedC] = useState<boolean>(false);

    const isParentChecked = checkedA || checkedB || checkedC;
    const isParentIndeterminated = !checkedA || !checkedB || !checkedC;

    return (
      <Dropdown>
        <DropdownTrigger asChild>
          <Button variant="outlined">Button</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownSub>
            <DropdownSubTrigger>
              <Checkbox
                onClick={(event) => {
                  event.stopPropagation();
                }}
                indeterminate={isParentIndeterminated}
                checked={isParentChecked}
                onCheckedChange={() => {
                  setCheckedA(!isParentChecked);
                  setCheckedB(!isParentChecked);
                  setCheckedC(!isParentChecked);
                }}
              />
              Options
            </DropdownSubTrigger>

            <DropdownSubContent>
              <DropdownItem
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <Checkbox
                  checked={checkedA}
                  onCheckedChange={(value) => setCheckedA(value as boolean)}
                />
                A
              </DropdownItem>

              <DropdownItem
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <Checkbox
                  checked={checkedB}
                  onCheckedChange={(value) => setCheckedB(value as boolean)}
                />
                B
              </DropdownItem>

              <DropdownItem
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <Checkbox
                  checked={checkedC}
                  onCheckedChange={(value) => setCheckedC(value as boolean)}
                />
                C
              </DropdownItem>
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

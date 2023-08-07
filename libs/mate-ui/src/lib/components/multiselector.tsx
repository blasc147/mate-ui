'use client';
import React, { useContext, useEffect, useState } from 'react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '../utils';
import { Checkbox, CheckboxProps } from './checkbox';
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from './input';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Tag } from './tag';


interface MultiSelectorItemProps extends CheckboxProps {
  children?: React.ReactNode;
  className?: string;
}

const MultiSelectorItem = React.forwardRef(
  (
    {
      className,
      children,
      checked,
      label,
      onCheckedChange,
      ...props
    }: MultiSelectorItemProps,
    ref
  ) => {
    return (
      <div
        className={cn(
          'relative',
          'flex',
          'cursor-default',
          'select-none',
          'items-center',
          'rounded',
          'outline-none',
          'transition-colors',
          'focus:bg-neutral-100',
          'active:bg-neutral-200',
          'data-[disabled]:pointer-events-none',
          'data-[disabled]:text-neutral-500',
          'py-2',
          'px-3',
          'text-neutral-700',
          'text-m',
          'font-regular',
          'text-left',
          'cursor-pointer'
        )}
        onClick={() => onCheckedChange && onCheckedChange(!checked)}
      >
        <Checkbox
          ref={ref as React.Ref<HTMLButtonElement>}
          checked={checked}
          label={label}
          onCheckedChange={onCheckedChange}
        />
        {children}
      </div>
    );
  }
);

interface MultiSelectorProps {
  children?: React.ReactNode;
  className?: string;
  selectedItems?: MultiSelectorItemProps[];
  onDeleteAll?: React.RefCallback<void>;
  onDelete?: React.RefCallback<string>;
  placeholder?: string;
}

const MultiSelectorContext = React.createContext<MultiSelectorProps>({
  selectedItems: [],
  onDeleteAll: () => console.log('delete all'),
});

const MultiSelector = React.forwardRef(
  (
    {
      className,
      children,
      selectedItems,
      onDeleteAll,
      onDelete,
      placeholder,
      ...props
    }: MultiSelectorProps,
    ref
  ) => {
    return (
      <MultiSelectorContext.Provider
        value={{ selectedItems, onDeleteAll, onDelete, placeholder }}
      >
        <Popover>{children}</Popover>
      </MultiSelectorContext.Provider>
    );
  }
);

interface MultiSelectorTriggerProps {
  children?: React.ReactNode;
  className?: string;
}

const MultiSelectorTrigger = React.forwardRef(
  ({ className, children, ...props }: MultiSelectorTriggerProps, ref) => {
    return <PopoverTrigger>{children}</PopoverTrigger>;
  }
);

interface MultiSelectorFormFieldProps {
  children?: React.ReactNode;
  className?: string;
  label?: string;
}

const MultiSelectorFormField = React.forwardRef(
  (
    { className, children, label, ...props }: MultiSelectorFormFieldProps,
    ref
  ) => {
    const {
      selectedItems: items,
      onDeleteAll,
      onDelete,
      placeholder,
    } = useContext(MultiSelectorContext);
    const [selectedItems, setSelectedItems] = useState<
      MultiSelectorItemProps[]
    >([]);

    useEffect(() => {
      const newItems = items?.filter((item) => item.checked);
      newItems && setSelectedItems(newItems);
    }, [items]);
    return (
      <div className={cn('relative h-auto truncate', className)}>
        <FormControl ref={ref as React.Ref<HTMLDivElement>} className="h-auto">
          <FormLabel>{label}</FormLabel>
          <InputGroup>
            <InputRightElement>
              {selectedItems.length ? (
                <XMarkIcon
                  className="mr-2 h-4 w-4"
                  onClick={() => onDeleteAll && onDeleteAll()}
                />
              ) : null}
              <ChevronDownIcon className="mr-2 h-4 w-4" />
            </InputRightElement>
            <Input type="text" readOnly placeholder={placeholder} />
          </InputGroup>
        </FormControl>
        <div className="flex absolute top-3 z-10 truncate w-[80%]">
          {selectedItems.map(
            ({ label, value }: MultiSelectorItemProps, index) => {
              if (index === 3) {
                return <Tag key={value}>...</Tag>;
              }
              if (index < 3) {
                return (
                  <Tag
                    key={value}
                    className="ml-1"
                    rightIcon={
                      <XMarkIcon
                        className="h-2 w-2"
                        onClick={() =>
                          onDelete && value && onDelete(value as string)
                        }
                      />
                    }
                  >
                    {label}
                  </Tag>
                );
              }
              return;
            }
          )}
        </div>
      </div>
    );
  }
);

interface MultiSelectorContentProps {
  children?: React.ReactNode;
  className?: string;
}

const MultiSelectorContent = React.forwardRef(
  ({ className, children, ...props }: MultiSelectorContentProps, ref) => {
    return (
      <PopoverContent
        className={cn('p-0 bg-white max-h-[300px] overflow-y-auto', className)}
        ref={ref as React.Ref<HTMLDivElement>}
      >
        {children}
      </PopoverContent>
    );
  }
);

export {
  MultiSelector,
  MultiSelectorFormField,
  MultiSelectorTrigger,
  MultiSelectorContent,
  MultiSelectorItem,
  type MultiSelectorItemProps as Item,
};

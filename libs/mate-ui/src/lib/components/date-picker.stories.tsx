import React, { useState } from 'react';
import { CalendarIcon } from '@heroicons/react/20/solid';
import type { Meta } from '@storybook/react';
import { format } from 'date-fns';
import { cn } from '../utils';
import { DatePicker, DateRange } from './date-picker';
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from './input';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

const Story: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'DatePicker',
};
export default Story;

export const SimpleDatePicker = () => {
  const [date, setDate] = useState<Date>();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl className={cn('w-[270px]')}>
          <FormLabel>Label</FormLabel>
          <InputGroup>
            <InputRightElement>
              <CalendarIcon className="mr-2 h-4 w-4" />
            </InputRightElement>
            <Input
              type="text"
              value={date ? format(date, 'MM/dd/yyyy') : ''}
              placeholder="mm/dd/yyyy"
            />
          </InputGroup>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <DatePicker
          captionLayout="dropdown-buttons"
          fromYear={2015}
          toYear={2025}
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState<DateRange | undefined>();

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <div className={cn('flex space-x-2')}>
            <FormControl>
              <FormLabel>Label</FormLabel>
              <InputGroup>
                <Input
                  placeholder="mm/dd/yyyy"
                  type="text"
                  value={date?.from ? format(date.from, 'MM/dd/yyyy') : ''}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Label</FormLabel>
              <InputGroup>
                <Input
                  placeholder="mm/dd/yyyy"
                  type="text"
                  value={date?.to ? format(date.to, 'MM/dd/yyyy') : ''}
                />
              </InputGroup>
            </FormControl>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <DatePicker
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export function DatePickerWithRangeSingle({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState<DateRange | undefined>();

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl className={cn('w-[270px]')}>
            <FormLabel>Label</FormLabel>
            <InputGroup>
              <InputRightElement>
                <CalendarIcon className="mr-2 h-4 w-4" />
              </InputRightElement>
              <Input
                type="text"
                placeholder="mm/dd/yyyy - mm/dd/yyyy"
                value={
                  date?.from && date?.to
                    ? `${format(date.from, 'MM/dd/yyyy')} - ${format(
                        date.to,
                        'MM/dd/yyyy'
                      )}`
                    : ''
                }
              />
            </InputGroup>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <DatePicker
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

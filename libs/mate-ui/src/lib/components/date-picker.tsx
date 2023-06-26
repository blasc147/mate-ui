import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker as ReactDatePicker } from 'react-day-picker';
import { cn } from '../utils';
import { DateRange } from 'react-day-picker';

export type DatePickerProps = React.ComponentProps<typeof ReactDatePicker>;

function DatePicker({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: DatePickerProps) {
  return (
    <ReactDatePicker
      showOutsideDays={showOutsideDays}
      className={cn('p-4', className)}
      classNames={{
        months: 'flex space-x-4',
        month: 'space-y-4',
        caption_end: 'border-l pl-4 border-neutral-300',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-bold flex items-center text-neutral-900',
        nav: 'flex items-center',
        nav_button: 'h-7 w-7 bg-transparent p-0',
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full pl-4',
        head_row: 'flex',
        head_cell: 'rounded-md w-9 font-medium text-sm text-neutral-900',
        row: 'flex w-full mt-2',
        cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:border-2 border-primary-500 rounded text-sm text-neutral-900',
        day_selected: 'bg-primary-500 text-white',
        day_today:
          'text-primary-500  relative font-bold after:content-["•"] after:absolute after:bottom-[-4px] after:left-4',
        day_outside: '!text-neutral-500',
        day_disabled: 'text-neutral-500',
        caption_dropdowns: 'flex space-x-2',
        dropdown_month: 'relative',
        dropdown_year: 'relative',
        dropdown_icon: 'ml-1',
        vhidden: 'w-1 absolute top-0 hidden',
        dropdown:
          'w-1 absolute top-0 border-none bg-transparent !appearance-none opacity-0',
        day_range_middle: '!bg-primary-100 rounded-none !text-neutral-900',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-6 w-6 text-neutral-900" />,
        IconRight: () => <ChevronRight className="h-6 w-6 text-neutral-900" />,
      }}
      {...props}
    />
  );
}
DatePicker.displayName = 'DatePicker';

export { DatePicker, DateRange };

import * as React from 'react';
import {
  ChevronDownIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import { cn } from '../../utils';
import { Link } from '../link';
import { Tag } from '../tag';
import { Slot } from '@radix-ui/react-slot';

interface SupportiveTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  asChild?: boolean;
  className?: string;
}

const SupportiveText = ({ asChild, ...props }: SupportiveTextProps) => {
  const Comp = asChild ? Slot : 'p';

  return <Comp className="text-xs text-grey-600" {...props} />;
};

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & { hasPagination?: boolean }
>(({ className, hasPagination = false, ...props }, ref) => (
  <div
    className={cn(
      'w-full',
      'overflow-auto',
      'bg-white',
      'rounded-lg',
      'border',
      'border-grey-300',
      hasPagination ? 'rounded-b-none border-b-0' : ''
    )}
  >
    <table
      ref={ref}
      className={cn('w-full', 'caption-bottom', className)}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn('bg-grey-200', 'text-grey-400', className)}
    {...props}
  />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn('[&>tr]:border-b', className)} {...props} />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot ref={ref} className={className} {...props} />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr ref={ref} className={cn('border-grey-300', className)} {...props} />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & { desktopOnly?: boolean }
>(({ className, desktopOnly, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-4',
      'px-6',
      'py-3',
      'text-left',
      'text-grey-700',
      'font-medium',
      'text-xs',
      'align-middle',
      { 'hidden md:table-cell': desktopOnly },
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & {
    desktopOnly?: boolean;
    supportiveText?: string;
  }
>(({ className, desktopOnly, children, supportiveText, ...props }, ref) => {
  const isSupportedChildren =
    typeof children === 'string' ||
    (React.isValidElement(children) &&
      (children.type === Tag || children.type === Link));
  return (
    <td
      ref={ref}
      className={cn(
        'text-sm',
        'text-grey-800',
        'px-6',
        'py-4',
        'align-middle',
        { 'hidden md:table-cell': desktopOnly },
        className
      )}
      {...props}
    >
      {children}
      {isSupportedChildren && supportiveText && (
        <p className="text-xs text-grey-600">{supportiveText}</p>
      )}
    </td>
  );
});

TableCell.displayName = 'TableCell';
export type SortTableType = 'asc' | 'desc';

interface SortColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  sort?: SortTableType;
}

const SortColumn = ({ sort, className, ...props }: SortColumnProps) => {
  return (
    <div
      className={cn(
        'text-grey-500',
        'focus:outline-none',
        'focus-visible:ring-2',
        'ring-blue-200',
        'h-[20px]',
        'w-[20px]',
        'relative',
        'inline-flex',
        'justify-center',
        'items-center',
        'ml-1',
        'rounded',
        { 'top-1': !sort },
        className
      )}
      {...props}
    >
      {sort === 'asc' ? (
        <ChevronUpIcon className={cn('h-[12px]', 'w-[12px]')} />
      ) : sort === 'desc' ? (
        <ChevronDownIcon className={cn('h-[12px]', 'w-[12px]')} />
      ) : (
        <ChevronUpDownIcon className={cn('h-[20px]', 'w-[20px]', 'mb-2')} />
      )}
    </div>
  );
};

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  SortColumn,
  SupportiveText,
};

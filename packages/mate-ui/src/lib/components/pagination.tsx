import React from 'react';
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/20/solid';
import {
  Selector,
  SelectorContent,
  SelectorItem,
  SelectorTrigger,
  SelectorValue,
} from './selector';
import { FormControl } from './input';
import { IconButton } from './icon-button';
import { cn } from '../utils';

const ItemsCounter = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  return (
    <span className="text-base font-medium text-neutral-900">
      {`Page ${currentPage} of ${totalPages}`}
    </span>
  );
};

const PaginationButtons = ({
  onLastPage,
  onPrevPage,
  onNextPage,
  onFirstPage,
  canPreviousPage,
  canNextPage,
}: {
  onLastPage: () => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  onFirstPage: () => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
}) => {
  return (
    <div className="flex items-center gap-2 justify-self-center">
      <IconButton
        aria-label="firstPage"
        themeColor="neutral"
        onClick={onFirstPage}
        disabled={!canPreviousPage}
        variant="outlined"
        size={'sm'}
        icon={<ChevronDoubleLeftIcon />}
      />
      <IconButton
        aria-label="prevPage"
        themeColor="neutral"
        onClick={onPrevPage}
        disabled={!canPreviousPage}
        variant="outlined"
        size={'sm'}
        icon={<ChevronLeftIcon />}
      />

      <IconButton
        aria-label="nextPage"
        themeColor="neutral"
        onClick={onNextPage}
        disabled={!canNextPage}
        variant="outlined"
        size={'sm'}
        icon={<ChevronRightIcon />}
      />
      <IconButton
        aria-label="LastPage"
        themeColor="neutral"
        onClick={onLastPage}
        disabled={!canNextPage}
        variant="outlined"
        size={'sm'}
        icon={<ChevronDoubleRightIcon />}
      />
    </div>
  );
};

const Resizer = ({
  pagesSizes,
  currentPageSize,
  onChangePageSize,
}: {
  pagesSizes: string[];
  currentPageSize: string;
  onChangePageSize: (newPageSize: string) => void;
}) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-base font-normal">Rows per page</span>
      <FormControl className="w-16">
        <Selector
          selectorSize="sm"
          value={currentPageSize}
          onValueChange={onChangePageSize}
        >
          <SelectorTrigger>
            <SelectorValue placeholder="10" />
          </SelectorTrigger>
          <SelectorContent>
            {pagesSizes.map((pageSize) => (
              <SelectorItem value={pageSize} key={pageSize}>
                {pageSize}
              </SelectorItem>
            ))}
          </SelectorContent>
        </Selector>
      </FormControl>
    </div>
  );
};

const SelectedRows = ({
  selectedRows,
  totalRows,
}: {
  selectedRows: number;
  totalRows: number;
}) => {
  return (
    <span className="text-neutral-600">
      {selectedRows} of {totalRows} rows selected
    </span>
  );
};

type PageSize = (typeof PAGE_SIZES)[number];

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  currentPage?: number;
  pageSize?: PageSize;
  totalItems?: number;
  className?: string;
  showPageNumbers?: boolean;
  showRowSelection?: boolean;
  showPageNumber?: boolean;
  showButtons?: boolean;
  selectedRows?: number;
}

const Pagination = ({
  children,
  className,
  showRowSelection = false,
  selectedRows = 0,
  totalItems = 0,
}: PaginationProps) => {
  return (
    <div
      className={cn(
        'flex',
        'items-center',
        'rounded-b-lg',
        'border',
        'p-4',
        'gap-4',
        'border-neutral-300	',
        'border-t-0',
        className,
        showRowSelection ? 'justify-between' : 'justify-end'
      )}
    >
      {showRowSelection && (
        <SelectedRows selectedRows={selectedRows} totalRows={totalItems} />
      )}

      <div className="flex items-center gap-4 text-base">{children}</div>
    </div>
  );
};

const PAGE_SIZES = [10, 20, 30] as const;

export { Pagination, Resizer, PaginationButtons, ItemsCounter, PAGE_SIZES };

export type { PaginationProps, PageSize };

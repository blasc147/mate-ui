'use client';
import React, { useEffect, useState } from 'react';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  EllipsisVerticalIcon,
} from '@heroicons/react/20/solid';
import {
  Checkbox,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  ItemsCounter,
  Pagination,
  PaginationButtons,
  Resizer,
  SortColumn,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  cn,
} from '@chaco/mate-ui';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import { v4 as uuidv4 } from 'uuid';
import { TableProps } from '@/types/complex-list';

export const InvoicesTable: React.FC<TableProps> = ({
  columns,
  data,
  filters,
  status,
}) => {
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [checkboxStates, setCheckboxStates] = useState<Record<string, boolean>>(
    {}
  );

  const {
    headerGroups,
    rows,
    prepareRow,
    setFilter,
    page,
    state: { pageIndex, pageSize },
    nextPage,
    setPageSize,
    previousPage,
    gotoPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  useEffect(() => {
    setFilter('status', status);
    setFilter('id', filters);
  }, [status, filters, setFilter]);

  const handleRowCheckboxChange = (rowId) => {
    setCheckboxStates((prevSelectedRows) => ({
      ...prevSelectedRows,
      [rowId]: !prevSelectedRows[rowId],
    }));
  };

  const handleSelectAllCheckboxChange = () => {
    const newSelectAll = !selectAll;

    if (newSelectAll) {
      const newSelectedRows = {};
      rows.forEach((row) => {
        newSelectedRows[row.id] = true;
      });
      setCheckboxStates(newSelectedRows);
    } else {
      setCheckboxStates({});
    }

    setSelectAll(newSelectAll);
  };
  const selectedRows: number = Object.values(checkboxStates).reduce(
    (a: number, item) => a + (item === true ? 1 : 0),
    0
  ) as number;

  return (
    <>
      <Table hasPagination>
        {rows.length > 0 ? (
          <>
            <TableHeader className="h-11">
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getHeaderGroupProps()} key={uuidv4()}>
                  <TableHead className="w-9" key={uuidv4()}>
                    <Checkbox
                      checked={selectAll}
                      onCheckedChange={handleSelectAllCheckboxChange}
                    />
                  </TableHead>
                  {headerGroup.headers.map((column) => {
                    return (
                      <TableHead
                        {...column.getHeaderProps(
                          column.sortable && column.getSortByToggleProps()
                        )}
                        key={uuidv4()}
                        className={cn(
                          { 'px-4': column.sortable },
                          column.className
                        )}
                        desktopOnly={column.desktopOnly}
                        onClick={(e) => e.preventDefault()}
                      >
                        {column.sortable ? (
                          <div className="flex h-4 items-center space-x-2">
                            <Dropdown>
                              <DropdownTrigger asChild>
                                <button className="rounded px-2 py-1 hover:bg-grey-300">
                                  {column.render('Header')}
                                  <SortColumn
                                    sort={
                                      !column?.isSorted
                                        ? undefined
                                        : column.isSortedDesc
                                        ? 'desc'
                                        : 'asc'
                                    }
                                  />
                                </button>
                              </DropdownTrigger>
                              <DropdownContent align="start">
                                <DropdownItem
                                  onSelect={() => {
                                    column.toggleSortBy(false);
                                  }}
                                >
                                  <ArrowUpIcon className="mr-1 h-5 w-5" />
                                  Asc
                                </DropdownItem>
                                <DropdownItem
                                  onSelect={() => column.toggleSortBy(true)}
                                >
                                  <ArrowDownIcon className="mr-1 h-5 w-5" />
                                  Desc
                                </DropdownItem>
                              </DropdownContent>
                            </Dropdown>
                          </div>
                        ) : (
                          column.render('Header')
                        )}
                      </TableHead>
                    );
                  })}
                  <TableHead key={uuidv4()}></TableHead>
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {page.map((row) => {
                prepareRow(row);
                const isCheckboxChecked = checkboxStates[row.id] || false;

                return (
                  <TableRow
                    {...row.getRowProps()}
                    key={uuidv4()}
                    className={cn({
                      'bg-grey-200': isCheckboxChecked,
                    })}
                  >
                    <TableCell key={uuidv4()}>
                      <Checkbox
                        checked={isCheckboxChecked}
                        onCheckedChange={() => handleRowCheckboxChange(row.id)}
                      />
                    </TableCell>

                    {row.cells.map((cell) => (
                      <TableCell
                        {...cell.getCellProps({
                          style: {
                            minWidth: cell.column.minWidth,
                            width: cell.column.width,
                            maxWidth: cell.column.maxWidth,
                          },
                        })}
                        key={uuidv4()}
                        desktopOnly={cell.column.desktopOnly}
                      >
                        {cell.render('Cell')}
                      </TableCell>
                    ))}
                    <TableCell key={uuidv4()}>
                      <div className="flex  justify-end">
                        <EllipsisVerticalIcon className="h-4 w-4	" />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </>
        ) : (
          <div className="w-full p-6 text-center text-grey-500">
            We couldn't find any matches for that search
          </div>
        )}
      </Table>
      <Pagination
        selectedRows={selectedRows}
        totalItems={data.length}
        showRowSelection
        className="px-6"
      >
        <Resizer
          currentPageSize={`${pageSize}`}
          onChangePageSize={(newPageSize) => {
            setPageSize(parseInt(newPageSize, 10));
          }}
          pagesSizes={['10', '20', '30']}
        />
        <ItemsCounter
          currentPage={pageIndex + 1}
          totalPages={Math.ceil(rows.length / pageSize)}
        />
        <PaginationButtons
          canNextPage={pageIndex < Math.ceil(rows.length / pageSize) - 1}
          canPreviousPage={pageIndex > 0}
          onNextPage={() => nextPage()}
          onPrevPage={() => previousPage()}
          onLastPage={() => gotoPage(Math.ceil(rows.length / pageSize) - 1)}
          onFirstPage={() => gotoPage(0)}
        />
      </Pagination>
    </>
  );
};

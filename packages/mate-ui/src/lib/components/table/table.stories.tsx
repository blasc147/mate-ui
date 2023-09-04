/* eslint-disable react/jsx-key */

import React, { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../checkbox';
import {
  SortColumn,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';
import { useTable, useSortBy } from 'react-table';
import { invoices, tableColumns } from './mockData'
import { cn } from '../../utils';
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from '../dropdown';

function TableComponent() {
  const columns = React.useMemo(() => tableColumns, []);
  const [checkboxStates, setCheckboxStates] = useState({});
  const [selectAll, setSelectAll] = useState(false);

  const selectedRows: number = Object.values(checkboxStates).reduce(
    (a: number, item) => a + (item === true ? 1 : 0),
    0
  ) as number;

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

  const { getTableProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data: invoices,
      },
      useSortBy
    );

  return (
    <Table {...getTableProps()}>
      <TableHeader>
        {headerGroups.map((headerGroup, index) => (
          <TableRow {...headerGroup.getHeaderGroupProps()} key={index}>
            <TableHead desktopOnly>
              <Checkbox
                checked={selectAll}
                onCheckedChange={handleSelectAllCheckboxChange}
              />
            </TableHead>
            {headerGroup.headers.map((column, index) => {
              return (
                <TableHead
                  {...column.getHeaderProps(
                    column.isSortable && column.getSortByToggleProps()
                  )}
                  key={index}
                  className={cn({ 'px-4': column.isSortable }, column.styles)}
                  desktopOnly={column.desktopOnly}
                  isSortable={column.isSortable}
                  onClick={(e) => e.preventDefault()}
                >
                  {column.isSortable ? (
                    <div className="flex h-4 items-center space-x-2">
                      <Dropdown>
                        <DropdownTrigger asChild>
                          <button className="rounded px-2 py-1 hover:bg-neutral-300">
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
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => {
          prepareRow(row);
          const isCheckboxChecked = checkboxStates[row.id] || false;
          return (
            <TableRow {...row.getRowProps()} key={index}>
              <TableCell className='w-[55px]' desktopOnly>
                <Checkbox
                  checked={isCheckboxChecked}
                  onCheckedChange={() => handleRowCheckboxChange(row.id)}
                />
              </TableCell>
              {row.cells.map((cell, index) => {
                return (
                  <TableCell
                    {...cell.getCellProps({
                      style: {
                        minWidth: cell.column.minWidth,
                        width: cell.column.width,
                        maxWidth: cell.column.maxWidth,
                      },
                    })}
                    key={index}
                    desktopOnly={cell.column.desktopOnly}
                    supportiveText={cell.row.original.supportiveText}
                  >
                    {cell.render('Cell')}
                  </TableCell>
                );
                
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

const Story: Meta<typeof TableComponent> = {
  component: TableComponent,
  title: 'Table',
};

type Story = StoryObj<typeof TableComponent>;

export const Default: Story = {
  args: {},
};

export default Story;

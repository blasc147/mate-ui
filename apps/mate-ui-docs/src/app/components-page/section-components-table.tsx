'use client';
import React from 'react';
import {
  SortColumn,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@chaco/mate-ui';
import { Col, ColContainer } from '@components';
import { useTable, useSortBy } from 'react-table';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import useScreenSize from '@/hooks/useScreenSize';
import { headers } from './headers-data';
import { componentsData, linkItems } from './components-data';

const Components = () => {
  const screenSize = useScreenSize();
  const columns = React.useMemo(() => headers, []);
  const data = React.useMemo(() => componentsData, []);
  const { headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );
  return (
    <ColContainer>
      <Col size="main" className="h-fit">
        <Table>
          <TableHeader>
            {headerGroups.map((headerGroup, index) => (
              <TableRow {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column) => (
                  <TableHead
                    {...column.getHeaderProps(
                      column.sortable && column.getSortByToggleProps()
                    )}
                    key={column.name + index}
                    className={column.className}
                    desktopOnly={column.desktopOnly}
                  >
                    {column.render('Header')}
                    {column.sortable && <SortColumn />}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()} key={row.original.id}>
                  {row.cells.map((cell) => (
                    <TableCell
                      {...cell.getCellProps({
                        style: {
                          minWidth: cell.column.minWidth,
                          width: cell.column.width,
                          maxWidth: cell.column.maxWidth,
                        },
                      })}
                      key={cell.column.id}
                      desktopOnly={cell.column.desktopOnly}
                    >
                      {cell.render('Cell')}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Col>
      <Col
        size="aside"
        direction={
          screenSize === 'md' || screenSize === 'lg' || screenSize === 'xl'
            ? 'row'
            : 'col'
        }
        className="mt-10 h-fit 2xl:mt-0 2xl:border-l 2xl:border-grey-300"
      >
        {linkItems.map((item, index) => {
          return (
            <a
              key={index}
              className="mb-12 last-of-type:mb-0 last-of-type:mr-0 md:mr-12 md:w-1/3 2xl:w-full 2xl:pl-12"
              href={item.link}
              rel="noreferrer"
              target="_blank"
            >
              <div className="mb-2 flex items-center">
                {item.icon}
                <p className="ml-1 text-grey-600">{item.name}</p>
                <ArrowRightIcon className="ml-2 inline h-4 w-4 text-grey-700" />
              </div>
              <p className="text-grey-700">{item.description}</p>
            </a>
          );
        })}
      </Col>
    </ColContainer>
  );
};

export { Components };

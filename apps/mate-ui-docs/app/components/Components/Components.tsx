'use client';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  SortColumn,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@truenorth/mate-ui';
import { Col, ColContainer } from '@components';
import { componentsData, linkItems } from './componentsData';
import { headers } from './headersData';
import { useTable, useSortBy } from 'react-table';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const Components = () => {
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
      <Col size="main" className="h-fit max-w-[49rem]">
        <Table>
          <TableHeader>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()} key={uuidv4()}>
                {headerGroup.headers.map((column) => (
                  <TableHead
                    {...column.getHeaderProps(
                      column.sortable && column.getSortByToggleProps()
                    )}
                    key={uuidv4()}
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
                <TableRow {...row.getRowProps()} key={uuidv4()}>
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
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Col>

      <Col
        size="aside"
        direction="col"
        className="mt-10 h-fit md:mt-0 md:border-l md:border-neutral-300"
      >
        {linkItems.map((item) => {
          return (
            <a
              key={uuidv4()}
              className="mb-12 last-of-type:mb-0 md:pl-12"
              href={item.link}
              rel="noreferrer"
              target="_blank"
            >
              <div className="mb-2 flex items-center">
                {item.icon}
                <p className="ml-1 text-neutral-600">{item.name}</p>
                <ArrowRightIcon className="ml-2 inline h-4 w-4 text-neutral-700" />
              </div>
              <p className="text-neutral-700">{item.description}</p>
            </a>
          );
        })}
      </Col>
    </ColContainer>
  );
};

export { Components };

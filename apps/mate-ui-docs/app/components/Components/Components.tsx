'use client';
import React, { ReactNode } from 'react';
import { ArrowRightIcon, CheckBadgeIcon } from '@heroicons/react/20/solid';
import { v4 as uuidv4 } from 'uuid';
import {
  IconButton,
  SortColumn,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tag,
} from '@truenorth/mate-ui';
import { Col, ColContainer } from '@components';
import {
  FigmaIcon,
  GithubIcon,
  StorybookIcon,
} from 'apps/mate-ui-docs/app/_icons';
import { ProjectUrls } from '@/constants/routes';
import { Status, componentsList } from './componentsList';
import { useTable, useSortBy, Column } from 'react-table';

interface LinkItem {
  name: string;
  description: string;
  link: string;
  icon: ReactNode;
}
const headers: Column[] = [
  {
    Header: 'Component',
    accessor: 'name',
    sortable: true,
    minWidth: 140,
    width: 540,
    maxWidth: 900,
    Cell: ({ row }) => (
      <div>
        <p className="text-sm text-neutral-900">{row.original.name}</p>
        <p className="hidden text-xs text-neutral-600 md:block">
          {row.original.description}
        </p>
      </div>
    ),
  },
  {
    Header: 'Status',
    accessor: 'status',
    sortable: true,
    minWidth: 120,
    maxWidth: 120,
    Cell: ({ row }) => (
      <Tag
        themeColor={
          row.original.status === Status.Ready ? 'success' : 'neutral'
        }
        variant="status"
        rightIcon={<CheckBadgeIcon className="h-4 w-4 !text-neutral-700" />}
      >
        {row.original.status}
      </Tag>
    ),
  },
  {
    Header: 'Links',
    accessor: 'link',
    sortable: false,
    minWidth: 120,
    maxWidth: 120,
    Cell: ({ row }) => (
      <div className="flex">
        <IconButton
          icon={<FigmaIcon />}
          aria-label="FigmaIcon"
          themeColor="neutral"
          size="sm"
          className="mr-2 flex content-center justify-center"
          asChild
        >
          <a href={row.original.figmaLink} rel="noreferrer" target="_blank" />
        </IconButton>
        <IconButton
          icon={<StorybookIcon />}
          aria-label="StorybookIcon"
          themeColor="neutral"
          size="sm"
          className="flex content-center justify-center"
          asChild
        >
          <a
            href={row.original.storybookLink}
            rel="noreferrer"
            target="_blank"
          />
        </IconButton>
      </div>
    ),
  },
];

export const linkItems: LinkItem[] = [
  {
    name: 'Figma',
    description: 'Documentation, anatomy, variants and examples.',
    link: ProjectUrls.Figma,
    icon: <FigmaIcon />,
  },
  {
    name: 'Storybook',
    description:
      'Library of isolated component builds ready for development and testing.',
    link: ProjectUrls.Storybook,
    icon: <StorybookIcon />,
  },
  {
    name: 'Github',
    description:
      'Library of isolated component builds ready for development and testing.',
    link: ProjectUrls.Github,
    icon: <GithubIcon />,
  },
];

const Components = () => {
  const columns = React.useMemo(() => headers, []);
  const data = React.useMemo(() => componentsList, []);
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

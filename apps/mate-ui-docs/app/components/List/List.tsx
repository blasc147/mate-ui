'use client';
import React, { useEffect, useState } from 'react';
import Description from '../Description/Description';
import { invoices } from './mockData';
import useScreenSize from '@/hooks/useScreenSize';
import { Col } from '@components';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowUpTrayIcon,
  ArrowUturnRightIcon,
  CheckCircleIcon,
  DocumentPlusIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  FormControl,
  Header,
  HeaderSupportiveText,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  ItemsCounter,
  Pagination,
  PaginationButtons,
  Resizer,
  Selector,
  SelectorContent,
  SelectorItem,
  SelectorTrigger,
  SelectorValue,
  SortColumn,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tag,
  TagColorScheme,
  Tooltip,
  cn,
} from '@truenorth/mate-ui';
import { v4 as uuidv4 } from 'uuid';
import {
  useTable,
  useSortBy,
  useFilters,
  Column,
  usePagination,
} from 'react-table';
export type { Cell } from 'react-table';

enum PaymentStatus {
  Open = 'success',
  Paid = 'neutral',
}

const List = () => {
  const screenSize = useScreenSize();
  const [createTooltipOpen, setCreateTooltipOpen] = useState(false);
  const [makeTooltipOpen, setMakeTooltipOpen] = useState(false);
  const [uploadTooltipOpen, setUploadTooltipOpen] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState({});
  const handleCheckboxChange = (rowIndex) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [rowIndex]: !prevStates[rowIndex],
    }));
  };

  const handleCreateTooltipOpenChange = (open: boolean) => {
    setCreateTooltipOpen(open);
  };
  const handleMakeTooltipOpenChange = (open: boolean) => {
    setMakeTooltipOpen(open);
  };
  const handleUploadTooltipOpenChange = (open: boolean) => {
    setUploadTooltipOpen(open);
  };
  const columns = React.useMemo(() => tableColumns, []);
  const data = React.useMemo(() => invoices, []);
  const [selectedStatus, setSelectedStatus] = React.useState('');
  const [searchFilter, setSearchFilter] = React.useState('');
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
    setFilter('status', selectedStatus);
    setFilter('id', searchFilter);
  }, [selectedStatus, searchFilter, setFilter]);

  const selectedRows: number = Object.values(checkboxStates).reduce(
    (a: number, item) => a + (item === true ? 1 : 0),
    0
  ) as number;

  return (
    <div className="mx-auto flex flex-wrap justify-between gap-5 lg:pt-10">
      <Col size="main">
        <Card
          cardStyle="shadow"
          padding={screenSize === 'sm' ? 'none' : 'lg'}
          className={cn('w-full shadow-none')}
        >
          <CardHeader className="md:px-0">
            <CardTitle size="md" className="text-2xl md:text-3xl">
              Loan Manager
            </CardTitle>
            <div className="flex gap-3">
              <div className="hidden text-right md:block">
                <Header variant="h3">John Smith</Header>
                <HeaderSupportiveText variant="h5">
                  Account ID #10734181
                </HeaderSupportiveText>
              </div>
              <div className="bg-primary-200 flex h-12 w-12 rounded">
                <UserIcon className="text-primary-500 mx-auto h-8 w-8 self-center" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-col p-0 pt-4 md:px-0">
            <div className="flex flex-wrap gap-2 pb-6 lg:flex-nowrap lg:justify-between">
              <div className="hidden gap-3 pb-2 lg:flex lg:pb-0">
                <Tooltip
                  content="Create New"
                  open={createTooltipOpen}
                  defaultOpen={false}
                  onOpenChange={handleCreateTooltipOpenChange}
                  theme="dark"
                  placement="top"
                  align="center"
                >
                  <IconButton
                    size="md"
                    themeColor="primary"
                    icon={<DocumentPlusIcon />}
                    aria-label={'plus-button'}
                  />
                </Tooltip>
                <Tooltip
                  content="Make Payment"
                  open={makeTooltipOpen}
                  defaultOpen={false}
                  onOpenChange={handleMakeTooltipOpenChange}
                  theme="dark"
                  placement="top"
                  align="center"
                >
                  <IconButton
                    size="md"
                    themeColor="primary"
                    icon={<ArrowUturnRightIcon />}
                    aria-label={'dollarButton'}
                  />
                </Tooltip>
                <Tooltip
                  content="Upload Document"
                  open={uploadTooltipOpen}
                  defaultOpen={false}
                  onOpenChange={handleUploadTooltipOpenChange}
                  theme="dark"
                  placement="top"
                  align="center"
                >
                  <IconButton
                    size="md"
                    themeColor="primary"
                    icon={<ArrowUpTrayIcon />}
                    aria-label={'ArrowButton'}
                  />
                </Tooltip>
              </div>
              <div className="flex w-full flex-col gap-3 pb-2 sm:flex-row lg:hidden">
                <Button
                  size="md"
                  themeColor="primary"
                  leftIcon={<DocumentPlusIcon />}
                  aria-label={'plus-button'}
                  className="w-full"
                >
                  Create New
                </Button>
                <Button
                  size="md"
                  themeColor="primary"
                  leftIcon={<ArrowUturnRightIcon />}
                  aria-label={'dollarButton'}
                  className="w-full"
                >
                  Make Payment
                </Button>
                <Button
                  size="md"
                  themeColor="primary"
                  leftIcon={<ArrowUpTrayIcon />}
                  aria-label={'ArrowButton'}
                  className="w-full"
                >
                  Upload Document
                </Button>
              </div>
              <div className="flex w-full flex-wrap gap-2 md:pt-4 lg:justify-end lg:pt-0">
                <FormControl className="w-full md:w-[272px]" inputSize="md">
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="Search..."
                      onChange={(e) => setSearchFilter(e.target.value)}
                    />
                    <InputRightElement>
                      <MagnifyingGlassIcon className="h-5 w-5 text-neutral-700" />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl className="w-full md:w-[135px]">
                  <Selector
                    selectorSize="md"
                    value={selectedStatus}
                    onValueChange={setSelectedStatus}
                  >
                    <SelectorTrigger>
                      <SelectorValue placeholder="Status" />
                    </SelectorTrigger>
                    <SelectorContent>
                      <SelectorItem value="">All</SelectorItem>
                      <SelectorItem value="Open">Open Loans</SelectorItem>
                      <SelectorItem value="Paid">Paid Loans</SelectorItem>
                    </SelectorContent>
                  </Selector>
                </FormControl>
              </div>
            </div>
            <Table hasPagination>
              {rows.length > 0 ? (
                <>
                  <TableHeader className="h-11">
                    {headerGroups.map((headerGroup) => (
                      <TableRow
                        {...headerGroup.getHeaderGroupProps()}
                        key={uuidv4()}
                      >
                        <TableHead className="hidden w-9 lg:table-cell">
                          <Checkbox />
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
                              isSortable={column.sortable}
                              onClick={(e) => e.preventDefault()}
                            >
                              {column.sortable ? (
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
                                        onSelect={() =>
                                          column.toggleSortBy(true)
                                        }
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
                        <TableHead></TableHead>
                      </TableRow>
                    ))}
                  </TableHeader>
                  <TableBody>
                    {page.map((row, rowIndex) => {
                      prepareRow(row);
                      const isCheckboxChecked =
                        checkboxStates[`${pageIndex}${rowIndex}`] || false;
                      return (
                        <TableRow
                          {...row.getRowProps()}
                          key={uuidv4()}
                          className={cn({
                            'bg-neutral-200': isCheckboxChecked,
                          })}
                        >
                          <TableCell>
                            <Checkbox
                              checked={isCheckboxChecked}
                              onCheckedChange={() =>
                                handleCheckboxChange(`${pageIndex}${rowIndex}`)
                              }
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
                          <TableCell className="p-2">
                            <EllipsisVerticalIcon className="h-4 w-4" />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </>
              ) : (
                <div className="w-full p-6 text-center text-neutral-500">
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
                onLastPage={() =>
                  gotoPage(Math.ceil(rows.length / pageSize) - 1)
                }
                onFirstPage={() => gotoPage(0)}
              />
            </Pagination>
          </CardContent>
        </Card>
      </Col>

      <Col size="aside" direction="col">
        <Description
          paragraphText="Responsive design for a complex list, featuring different types of content."
          listItems={listItems}
        />
      </Col>
    </div>
  );
};
const listItems = [
  'Checkbox',
  'Icon Button',
  'Input',
  'Selector',
  'Table',
  'Tag',
];

const tableColumns: Column[] = [
  {
    Header: 'ID',
    accessor: 'id',
    sortable: true,
    desktopOnly: false,
    minWidth: 140,
    maxWidth: 140,
  },
  {
    Header: 'Loan Type',
    accessor: 'loanType',
    sortable: true,
    desktopOnly: true,
    minWidth: 140,
    width: 500,
    maxWidth: 500,
  },
  {
    Header: 'Payoff',
    accessor: 'payOff',
    minWidth: 120,
    maxWidth: 120,
    sortable: false,
    desktopOnly: true,
    className: 'text-right',
    Cell: ({ row }) => (
      <div className="text-right">{`$${row.original.payOff}`}</div>
    ),
  },
  {
    Header: 'Date Funded',
    minWidth: 150,
    maxWidth: 150,
    accessor: 'date',
    sortable: true,
    desktopOnly: false,
  },
  {
    Header: 'Status',
    accessor: 'status',
    minWidth: 120,
    maxWidth: 120,
    sortable: true,
    desktopOnly: true,
    Cell: ({ row }) => (
      <Tag
        size="sm"
        className="capitalize"
        colorScheme={PaymentStatus[row.original.status] as TagColorScheme}
      >
        {row.original.status}
      </Tag>
    ),
  },
  {
    Header: 'Autopay',
    accessor: 'autopay',
    minWidth: 120,
    maxWidth: 120,
    sortable: false,
    desktopOnly: true,
    Cell: ({ row }) => (
      <div className="flex gap-4">
        {row.original.autopay}
        {row.original.autopay === 'On' && (
          <CheckCircleIcon className="text-success-500 h-4 w-4 self-center" />
        )}
      </div>
    ),
  },
];

export { List };

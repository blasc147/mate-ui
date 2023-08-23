/* eslint-disable tailwindcss/no-custom-classname */
'use client';
import React from 'react';
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  ArrowsRightLeftIcon,
  CheckIcon,
  ClockIcon as ClockIconSolid,
} from '@heroicons/react/20/solid';
import {
  ArrowRightIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  PaperAirplaneIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
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
} from '@truenorth/mate-ui';
import { Routes } from '../../constants/routes';
import Description from '../Description/Description';
import { v4 as uuidv4 } from 'uuid';
import { Col } from '../Grid';
import { CopyToClipboard } from '../CopyToClipboard/copyToClipboard';
import { useTable, useSortBy, Column } from 'react-table';

interface Transactions {
  date: string;
  description: string;
  amount: string;
  balance: string;
}

const listItems = [
  'Button',
  'Card',
  'Icon Button',
  'Input',
  'Selector',
  'Table',
];

const headers: Column[] = [
  {
    Header: 'Date',
    accessor: 'date',
    sortable: true,
    minWidth: 140,
    maxWidth: 400,
    desktopOnly: false,
    Cell: ({ row }) => (
      <Tag
        themeColor={row.id === '0' ? 'warning' : 'neutral'}
        variant="status"
        withDot
        rightIcon={
          row.id === '0' ? (
            <ClockIconSolid className="text-warning-700 h-4 w-4" />
          ) : (
            <CheckIcon className="h-4 w-4" />
          )
        }
      >
        {row.original.date}
      </Tag>
    ),
  },
  {
    Header: 'Description',
    accessor: 'description',
    sortable: true,
    desktopOnly: true,
    minWidth: 140,
    maxWidth: 140,
    Cell: ({ row }) => (
      <>
        {row.original.description}
        <p className="text-xs text-neutral-600">supportiveText</p>
      </>
    ),
  },
  {
    Header: 'Amount',
    accessor: 'amount',
    sortable: true,
    desktopOnly: false,
    minWidth: 120,
    maxWidth: 120,
  },
  {
    Header: 'Balance',
    accessor: 'balance',
    sortable: true,
    desktopOnly: true,
    minWidth: 120,
    maxWidth: 120,
  },
];

const BaseDashboard = () => {
  const transactions: Transactions[] = [
    {
      date: 'Today, 12:46pm',
      description: 'Green Farmer’s Mkt',
      amount: '-$27.98',
      balance: '$11,495.30',
    },
    {
      date: '6/21/2023',
      description: 'Ashton Tax Prep',
      amount: '-$350.00',
      balance: '$11,495.30',
    },
    {
      date: '6/15/2023',
      description: 'Direct Deposit xxxx6977',
      amount: '$5,600.00',
      balance: '$11,495.30',
    },
  ];

  const ActionsCard = ({
    title,
    icon,
  }: {
    title: string;
    icon: React.ReactNode;
  }) => {
    return (
      <Card cardStyle="outline" className="mt-2 flex-1 md:mr-4 md:mt-0">
        <CardContent className="text-primary-500 flex items-center p-4 md:flex-col md:items-start md:justify-between">
          {icon}
          <h3 className="ml-4  font-bold md:ml-0">{title}</h3>
        </CardContent>
      </Card>
    );
  };
  const columns = React.useMemo(() => headers, []);
  const data = React.useMemo(() => transactions, []);
  const { headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  return (
    <Card cardStyle="shadow" className="w-full bg-neutral-50">
      <CardHeader className="md:flex-wrap-0 flex-wrap p-8 pb-0 md:px-14 md:pt-8">
        <CardTitle className="text-3xl">Hello Jane</CardTitle>
        <div className="my-4 space-x-2 md:my-0">
          <IconButton
            aria-label="Questions?"
            themeColor="primary"
            variant="outlined"
            icon={<QuestionMarkCircleIcon />}
          />
          <IconButton
            aria-label="Questions?"
            themeColor="primary"
            variant="outlined"
            icon={<ClockIcon />}
          />
          <IconButton
            aria-label="Questions?"
            themeColor="primary"
            variant="outlined"
            icon={<Cog6ToothIcon />}
          />
        </div>
      </CardHeader>
      <h3 className="mt-2 px-8 text-neutral-700 md:px-14">
        Tuesday, July 26, 2021
      </h3>

      <CardContent className="flex-col p-8 md:px-14 md:py-8">
        <div className="mb-4 flex flex-1 flex-col space-y-6 md:flex-row md:space-x-4 md:space-y-0">
          <Card
            cardStyle="outline"
            className="min-h-[180px] basis-full md:basis-1/2"
          >
            <CardHeader className="p-4">
              <CardTitle>Available Balance</CardTitle>
            </CardHeader>
            <CardContent className="mt-4 flex flex-col flex-wrap justify-between p-4 md:mt-0 md:flex-row md:items-end">
              <h1 className="mb-2 text-3xl font-medium">$ 11,495.30</h1>
              <div className="flex flex-col items-start space-y-3">
                <h3 className="mt-6 font-semibold md:mt-0">
                  TrueNorth Checking Account
                </h3>
                <div className="flex items-center justify-center">
                  <span className="text-xs">Acct #: ••••••••••••••••</span>
                  <EyeIcon className="ml-2 h-4 w-4" />
                  <CopyToClipboard tooltipText="Copy">
                    <ClipboardDocumentCheckIcon className="ml-2 h-4 w-4" />
                  </CopyToClipboard>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card
            cardStyle="outline"
            className="min-h-[180px] basis-full md:basis-1/2"
          >
            <CardHeader className="p-4">
              <CardTitle>Cash Flow</CardTitle>
              <div className="w-[129px]">
                <Selector value="thismonth">
                  <SelectorTrigger>
                    <SelectorValue placeholder="Select" />
                  </SelectorTrigger>
                  <SelectorContent>
                    <SelectorItem value="thismonth">This Month</SelectorItem>
                  </SelectorContent>
                </Selector>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col justify-between p-4 md:flex-row md:items-end">
              <div className="flex flex-col space-y-2">
                <span className="flex text-xs">
                  <ArrowTrendingUpIcon className="mr-2 h-4 w-4" />
                  Money In
                </span>
                <h1 className="text-success-500 text-3xl font-medium">
                  $5,600.00
                </h1>
              </div>

              <div className="mt-4 flex flex-col items-start space-y-2 md:mt-0">
                <span className="flex text-xs">
                  <ArrowTrendingDownIcon className="mr-2 h-4 w-4" />
                  Money Out
                </span>
                <h1 className="text-error-700 text-3xl font-medium">
                  -$577.98
                </h1>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-1 flex-col md:flex-row md:space-x-4">
          <Card
            cardStyle="outline"
            className="min-h-[180px] basis-full md:basis-1/2"
          >
            <CardHeader className="p-4">
              <CardTitle>Fund Your Account</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4 md:flex-row md:items-end md:space-y-0">
              <FormControl inputStyle="underlined">
                <FormLabel>Amount to fund</FormLabel>
                <InputGroup>
                  <InputLeftElement>
                    <span className="text-sm font-bold">$</span>
                  </InputLeftElement>
                  <Input type="number" pattern="\d*" />
                </InputGroup>
              </FormControl>
              <Button className="md:ml-8">Next</Button>
            </CardContent>
          </Card>
          <div className="mt-2 flex basis-full flex-col md:basis-1/2 md:flex-row md:flex-nowrap">
            <ActionsCard
              title="Request a Loan"
              icon={<CurrencyDollarIcon className="h-8 w-8" />}
            />
            <ActionsCard
              title="Send Money"
              icon={<PaperAirplaneIcon className="h-8 w-8" />}
            />
            <ActionsCard
              title="Transfer Funds"
              icon={<ArrowsRightLeftIcon className="h-8 w-8" />}
            />
          </div>
        </div>
        <div className="mt-4 flex flex-1 flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <Card cardStyle="outline" className="md:basis-2/3">
            <CardHeader>
              <CardTitle>Latest Transactions</CardTitle>
              <IconButton
                aria-label="Questions?"
                themeColor="primary"
                variant="ghost"
                icon={<ArrowRightIcon />}
              />
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  {headerGroups.map((headerGroup) => (
                    <TableRow
                      {...headerGroup.getHeaderGroupProps()}
                      key={uuidv4()}
                    >
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
            </CardContent>
          </Card>
          <div className="flex flex-1 flex-row space-x-4">
            <Card cardStyle="outline" className="flex-1">
              <CardHeader>
                <CardTitle>Linked Accounts</CardTitle>
                <IconButton
                  aria-label="Questions?"
                  themeColor="primary"
                  variant="ghost"
                  icon={<PlusIcon />}
                />
              </CardHeader>
              <CardContent className="flex flex-col justify-between">
                <h3 className="text-neutral-700">
                  Deposit funds, send money, make transfers
                </h3>
                <div className="mt-6">
                  <div className="flex justify-between">
                    <div className="text-sm">
                      <h4 className="font-semibold text-neutral-900">
                        Bank of America
                      </h4>
                      <span>Account ending 3499</span>
                    </div>
                    <div>
                      <IconButton
                        aria-label="Questions?"
                        themeColor="primary"
                        variant="ghost"
                        icon={<ArrowsRightLeftIcon />}
                      />
                      <IconButton
                        aria-label="Questions?"
                        themeColor="primary"
                        variant="ghost"
                        icon={<EllipsisVerticalIcon />}
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between">
                    <div className="text-sm">
                      <h4 className="font-semibold text-neutral-900">
                        Betterment
                      </h4>
                      <span>Account ending 8270</span>
                    </div>
                    <div>
                      <IconButton
                        aria-label="Questions?"
                        themeColor="primary"
                        variant="ghost"
                        icon={<ArrowsRightLeftIcon />}
                      />
                      <IconButton
                        aria-label="Questions?"
                        themeColor="primary"
                        variant="ghost"
                        icon={<EllipsisVerticalIcon />}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="mx-auto flex w-full flex-wrap justify-between gap-5 pt-12 md:w-auto">
      <Col size="main">
        <BaseDashboard />
      </Col>
      <Col size="aside" direction="col">
        <Description
          paragraphText="Responsive, consumer-facing dashboard for servicing a financial account, such as a bank account."
          listItems={listItems}
          onPreview={() => openInNewTab(Routes.DashboardPreview)}
        />
      </Col>
    </div>
  );
};

export { Dashboard, BaseDashboard };

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  TableHeader,
  TableRow,
  TableHead,
  SortColumn,
  Table,
  TableBody,
  TableCell,
  Tag,
  Checkbox,
  Header,
  HeaderSupportiveText,
  FormControl,
  InputGroup,
  InputRightElement,
  Input,
  Select,
  IconButton,
  TagColorScheme,
  SortTableType,
  cn,
  Selector,
  SelectorTrigger,
  SelectorContent,
  SelectorItem,
  SelectorValue,
} from '@truenorth/mate-ui';
import {
  UserCircleIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  CurrencyDollarIcon,
  ArrowUpTrayIcon,
  EllipsisVerticalIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid';
import { Col } from '@components';
import { invoices } from './mockData';
import Description from '../Description/Description';
import useScreenSize from '@/hooks/useScreenSize';

enum PaymentStatus {
  Open = 'success',
  Paid = 'neutral',
}

const List = () => {
  const screenSize = useScreenSize();

  return (
    <div className="flex gap-5 pt-10 mx-auto flex-wrap justify-between">
      <Col size="main">
        <Card
          cardStyle="shadow"
          padding={screenSize === 'sm' ? 'none' : 'lg'}
          className={cn('w-full', {
            'shadow-none': screenSize === 'sm',
            'border border-neutral-300': screenSize !== 'sm',
          })}
        >
          <CardHeader className="sm">
            <CardTitle size="md">
              <h1 className="text-2xl md:text-3xl">Loan Manager</h1>
            </CardTitle>
            <div className="flex gap-3">
              <div className="flex flex-col hidden lg:block">
                <Header variant="h3">John Smith</Header>
                <HeaderSupportiveText variant="h5">
                  Account ID #10734181
                </HeaderSupportiveText>
              </div>
              <div className="flex w-12 h-12 bg-neutral-300">
                <UserCircleIcon className="w-4 h-4 text-neutral-700 mx-auto self-center" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-col">
            <div className="flex pb-4 gap-2 md:justify-between flex-wrap">
              <div className="flex flex-wrap gap-2">
                <FormControl className="w-full md:w-64">
                  <InputGroup>
                    <Input type="text" />
                    <InputRightElement>
                      <MagnifyingGlassIcon className="text-neutral-700 h-5 w-5" />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl className="w-full md:w-[135px]">
                  <Selector value="open">
                    <SelectorTrigger>
                      <SelectorValue placeholder="Open Loans" />
                    </SelectorTrigger>
                    <SelectorContent>
                      <SelectorItem value="open">Open Loans</SelectorItem>
                    </SelectorContent>
                  </Selector>
                </FormControl>
              </div>

              <div className="flex w-full pb-2 md:w-1/4 md:justify-end gap-3">
                <IconButton
                  size={screenSize === 'sm' ? 'xl' : 'md'}
                  colorScheme="primary"
                  icon={<PlusIcon />}
                  aria-label={'plus-button'}
                />
                <IconButton
                  size={screenSize === 'sm' ? 'xl' : 'md'}
                  colorScheme="primary"
                  icon={<CurrencyDollarIcon />}
                  aria-label={'dollarButton'}
                />
                <IconButton
                  size={screenSize === 'sm' ? 'xl' : 'md'}
                  colorScheme="primary"
                  icon={<ArrowUpTrayIcon />}
                  aria-label={'ArrowButton'}
                />
              </div>
            </div>

            <ComplexListTable />
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

const ComplexListTable = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead desktopOnly>
          <Checkbox />
        </TableHead>
        {renderTableHeaders()}
      </TableRow>
    </TableHeader>

    <TableBody>
      {invoices.map((invoice) => (
        <TableRow key={invoice.date}>
          <TableCell className="min-w-[50px]" desktopOnly>
            <Checkbox />
          </TableCell>
          <TableCell>{invoice.loanId}</TableCell>
          <TableCell desktopOnly>{invoice.invoice}</TableCell>
          <TableCell
            className="text-right"
            desktopOnly
          >{`$${invoice.totalAmount}`}</TableCell>
          <TableCell>{invoice.date}</TableCell>
          <TableCell desktopOnly>
            <Tag
              className="capitalize"
              colorScheme={
                PaymentStatus[invoice.paymentStatus] as TagColorScheme
              }
            >
              {invoice.paymentStatus}
            </Tag>
          </TableCell>

          <TableCell desktopOnly>
            <div className="flex gap-3 ">
              {invoice.autopay}
              {invoice.autopay === 'On' && (
                <CheckCircleIcon className="w-3 h-3 self-center text-success-500" />
              )}
            </div>
          </TableCell>

          <TableCell>
            <EllipsisVerticalIcon className="h-4 w-4" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const renderTableHeaders = () => {
  return tableColumns.map((column, index) => (
    <TableHead
      key={index}
      className={column.alignment}
      style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
      desktopOnly={column.desktopOnly}
    >
      {column.name}
      {column.sortable && column.sortDirection && (
        <SortColumn sort={column.sortDirection as SortTableType} />
      )}
    </TableHead>
  ));
};

const tableColumns = [
  {
    name: 'Loan ID',
    minWidth: 95,
    maxWidth: 95,
    alignment: 'text-left',
    sortable: true,
    sortDirection: 'asc',
    desktopOnly: false,
  },
  {
    name: 'Loan Type',
    minWidth: '150px',
    maxWidth: '150px',
    alignment: 'text-left',
    sortable: true,
    sortDirection: 'asc',
    desktopOnly: true,
  },
  {
    name: 'Balance',
    minWidth: '100px',
    maxWidth: '100px',
    alignment: 'text-right',
    sortable: true,
    sortDirection: 'asc',
    desktopOnly: true,
  },
  {
    name: 'Date Funded',
    minWidth: '150px',
    maxWidth: '200px',
    alignment: 'text-left',
    sortable: true,
    sortDirection: 'desc',
    desktopOnly: false,
  },
  {
    name: 'Status',
    minWidth: '100px',
    maxWidth: '150px',
    alignment: 'text-left',
    sortable: true,
    sortDirection: 'asc',
    desktopOnly: true,
  },
  {
    name: 'Autopay',
    minWidth: '100px',
    maxWidth: '150px',
    alignment: 'text-right',
    sortable: true,
    sortDirection: 'asc',
    desktopOnly: true,
  },
  {
    // Empty header for additional space, if needed
    name: '',
    minWidth: '50px',
    maxWidth: '50px',
    alignment: 'text-left',
    sortable: false,
    desktopOnly: false,
  },
];

export { List };

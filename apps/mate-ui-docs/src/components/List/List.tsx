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
import DescriptionColumn from './DescriptionColumn';

enum PaymentStatus {
  Open = 'success',
  Paid = 'neutral',
}

const List = () => {
  return (
    <div className="flex gap-5 pt-12 mx-auto flex-wrap justify-between">
      <Col size="main">
        <Card cardStyle="shadow" padding="lg" className="w-full">
          <CardHeader>
            <CardTitle size="md">
              <h1 className="text-3xl">Loan Manager</h1>
            </CardTitle>
            <div className="flex gap-3">
              <div className="flex flex-col">
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
            <div className="flex justify-between pb-4">
              <div className="flex gap-2">
                <FormControl>
                  <InputGroup>
                    <Input type="text" />
                    <InputRightElement>
                      <MagnifyingGlassIcon className="text-neutral-700 h-5 w-5" />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl className="w-32">
                  <Select>
                    <option value="1">Open Loans</option>
                    <option value="2">Option 2</option>
                  </Select>
                </FormControl>
              </div>

              <div className="flex gap-3">
                <IconButton
                  size="md"
                  colorScheme="primary"
                  icon={<PlusIcon />}
                  aria-label={'plus-button'}
                />
                <IconButton
                  size="md"
                  colorScheme="primary"
                  icon={<CurrencyDollarIcon />}
                  aria-label={'dollarButton'}
                />
                <IconButton
                  size="md"
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
        <DescriptionColumn
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
        <TableHead>
          <Checkbox />
        </TableHead>
        {renderTableHeaders()}
      </TableRow>
    </TableHeader>

    <TableBody>
      {invoices.map((invoice) => (
        <TableRow key={invoice.date}>
          <TableCell className="min-w-[50px]">
            <Checkbox />
          </TableCell>
          <TableCell>{invoice.loanId}</TableCell>
          <TableCell>{invoice.invoice}</TableCell>
          <TableCell className="text-right">{`$${invoice.totalAmount}`}</TableCell>
          <TableCell>{invoice.date}</TableCell>
          <TableCell>
            <Tag
              className="capitalize"
              colorScheme={
                PaymentStatus[invoice.paymentStatus] as TagColorScheme
              }
            >
              {invoice.paymentStatus}
            </Tag>
          </TableCell>

          <TableCell>
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
    minWidth: '100px',
    maxWidth: '150px',
    alignment: 'text-left',
    sortable: true,
    sortDirection: 'asc',
  },
  {
    name: 'Loan Type',
    minWidth: '150px',
    maxWidth: '150px',
    alignment: 'text-left',
    sortable: true,
    sortDirection: 'asc',
  },
  {
    name: 'Balance',
    minWidth: '100px',
    maxWidth: '100px',
    alignment: 'text-right',
    sortable: true,
    sortDirection: 'asc',
  },
  {
    name: 'Date Funded',
    minWidth: '150px',
    maxWidth: '200px',
    alignment: 'text-left',
    sortable: true,
    sortDirection: 'desc',
  },
  {
    name: 'Status',
    minWidth: '100px',
    maxWidth: '150px',
    alignment: 'text-left',
    sortable: true,
    sortDirection: 'asc',
  },
  {
    name: 'Autopay',
    minWidth: '100px',
    maxWidth: '150px',
    alignment: 'text-right',
    sortable: true,
    sortDirection: 'asc',
  },
  {
    // Empty header for additional space, if needed
    name: '',
    minWidth: '50px',
    maxWidth: '50px',
    alignment: 'text-left',
    sortable: false,
  },
];

export { List };

'use client';
import React, { useState } from 'react';
import { invoices } from './table-mock-data';
import useScreenSize from '@/hooks/useScreenSize';
import {
  ArrowUpTrayIcon,
  ArrowUturnRightIcon,
  CheckCircleIcon,
  DocumentPlusIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  FormControl,
  Header,
  HeaderSupportiveText,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Selector,
  SelectorContent,
  SelectorItem,
  SelectorTrigger,
  SelectorValue,
  Tag,
  TagThemeColor,
  Tooltip,
  cn,
} from '@truenorth/mate-ui';
import { Column } from 'react-table';
import { InvoicesTable } from './section-table';
import { UserInfoDrawer } from './section-user-menu';
import { UserInfoDropDown } from './section-user-dropdown';
import { Invoice } from '@/types/complex-list';
export type { Cell } from 'react-table';

export const CardSection = () => {
  const screenSize = useScreenSize();
  const [createTooltipOpen, setCreateTooltipOpen] = useState<boolean>(false);
  const [makeTooltipOpen, setMakeTooltipOpen] = useState<boolean>(false);
  const [uploadTooltipOpen, setUploadTooltipOpen] = useState<boolean>(false);

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
  const data: Invoice[] = React.useMemo(() => invoices, []);
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [searchFilter, setSearchFilter] = React.useState<string>('');

  return (
    <div className="flex flex-wrap justify-between gap-5">
      <Card
        padding={screenSize === 'sm' ? 'none' : 'lg'}
        className={cn('w-full md:border md:border-neutral-300 md:shadow-lg')}
      >
        <CardHeader>
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
            {screenSize === 'sm' ? <UserInfoDrawer /> : <UserInfoDropDown />}
          </div>
        </CardHeader>
        <CardContent className="flex-col pt-4 ">
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
          <InvoicesTable
            columns={columns}
            data={data}
            filters={searchFilter}
            status={selectedStatus}
          />
        </CardContent>
      </Card>
    </div>
  );
};

enum PaymentStatus {
  Open = 'success',
  Paid = 'neutral',
}

const tableColumns: Column[] = [
  {
    Header: 'ID',
    accessor: 'id',
    sortable: true,
    desktopOnly: false,
    minWidth: 140,
    maxWidth: 500,
  },
  {
    Header: 'Loan Type',
    accessor: 'loanType',
    sortable: true,
    desktopOnly: true,
    minWidth: 140,
    width: 500,
    maxWidth: 900,
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
        themeColor={PaymentStatus[row.original.status] as TagThemeColor}
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

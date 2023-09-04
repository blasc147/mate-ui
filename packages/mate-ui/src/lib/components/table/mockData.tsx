import React, { ReactNode } from 'react';
import { UserIcon, PencilIcon } from '@heroicons/react/24/solid';
import { Avatar, AvatarFallback, AvatarImage } from '../avatar';
import { Button } from '../button';
import { Link } from '../link';
import { Tag, TagThemeColor } from '../tag';
import { SupportiveText } from './table';
export type { Cell } from 'react-table';

interface Invoice {
  invoice: string;
  status: string;
  totalAmount: number;
  paymentMethod: string;
  date: string;
  loanId: string;
  avatars: ReactNode[];
  balance?: number;
  supportiveText?:string;
}

export const invoices: Invoice[] = [
    {
      invoice: 'INV001',
      status: 'Paid',
      totalAmount: 250,
      paymentMethod: 'Credit Card',
      balance: 100002,
      date: '20/05/2023',
      loanId: '101',
      avatars: [<AvatarImage key={'INV001'} src="avatar-img-1.jpg" />],
      supportiveText:'supportiveText',
    },
    {
      invoice: 'INV002',
      status: 'Pending',
      totalAmount: 150,
      paymentMethod: 'PayPal',
      date: '21/05/2023',
      loanId: '102',
      avatars: [
        <AvatarImage key={'INV002'}src="avatar-img-1.jpg" />,
        <AvatarFallback key={'INV002-1'}>
          <UserIcon className="h-6 w-6" />
        </AvatarFallback>,
      ],
      supportiveText:'supportiveText',
    },
    {
      invoice: 'INV003',
      status: 'Unpaid',
      totalAmount: 350,
      paymentMethod: 'Bank Transfer',
      date: '21/05/2023',
      loanId: '103',
      avatars: [<AvatarImage key={'INV003'}src="avatar-img-1.jpg" />],
      supportiveText:'supportiveText',
    },
    {
      invoice: 'INV024',
      status: 'Paid',
      totalAmount: 450,
      paymentMethod: 'Credit Card',
      date: '23/05/2023',
      loanId: '103',
      avatars: [
        <AvatarImage key={'INV004'} src="avatar-img-1.jpg" />,
        <AvatarFallback key={'INV004-1'}>
          <UserIcon className="h-6 w-6" />
        </AvatarFallback>,
      ],
      supportiveText:'supportiveText',
    },
    {
      invoice: 'INV105',
      status: 'Paid',
      totalAmount: 550,
      paymentMethod: 'PayPal',
      date: '23/05/2023',
      loanId: '101',
      avatars: [<AvatarImage key={'INV005'} src="avatar-img-1.jpg" />],
      supportiveText:'supportiveText',
    },
    {
      invoice: 'INV016',
      status: 'Pending',
      totalAmount: 200,
      paymentMethod: 'Bank Transfer',
      date: '24/05/2023',
      loanId: '102',
      avatars: [
        <AvatarImage key={'INV006'} src="avatar-img-1.jpg" />,
        <AvatarFallback key={'INV006-1'}>
          <UserIcon className="h-6 w-6" />
        </AvatarFallback>,
      ],
      supportiveText:'supportiveText',
    },
    {
      invoice: 'INV007',
      status: 'Unpaid',
      totalAmount: 300,
      paymentMethod: 'Credit Card',
      date: '25/05/2023',
      loanId: '101',
      avatars: [
        <AvatarImage key={'INV007'} src="avatar-img-1.jpg" />,
        <AvatarFallback key={'INV007-1'}>
          <UserIcon className="h-6 w-6" />
        </AvatarFallback>,
      ],
      supportiveText:'supportiveText',
    },
  ];

  export interface CustomColumn {
    Header: string | ReactNode;
    accessor: string;
    desktopOnly: boolean;
    isSortable: boolean;
    styles: string;
  }
  declare module 'react-table' {
    interface HeaderGroup {
      isSortable?: boolean;
      desktopOnly?: boolean;
    }
  
    interface ColumnInstance {
      styles?: string;
    }
  }

  enum PaymentStatus {
    Pending = 'warning',
    Paid = 'success',
    Unpaid = 'error',
  }
  
export const tableColumns: CustomColumn[] = [
  {
    Header: 'Date',
    accessor: 'date',
    desktopOnly: false,
    isSortable: true,
    styles: '',
    minWidth: 150,
    maxWidth: 150,
  },
  {
    Header: 'Transaction ID',
    accessor: 'invoice',
    desktopOnly: true,
    isSortable: true,
    styles: '',
    minWidth: 155,
    maxWidth: 155,
    Cell: ({ row }) => (
      <>
        <div>{row.original.invoice}</div>
        <SupportiveText>{row.original.supportiveText}</SupportiveText>
      </>
    ),
  },
  {
    Header: 'Loan ID',
    accessor: 'loanId',
    desktopOnly: true,
    isSortable: true,
    styles: '',
    minWidth: 155,
    maxWidth: 155,
    Cell: ({ row }) => (
      <Link weight="light" asChild>
        <div className="flex">
          <button>{row.original.loanId}</button>
          <PencilIcon className="h-4 w-4" />
        </div>
      </Link>
    ),
  },
  {
    Header: 'Space',
    accessor: 'space',
    desktopOnly: true,
    isSortable: false,
    styles: '',
    minWidth: 155,
    maxWidth: 155,
  },
  {
    Header: 'Balance',
    accessor: 'balance',
    desktopOnly: false,
    isSortable: false,
    styles: 'text-right',
    minWidth: 155,
    maxWidth: 155,
    Cell: ({ row }) => (
      <div className="text-right">{`$${row.original.totalAmount}`}</div>
    ),
  },
  {
    Header: 'Status',
    accessor: 'status',
    desktopOnly: true,
    isSortable: true,
    styles: '',
    minWidth: 155,
    maxWidth: 155,
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
    Header: (
      <Button size={'sm'} className="absolute top-6">
        Header
      </Button>
    ),
    accessor: 'header',
    desktopOnly: true,
    isSortable: false,
    styles: '',
    minWidth: 155,
    maxWidth: 155,
    Cell: () => (
      <Button size="sm" themeColor="neutral">
        Button
      </Button>
    ),
  },
  {
    Header: 'Avatar',
    accessor: 'avatar',
    desktopOnly: true,
    isSortable: false,
    styles: '',
    minWidth: 155,
    maxWidth: 155,
    Cell: ({ row }) => (
      <div className="mb-2 flex">
        {row.original.avatars.map((avatar, index) => (
          <Avatar key={index} className="mb-4 mr-1 h-5 w-5">
            {avatar}
          </Avatar>
        ))}
      </div>
    ),
  },
];
  
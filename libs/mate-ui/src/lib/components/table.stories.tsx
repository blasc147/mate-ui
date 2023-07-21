import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Link } from './link';
import {
  SortColumn,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';
import { Tag } from './tag';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Checkbox } from './checkbox';
import { ReactNode } from 'react';
import { UserIcon } from '@heroicons/react/24/solid';
import { PencilIcon } from '@heroicons/react/24/solid';

export interface Invoice {
  invoice: string;
  paymentStatus: string;
  totalAmount: number;
  paymentMethod: string;
  date: string;
  loanId: string;
  avatars: ReactNode[];
  balance?: number;
}
const invoices: Invoice[] = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: 250,
    paymentMethod: 'Credit Card',
    balance: 100002,
    date: '20/05/2023',
    loanId: '101',
    avatars: [<AvatarImage src="avatar-img-1.jpg" />],
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: 150,
    paymentMethod: 'PayPal',
    date: '20/05/2023',
    loanId: '102',
    avatars: [
      <AvatarImage src="avatar-img-1.jpg" />,
      <AvatarFallback>
        <UserIcon className="h-6 w-6" />
      </AvatarFallback>,
    ],
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: 350,
    paymentMethod: 'Bank Transfer',
    date: '20/05/2023',
    loanId: '101',
    avatars: [<AvatarImage src="avatar-img-1.jpg" />],
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: 450,
    paymentMethod: 'Credit Card',
    date: '20/05/2023',
    loanId: '101',
    avatars: [
      <AvatarImage src="avatar-img-1.jpg" />,
      <AvatarFallback>
        <UserIcon className="h-6 w-6" />
      </AvatarFallback>,
    ],
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: 550,
    paymentMethod: 'PayPal',
    date: '20/05/2023',
    loanId: '101',
    avatars: [<AvatarImage src="avatar-img-1.jpg" />],
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: 200,
    paymentMethod: 'Bank Transfer',
    date: '20/05/2023',
    loanId: '101',
    avatars: [
      <AvatarImage src="avatar-img-1.jpg" />,
      <AvatarFallback>
        <UserIcon className="h-6 w-6" />
      </AvatarFallback>,
    ],
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: 300,
    paymentMethod: 'Credit Card',
    date: '20/05/2023',
    loanId: '101',
    avatars: [
      <AvatarImage src="avatar-img-1.jpg" />,
      <AvatarFallback>
        <UserIcon className="h-6 w-6" />
      </AvatarFallback>,
    ],
  },
];

function TableComponent() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead>
            Date
            <SortColumn sort="desc" />
          </TableHead>

          <TableHead>
            Transaction ID
            <SortColumn />
          </TableHead>

          <TableHead>
            Loan ID
            <SortColumn />
          </TableHead>

          <TableHead>Space</TableHead>

          <TableHead className="text-right">
            Balance
            <SortColumn />
          </TableHead>

          <TableHead>
            Status
            <SortColumn />
          </TableHead>

          <TableHead className="w-[0px]">
            <Button>Header</Button>
          </TableHead>
          <TableHead> Avatar</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.date}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell supportiveText="supportiveText">
              {invoice.invoice}
            </TableCell>
            <TableCell>
              <Link weight="light" asChild>
                <div className="flex">
                  <button>{invoice.loanId}</button>
                  <PencilIcon className="h-4 w-4" />
                </div>
              </Link>
            </TableCell>
            <TableCell></TableCell>
            <TableCell className="text-right">{`$${invoice.totalAmount}`}</TableCell>
            <TableCell>
              <Tag className="capitalize">{invoice.paymentStatus}</Tag>
            </TableCell>
            <TableCell className="text-right" desktopOnly>
              <Button themeColor="neutral">Button</Button>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex mb-2">
                {invoice.avatars.map((avatar) => (
                  <Avatar className="-mr-2 -mb-4">{avatar}</Avatar>
                ))}
              </div>
            </TableCell>
          </TableRow>
        ))}
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

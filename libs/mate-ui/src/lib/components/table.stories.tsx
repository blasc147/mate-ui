import { Meta } from '@storybook/react';
import {
  SortColumn,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';
import { Button } from './button';
import { Link } from './link';
import { Tag } from './tag';
import { Avatar } from './avatar';
const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: 250,
    paymentMethod: 'Credit Card',
    balance: 100002,
    date: '20/05/2023',
    loanId: '101',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: 150,
    paymentMethod: 'PayPal',
    date: '20/05/2023',
    loanId: '102',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: 350,
    paymentMethod: 'Bank Transfer',
    date: '20/05/2023',
    loanId: '101',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: 450,
    paymentMethod: 'Credit Card',
    date: '20/05/2023',
    loanId: '101',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: 550,
    paymentMethod: 'PayPal',
    date: '20/05/2023',
    loanId: '101',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: 200,
    paymentMethod: 'Bank Transfer',
    date: '20/05/2023',
    loanId: '101',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: 300,
    paymentMethod: 'Credit Card',
    date: '20/05/2023',
    loanId: '101',
  },
];

function TableComponent() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            Date
            <SortColumn sort="desc" />
          </TableHead>

          <TableHead desktopOnly>
            Transaction ID
            <SortColumn />
          </TableHead>

          <TableHead desktopOnly>
            Loan ID
            <SortColumn />
          </TableHead>

          <TableHead className="text-right" desktopOnly>
            Balance
            <SortColumn />
          </TableHead>

          <TableHead desktopOnly>
            Status
            <SortColumn />
          </TableHead>

          <TableHead className="w-[0px]"> Buttons</TableHead>
          <TableHead desktopOnly> Avatar</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.date}>
            <TableCell>{invoice.date}</TableCell>
            <TableCell desktopOnly supportiveText="supportiveText">
              {invoice.invoice}
            </TableCell>
            <TableCell desktopOnly>
              <Link weight="light" asChild>
                <button>{invoice.loanId}</button>
              </Link>
            </TableCell>
            <TableCell className="text-right">{`$${invoice.totalAmount}`}</TableCell>
            <TableCell desktopOnly>
              <Tag className="capitalize">{invoice.paymentStatus}</Tag>
            </TableCell>
            <TableCell className="text-right" desktopOnly>
              <Button colorScheme="neutral">Button</Button>
            </TableCell>
            <TableCell className="text-right" desktopOnly>
              <Avatar />
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

export const Default = {
  args: {},
};
export default Story;

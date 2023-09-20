import { Column } from 'react-table';
export interface TableProps {
  columns: Column[];
  data: Invoice[];
  filters: string;
  status: string;
}

export type Invoice = {
  id: string;
  loanType: 'Personal' | 'Business' | 'Auto';
  payOff: string;
  date: string;
  status: 'Open' | 'Paid';
  autopay: 'On' | 'Off';
};

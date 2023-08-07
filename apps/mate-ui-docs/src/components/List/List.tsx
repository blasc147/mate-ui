import {
  ArrowUpTrayIcon,
  ArrowUturnRightIcon,
  CheckCircleIcon,
  DocumentPlusIcon,
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
import { v4 as uuidv4 } from 'uuid';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  CloseButton,
  FormControl,
  Header,
  HeaderSupportiveText,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
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
  cn,
} from '@truenorth/mate-ui';
import { Col } from '@components';
import useScreenSize from '@/hooks/useScreenSize';
import Description from '../Description/Description';
import { invoices } from './mockData';

enum PaymentStatus {
  Open = 'success',
  Paid = 'neutral',
}

const List = () => {
  const screenSize = useScreenSize();

  return (
    <div className="flex gap-5 lg:pt-10 mx-auto flex-wrap justify-between">
      <Col size="main">
        <Card
          cardStyle="shadow"
          padding={screenSize === 'sm' ? 'none' : 'lg'}
          className={cn('w-full shadow-none')}
        >
          <CardHeader className="sm md:px-0">
            <CardTitle size="md" className="text-2xl md:text-3xl">
              Loan Manager
            </CardTitle>
            <div className="flex gap-3">
              <div className="hidden md:block text-right">
                <Header variant="h3">John Smith</Header>
                <HeaderSupportiveText variant="h5">
                  Account ID #10734181
                </HeaderSupportiveText>
              </div>
              <div className="flex w-12 h-12 bg-primary-200 rounded">
                <UserIcon className="w-8 h-8 text-primary-500 mx-auto self-center" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-col p-0 pt-4 md:px-0">
            <div className="flex pb-6 gap-2 flex-wrap lg:flex-nowrap lg:justify-between">
              <div className="hidden lg:flex pb-2 gap-3 lg:pb-0">
                <IconButton
                  size="md"
                  themeColor="primary"
                  icon={<DocumentPlusIcon />}
                  aria-label={'plus-button'}
                />
                <IconButton
                  size="md"
                  themeColor="primary"
                  icon={<ArrowUturnRightIcon />}
                  aria-label={'dollarButton'}
                />
                <IconButton
                  size="md"
                  themeColor="primary"
                  icon={<ArrowUpTrayIcon />}
                  aria-label={'ArrowButton'}
                />
              </div>
              <div className="w-full pb-2 gap-3 flex flex-col sm:flex-row lg:hidden">
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
              <div className="w-full flex flex-wrap gap-2 md:pt-4 lg:pt-0 lg:justify-end">
                <FormControl className="w-full md:w-[272px]" inputSize="md">
                  <InputGroup>
                    <Input type="text" placeholder="Search..." />
                    <InputRightElement>
                      <MagnifyingGlassIcon className="text-neutral-700 h-5 w-5" />
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <div className="w-full flex justify-between pt-2 md:w-[105px] md:justify-end lg:w-auto">
                  <p className="text-neutral-700 text-sm pl-0 md:pl-3">
                    Filter by:
                  </p>
                  <div className="flex items-center md:hidden">
                    <Link
                      colorScheme="neutral"
                      size="sm"
                      weight="light"
                      className="block md:hidden"
                    >
                      Clear filters
                    </Link>
                    <CloseButton />
                  </div>
                </div>
                <FormControl className="w-full md:w-[135px]">
                  <Selector selectorSize="md">
                    <SelectorTrigger>
                      <SelectorValue placeholder="Status" />
                    </SelectorTrigger>
                    <SelectorContent>
                      <SelectorItem value="open">Open Loans</SelectorItem>
                      <SelectorItem value="paid">Paid Loans</SelectorItem>
                    </SelectorContent>
                  </Selector>
                </FormControl>
                <FormControl className="w-full md:w-[135px]">
                  <Selector selectorSize="md">
                    <SelectorTrigger>
                      <SelectorValue placeholder="Autopay" />
                    </SelectorTrigger>
                    <SelectorContent>
                      <SelectorItem value="on">On</SelectorItem>
                      <SelectorItem value="off">Off</SelectorItem>
                    </SelectorContent>
                  </Selector>
                </FormControl>
                <Link
                  colorScheme="neutral"
                  size={
                    screenSize === 'sm' || screenSize === 'md' ? 'sm' : 'md'
                  }
                  weight="light"
                  className="hidden md:flex"
                >
                  Clear filters
                  <CloseButton />
                </Link>
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
    <TableHeader className="h-11">
      <TableRow>
        <TableHead className="hidden lg:flex lg:h-full lg:w-[70px]">
          <Checkbox />
        </TableHead>
        {renderTableHeaders()}
      </TableRow>
    </TableHeader>
    <TableBody>
      {invoices.map((invoice) => (
        <TableRow key={invoice.id} className="h-14">
          <TableCell className="hidden lg:min-w-[50px] lg:flex">
            <Checkbox />
          </TableCell>
          <TableCell>{invoice.id}</TableCell>
          <TableCell className="hidden md:flex">{invoice.loanType}</TableCell>
          <TableCell
            className="text-right"
            desktopOnly
          >{`$${invoice.payOff}`}</TableCell>
          <TableCell>{invoice.date}</TableCell>
          <TableCell desktopOnly>
            <Tag
              size="sm"
              className="capitalize"
              colorScheme={PaymentStatus[invoice.status] as TagColorScheme}
            >
              {invoice.status}
            </Tag>
          </TableCell>
          <TableCell desktopOnly>
            <div className="flex gap-4">
              {invoice.autopay}
              {invoice.autopay === 'On' && (
                <CheckCircleIcon className="w-4 h-4 self-center text-success-500" />
              )}
            </div>
          </TableCell>
          <TableCell className="p-2">
            <EllipsisVerticalIcon className="h-4 w-4" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const renderTableHeaders = () => {
  return tableColumns.map((column) => (
    <TableHead
      key={uuidv4()}
      className={column.style}
      desktopOnly={column.desktopOnly}
    >
      {column.name}
      {column.sortable && <SortColumn />}
    </TableHead>
  ));
};

const tableColumns = [
  {
    name: 'ID',
    style: 'lg:w-[290px]',
    sortable: true,
    desktopOnly: false,
  },
  {
    name: 'Loan Type',
    style: 'lg:w-[290px]',
    sortable: true,
    desktopOnly: true,
  },
  {
    name: 'Payoff',
    style: 'text-right lg:[290px]',
    sortable: false,
    desktopOnly: true,
  },
  {
    name: 'Date Funded',
    style: 'lg:w-[155px]',
    sortable: true,
    desktopOnly: false,
  },
  {
    name: 'Status',
    minWidth: '100px',
    maxWidth: '150px',
    style: 'lg:w-[120px]',
    sortable: true,
    desktopOnly: true,
  },
  {
    name: 'Autopay',
    minWidth: '100px',
    maxWidth: '150px',
    style: 'lg:w-[105px]',
    sortable: false,
    desktopOnly: true,
  },
  {
    // Empty header for additional space, if needed
    name: '',
    style: 'text-left lg:w-[68px]',
    sortable: false,
    desktopOnly: false,
  },
];

export { List };

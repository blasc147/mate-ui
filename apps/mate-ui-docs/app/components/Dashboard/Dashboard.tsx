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
import { Col } from '../Grid';
import { CopyToClipboard } from '../CopyToClipboard/copyToClipboard';

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
      <Card cardStyle="outline" className="flex-1 md:mr-4 mt-2 md:mt-0">
        <CardContent className="text-primary-500 flex md:flex-col md:justify-between md:items-start items-center p-4">
          {icon}
          <h3 className="font-bold  ml-4 md:ml-0">{title}</h3>
        </CardContent>
      </Card>
    );
  };

  return (
    <Card cardStyle="shadow" className="w-full bg-neutral-50">
      <CardHeader className="md:px-14 md:pt-8 p-8 pb-0 flex-wrap md:flex-wrap-0">
        <CardTitle className="text-3xl">Hello Jane</CardTitle>
        <div className="space-x-2 my-4 md:my-0">
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
      <h3 className="text-neutral-700 md:px-14 px-8 mt-2">
        Tuesday, July 26, 2021
      </h3>

      <CardContent className="flex-col md:px-14 md:py-8 p-8">
        <div className="flex flex-1 md:space-x-4 md:space-y-0 space-y-6 mb-4 flex-col md:flex-row">
          <Card
            cardStyle="outline"
            className="md:basis-1/2 min-h-[180px] basis-full"
          >
            <CardHeader className="p-4">
              <CardTitle>Available Balance</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row justify-between p-4 md:items-end mt-4 md:mt-0 flex-wrap">
              <h1 className="text-3xl font-medium mb-2">$ 11,495.30</h1>
              <div className="space-y-3 flex flex-col items-start">
                <h3 className="font-semibold mt-6 md:mt-0">
                  TrueNorth Checking Account
                </h3>
                <div className="flex justify-center items-center">
                  <span className="text-xs">Acct #: ••••••••••••••••</span>
                  <EyeIcon className="w-4 h-4 ml-2" />
                  <CopyToClipboard tooltipText='Copy'>
                    <ClipboardDocumentCheckIcon className="ml-2 h-4 w-4" />
                  </CopyToClipboard>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card
            cardStyle="outline"
            className="md:basis-1/2 min-h-[180px] basis-full"
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
            <CardContent className="flex justify-between p-4 md:items-end flex-col md:flex-row">
              <div className="flex flex-col space-y-2">
                <span className="flex text-xs">
                  <ArrowTrendingUpIcon className="w-4 h-4 mr-2" />
                  Money In
                </span>
                <h1 className="text-3xl font-medium text-success-500">
                  $5,600.00
                </h1>
              </div>

              <div className="space-y-2 flex flex-col items-start md:mt-0 mt-4">
                <span className="flex text-xs">
                  <ArrowTrendingDownIcon className="w-4 h-4 mr-2" />
                  Money Out
                </span>
                <h1 className="text-3xl font-medium text-error-700">
                  -$577.98
                </h1>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col md:flex-row flex-1 md:space-x-4">
          <Card
            cardStyle="outline"
            className="md:basis-1/2 min-h-[180px] basis-full"
          >
            <CardHeader className="p-4">
              <CardTitle>Fund Your Account</CardTitle>
            </CardHeader>
            <CardContent className="md:items-end flex flex-col md:flex-row space-y-4 md:space-y-0">
              <FormControl inputStyle="underlined">
                <FormLabel>Amount to fund</FormLabel>
                <InputGroup>
                  <InputLeftElement>
                    <span className="font-bold text-sm">$</span>
                  </InputLeftElement>
                  <Input type="number" pattern="\d*" />
                </InputGroup>
              </FormControl>
              <Button className="md:ml-8">Next</Button>
            </CardContent>
          </Card>
          <div className="flex flex-col md:flex-row md:flex-nowrap md:basis-1/2 basis-full mt-2">
            <ActionsCard
              title="Request a Loan"
              icon={<CurrencyDollarIcon className="w-8 h-8" />}
            />
            <ActionsCard
              title="Send Money"
              icon={<PaperAirplaneIcon className="w-8 h-8" />}
            />
            <ActionsCard
              title="Transfer Funds"
              icon={<ArrowsRightLeftIcon className="w-8 h-8" />}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-1 md:space-x-4 md:space-y-0 space-y-4 mt-4">
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
                  <TableRow>
                    <TableHead>
                      Date
                      <SortColumn sort="desc" />
                    </TableHead>

                    <TableHead desktopOnly>
                      Description
                      <SortColumn />
                    </TableHead>

                    <TableHead>
                      Amount
                      <SortColumn />
                    </TableHead>
                    <TableHead desktopOnly>
                      Balance
                      <SortColumn />
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {transactions.map((transaction, index) => (
                    <TableRow key={transaction.date}>
                      <TableCell>
                        <Tag
                          colorScheme={index === 0 ? 'warning' : 'neutral'}
                          variant="status"
                          rightIcon={
                            index === 0 ? (
                              <ClockIconSolid className="w-4 h-4 text-warning-700" />
                            ) : (
                              <CheckIcon className="w-4 h-4" />
                            )
                          }
                        >
                          {transaction.date}
                        </Tag>
                      </TableCell>
                      <TableCell desktopOnly supportiveText="supportiveText">
                        {transaction.description}
                      </TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell desktopOnly>{transaction.balance}</TableCell>
                    </TableRow>
                  ))}
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
                      <h4 className="text-neutral-900 font-semibold">
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
                  <div className="flex justify-between mt-6">
                    <div className="text-sm">
                      <h4 className="text-neutral-900 font-semibold">
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
    <div className="flex gap-5 pt-12 mx-auto flex-wrap justify-between w-full md:w-auto">
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

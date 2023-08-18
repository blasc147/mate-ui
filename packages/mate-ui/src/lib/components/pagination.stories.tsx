import { useState } from 'react';
import {
  ItemsCounter,
  Pagination,
  PaginationButtons,
  Resizer,
} from './pagination';
import type { Meta } from '@storybook/react';

const Story: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'Pagination',
};
export default Story;

export const Default = () => {
  const [rows, setRows] = useState('10');
  return (
    <Pagination showRowSelection>
      <Resizer
        currentPageSize={rows}
        onChangePageSize={setRows}
        pagesSizes={['10', '20', '30']}
      />
      <ItemsCounter currentPage={1} totalPages={10} />
      <PaginationButtons
        canNextPage={true}
        canPreviousPage={false}
        onNextPage={() => null}
        onPrevPage={() => null}
        onLastPage={() => null}
        onFirstPage={() => null}
      />
    </Pagination>
  );
};

export const NoRowSelection = () => {
  const [rows, setRows] = useState('10');
  return (
    <Pagination>
      <Resizer
        currentPageSize={rows}
        onChangePageSize={setRows}
        pagesSizes={['10', '20', '30']}
      />
      <ItemsCounter currentPage={1} totalPages={10} />
      <PaginationButtons
        canNextPage={true}
        canPreviousPage={false}
        onNextPage={() => null}
        onPrevPage={() => null}
        onLastPage={() => null}
        onFirstPage={() => null}
      />
    </Pagination>
  );
};

export const NoRowPerPage = () => {
  return (
    <Pagination showRowSelection>
      <ItemsCounter currentPage={1} totalPages={10} />
      <PaginationButtons
        canNextPage={true}
        canPreviousPage={false}
        onNextPage={() => null}
        onPrevPage={() => null}
        onLastPage={() => null}
        onFirstPage={() => null}
      />
    </Pagination>
  );
};

export const NoPageNumber = () => {
  const [rows, setRows] = useState('10');
  return (
    <Pagination showRowSelection>
      <Resizer
        currentPageSize={rows}
        onChangePageSize={setRows}
        pagesSizes={['10', '20', '30']}
      />
      <PaginationButtons
        canNextPage={true}
        canPreviousPage={false}
        onNextPage={() => null}
        onPrevPage={() => null}
        onLastPage={() => null}
        onFirstPage={() => null}
      />
    </Pagination>
  );
};

export const NoButtons = () => {
  const [rows, setRows] = useState('10');
  return (
    <Pagination showRowSelection>
      <Resizer
        currentPageSize={rows}
        onChangePageSize={setRows}
        pagesSizes={['10', '20', '30']}
      />
      <ItemsCounter currentPage={1} totalPages={10} />
    </Pagination>
  );
};

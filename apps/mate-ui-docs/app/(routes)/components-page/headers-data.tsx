import { Column } from 'react-table';
import { IconButton, Tag } from '@truenorth/mate-ui';
import { CheckBadgeIcon } from '@heroicons/react/20/solid';
import { FigmaIcon, StorybookIcon } from '@icons';
import { Status } from '@/types/component-list';

export const headers: Column[] = [
  {
    Header: 'Component',
    accessor: 'name',
    sortable: true,
    minWidth: 140,
    width: 540,
    maxWidth: 900,
    Cell: ({ row }) => (
      <div>
        <p className="text-sm text-neutral-900">{row.original.name}</p>
        <p className="hidden text-xs text-neutral-600 md:block">
          {row.original.description}
        </p>
      </div>
    ),
  },
  {
    Header: 'Status',
    accessor: 'status',
    sortable: true,
    minWidth: 120,
    maxWidth: 120,
    Cell: ({ row }) => (
      <Tag
        themeColor={
          row.original.status === Status.Ready ? 'success' : 'neutral'
        }
        variant="status"
        rightIcon={<CheckBadgeIcon className="h-4 w-4 !text-neutral-700" />}
      >
        {row.original.status}
      </Tag>
    ),
  },
  {
    Header: 'Links',
    accessor: 'link',
    sortable: false,
    minWidth: 120,
    maxWidth: 120,
    Cell: ({ row }) => (
      <div className="flex">
        <IconButton
          icon={<FigmaIcon />}
          aria-label="FigmaIcon"
          themeColor="neutral"
          size="sm"
          className="mr-2 flex content-center justify-center"
          asChild
        >
          <a href={row.original.figmaLink} rel="noreferrer" target="_blank" />
        </IconButton>
        <IconButton
          icon={<StorybookIcon />}
          aria-label="StorybookIcon"
          themeColor="neutral"
          size="sm"
          className="flex content-center justify-center"
          asChild
        >
          <a
            href={row.original.storybookLink}
            rel="noreferrer"
            target="_blank"
          />
        </IconButton>
      </div>
    ),
  },
];

import React, { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  TableHeader,
  TableRow,
  TableHead,
  SortColumn,
  Table,
  TableBody,
  TableCell,
  Tag,
  Header,
  IconButton,
} from '@truenorth/mate-ui';
import { CheckBadgeIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import { Col, ColContainer } from '@components';
import { FigmaIcon, StorybookIcon, GithubIcon } from '@icons';
import { ProjectUrls } from '@/constants/routes';
import { componentsList, Status } from './componentsList';

interface Header {
  name: string;
  hasSortColumn: boolean;
}

interface LinkItem {
  name: string;
  description: string;
  link: string;
  icon: ReactNode;
}

export const headers: Header[] = [
  {
    name: 'Component',
    hasSortColumn: true,
  },
  {
    name: 'Status',
    hasSortColumn: true,
  },
  {
    name: 'Links',
    hasSortColumn: false,
  },
];

export const linkItems: LinkItem[] = [
  {
    name: 'Figma',
    description: 'Documentation, anatomy, variants and examples.',
    link: ProjectUrls.Figma,
    icon: <FigmaIcon />,
  },
  {
    name: 'Storybook',
    description:
      'Library of isolated component builds ready for development and testing.',
    link: ProjectUrls.Storybook,
    icon: <StorybookIcon />,
  },
  {
    name: 'Github',
    description:
      'Library of isolated component builds ready for development and testing.',
    link: ProjectUrls.Github,
    icon: <GithubIcon />,
  },
];

const Components = () => {
  return (
    <ColContainer>
      <Col size="main" className="max-w-[49rem] h-fit">
        <Table>
          <TableHeader>
            <TableRow>
              {headers.map((header) => {
                return (
                  <TableHead key={uuidv4()} className="pr-0 md:pr-3">
                    {header.name}
                    {header.hasSortColumn && <SortColumn />}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {componentsList.map((component) => (
              <TableRow key={uuidv4()}>
                <TableCell>
                  <div>
                    <p className="text-sm text-neutral-900">{component.name}</p>
                    <p className="hidden text-xs text-neutral-600 md:block">
                      {component.description}
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <Tag
                    colorScheme={
                      component.status === Status.Ready ? 'success' : 'neutral'
                    }
                    variant="pill"
                    rightIcon={
                      <CheckBadgeIcon className="w-4 h-4 !text-neutral-700" />
                    }
                    className="text-neutral-900"
                  >
                    {component.status}
                  </Tag>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <IconButton
                      icon={<FigmaIcon />}
                      aria-label="FigmaIcon"
                      themeColor="neutral"
                      size="sm"
                      className="mr-2 flex justify-center content-center"
                      asChild
                    >
                      <a
                        href={component.figmaLink}
                        rel="noreferrer"
                        target="_blank"
                      />
                    </IconButton>
                    <IconButton
                      icon={<StorybookIcon />}
                      aria-label="StorybookIcon"
                      themeColor="neutral"
                      size="sm"
                      className="flex justify-center content-center"
                      asChild
                    >
                      <a
                        href={component.storybookLink}
                        rel="noreferrer"
                        target="_blank"
                      />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Col>

      <Col
        size="aside"
        direction="col"
        className="mt-10 md:mt-0 md:border-l md:border-neutral-300 h-fit"
      >
        {linkItems.map((item) => {
          return (
            <a
              key={uuidv4()}
              className="mb-12 md:pl-12 last-of-type:mb-0"
              href={item.link}
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex mb-2 items-center">
                {item.icon}
                <p className="ml-1 text-neutral-600">{item.name}</p>
                <ArrowRightIcon className="inline ml-2 w-4 h-4 text-neutral-700" />
              </div>
              <p className="text-neutral-700">{item.description}</p>
            </a>
          );
        })}
      </Col>
    </ColContainer>
  );
};

export { Components };

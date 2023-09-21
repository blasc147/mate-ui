'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@truenorth/mate-ui';
import { DashMenuIcon, ListMenuIcon } from '@icons';
import Link from 'next/link';
import { DescriptionHeader } from '@components';
import { Routes } from '@/constants/routes';

type GridDataProps = {
  title: string;
  icon: React.ReactElement;
  route: string;
};

const gridData: GridDataProps[] = [
  {
    title: 'Dashboard',
    icon: <DashMenuIcon width={180} height={122} />,
    route: Routes.Dashboard,
  },
  {
    title: 'Complex List',
    icon: <ListMenuIcon width={180} height={122} />,
    route: Routes.ComplexList,
  },
];

const Page = () => {
  return (
    <div className="flex flex-col">
      <DescriptionHeader
        paragraphText="Explore some examples of layouts built using Mate UI components"
        title="Examples"
      />

      <div className="grid gap-4 py-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {gridData.map((card, index) => (
          <Link key={index} href={card.route}>
            <Card
              cardStyle="shadow"
              className="border border-neutral-300"
              padding="sm"
            >
              <CardHeader>
                <CardTitle size="md">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="justify-center bg-neutral-200">
                {card.icon}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;

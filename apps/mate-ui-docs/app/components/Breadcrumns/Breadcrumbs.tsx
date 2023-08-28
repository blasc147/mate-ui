'use client';
import { Routes } from '@/constants/routes';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const Breadcrumbs = ({ prevPageName, currentPageName }) => {
  return (
    <div className="flex gap-2 text-sm text-neutral-600">
      <Link href={Routes.Examples} className="flex gap-2">
        <ArrowLeftIcon className="h-5 w-5" />
        <span>{prevPageName}</span>
      </Link>

      <span> / </span>
      <span className="text-neutral-400">{currentPageName}</span>
    </div>
  );
};

export { Breadcrumbs };

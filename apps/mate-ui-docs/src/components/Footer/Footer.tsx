import React from 'react';
import { chacoIcon } from '@icons';
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Routes, ProjectUrls } from '@/constants/routes';

export const Footer: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-6 pb-8 pt-40 sm:px-14">
      <div className="ml-2 text-sm font-normal text-grey-600 sm:w-1/2">
        © {new Date().getFullYear()} chaco
      </div>
      <div className="flex justify-end text-base font-semibold text-grey-600 sm:w-1/2">
        <Link
          href={Routes.Faqs}
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <QuestionMarkCircleIcon className="h-4 w-4" />
          <p className="mx-2 sm:mr-8">FAQs</p>
        </Link>
        <Link
          href={ProjectUrls.chaco}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <chacoIcon />
          <p className="ml-1">chaco</p>
        </Link>
      </div>
    </div>
  );
};

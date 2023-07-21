/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { MateLogo } from '@icons';
import {
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  Link,
} from '@truenorth/mate-ui';
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import { Routes } from '@/constants/routes';

const Sidenav = () => {
  const router = useRouter();
  return (
    <nav>
      <div className="pb-12">
        <Link href="/">
          <MateLogo />
        </Link>
      </div>
      <div className="pb-12">
        <InputGroup>
          <Input type="text" className="border-r-0" />
          <InputRightAddon className="flex justify-center items-center px-1 border-l-0">
            <Button themeColor="neutral" variant="ghost" size="sm">
              <MagnifyingGlassIcon className="text-neutral-400 h-5 w-5" />
            </Button>
          </InputRightAddon>
        </InputGroup>
      </div>

      <div className="flex flex-col text-neutral-700 border-b border-neutral-300 pb-6">
        <Button
          variant="ghost"
          themeColor="neutral"
          className="justify-start px-2 mb-2"
        >
          Introduction
        </Button>
        <Button
          variant="ghost"
          themeColor="neutral"
          className="justify-start px-2"
          onClick={() => router.push(Routes.Examples)}
        >
          Examples
        </Button>
      </div>
      <div className="flex flex-col text-neutral-700 pt-6">
        <Button
          variant="ghost"
          themeColor="neutral"
          className="justify-between px-2 mb-2"
          rightIcon={<ChevronRightIcon />}
        >
          Getting Started
        </Button>
        <Button
          variant="ghost"
          themeColor="neutral"
          className="justify-between px-2 mb-2"
          rightIcon={<ChevronRightIcon />}
        >
          Foundations
        </Button>
        <Button
          variant="ghost"
          themeColor="neutral"
          className="justify-start px-2 mb-2"
        >
          Components
        </Button>
        <Button
          variant="ghost"
          themeColor="neutral"
          className="justify-start px-2"
        >
          Patters
        </Button>
      </div>
    </nav>
  );
};

export default Sidenav;

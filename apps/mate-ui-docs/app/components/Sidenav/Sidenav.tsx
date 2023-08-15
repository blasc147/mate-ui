import React from 'react';
import { useRouter } from 'next/navigation';
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import {
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  Link,
} from '@truenorth/mate-ui';
import { MateLogo } from '@icons';
import { Routes } from '@/constants/routes';

export const Sidenav = () => {
  const navigation = useRouter();
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
          <InputRightAddon className="flex items-center justify-center border-l-0 px-1">
            <Button themeColor="neutral" variant="ghost" size="sm">
              <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" />
            </Button>
          </InputRightAddon>
        </InputGroup>
      </div>

      <div className="flex flex-col border-b border-neutral-300 pb-6 text-neutral-700">
        <Button
          variant="ghost"
          themeColor="neutral"
          className="mb-2 justify-start px-2"
        >
          Introduction
        </Button>
        <Button
          variant="ghost"
          themeColor="neutral"
          className="justify-start px-2"
          onClick={() => navigation.push(Routes.Examples)}
        >
          Examples
        </Button>
      </div>
      <div className="flex flex-col pt-6 text-neutral-700">
        <Button
          variant="ghost"
          themeColor="neutral"
          className="mb-2 justify-between px-2"
          rightIcon={<ChevronRightIcon />}
        >
          Getting Started
        </Button>
        <Button
          variant="ghost"
          themeColor="neutral"
          className="mb-2 justify-between px-2"
          rightIcon={<ChevronRightIcon />}
        >
          Foundations
        </Button>
        <Button
          variant="ghost"
          themeColor="neutral"
          className="mb-2 justify-start px-2"
          onClick={() => navigation.push(Routes.Components)}
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

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
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
  cn,
} from '@truenorth/mate-ui';
import { MateLogo } from '@icons';
import { Routes } from '@/constants/routes';

const SidenavItem = ({
  onClick,
  isActive,
  children,
  rightIcon,
}: {
  onClick?: () => void;
  isActive?: boolean;
  children: React.ReactNode;
  rightIcon?: React.ReactNode;
}) => {
  return (
    <Button
      variant="ghost"
      themeColor="neutral"
      rightIcon={rightIcon}
      className={cn('mb-2 justify-start px-2', {
        '!bg-neutral-200': isActive,
        'justify-between': rightIcon,
      })}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export const Sidenav = () => {
  const navigation = useRouter();
  const pathName = usePathname().substring(1);
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
        <SidenavItem
          onClick={() => navigation.push(Routes.Introduction)}
          isActive={pathName === Routes.Introduction}
        >
          Introduction
        </SidenavItem>
        <SidenavItem
          isActive={pathName === Routes.Examples}
          onClick={() => navigation.push(Routes.Examples)}
        >
          Examples
        </SidenavItem>
      </div>
      <div className="flex flex-col pt-6 text-neutral-700">
        <SidenavItem
          rightIcon={<ChevronRightIcon />}
          isActive={pathName === Routes.GettingStarted}
          onClick={() => navigation.push(Routes.GettingStarted)}
        >
          Getting Started
        </SidenavItem>
        <SidenavItem
          rightIcon={<ChevronRightIcon />}
          isActive={pathName === Routes.Foundations}
          onClick={() => navigation.push(Routes.Foundations)}
        >
          Foundations
        </SidenavItem>
        <SidenavItem
          isActive={pathName === Routes.Components}
          onClick={() => navigation.push(Routes.Components)}
        >
          Components
        </SidenavItem>
        <SidenavItem
          isActive={pathName === Routes.Patterns}
          onClick={() => navigation.push(Routes.Patterns)}
        >
          Patters
        </SidenavItem>
      </div>
    </nav>
  );
};

export default Sidenav;

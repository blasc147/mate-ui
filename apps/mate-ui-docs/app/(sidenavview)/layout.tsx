'use client';
import { Sidenav } from '@components';
import { Bars3Icon } from '@heroicons/react/20/solid';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerSides,
  DrawerTrigger,
  Link,
} from '@truenorth/mate-ui';
import React from 'react';
import { MateLogo } from '../_icons/mate-logo-sidenav';

type Props = {
  children: React.ReactElement;
};

const SidenavLayout = ({ children }: Props) => {
  return (
    <>
      {/* Desktop navbar */}
      <div className="hidden sm:hidden lg:flex lg:h-full ">
        <div className="hidden h-full px-8 py-6 lg:block lg:w-[16rem]">
          <Sidenav />
        </div>
        <div className="mx-auto hidden h-full w-full max-w-[1536px] px-8 py-20 lg:block">
          {children}
        </div>
      </div>
      {/* Mobile navbar */}
      <div className="flex flex-col lg:hidden">
        <div className="flex w-full justify-between px-6 py-4">
          <Link href="/" className="lg:hidden">
            <MateLogo />
          </Link>
          <Drawer>
            <DrawerTrigger>
              <Bars3Icon className="h-5 w-5" />
            </DrawerTrigger>
            <DrawerContent side={DrawerSides.Left}>
              <DrawerBody className="h-[85vh]">
                <Sidenav />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <div className="h-full w-full px-6 pb-10 pt-8 lg:hidden">{children}</div>
    </>
  );
};

export default SidenavLayout;

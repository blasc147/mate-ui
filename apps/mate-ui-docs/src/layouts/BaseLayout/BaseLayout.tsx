import React from 'react';
import Head from 'next/head';
import { Bars3Icon } from '@heroicons/react/20/solid';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerSides,
  DrawerTrigger,
} from '@truenorth/mate-ui';
import Sidenav from '../../components/Sidenav/Sidenav';

type Props = {
  children: React.ReactElement;
  title?: string;
};

export const BaseLayout = ({ children, title = 'Mate UI' }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Desktop navbar */}
      <div className="hidden sm:hidden lg:flex lg:h-full ">
        <div className="hidden h-full px-8 py-6 lg:block lg:w-[16rem]">
          <Sidenav />
        </div>
        <div className="hidden w-full h-full px-8 py-20 lg:block">
          {children}
        </div>
      </div>
      {/* Mobile navbar */}
      <div className="flex flex-col lg:hidden">
        <div className="flex justify-end w-full px-6 py-6 lg:none">
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
        <div className="w-full h-full px-6 pt-8 pb-10 lg:hidden">
          {children}
        </div>
      </div>
    </>
  );
};

export default BaseLayout;

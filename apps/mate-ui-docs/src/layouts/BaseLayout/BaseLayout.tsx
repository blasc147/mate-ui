/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from "react";
import Head from "next/head";
import { Bars3Icon } from '@heroicons/react/20/solid';
import Sidenav from '../../components/Sidenav/Sidenav';
import { Drawer, DrawerBody, DrawerContent, DrawerSides, DrawerTrigger } from '@truenorth/mate-ui';

type Props = {
  children: React.ReactElement;
  title?: string;
};

export const BaseLayout = ({
  children,
  title = "Mate UI",
}: Props) => {

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {/* Desktop navbar */}
      <div className="hidden md:flex md:h-full ">
        <div className="hidden h-full px-8 py-6 md:block md:w-[16rem]">
          <Sidenav />
        </div>
        <div className="hidden w-full h-full px-8 py-20 md:block">
          {children}
        </div>
      </div>
      {/* Mobile navbar */}
      <div className="flex flex-col md:hidden">
        <div className="flex justify-end w-full px-8 py-6 md:none">
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
        <div className="w-full h-full px-8 py-10 md:hidden">{children}</div>
      </div>
    </>
  );
};

export default BaseLayout;

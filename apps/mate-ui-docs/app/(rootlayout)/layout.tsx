'use client';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerSides,
  DrawerTrigger,
} from '@truenorth/mate-ui';
import '@styles';
import { Sidenav } from '@components';


type Props = {
  children: React.ReactElement;
};

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <html lang="en">
        <body>
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
          </div>
          <div className="w-full h-full px-6 pt-8 pb-10 lg:hidden">
            {children}
          </div>
        </body>
      </html>
    </>
  );
};

export default RootLayout;

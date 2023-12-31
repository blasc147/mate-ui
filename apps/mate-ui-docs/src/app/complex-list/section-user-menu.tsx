'use client';
import {
  ArrowRightOnRectangleIcon,
  Cog8ToothIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerSides,
  DrawerTrigger,
  Header,
  HeaderSupportiveText,
} from '@chaco/mate-ui';
import React from 'react';

export const UserInfoDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <div className="bg-indigo-200 flex h-12 w-12 rounded">
          <UserIcon className="text-indigo-500 mx-auto h-8 w-8 self-center" />
        </div>
      </DrawerTrigger>
      <DrawerContent side={DrawerSides.Bottom}>
        <DrawerBody className="mb-0 p-0">
          <div className="flex w-full flex-col">
            <div className="border-b border-grey-300 p-4 text-left">
              <Header variant="h3">John Smith</Header>
              <HeaderSupportiveText variant="h5">
                Account ID #10734181
              </HeaderSupportiveText>
            </div>
            <div className="flex flex-col gap-2 p-4 text-grey-700">
              <div className="flex gap-2 p-2">
                <Cog8ToothIcon className="h-5 w-5" />
                Account settings
              </div>
              <div className="flex gap-2 p-2">
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
                Logout
              </div>
            </div>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

'use client';
import {
  ArrowRightOnRectangleIcon,
  Cog8ToothIcon,
  UserIcon,
} from '@heroicons/react/20/solid';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from '@chaco/mate-ui';
import React from 'react';

export const UserInfoDropDown = () => {
  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <div className="bg-indigo-200 flex h-12 w-12 rounded">
          <UserIcon className="text-indigo-500 mx-auto h-8 w-8 self-center" />
        </div>
      </DropdownTrigger>
      <DropdownContent align="end" className="w-64">
        <DropdownItem className="gap-2">
          <Cog8ToothIcon className="h-5 w-5" />
          Account settings
        </DropdownItem>
        <DropdownItem className="gap-2">
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
          Logout
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};

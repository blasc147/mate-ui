import { Sidenav } from '@components';
import React from 'react';

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
      <div className="h-full w-full px-6 pb-10 pt-8 lg:hidden">{children}</div>
    </>
  );
};

export default SidenavLayout;

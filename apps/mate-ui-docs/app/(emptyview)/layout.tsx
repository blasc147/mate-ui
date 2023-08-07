import React from 'react';
import '@styles';


type Props = {
  children: React.ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
        <div>{children}</div>
  );
};

export default Layout;

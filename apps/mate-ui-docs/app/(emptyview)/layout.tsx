import React from 'react';


type Props = {
  children: React.ReactElement;
};

const EmptyLayout = ({ children }: Props) => {
  return (
        <div>{children}</div>
  );
};

export default EmptyLayout;

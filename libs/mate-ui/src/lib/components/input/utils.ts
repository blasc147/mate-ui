import React from 'react';

const ERROR_MESSAGE_ID = 'feedback';
const HELPER_MESSAGE_ID = 'helper';

const getValueByPriority = <T>(value: { context: T; current: T; default: T }) =>
  value.context || value.current || value.default;

const childrenHasComponent = ({
  children,
  component,
}: {
  children: React.ReactNode;
  component: React.ComponentType;
}) => {
  return React.Children.toArray(children).some((c) => {
    return React.isValidElement(c) && c.type === component;
  });
};

export {
  getValueByPriority,
  childrenHasComponent,
  ERROR_MESSAGE_ID,
  HELPER_MESSAGE_ID,
};

import React from 'react';
import { Button, cn } from '@truenorth/mate-ui';

const styles = {
  button: cn('mb-2', 'justify-start', 'px-2', 'font-medium', 'w-full'),
  submenuContainer: 'ml-6',
};

export const SidenavItem = ({
  isActive,
  children,
  rightIcon,
  onClick,
  className,
}: {
  onClick?: () => void;
  isActive?: boolean;
  children: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}) => {
  return (
    <Button
      variant="ghost"
      themeColor="neutral"
      size="sm"
      rightIcon={rightIcon}
      className={cn(className, styles.button, {
        '!bg-neutral-200': isActive,
        'justify-between': rightIcon,
      })}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

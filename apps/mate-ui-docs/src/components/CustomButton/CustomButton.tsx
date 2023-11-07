'use-client';
import * as React from 'react';
import { cn } from '@chaco/mate-ui';
import { LoaderIcon } from 'packages/mate-ui/src/lib/icons/loader';

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
  size?: 'lg' | 'md';
  disabled?: boolean;
  loading?: boolean;
}

const styles = {
  rootBase: [
    'rounded',
    'outline-none',
    'focus-visible:ring-2',
    'ring-offset-1',
    'ring-focus',
    'bg-grey-800',
    'text-base',
    'font-semibold',
    'text-white',
    'active:enabled:bg-grey-600',
    'disabled:cursor-not-allowed',
    'disabled:bg-grey-500',
    'hover:bg-grey-700',
    'hover:enabled:duration-200',
    'hover:enabled:ease-out',
    'h-10',
    'px-5',
    'py-2',
  ],
  loading: ['h-5', 'w-5', 'animate-spin'],
};

const CustomButton = ({
  children,
  className = '',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(className, styles.rootBase, {
        '!h-12 !px-6': size === 'lg',
      })}
      disabled={disabled || loading || !children}
    >
      {!loading ? (
        children
      ) : (
        <LoaderIcon
          className={cn(styles.loading, {
            '!h-6 !w-6': size === 'lg',
          })}
        />
      )}
    </button>
  );
};

export { CustomButton };

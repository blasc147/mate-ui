import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '../utils';

const styles = {
  root: cn('h-8', 'w-8', 'relative'),
  base: cva(
    ['h-8', 'w-8', 'overflow-hidden', 'flex', 'items-center', 'justify-center'],
    {
      variants: {
        shape: {
          circle: ['rounded-full'],
          square: ['rounded-sm'],
        },
      },
      defaultVariants: {
        shape: 'circle',
      },
    }
  ),
  statusIcon: cva(
    [
      'h-2.5',
      'w-2.5',
      'absolute',
      'top-[22px]',
      'left-[22px]',
      'rounded-full',
      'border',
      'border-white',
    ],
    {
      variants: {
        status: {
          online: ['bg-success-500'],
          offline: ['bg-neutral-300'],
          busy: ['bg-error-500'],
        },
      },
    }
  ),
  actionIcon: cn(
    'h-6',
    'w-6',
    'bg-neutral-100',
    'absolute',
    'top-[15px]',
    'left-[15px]',
    'rounded-full',
    'flex',
    'justify-center',
    'items-center',
    'focus:outline-none',
    'focus-visible:ring',
    'ring-focus'
  ),
  label: cn(
    'pt-2.5',
    'font-regular',
    'text-xs',
    'text-center',
    'text-neutral-900'
  ),
};

interface AvatarProps
  extends VariantProps<typeof styles.base>,
    VariantProps<typeof styles.statusIcon> {
  children?: React.ReactNode;
  className?: string;
  actionButton?: React.ReactNode;
  label?: string;
}

const Avatar = ({
  children,
  className,
  shape,
  status,
  actionButton,
  label,
}: AvatarProps) => {
  return (
    <div className={cn(styles.root, className)}>
      <span
        className={cn(styles.base({ shape }), {
          'bg-neutral-300': !children,
          'text-primary-500 bg-primary-200 text-sm font-medium': !!children,
        })}
      >
        {children}
      </span>
      {status && <span className={cn(styles.statusIcon({ status }))} />}
      {actionButton}
      {label && <p className={cn(styles.label)}>{label}</p>}
    </div>
  );
};

interface AvatarActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

const AvatarActionButton = ({
  icon,
  className,
  ...props
}: AvatarActionButtonProps) => {
  return (
    <button className={cn(styles.actionIcon, className)} {...props}>
      <Slot className="fill-neutral-700 h-4 w-4">{icon}</Slot>
    </button>
  );
};

export { Avatar, AvatarActionButton };

import { VariantProps, cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../utils';

const styles = {
  root: cva(['font-semibold', 'text-neutral-900'], {
    variants: {
      variant: {
        h1: ['text-3xl'],
        h2: ['text-2xl'],
        h3: ['text-xl'],
        h4: ['text-m'],
        h5: ['text-sm'],
      },
    },
  }),
  supportText: cva(['font-regular', 'text-neutral-700'], {
    variants: {
      variant: {
        h1: ['text-m', 'pt-2'],
        h2: ['text-m', 'pt-2'],
        h3: ['text-m', 'pt-2'],
        h4: ['text-sm', 'pt-1'],
        h5: ['text-xs', 'pt-1'],
      },
    },
  }),
};

interface HeaderProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant: NonNullable<VariantProps<typeof styles.root>['variant']>;
  asChild?: boolean;
  className?: string;
}

const Header = ({
  children,
  variant,
  className,
  asChild,
  ...props
}: HeaderProps) => {
  const Comp = asChild ? Slot : variant;

  return (
    <Comp
      className={cn(styles.root({ variant }), className)}
      children={children}
      {...props}
    />
  );
};

interface HeaderSupportiveTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  variant: NonNullable<VariantProps<typeof styles.supportText>['variant']>;
  asChild?: boolean;
  className?: string;
}

const HeaderSupportiveText = ({
  children,
  variant,
  className,
  asChild,
  ...props
}: HeaderSupportiveTextProps) => {
  const Comp = asChild ? Slot : 'p';

  return (
    <Comp
      className={cn(styles.supportText({ variant }), className)}
      children={children}
      {...props}
    />
  );
};

export {
  Header,
  type HeaderProps,
  HeaderSupportiveText,
  type HeaderSupportiveTextProps,
};

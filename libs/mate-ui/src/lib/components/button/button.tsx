'use-client';

import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { LoaderIcon } from '../../icons';
import { cn } from '../../utils';
import { styles } from './styles';
import { ButtonProps } from './interfaces';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      themeColor,
      size,
      disabled,
      loading,
      asChild,
      children: _children,
      leftIcon: _leftIcon,
      rightIcon: _rightIcon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    const baseIconVariantsClasses = styles.icon({
      themeColor,
      variant,
      size,
    });

    const iconVariantsClasses = cn(
      baseIconVariantsClasses,
      'group-data-[loading=true]:text-[transparent]'
    );

    const leftIcon = _leftIcon && (
      <Slot className={cn(iconVariantsClasses, 'mr-2')}>{_leftIcon}</Slot>
    );

    const rightIcon = _rightIcon && (
      <Slot className={cn(iconVariantsClasses, 'ml-2')}>{_rightIcon}</Slot>
    );

    const loadingSpinner = loading && (
      <LoaderIcon
        className={cn(baseIconVariantsClasses, 'absolute', 'animate-spin')}
      />
    );

    const children = asChild ? (
      React.isValidElement(_children) &&
      React.cloneElement(_children, {
        children: (
          <>
            {loadingSpinner}
            {leftIcon}
            {_children.props.children}
            {rightIcon}
          </>
        ),
      } as { children: React.ReactNode })
    ) : (
      <>
        {loadingSpinner}
        {leftIcon}
        {_children}
        {rightIcon}
      </>
    );

    return (
      <Comp
        {...props}
        ref={ref}
        data-loading={loading}
        className={cn(
          styles.rootBase({ themeColor, variant }),
          styles.rootSize({ size }),
          'inline-flex',
          'items-center',
          'justify-center',
          'data-[loading=true]:text-[transparent]',
          'data-[loading=true]:p-2',
          className
        )}
        disabled={loading || disabled}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, styles as buttonStyles, type ButtonProps };

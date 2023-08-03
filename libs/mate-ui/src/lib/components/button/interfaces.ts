import React from 'react';
import { VariantProps } from 'class-variance-authority';
import { styles } from './styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof styles.rootBase>,
    VariantProps<typeof styles.rootSize> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

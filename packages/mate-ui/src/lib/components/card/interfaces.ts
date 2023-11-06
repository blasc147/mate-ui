import React from 'react';
import { VariantProps } from 'class-variance-authority';
import { styles } from './styles';
type CardSizes = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof styles.rootBase> {
  padding?: CardSizes;
}

export interface CardImageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof styles.imageStyle> {}

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof styles.title> {}

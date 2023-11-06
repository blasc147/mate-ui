import { TailwindSize } from '@/hooks/useScreenSize';

export const getCurrentScreenSize = (width: number): TailwindSize => {
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
    '3xl': 1792, 
  };

  if (width >= breakpoints['3xl']) return '3xl';
  if (width >= breakpoints['2xl']) return '2xl';
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  return 'sm';
};

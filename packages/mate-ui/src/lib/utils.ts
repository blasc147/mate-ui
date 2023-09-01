import { cx, type CxOptions } from 'class-variance-authority';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: ['m'] }],
    'font-weight': [{ font: ['regular'] }],
  },
});

type TailwindScreenSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | null;

export function getScreenSize(): TailwindScreenSize {
  if (typeof window === 'undefined') {
    return null;
  }
  const width: number = window?.innerWidth;
  if (width < 640) {
    return 'sm';
  } else if (width >= 640 && width < 768) {
    return 'md';
  } else if (width >= 768 && width < 1024) {
    return 'lg';
  } else if (width >= 1024 && width < 1280) {
    return 'xl';
  } else {
    return '2xl';
  }
}

export function cn(...inputs: CxOptions) {
  return twMerge(cx(inputs));
}

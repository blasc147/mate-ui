import { cx, type CxOptions } from 'class-variance-authority';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  classGroups: {
    'font-size': [{ text: ['m'] }],
    'font-weight': [{ font: ['regular'] }],
  },
});

export function cn(...inputs: CxOptions) {
  return twMerge(cx(inputs));
}

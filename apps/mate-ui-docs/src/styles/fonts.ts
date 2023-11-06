import { Inter } from 'next/font/google';

export const inter = Inter({
  variable: '--font-sans',
  weight: ['100', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const fontMapper = {
  'font-inter': inter.variable,
} as Record<string, string>;

'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Button, cn } from '@chaco/mate-ui';
import {
  MoonIcon,
  SunIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outlined"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="absolute right-8 top-4"
    >
      <SunIcon className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <MoonIcon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export function ThemeToggleGroup() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute right-10 inline-flex gap-0.5 rounded-full border border-grey-400 p-0.5 transition-all">
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          'w-9 rounded-full p-0',
          theme === 'light' && 'bg-grey-400'
        )}
        onClick={() => setTheme('light')}
      >
        <SunIcon className="h-4 w-4" aria-label="Light" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          'w-9 rounded-full p-0',
          theme === 'system' && 'bg-grey-400'
        )}
        onClick={() => setTheme('system')}
      >
        <WrenchScrewdriverIcon className="h-4 w-4" aria-label="System" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn(
          'w-9 rounded-full p-0',
          theme === 'dark' && 'bg-grey-400'
        )}
        onClick={() => setTheme('dark')}
      >
        <MoonIcon className="h-4 w-4" aria-label="Dark" />
      </Button>
    </div>
  );
}

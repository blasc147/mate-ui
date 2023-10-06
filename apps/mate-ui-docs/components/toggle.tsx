'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@truenorth/mate-ui';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  //const [mounted, setMounted] = React.useState(false);
  // useEffect only runs on the client, so now we can safely show the UI
  //   React.useEffect(() => {
  //     setMounted(true);
  //   }, []);

  //   if (!mounted) {
  //     return null;
  //   }

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="w-32"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5 text-primary-200" />
      ) : (
        <MoonIcon className=" h-5 w-5 " />
      )}
    </Button>
  );
}

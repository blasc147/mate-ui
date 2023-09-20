'use client';
import { useEffect, useState } from 'react';
import { getCurrentScreenSize } from 'apps/mate-ui-docs/app/_utils/getCurrentScreenSize';

export type TailwindSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const useScreenSize = () => {
  const isClient = typeof window === 'object';
  const [screenSize, setScreenSize] = useState<TailwindSize>(() =>
    isClient ? getCurrentScreenSize(window.innerWidth) : 'md'
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getCurrentScreenSize(window.innerWidth));
    };

    if (isClient) {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isClient]);
  return screenSize;
};

export default useScreenSize;

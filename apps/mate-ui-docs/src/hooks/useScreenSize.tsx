import { useState, useEffect } from 'react';
import { getCurrentScreenSize } from '@/utils/getCurrentScreenSize';

export type TailwindSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<TailwindSize>(() =>
    getCurrentScreenSize(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getCurrentScreenSize(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;

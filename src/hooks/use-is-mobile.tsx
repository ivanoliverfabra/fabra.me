"use client";

import { useCallback, useLayoutEffect, useState } from 'react';

export const useIsMobile = (width = 768): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  const debouncedUpdateSize = useCallback(() => {
    let timeoutId: NodeJS.Timeout;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < width);
      }, 250);
    };
  }, []);

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < width);
    };

    const debouncedHandler = debouncedUpdateSize();
    window.addEventListener('resize', debouncedHandler);
    updateSize(); // Initial check

    return (): void => {
      window.removeEventListener('resize', debouncedHandler);
    };
  }, [debouncedUpdateSize]);

  return isMobile;
};
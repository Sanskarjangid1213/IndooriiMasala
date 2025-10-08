'use client';
import React, { useEffect } from 'react';

export const useClickOutside = (
  refs: React.RefObject<HTMLElement>[],
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        refs.every(
          ref => ref.current && !ref.current.contains(e.target as Node)
        )
      ) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, callback]);
};

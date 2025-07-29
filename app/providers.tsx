'use client';

import { ReactNode, useEffect } from 'react';
import { useThemeStore } from '@/store/themeStore';
import { applyThemeClass } from '@/lib/theme';

export default function Providers({ children }: { children: ReactNode }) {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    // on mount, ensure html has the persisted theme (or media default)
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initial =
      stored ??
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    if (!stored) {
      localStorage.setItem('theme', initial);
    }
    applyThemeClass(stored ?? initial);
  }, []);

  useEffect(() => {
    // on toggle, sync
    localStorage.setItem('theme', theme);
    applyThemeClass(theme);
  }, [theme]);

  return <>{children}</>;
}

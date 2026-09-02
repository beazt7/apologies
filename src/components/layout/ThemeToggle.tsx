import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

/**
 * Manual light/dark toggle. Starts from the system `prefers-color-scheme` setting
 * and is kept only in memory for the current visit (not persisted to localStorage),
 * since this is a display preference for whoever is currently viewing the page.
 */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((current) => !current)}
      aria-pressed={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="fixed right-4 top-4 z-40 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/90 p-3 text-neutral-700 shadow-soft ring-1 ring-black/5 backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blush-600 dark:bg-neutral-800/90 dark:text-neutral-100 dark:ring-white/10"
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}

import { useCallback, useEffect, useState } from 'react';

/**
 * Error-safe localStorage-backed state. Used only for the site owner's own
 * editing preferences (e.g. personalized copy overrides), never for tracking
 * or recording anything about a visitor/recipient.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage may be unavailable (private browsing, quota exceeded, etc.).
      // Silently continue without persisting; the app still works this session.
    }
  }, [key, value]);

  const remove = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
    } catch {
      // Nothing more can be done if storage is unavailable.
    }
    setValue(initialValue);
  }, [key, initialValue]);

  return [value, setValue, remove] as const;
}

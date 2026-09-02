import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { siteContent } from '../content/siteContent';
import type { SiteContent } from '../types/content';
import { useLocalStorage } from '../hooks/useLocalStorage';

/**
 * Owner-only editing preferences. These are a convenience for the site owner while
 * personalizing the page in their own browser, a lightweight alternative to editing
 * `siteContent.ts` directly. They are stored only in the owner's local browser storage
 * and are never sent anywhere, and never represent anything about a visitor/recipient.
 */
export interface ContentOverrides {
  herName?: string;
  hisName?: string;
  memoryCaptions?: Record<string, string>;
}

const STORAGE_KEY = 'sorry-site:owner-overrides';
const EMPTY_OVERRIDES: ContentOverrides = {};

interface ContentContextValue {
  content: SiteContent;
  overrides: ContentOverrides;
  updateOverrides: (partial: ContentOverrides) => void;
  updateMemoryCaption: (memoryId: string, caption: string) => void;
  resetOverrides: () => void;
}

const ContentContext = createContext<ContentContextValue | null>(null);

function mergeContent(base: SiteContent, overrides: ContentOverrides): SiteContent {
  const herName = overrides.herName?.trim() || base.herName;
  const hisName = overrides.hisName?.trim() || base.hisName;

  return {
    ...base,
    herName,
    hisName,
    memories: {
      ...base.memories,
      items: base.memories.items.map((item) => ({
        ...item,
        caption: overrides.memoryCaptions?.[item.id]?.trim() || item.caption,
      })),
    },
  };
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [overrides, setOverrides, clearOverrides] = useLocalStorage<ContentOverrides>(
    STORAGE_KEY,
    EMPTY_OVERRIDES,
  );

  const value = useMemo<ContentContextValue>(
    () => ({
      content: mergeContent(siteContent, overrides),
      overrides,
      updateOverrides: (partial) => setOverrides((prev) => ({ ...prev, ...partial })),
      updateMemoryCaption: (memoryId, caption) =>
        setOverrides((prev) => ({
          ...prev,
          memoryCaptions: { ...prev.memoryCaptions, [memoryId]: caption },
        })),
      resetOverrides: clearOverrides,
    }),
    [overrides, setOverrides, clearOverrides],
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useSiteContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useSiteContent must be used within a ContentProvider');
  }
  return context;
}

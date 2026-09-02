import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Settings, X, RotateCcw } from 'lucide-react';
import { useSiteContent } from '../../context/ContentContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Button } from '../common/Button';

/**
 * Owner-only personalization drawer. Lets the site owner preview name and memory
 * caption changes directly in the browser before editing `siteContent.ts` for real.
 * Saved only to this browser's localStorage as a convenience, never sent
 * anywhere, and never used to store or infer anything about a visitor.
 */
export function CustomizePanel() {
  const { content, overrides, updateOverrides, updateMemoryCaption, resetOverrides } = useSiteContent();
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const panelId = 'customize-panel';

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full bg-white/90 px-4 py-3 text-sm font-semibold text-neutral-700 shadow-soft ring-1 ring-black/5 backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blush-600 dark:bg-neutral-800/90 dark:text-neutral-100 dark:ring-white/10"
      >
        <Settings size={18} aria-hidden="true" />
        <span className="hidden sm:inline">Personalize (sender only)</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={panelId}
            role="dialog"
            aria-label="Sender personalization settings"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.25 }}
            className="absolute bottom-16 left-0 w-[calc(100vw-2rem)] max-w-sm rounded-2xl bg-white p-5 shadow-soft ring-1 ring-black/10 dark:bg-neutral-900 dark:ring-white/10"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-50">
                Personalize this page
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close personalization panel"
                className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blush-600 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              These changes are saved only in your own browser, for previewing. For a permanent
              version, edit <code>src/content/siteContent.ts</code> directly.
            </p>

            <div className="mt-4 space-y-4">
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                Her name
                <input
                  type="text"
                  value={overrides.herName ?? ''}
                  onChange={(event) => updateOverrides({ herName: event.target.value })}
                  placeholder={content.herName}
                  className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 text-base text-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blush-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                />
              </label>

              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                His name
                <input
                  type="text"
                  value={overrides.hisName ?? ''}
                  onChange={(event) => updateOverrides({ hisName: event.target.value })}
                  placeholder={content.hisName}
                  className="mt-1 block w-full rounded-lg border border-neutral-300 px-3 py-2 text-base text-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blush-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                />
              </label>

              <fieldset>
                <legend className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                  Memory captions
                </legend>
                <div className="mt-2 space-y-3">
                  {content.memories.items.map((memory) => (
                    <input
                      key={memory.id}
                      type="text"
                      value={overrides.memoryCaptions?.[memory.id] ?? ''}
                      onChange={(event) => updateMemoryCaption(memory.id, event.target.value)}
                      placeholder={memory.caption}
                      className="block w-full rounded-lg border border-neutral-300 px-3 py-2 text-base text-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blush-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                    />
                  ))}
                </div>
              </fieldset>
            </div>

            <Button variant="ghost" onClick={resetOverrides} className="mt-4 px-0">
              <RotateCcw size={16} aria-hidden="true" />
              Reset to defaults
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, type LucideIcon } from 'lucide-react';
import type { AccountabilityCardContent } from '../../types/content';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface AccountabilityCardProps {
  card: AccountabilityCardContent;
  icon: LucideIcon;
}

export function AccountabilityCard({ card, icon: Icon }: AccountabilityCardProps) {
  const [expanded, setExpanded] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const panelId = `accountability-panel-${card.id}`;

  return (
    <div className="rounded-2xl border-l-4 border-blush-300 bg-white/70 shadow-paper ring-1 ring-black/5 backdrop-blur-sm dark:border-blush-600 dark:bg-neutral-900/60 dark:ring-white/10">
      <h3>
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded((current) => !current)}
          className="flex w-full min-h-[44px] items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blush-600"
        >
          <span className="flex items-start gap-4">
            <Icon
              aria-hidden="true"
              size={22}
              strokeWidth={1.5}
              className="mt-1 shrink-0 text-blush-500 dark:text-blush-300"
            />
            <span>
              <span className="block font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                {card.title}
              </span>
              <span className="mt-1 block text-base text-neutral-600 dark:text-neutral-300">
                {card.summary}
              </span>
            </span>
          </span>
          <ChevronDown
            aria-hidden="true"
            size={22}
            className={`shrink-0 text-blush-600 transition-transform duration-300 dark:text-blush-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </h3>
      <motion.div
        id={panelId}
        role="region"
        initial={false}
        animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: prefersReducedMotion ? 0.01 : 0.35, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 pl-[3.75rem] text-lg leading-relaxed text-neutral-700 dark:text-neutral-200">
          {card.details}
        </p>
      </motion.div>
    </div>
  );
}

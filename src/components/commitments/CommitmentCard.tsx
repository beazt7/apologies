import type { LucideIcon } from 'lucide-react';
import type { CommitmentContent } from '../../types/content';

interface CommitmentCardProps {
  item: CommitmentContent;
  icon: LucideIcon;
}

export function CommitmentCard({ item, icon: Icon }: CommitmentCardProps) {
  return (
    <li className="relative rounded-2xl border-l-4 border-lavender-300 bg-white/70 p-6 shadow-paper ring-1 ring-black/5 backdrop-blur-sm dark:border-lavender-600 dark:bg-neutral-900/60 dark:ring-white/10 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="flex items-start gap-3 font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-50">
          <Icon
            aria-hidden="true"
            size={22}
            strokeWidth={1.5}
            className="mt-0.5 shrink-0 text-lavender-600 dark:text-lavender-300"
          />
          <span>{item.action}</span>
        </h3>
        <span className="inline-flex items-center rounded-full bg-lavender-100 px-3 py-1 text-sm font-medium text-lavender-800 dark:bg-lavender-900/50 dark:text-lavender-100">
          {item.status}
        </span>
      </div>

      <dl className="mt-4 space-y-3 pl-9 text-base leading-relaxed text-neutral-700 dark:text-neutral-200">
        <div>
          <dt className="font-semibold text-blush-700 dark:text-blush-200">Why it matters</dt>
          <dd className="mt-1">{item.whyItMatters}</dd>
        </div>
        <div>
          <dt className="font-semibold text-blush-700 dark:text-blush-200">
            How progress can be shown
          </dt>
          <dd className="mt-1">{item.howProgressShows}</dd>
        </div>
      </dl>
    </li>
  );
}


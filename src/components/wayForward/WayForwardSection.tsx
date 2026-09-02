import { Compass } from 'lucide-react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { useSiteContent } from '../../context/ContentContext';

/**
 * Forward-looking checkpoint timeline. Replaces any notion of the recipient
 * needing to decide something on this page, since she has already chosen to
 * give this a chance. This section states his ongoing accountability instead.
 */
export function WayForwardSection() {
  const { content } = useSiteContent();

  return (
    <SectionWrapper
      id="way-forward"
      ariaLabel="Where we go from here"
      contentClassName="max-w-3xl"
      marginNote={{ icon: Compass, label: content.marginNotes.wayForward, side: 'right' }}
    >
      <h2 className="font-serif text-3xl font-semibold text-neutral-800 dark:text-neutral-50 sm:text-4xl">
        {content.wayForward.heading}
      </h2>
      <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-300">{content.wayForward.intro}</p>

      <ol className="relative mt-10 space-y-10 border-l-2 border-lavender-200 pl-9 dark:border-lavender-800">
        {content.wayForward.checkpoints.map((checkpoint) => (
          <li key={checkpoint.id} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[2.6rem] top-1 h-5 w-5 rounded-full bg-lavender-500 ring-4 ring-lavender-100 dark:bg-lavender-400 dark:ring-lavender-900"
            />
            <p className="font-serif text-xl font-semibold text-blush-700 dark:text-blush-200">
              {checkpoint.timeframe}
            </p>
            <p className="mt-2 text-lg leading-relaxed text-neutral-700 dark:text-neutral-200">
              {checkpoint.description}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-10 rounded-xl bg-lavender-50/70 p-4 text-sm text-neutral-600 ring-1 ring-lavender-200/60 dark:bg-lavender-900/30 dark:text-neutral-300 dark:ring-lavender-800">
        {content.wayForward.closingNote}
      </p>
    </SectionWrapper>
  );
}

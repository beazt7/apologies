import { motion } from 'framer-motion';
import { PenLine, MessageCircle, Hand, PhoneOff, Hourglass, Repeat, HandHeart, type LucideIcon } from 'lucide-react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { useSiteContent } from '../../context/ContentContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { CommitmentCard } from './CommitmentCard';

const COMMITMENT_ICONS: Record<string, LucideIcon> = {
  truthfulness: MessageCircle,
  boundaries: Hand,
  'ending-contact': PhoneOff,
  'accepting-doubt': Hourglass,
  consistency: Repeat,
};

export function CommitmentsSection() {
  const { content } = useSiteContent();
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper
      id="commitments"
      ariaLabel="Words are not proof"
      marginNote={{ icon: HandHeart, label: content.marginNotes.commitments, side: 'left' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl bg-lavender-100/70 p-6 text-center ring-1 ring-lavender-300/60 dark:bg-lavender-900/30 dark:ring-lavender-700/50 sm:p-8"
      >
        <PenLine className="mx-auto text-lavender-700 dark:text-lavender-200" aria-hidden="true" size={28} />
        <h2 className="mt-3 font-serif text-3xl font-semibold text-neutral-800 dark:text-neutral-50 sm:text-4xl">
          {content.commitments.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-lg text-neutral-700 dark:text-neutral-200">
          {content.commitments.intro}
        </p>
        <p className="mx-auto mt-2 max-w-xl text-base italic text-neutral-600 dark:text-neutral-300">
          {content.commitments.transitionStatement}
        </p>
      </motion.div>

      <ul className="mt-8 space-y-4">
        {content.commitments.items.map((item) => (
          <CommitmentCard key={item.id} item={item} icon={COMMITMENT_ICONS[item.id] ?? MessageCircle} />
        ))}
      </ul>
    </SectionWrapper>
  );
}

import { FileText, Scale, HeartHandshake, ShieldCheck, ScrollText, type LucideIcon } from 'lucide-react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { useSiteContent } from '../../context/ContentContext';
import { AccountabilityCard } from './AccountabilityCard';

const CARD_ICONS: Record<string, LucideIcon> = {
  'what-happened': FileText,
  'why-wrong': Scale,
  'how-affected': HeartHandshake,
  'responsibility-now': ShieldCheck,
};

export function AccountabilityCards() {
  const { content } = useSiteContent();

  return (
    <SectionWrapper
      id="accountability"
      ariaLabel="What I did"
      marginNote={{ icon: ScrollText, label: content.marginNotes.accountability, side: 'right' }}
    >
      <h2 className="font-serif text-3xl font-semibold text-neutral-800 dark:text-neutral-50 sm:text-4xl">
        {content.accountability.heading}
      </h2>
      <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-300">
        {content.accountability.intro}
      </p>

      <div className="mt-8 space-y-4">
        {content.accountability.cards.map((card) => (
          <AccountabilityCard key={card.id} card={card} icon={CARD_ICONS[card.id] ?? FileText} />
        ))}
      </div>
    </SectionWrapper>
  );
}


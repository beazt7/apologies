import { Sunrise } from 'lucide-react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { useSiteContent } from '../../context/ContentContext';

export function ClosingSection() {
  const { content } = useSiteContent();

  return (
    <SectionWrapper
      id="closing"
      ariaLabel="Closing"
      className="pb-28 text-center"
      marginNote={{ icon: Sunrise, label: content.marginNotes.closing, side: 'left' }}
    >
      <h2 className="font-serif text-3xl font-semibold text-neutral-800 dark:text-neutral-50 sm:text-4xl">
        {content.closing.heading}
      </h2>
      <div className="mx-auto mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-200">
        {content.closing.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </SectionWrapper>
  );
}


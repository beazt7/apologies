import { HeartCrack } from 'lucide-react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { useSiteContent } from '../../context/ContentContext';

export function ApologySection() {
  const { content } = useSiteContent();

  return (
    <SectionWrapper
      id="apology"
      ariaLabel="The apology"
      marginNote={{ icon: HeartCrack, label: content.marginNotes.apology, side: 'left' }}
    >
      <h2 className="font-serif text-3xl font-semibold text-neutral-800 dark:text-neutral-50 sm:text-4xl">
        {content.apology.heading}
      </h2>
      <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-300">{content.apology.intro}</p>

      <div className="mt-10 space-y-8">
        {content.apology.sections.map((section) => (
          <div
            key={section.id}
            className="rounded-2xl bg-white/70 p-6 shadow-paper ring-1 ring-black/5 backdrop-blur-sm dark:bg-neutral-900/60 dark:ring-white/10 sm:p-8"
          >
            <h3 className="font-serif text-xl font-semibold text-blush-700 dark:text-blush-200">
              {section.heading}
            </h3>
            <div className="mt-3 space-y-3">
              {section.body.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-200"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NotebookPen, Feather } from 'lucide-react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { useSiteContent } from '../../context/ContentContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Button } from '../common/Button';

export function LetterSection() {
  const { content } = useSiteContent();
  const prefersReducedMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const panelId = 'letter-full-text';

  return (
    <SectionWrapper
      id="letter"
      ariaLabel="A letter"
      marginNote={{ icon: Feather, label: content.marginNotes.letter, side: 'left' }}
    >
      <h2 className="font-serif text-3xl font-semibold text-neutral-800 dark:text-neutral-50 sm:text-4xl">
        {content.letter.heading}
      </h2>
      <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-300">{content.letter.intro}</p>

      <div className="mt-8 flex justify-center">
        <Button
          variant="secondary"
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded((current) => !current)}
        >
          <NotebookPen size={18} aria-hidden="true" />
          {content.letter.readAsOneLabel}
        </Button>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={panelId}
            role="region"
            style={{ transformOrigin: 'top' }}
            initial={{ opacity: 0, scaleY: prefersReducedMotion ? 1 : 0.05 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: prefersReducedMotion ? 1 : 0.05 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-8 rounded-2xl border-l-4 border-blush-200 bg-cream-50/90 p-6 shadow-paper ring-1 ring-cream-300/60 dark:border-blush-700 dark:bg-neutral-900/70 dark:ring-neutral-700 sm:p-10"
          >
            <div className="space-y-5 font-serif text-lg leading-relaxed text-neutral-800 dark:text-neutral-100">
              {content.letter.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 1
                      ? 'first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-serif first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-blush-600 dark:first-letter:text-blush-300'
                      : undefined
                  }
                >
                  {paragraph}
                </p>
              ))}
              <p className="font-hand text-2xl text-blush-700 dark:text-blush-200">
                {content.letter.signOff}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}


import { BookHeart } from 'lucide-react';
import { SectionWrapper } from '../layout/SectionWrapper';
import { useSiteContent } from '../../context/ContentContext';
import { MemoryFrame } from './MemoryFrame';

export function MemoryScrapbook() {
  const { content } = useSiteContent();

  return (
    <SectionWrapper
      id="memories"
      ariaLabel="A few memories"
      contentClassName="max-w-4xl"
      marginNote={{ icon: BookHeart, label: content.marginNotes.memories, side: 'right' }}
    >
      <h2 className="font-serif text-3xl font-semibold text-neutral-800 dark:text-neutral-50 sm:text-4xl">
        {content.memories.heading}
      </h2>
      <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-300">{content.memories.intro}</p>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {content.memories.items.map((memory, index) => (
          <MemoryFrame key={memory.id} memory={memory} tilt={index % 2 === 0 ? 'left' : 'right'} />
        ))}
      </div>
    </SectionWrapper>
  );
}



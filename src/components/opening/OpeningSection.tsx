import { motion } from 'framer-motion';
import { ArrowDown, DoorOpen } from 'lucide-react';
import { useSiteContent } from '../../context/ContentContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Button } from '../common/Button';

interface OpeningSectionProps {
  onReady: () => void;
}

/** Fixed scatter spots for the faint background photos; paired with ambientPhotos.openingBackground by index. */
const BACKGROUND_PHOTO_SPOTS = [
  'left-[4%] top-[8%] h-56 w-40 -rotate-6',
  'right-[6%] top-[52%] h-48 w-36 rotate-6',
  'left-[14%] bottom-[6%] h-44 w-32 -rotate-3',
];

/**
 * The calm landing view. Both choices, reading now or leaving, are given equal
 * visual weight and equal ease of access. Nothing here hides navigation or traps
 * the visitor into staying.
 */
export function OpeningSection({ onReady }: OpeningSectionProps) {
  const { content } = useSiteContent();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="opening"
      aria-label="Opening"
      className="relative z-0 flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-16 text-center sm:px-8"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {content.ambientPhotos.openingBackground.map((photo, index) => (
          <motion.img
            key={photo.src}
            src={photo.src}
            alt=""
            loading="lazy"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: prefersReducedMotion ? 0.12 : 0.16, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.3 + index * 0.35, ease: 'easeOut' }}
            className={`absolute rounded-lg object-cover blur-[2px] ${BACKGROUND_PHOTO_SPOTS[index % BACKGROUND_PHOTO_SPOTS.length]}`}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-hand text-2xl text-blush-600 dark:text-blush-300"
      >
        {content.opening.eyebrow}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-4 max-w-2xl text-balance font-serif text-4xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50 sm:text-5xl"
      >
        {content.opening.heading}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300"
      >
        {content.opening.body}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10 flex w-full max-w-md flex-col items-stretch gap-4 sm:flex-row sm:justify-center"
      >
        <Button variant="primary" onClick={onReady} className="sm:flex-1">
          <ArrowDown size={18} aria-hidden="true" />
          {content.opening.readyButtonLabel}
        </Button>
        <Button as="a" href={content.opening.leaveUrl} variant="secondary" className="sm:flex-1">
          <DoorOpen size={18} aria-hidden="true" />
          {content.opening.leaveButtonLabel}
        </Button>
      </motion.div>

      <p className="mt-6 max-w-md text-sm text-neutral-500 dark:text-neutral-400">
        Both options above are equally fine choices. Leaving takes you away immediately, with no
        confirmation step and nothing recorded.
      </p>
    </section>
  );
}

import { Image as ImageIcon } from 'lucide-react';
import type { MemoryItemContent } from '../../types/content';

interface MemoryFrameProps {
  memory: MemoryItemContent;
  /** Alternates the tilt direction between cards for a scattered scrapbook feel. */
  tilt: 'left' | 'right';
}

/**
 * Renders a single scrapbook frame. If `memory.imageSrc` is set (a real image the
 * site owner has added, with the recipient's consent, see src/content/siteContent.ts),
 * it's shown inside the decorative frame. Otherwise a neutral placeholder icon is
 * shown instead of any external or stock photo.
 *
 * To add a real photo later: place the file in `public/images/` and set
 * `imageSrc: "/images/your-file.jpg"` on the matching memory entry in siteContent.ts.
 */
export function MemoryFrame({ memory, tilt }: MemoryFrameProps) {
  return (
    <figure
      className={`relative rounded-2xl bg-white/80 p-4 pt-6 shadow-paper ring-1 ring-black/5 backdrop-blur-sm transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] dark:bg-neutral-900/70 dark:ring-white/10 ${
        tilt === 'left' ? '-rotate-2' : 'rotate-2'
      }`}
    >
      <span
        aria-hidden="true"
        className={`absolute -top-2.5 left-1/2 h-5 w-12 -translate-x-1/2 rounded-sm bg-cream-200/90 shadow-sm dark:bg-neutral-700/80 ${
          tilt === 'left' ? '-rotate-6' : 'rotate-6'
        }`}
      />
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cream-100 to-blush-100 dark:from-neutral-800 dark:to-neutral-700">
        {memory.imageSrc ? (
          <img
            src={memory.imageSrc}
            alt={memory.altText}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <ImageIcon
            aria-hidden="true"
            size={40}
            className="text-blush-400/70 dark:text-blush-200/50"
          />
        )}
      </div>
      <figcaption className="mt-3 text-center">
        <span className="block font-hand text-xl text-neutral-700 dark:text-neutral-200">
          {memory.caption}
        </span>
        {memory.note && (
          <span className="mt-1 block text-sm text-neutral-500 dark:text-neutral-400">
            {memory.note}
          </span>
        )}
      </figcaption>
    </figure>
  );
}


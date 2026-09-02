import type { LucideIcon } from 'lucide-react';

export interface MarginNoteProps {
  icon: LucideIcon;
  label: string;
  side: 'left' | 'right';
}

/**
 * Purely decorative marginalia shown in the wide side gutter next to a section,
 * on large screens only. Alternates sides between sections for editorial rhythm.
 */
export function MarginNote({ icon: Icon, label, side }: MarginNoteProps) {
  const alignment =
    side === 'left'
      ? 'right-full mr-8 items-end text-right'
      : 'left-full ml-8 items-start text-left';

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-1 hidden w-36 flex-col xl:flex ${alignment}`}
    >
      <div className="flex items-center gap-2 text-blush-400/80 dark:text-blush-300/60">
        {side === 'left' && <Icon size={18} strokeWidth={1.5} />}
        <span className="font-hand text-2xl leading-none">{label}</span>
        {side === 'right' && <Icon size={18} strokeWidth={1.5} />}
      </div>
      <div className="mt-3 h-24 w-px bg-gradient-to-b from-blush-300/70 to-transparent dark:from-blush-700/50" />
    </div>
  );
}

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { MarginNote } from './MarginNote';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Accessible label for the <section> landmark when no visible heading is passed as the first child label. */
  ariaLabel?: string;
  /** Optional decorative marginalia shown in the side gutter on large screens. */
  marginNote?: { icon: LucideIcon; label: string; side: 'left' | 'right' };
  /** Constrains the inner reading column width. Defaults to a comfortable prose width. */
  contentClassName?: string;
}

/**
 * Wraps each narrative section with a consistent scroll-reveal animation.
 * Reveals happen once, on entering the viewport, and never block scrolling or
 * interaction. Falls back to a simple fade when reduced motion is preferred.
 *
 * The outer section spans a wide, full-bleed-feeling container so the page uses
 * the available screen width; the actual text stays inside a narrower, readable
 * column, with room in the side gutters for decorative marginalia on large screens.
 */
export function SectionWrapper({
  id,
  children,
  className = '',
  ariaLabel,
  marginNote,
  contentClassName = 'max-w-2xl',
}: SectionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      className={`relative mx-auto w-full max-w-[1400px] scroll-mt-24 px-6 py-16 sm:px-10 sm:py-24 lg:px-16 ${className}`}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.7, ease: 'easeOut' }}
    >
      <div className={`relative mx-auto ${contentClassName}`}>
        {marginNote && <MarginNote {...marginNote} />}
        {children}
      </div>
    </motion.section>
  );
}


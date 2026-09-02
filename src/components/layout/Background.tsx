import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { usePointerParallax } from '../../hooks/usePointerParallax';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Soft decorative background: gentle gradients, a faint paper grain, and a few
 * blurred shapes that drift very slightly with pointer movement. Purely decorative,
 * never captures or reports pointer data anywhere, and stays still when reduced
 * motion is preferred.
 */
export function Background() {
  const { x, y } = usePointerParallax();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-cream-50 via-blush-50 to-lavender-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(112,66,90,0.08)_1px,transparent_0)] bg-[length:24px_24px] opacity-40 dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)]" />

      <motion.div
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blush-200/50 blur-3xl dark:bg-blush-900/30"
        animate={{ x: x * 12, y: y * 12 }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
      />
      <motion.div
        className="absolute right-[-4rem] top-1/3 h-96 w-96 rounded-full bg-lavender-200/50 blur-3xl dark:bg-lavender-900/30"
        animate={{ x: x * -16, y: y * 10 }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
      />
      <motion.div
        className="absolute bottom-[-6rem] left-1/3 h-80 w-80 rounded-full bg-cream-200/60 blur-3xl dark:bg-neutral-800/40"
        animate={{ x: x * 10, y: y * -12 }}
        transition={{ type: 'spring', stiffness: 40, damping: 20 }}
      />

      <motion.div
        className="absolute -bottom-16 -right-16 opacity-[0.06] dark:opacity-[0.08]"
        animate={prefersReducedMotion ? undefined : { rotate: 360 }}
        transition={prefersReducedMotion ? undefined : { duration: 180, repeat: Infinity, ease: 'linear' }}
      >
        <Heart size={420} strokeWidth={0.75} className="text-blush-600 dark:text-blush-300" />
      </motion.div>
    </div>
  );
}


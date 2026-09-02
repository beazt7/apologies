import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Produces a small, gentle offset (in a -1..1 range on each axis) that follows
 * pointer movement, for a subtle decorative parallax effect. Returns a fixed,
 * centered value when the visitor prefers reduced motion or on touch-only devices.
 */
export function usePointerParallax() {
  const prefersReducedMotion = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      setOffset({ x, y });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [prefersReducedMotion]);

  return prefersReducedMotion ? { x: 0, y: 0 } : offset;
}

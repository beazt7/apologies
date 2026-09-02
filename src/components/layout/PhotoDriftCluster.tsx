import { useState } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { PhotoLightbox } from './PhotoLightbox';
import type { AmbientPhoto } from '../../types/content';

interface PhotoDriftClusterProps {
  photos: AmbientPhoto[];
  className?: string;
}

/** Fanned offsets for up to 3 photos: left, center-front, right. */
const FAN = [
  { x: -46, y: 10, rotate: -9, z: 1 },
  { x: 0, y: -10, rotate: 2, z: 3 },
  { x: 46, y: 12, rotate: 9, z: 2 },
];

/**
 * A small, tightly-grouped fan of personal photos, centered as one cohesive
 * moment between sections. Each photo is a real, focusable button: selecting
 * one opens it full-size in a lightbox so it can actually be seen properly.
 */
export function PhotoDriftCluster({ photos, className = '' }: PhotoDriftClusterProps) {
  const prefersReducedMotion = useReducedMotion();
  const [openPhoto, setOpenPhoto] = useState<AmbientPhoto | null>(null);

  if (photos.length === 0) return null;

  return (
    <>
      <div className={`relative mx-auto my-4 h-32 w-56 sm:my-6 sm:h-40 sm:w-64 ${className}`}>
        {photos.map((photo, index) => {
          const fan = FAN[index % FAN.length];
          return (
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => setOpenPhoto(photo)}
              aria-label="View photo, enlarged"
              initial={{ opacity: 0, x: fan.x, y: prefersReducedMotion ? fan.y : fan.y - 44, rotate: fan.rotate - 16 }}
              whileInView={{ opacity: 1, x: fan.x, y: fan.y, rotate: fan.rotate }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.7,
                delay: prefersReducedMotion ? 0 : index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.06 }}
              className="absolute inset-0 m-auto h-24 w-20 cursor-pointer rounded-md border-4 border-white shadow-paper transition-shadow hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blush-500 dark:border-neutral-800 sm:h-32 sm:w-28"
              style={{ zIndex: fan.z }}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" className="h-full w-full rounded-sm object-cover" />
            </motion.button>
          );
        })}
      </div>

      {openPhoto && (
        <PhotoLightbox src={openPhoto.src} alt={openPhoto.alt} onClose={() => setOpenPhoto(null)} />
      )}
    </>
  );
}



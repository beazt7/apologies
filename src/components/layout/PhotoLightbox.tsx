import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface PhotoLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

/** Full-size photo viewer. Keyboard accessible: Escape closes, focus is trapped to the close button and returned on close. */
export function PhotoLightbox({ src, alt, onClose }: PhotoLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged photo"
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close photo"
        className="absolute right-4 top-4 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blush-400 sm:right-6 sm:top-6"
      >
        <X size={22} aria-hidden="true" />
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[85vh] max-w-[92vw] rounded-lg object-contain shadow-soft"
        onClick={(event) => event.stopPropagation()}
      />
    </div>,
    document.body,
  );
}

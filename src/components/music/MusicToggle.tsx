import { useRef, useState } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { useSiteContent } from '../../context/ContentContext';
import { resolveAssetPath } from '../../utils/assetPath';

/**
 * Optional background music control. Off by default, never autoplays, and only
 * appears at all if the site owner has added a locally hosted audio file and set
 * `music.src` in siteContent.ts (e.g. "/audio/your-file.mp3" for a file placed in
 * public/audio/). Entirely controlled by the visitor.
 */
export function MusicToggle() {
  const { content } = useSiteContent();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!content.music.src) return null;

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch {
      // Playback can be blocked by the browser; the control simply stays in its current state.
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <audio ref={audioRef} src={resolveAssetPath(content.music.src)} loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={isPlaying}
        aria-label={`${content.music.label}: ${isPlaying ? 'playing, select to pause' : 'paused, select to play'}`}
        className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full bg-white/90 px-4 py-3 text-sm font-semibold text-neutral-700 shadow-soft ring-1 ring-black/5 backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blush-600 dark:bg-neutral-800/90 dark:text-neutral-100 dark:ring-white/10"
      >
        {isPlaying ? (
          <Volume2 size={18} aria-hidden="true" />
        ) : (
          <VolumeX size={18} aria-hidden="true" />
        )}
        <Music size={16} aria-hidden="true" className="hidden sm:block" />
        <span className="hidden sm:inline">{content.music.label}</span>
      </button>
    </div>
  );
}

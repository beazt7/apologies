/** Visually hidden until focused; lets keyboard/screen-reader users jump past decorative content. */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-4 z-50 -translate-y-24 rounded-full bg-blush-600 px-5 py-3 text-sm font-semibold text-white shadow-soft transition-transform focus-visible:translate-y-0 focus:translate-y-0"
    >
      Skip to content
    </a>
  );
}

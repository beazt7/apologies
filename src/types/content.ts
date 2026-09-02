// Strong TypeScript types describing every piece of editable site copy.
// Keep these in sync with `src/content/siteContent.ts`, the single source of truth for copy.

export interface AccountabilityCardContent {
  id: string;
  title: string;
  /** Shown before the card is expanded. */
  summary: string;
  /** Shown once the card is expanded by the reader. */
  details: string;
}

export interface CommitmentContent {
  id: string;
  /** The concrete action being committed to. */
  action: string;
  /** Why this action matters, in plain terms. */
  whyItMatters: string;
  /** How progress can be shown appropriately, without surveillance. */
  howProgressShows: string;
  /** A short, honest status label, e.g. "Ongoing". */
  status: string;
}

export interface MemoryItemContent {
  id: string;
  caption: string;
  /** A short, warm line of extra context shown under the caption. */
  note?: string;
  /** Required alt text placeholder; replace if a real image is added. */
  altText: string;
  /**
   * Optional path to a real, consensually-shared image (e.g. "/images/memory-1.jpg").
   * Leave null to show a decorative placeholder frame instead.
   */
  imageSrc: string | null;
}

export interface WayForwardCheckpointContent {
  id: string;
  timeframe: string;
  description: string;
}

export interface ApologySectionContent {
  id: string;
  heading: string;
  /** One or more short paragraphs; rendered as separate <p> elements. */
  body: string[];
}

/** Short, decorative marginalia labels shown beside each section on wide screens. Purely decorative. */
export interface MarginNotes {
  apology: string;
  accountability: string;
  commitments: string;
  memories: string;
  letter: string;
  wayForward: string;
  closing: string;
}

export interface AmbientPhoto {
  src: string;
  alt: string;
}

/**
 * Extra personal photos shown as small fanned photo stacks between sections,
 * grouped by where they appear. Each is clickable to view full-size, so real
 * alt text is required. The featured, narratively-tied photos live in
 * `memories.items` instead.
 */
export interface AmbientPhotoGroups {
  /** A few faint, blurred photos in the opening hero's background (not clickable). */
  openingBackground: AmbientPhoto[];
  beforeCommitments: AmbientPhoto[];
  beforeMemories: AmbientPhoto[];
  beforeLetter: AmbientPhoto[];
  beforeWayForward: AmbientPhoto[];
  beforeClosing: AmbientPhoto[];
}

export interface SiteContent {
  herName: string;
  hisName: string;
  marginNotes: MarginNotes;
  ambientPhotos: AmbientPhotoGroups;

  opening: {
    eyebrow: string;
    heading: string;
    body: string;
    readyButtonLabel: string;
    leaveButtonLabel: string;
    /** Where "Leave this page" navigates to. Should be a neutral, safe destination. */
    leaveUrl: string;
  };

  apology: {
    heading: string;
    intro: string;
    sections: ApologySectionContent[];
  };

  accountability: {
    heading: string;
    intro: string;
    cards: AccountabilityCardContent[];
  };

  commitments: {
    heading: string;
    intro: string;
    transitionStatement: string;
    items: CommitmentContent[];
  };

  memories: {
    heading: string;
    intro: string;
    items: MemoryItemContent[];
  };


  letter: {
    heading: string;
    intro: string;
    paragraphs: string[];
    signOff: string;
    readAsOneLabel: string;
  };

  wayForward: {
    heading: string;
    intro: string;
    checkpoints: WayForwardCheckpointContent[];
    closingNote: string;
  };

  closing: {
    heading: string;
    body: string[];
  };

  music: {
    enabledByDefault: boolean;
    /** Path to a locally hosted audio file, e.g. "/audio/song.mp3". Null hides the control. */
    src: string | null;
    label: string;
  };
}

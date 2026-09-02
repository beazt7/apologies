# An Honest Apology (private, single-page site)

A private, personal apology page built with React, Vite, TypeScript, Tailwind CSS,
and Framer Motion. It is meant to be shared privately (e.g. by sending the deployed
link directly) with one specific person.

This project intentionally has **no backend, no analytics, no cookies, no trackers,
and no way to know if, when, or how the page was read.**

## Features

- Calm opening with equal, frictionless choices to read now or leave immediately
- A direct, excuse-free apology, split into short readable sections
- Expandable "what I did" accountability cards (no gamification)
- A "words are not proof" section listing specific, checkable commitments
- An optional memory scrapbook using decorative placeholder frames
- A styled letter with a gentle unfold animation and a "read as one letter" toggle
- Recipient-only ending controls (local to the browser tab, never transmitted)
- Light/dark theme, full keyboard access, and `prefers-reduced-motion` support
- One centralized content file for all copy: `src/content/siteContent.ts`
- An owner-only "Personalize" panel for quick local previewing of names/captions

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

## Customization

Open [`src/content/siteContent.ts`](./src/content/siteContent.ts) and edit the names,
apology text, accountability details, and commitments to be specific and honest.
This is the only file you should need to edit for day-to-day personalization,
no component logic needs to change.

To add real, consensually-shared photos: place image files in `public/images/` and
set the matching memory's `imageSrc` (e.g. `"/images/memory-1.jpg"`) in
`siteContent.ts`. Leave it `null` to keep the neutral placeholder frame.

To add optional background music: place a locally hosted audio file in
`public/audio/` and set `music.src` in `siteContent.ts` (e.g. `"/audio/song.mp3"`).
It stays off by default and is fully controlled by the visitor.

While editing, you can also use the "Personalize (sender only)" panel in the
bottom-left corner of the running app to preview name/caption changes instantly.
Those preview edits are saved only in your own browser's local storage, purely as
a convenience, they are never sent anywhere and never used to track a visitor.
For anything permanent, edit `siteContent.ts` directly.

## Production build

```bash
npm run build
npm run preview   # optional local preview of the production build
```

The build output is written to `dist/`.

## Deployment

This is a fully static site, any static host works. It includes a GitHub Actions
workflow ([.github/workflows/deploy.yml](./.github/workflows/deploy.yml)) that
builds and deploys automatically to GitHub Pages on every push to `main`, no
local build step required. See the deployment guide for the exact click-by-click
GitHub website steps. For other static hosts (Netlify Drop, Vercel, etc.), just
run `npm run build` and upload the contents of `dist/`.

## Privacy

- No analytics, cookies, trackers, read receipts, or IP collection
- No contact form that transmits data anywhere
- `localStorage` is used only for the sender's own local editing preferences
- The recipient's choices at the end of the page exist only in that browser tab's
  memory and disappear when the page is closed or reloaded
- The only external network request is an optional Google Fonts stylesheet for
  typography (see `index.html`), remove it for a fully offline-capable build

## Accessibility

- Semantic landmarks and a logical heading structure (`h1` → `h2` → `h3`)
- A visible "Skip to content" link for keyboard users
- All interactive controls are reachable and operable by keyboard, with visible focus rings
- Minimum 44px touch targets
- `prefers-reduced-motion` is respected both globally (CSS) and per-animation (Framer Motion)
- No meaning is conveyed by color alone; status and state are also shown as text

import { useCallback } from 'react';
import { ContentProvider, useSiteContent } from './context/ContentContext';
import { useReducedMotion } from './hooks/useReducedMotion';
import { Background } from './components/layout/Background';
import { SkipLink } from './components/layout/SkipLink';
import { ThemeToggle } from './components/layout/ThemeToggle';
import { PhotoDriftCluster } from './components/layout/PhotoDriftCluster';
import { OpeningSection } from './components/opening/OpeningSection';
import { ApologySection } from './components/apology/ApologySection';
import { AccountabilityCards } from './components/accountability/AccountabilityCards';
import { CommitmentsSection } from './components/commitments/CommitmentsSection';
import { MemoryScrapbook } from './components/memories/MemoryScrapbook';
import { LetterSection } from './components/letter/LetterSection';
import { WayForwardSection } from './components/wayForward/WayForwardSection';
import { ClosingSection } from './components/closing/ClosingSection';
import { MusicToggle } from './components/music/MusicToggle';
import { CustomizePanel } from './components/customize/CustomizePanel';

function AppContent() {
  const prefersReducedMotion = useReducedMotion();
  const { content } = useSiteContent();

  // "Read when you're ready" never hides or gates content, every section below is
  // already present in the document. It only offers a smooth scroll past the opening.
  const handleReady = useCallback(() => {
    const apologySection = document.getElementById('apology');
    apologySection?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  }, [prefersReducedMotion]);

  return (
    <>
      <Background />
      <SkipLink />
      <ThemeToggle />
      <OpeningSection onReady={handleReady} />
      <main id="main-content">
        <ApologySection />
        <AccountabilityCards />
        <PhotoDriftCluster photos={content.ambientPhotos.beforeCommitments} />
        <CommitmentsSection />
        <PhotoDriftCluster photos={content.ambientPhotos.beforeMemories} />
        <MemoryScrapbook />
        <PhotoDriftCluster photos={content.ambientPhotos.beforeLetter} />
        <LetterSection />
        <PhotoDriftCluster photos={content.ambientPhotos.beforeWayForward} />
        <WayForwardSection />
        <PhotoDriftCluster photos={content.ambientPhotos.beforeClosing} />
        <ClosingSection />
      </main>
      <MusicToggle />
      <CustomizePanel />
    </>
  );
}

function App() {
  return (
    <ContentProvider>
      <AppContent />
    </ContentProvider>
  );
}

export default App;

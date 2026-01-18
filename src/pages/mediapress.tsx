import Header from '@/components/Header';
import MediaPressSection from '@/components/MediaPressSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function MediaPressPage() {
  useEffect(() => {
    document.title = 'News & Events - DP Globals';
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="pt-20 md:pt-24">
        <MediaPressSection />
      </main>
      <Footer />
    </div>
  );
}

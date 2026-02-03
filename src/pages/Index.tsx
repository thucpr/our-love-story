import Navigation from '@/components/wedding/Navigation';
import HeroSection from '@/components/wedding/HeroSection';
import CoupleSection from '@/components/wedding/CoupleSection';
import EventSection from '@/components/wedding/EventSection';
import StorySection from '@/components/wedding/StorySection';
import GallerySection from '@/components/wedding/GallerySection';
import GiftSection from '@/components/wedding/GiftSection';
import ThankYouSection from '@/components/wedding/ThankYouSection';
import MusicPlayer from '@/components/wedding/MusicPlayer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="couple">
          <CoupleSection />
        </section>
        
        <section id="events">
          <EventSection />
        </section>
        
        <section id="story">
          <StorySection />
        </section>
        
        <section id="gallery">
          <GallerySection />
        </section>
        
        <section id="gift">
          <GiftSection />
        </section>
        
        <ThankYouSection />
      </main>

      <MusicPlayer />
    </div>
  );
};

export default Index;

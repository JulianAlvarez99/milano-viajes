import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { DestinationsSection } from '@/components/DestinationsSection';
import { AboutSection } from '@/components/AboutSection';
import { InstagramSection } from '@/components/InstagramSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <DestinationsSection />
        <AboutSection />
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}

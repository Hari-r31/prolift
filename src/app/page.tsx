'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import InfoBanner from '@/components/sections/InfoBanner';
import FeaturesSection from '@/components/sections/FeaturesSection';
import GallerySection from '@/components/sections/GallerySection';
import FAQSection from '@/components/sections/FAQSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <InfoBanner />
        <FeaturesSection />
        <GallerySection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
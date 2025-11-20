'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CoachesIntro from '@/components/sections/CoachesIntro';
import CoachGrid from '@/components/sections/CoachGrid';
import CoachingPhilosophy from '@/components/sections/CoachingPhilosophy';
import Testimonials from '@/components/sections/Testimonials';

export default function CoachesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CoachesIntro />
        <CoachGrid />
        <CoachingPhilosophy />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
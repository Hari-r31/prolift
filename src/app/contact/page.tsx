'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/sections/ContactForm';
import InfoBar from '@/components/sections/InfoBar';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <ContactForm />
        <InfoBar />
      </main>
      <Footer />
    </div>
  );
}
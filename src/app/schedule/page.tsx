'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScheduleHeader from '@/components/sections/ScheduleHeader';
import SchedulePrograms from '@/components/sections/SchedulePrograms';
import ScheduleTimeline from '@/components/sections/ScheduleTimeline';
import WeeklyGrid from '@/components/sections/WeeklyGrid';
import ScheduleCTA from '@/components/sections/ScheduleCTA';

export default function SchedulePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ScheduleHeader />
        <SchedulePrograms />
        <ScheduleTimeline />
        <WeeklyGrid />
        <ScheduleCTA />
        <div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
}
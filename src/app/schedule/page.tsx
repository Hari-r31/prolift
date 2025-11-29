'use client';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScheduleHeader from '@/components/sections/ScheduleHeader';
import SchedulePrograms from '@/components/sections/SchedulePrograms';
import ScheduleTimeline from '@/components/sections/ScheduleTimeline';
import ScheduleCTA from '@/components/sections/ScheduleCTA';
import WeeklyOverview from '@/components/sections/weeklyOverview';

export default function SchedulePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ScheduleHeader />
        <SchedulePrograms />
        <ScheduleTimeline />
        <WeeklyOverview />
        <ScheduleCTA />
        <div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
}
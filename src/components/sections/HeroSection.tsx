'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  // Framer Motion scroll progress tracker
  const { scrollYProgress } = useScroll();

  // Smooth the progress animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' as const } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 🎥 Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-100 contrast-[1.15] saturate-[1.2]"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Subtle Cyan Tint Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,168,232,0.15)_0%,rgba(0,31,43,0.4)_100%)]" />
      </div>

      {/* 🧠 Secondary Text Layer */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        <h1 className="text-white/90 text-3xl md:text-5xl font-semibold tracking-tight mb-6">
          <span className="block text-white/80">Train. Evolve. Dominate.</span>
          {/* <span className="block text-[#00A8E8]/90 font-bold mt-1"> */}
                    <span className="block text-gradient font-bold mt-1">
            Prolift Badminton Academy
          </span>
        </h1>

        <p className="text-gray-200/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          World-class training powered by professional coaches and modern facilities.
        </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <Button
    size="lg"
    className="group bg-[#00A8E8]/90 hover:bg-[#0094cf] text-white font-medium px-8 py-4 text-base rounded-full shadow-md hover:shadow-cyan-500/30 transition-all duration-300 flex items-center"
  >
    Enroll Now
    <ArrowRight
      className="ml-2 h-5 w-5 text-white transition-all duration-300 group-hover:text-[#fabb34] group-hover:translate-x-1 group-hover:rotate-90"
    />
  </Button>
</div>

      </motion.div>

      {/* 🔵 Scroll Progress Bar (Morphs from bottom indicator) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-100 bg-[linear-gradient(90deg,#fabb34_0%,#c11350_50%,#0197e2_100%)]"
        style={{ scaleX }}
      />


    </section>
  );
};

export default HeroSection;

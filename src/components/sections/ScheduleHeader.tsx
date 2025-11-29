'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, Clock, Users, Target } from 'lucide-react';
import Button from '../Shared/Button';

const ScheduleHeader = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut' as const,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <motion.section
      id="page-hero"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="
        relative py-28
        bg-linear-to-br from-primary/5 via-background to-secondary/5
        border-b border-border
        overflow-hidden
      "
    >
      {/* 🔵 Soft Glow Circles (Same Style as CoachesIntro) */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 blur-3xl rounded-full opacity-40" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-third/20 blur-3xl rounded-full opacity-40" />

      <div className="relative max-w-7xl mx-auto px-5 text-center">

        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6"
        >
          Training Schedule Roadmap
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10"
        >
          Choose a batch that fits your lifestyle and begin your journey to badminton
          excellence with structured, flexible training slots.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-6 mb-10 text-foreground/80"
        >
          <div className="flex items-center gap-2"><Calendar className="h-5 w-5" /> <span>7 Days a Week</span></div>
          <div className="flex items-center gap-2"><Clock className="h-5 w-5" /> <span>5AM – 9PM</span></div>
          <div className="flex items-center gap-2"><Users className="h-5 w-5" /> <span>Small Batches</span></div>
          <div className="flex items-center gap-2"><Target className="h-5 w-5" /> <span>Goal-Oriented</span></div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="
              bg-primary 
              hover:bg-secondary 
              text-primary-foreground
              font-semibold 
              px-8 py-4 
              rounded-full 
              shadow-lg 
              transition-all duration-300
            "
          >
            Book Your Slot
          </Button>
        </motion.div>
      </div>

      {/* 🔥 Scroll Progress Bar Aligned with Global Theme */}
      <motion.div
        className="
          fixed top-0 left-0 right-0 
          h-[3px] z-9999 origin-left
          bg-gradient-primary
        "
        style={{ scaleX }}
      />
    </motion.section>
  );
};

export default ScheduleHeader;

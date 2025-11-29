'use client';

import { motion } from 'framer-motion';
import Button from '../Shared/Button';

const CoachesIntro = () => {
  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut' as const,
        staggerChildren: 0.22,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: 'easeOut' as const },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      id="coach-hero"
      className="
  relative 
  py-28
  bg-linear-to-br from-primary/5 via-background to-secondary/5
  border-b border-border
  overflow-hidden
"

    >

      {/* Soft glow circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl opacity-40" />
      <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-third/20 blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-5 text-center">

        {/* Heading */}
        <motion.h2
          variants={item}
          className="
            text-4xl md:text-5xl lg:text-6xl
            font-extrabold tracking-tight
            text-foreground mt-10
          "
        >
          Meet Our Elite Coaches
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="
            text-lg md:text-xl
            text-muted-foreground
            max-w-3xl mx-auto mt-6
            leading-relaxed
          "
        >
          World-class mentors shaping the next generation of champions with
          discipline, precision, and unmatched training experience.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10"
        >
          <Button
              size="md"
              icon={true}
              href="/contact"
              className="bg-primary hover:bg-secondary text-white font-semibold"
            >
            Book a Trial with a Coach

            </Button>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default CoachesIntro;

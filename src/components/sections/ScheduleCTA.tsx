'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronUp } from 'lucide-react';

const ScheduleCTA = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const}
    }
  };

  const float = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="
        relative py-20 
        bg-gradient-primary
        text-primary-foreground
        overflow-hidden
      "
    >
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/30 blur-3xl opacity-40 rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-third/30 blur-3xl opacity-40 rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
        {/* Floating Icon */}
        <motion.div
          variants={float}
          animate="animate"
          className="
            inline-flex items-center justify-center
            w-20 h-20 rounded-full
            bg-white/15 backdrop-blur-md
            shadow-lg mb-6
          "
        >
          <Calendar className="h-10 w-10 text-primary-foreground" />
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to Start Your Journey?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10"
        >
          Join our academy and train under certified coaches with world-class
          programs. Book a trial session today.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Button
            size="lg"
            className="
              bg-white text-primary font-semibold 
              px-8 py-4
              rounded-full shadow-xl 
              hover:bg-primary/20 hover:text-primary 
              transition-all duration-300
            "
          >
            Book Your Slot
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="
              border-white/60 text-primary-foreground 
              hover:bg-white hover:text-primary 
              px-8 py-4 rounded-full
              font-semibold transition-all duration-300
            "
          >
            Download Schedule
          </Button>
        </motion.div>

      </div>

      {/* Floating CTA on Mobile */}
      <motion.div
        variants={float}
        animate="animate"
        className="fixed bottom-6 right-6 lg:hidden z-50"
      >
        <Button
          size="lg"
          className="
            bg-gradient-primary 
            text-primary-foreground
            px-6 py-3 rounded-full 
            font-semibold shadow-2xl 
            hover:shadow-3xl transition-all
          "
        >
          Book Slot
          <ChevronUp className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default ScheduleCTA;

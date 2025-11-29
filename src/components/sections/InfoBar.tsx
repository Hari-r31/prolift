'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const InfoBar = () => {

  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.15, ease: 'easeOut' as const },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mb-10 bg-background border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CTA SECTION */}
        <motion.div
          variants={item}
          className="
            text-center
            bg-linear-to-r from-primary/10 to-third/10
            rounded-3xl p-10
            border border-border
            shadow-lg
          "
        >
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Visit Our Academy
          </h3>

          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience our world-class facilities firsthand. Join us for an academy
            tour or a trial session — discover why Prolift is Bengaluru’s premier
            badminton destination.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            {/* Primary CTA */}
            <Button
              className="
                bg-primary
                hover:bg-secondary
                text-primary-foreground
                font-semibold px-8 py-3
                rounded-full shadow-md
                transition-all duration-300
              "
            >
              Schedule a Visit
            </Button>

            {/* Secondary CTA */}
            <Button
              variant="outline"
              className="
                border-primary
                text-primary
                hover:bg-primary/10
                hover:text-secondary
                px-8 py-3
                rounded-full font-semibold
                transition-all duration-300
              "
            >
              Virtual Tour
            </Button>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default InfoBar;

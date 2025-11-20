'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, Clock, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScheduleHeader = () => {
    // Framer Motion scroll progress tracker
  const { scrollYProgress } = useScroll();

  // Smooth the progress animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <motion.section
      id="page-hero"
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 bg-linear-to-br from-green-600 to-orange-500 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        >
          Training Schedule Roadmap
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed opacity-90"
        >
          Choose a batch that fits your lifestyle and start your journey to badminton excellence with our flexible training schedules.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>7 Days a Week</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5" />
            <span>5AM - 9PM</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Small Group Sizes</span>
          </div>
          <div className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Goal-Oriented</span>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="lg"
            className="bg-white text-green-600 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Book Your Slot
          </Button>
        </motion.div>
      </div>
            {/* 🔵 Scroll Progress Bar (Morphs from bottom indicator) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-100 bg-[linear-gradient(90deg,#fabb34_0%,#c11350_50%,#0197e2_100%)]"
        style={{ scaleX }}
      />
    </motion.section>
    
  );
};

export default ScheduleHeader;
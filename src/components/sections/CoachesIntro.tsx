'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Target, Users, Star } from 'lucide-react';

const CoachesIntro = () => {
  const introVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      variants={introVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 bg-gradient-to-br from-green-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
        >
          Meet Our Coaches
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Experienced mentors guiding every step of your journey with expertise, passion, and dedication to excellence.
        </motion.p>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="lg"
            className="prolift-gradient text-white px-8 py-4 text-lg font-semibold hover:shadow-2xl transition-all duration-300"
          >
            Book a Trial with a Coach
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CoachesIntro;
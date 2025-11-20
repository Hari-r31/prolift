'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronUp } from 'lucide-react';

const ScheduleCTA = () => {
  const ctaVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const floatVariants = {
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
      variants={ctaVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 bg-linear-to-br from-green-600 to-orange-500 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6"
        >
          <Calendar className="h-10 w-10 text-white" />
        </motion.div>

        <motion.h2 
          variants={ctaVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
        >
          Ready to Start Your Journey?
        </motion.h2>
        
        <motion.p 
          variants={ctaVariants}
          className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Join our academy today and take the first step towards becoming a badminton champion. 
          Book your trial session and experience the ProLift difference.
        </motion.p>

        <motion.div
          variants={ctaVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg"
            className="bg-white text-green-600 px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Book Your Slot
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            Download Schedule
          </Button>
        </motion.div>

        <motion.div
          variants={ctaVariants}
          className="mt-12 flex justify-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md">
            <h3 className="text-xl font-bold text-white mb-4">Quick Enquiry</h3>
            <div className="flex space-x-2">
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-white"
              />
              <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
                Send
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating CTA Button for Mobile */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="fixed bottom-6 right-6 z-40 lg:hidden"
      >
        <Button 
          size="lg"
          className="prolift-gradient text-white px-6 py-3 rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
        >
          Book Slot
          <ChevronUp className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default ScheduleCTA;
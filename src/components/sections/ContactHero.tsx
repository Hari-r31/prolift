'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactHero = () => {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.2, ease: 'easeOut' as const }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } }
  };

  return (
    <section
      id="contact-hero"
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Optional video background */}
        {/*
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/contact-bg.mp4"
          autoPlay
          muted
          loop
        />
        */}
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-linear-to-br from-green-800/20 to-orange-900/20" />
      </div>

      {/* Content Section */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight mt-25"
        >
          Connect & <span className="text-gradient">Enroll</span> 
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          We'd love to hear from you! Get in touch with us to start your badminton journey.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-10"
        >
          <div className="flex flex-col items-center text-white space-y-2">
            <MapPin className="h-8 w-8 text-primary" aria-label="Location" />
            <span className="font-semibold">Visit Us</span>
            <span className="text-sm text-gray-300">Prolift Badminton Academy, Bellandur</span>
          </div>

          <div className="flex flex-col items-center text-white space-y-2">
            <Phone className="h-8 w-8 text-primary" aria-label="Phone" />
            <span className="font-semibold">Call Us</span>
            <span className="text-sm text-gray-300">+91 89047 68822</span>
          </div>

          <div className="flex flex-col items-center text-white space-y-2">
            <Mail className="h-8 w-8 text-primary" aria-label="Email" />
            <span className="font-semibold">Email Us</span>
            <span className="text-sm text-gray-300">proliftbaddy2022@gmail.com</span>
          </div>
        </motion.div>
        
      </motion.div>
      
    </section>
  );
};

export default ContactHero;

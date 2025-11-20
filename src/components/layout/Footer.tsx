'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BackToTopButton from '@/components/ui/BackToTopButton';
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.1,
        ease: "easeOut" as const
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/proliftbadminton/', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: 'Prolift Badminton Academy, Green Glen Layout, Bellandur, Karnataka 560103 (Landmark: Sobha Lakeview Club House)',
      label: 'Address'
    },
    {
      icon: Phone,
      text: '+91-8904768822',
      label: 'Phone'
    },
    {
      icon: Mail,
      text: 'proliftbaddy2022@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Coaches', href: '#coaches' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Refund Policy', href: '#refund' },
  ];

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center space-x-2">
              <Link
                href="/"
                className="flex items-center space-x-2 transition-transform hover:scale-105 duration-300"
              >
                <Image
                  src="/logo_w.png"
                  alt="Prolift Academy Logo"
                  width={100}
                  height={100}
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </Link>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Professional badminton academy with world-class facilities, expert coaching, and personalized training programs to help you elevate your game.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start space-x-3">
                  <info.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-gray-300 text-sm">{info.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-gray-300 text-sm">
              Subscribe to get updates on training programs and tournaments.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
              />
              <Button 
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold hover:shadow-lg transition-all duration-300"
                size="lg"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Prolift Badminton Academy. All rights reserved.
            </p>

            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <BackToTopButton />
    </motion.footer>
  );
};

export default Footer;

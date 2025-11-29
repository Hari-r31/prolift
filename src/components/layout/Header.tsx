'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hero =
      document.getElementById('home') ||
      document.getElementById('page-hero') ||
      document.getElementById('contact-hero');

    if (!hero) return;

    heroRef.current = hero;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Coaches', href: '/coaches' },
    { name: 'Contact', href: '/contact' },
  ];

  const headerVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: { opacity: 1, scaleY: 1, transition: { duration: 0.3 } },
  };

  const isScrolled = !isHeroVisible;

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 origin-top rounded-b-3xl',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md border-b border-border'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* 🔹 Logo — FIXED to use Link + Image */}
          <Link
            href="/"
            className="flex items-center space-x-2 transition-transform hover:scale-105 duration-300"
          >
            <Image
              src={isScrolled ? '/logo_b.png' : '/logo_w.png'}
              alt="Prolift Academy Logo"
              width={120}
              height={120}
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* 🔸 Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={cn(
                  'font-medium transition-colors relative group',
                  isScrolled
                    ? 'text-gray-600 hover:text-primary'
                    : 'text-gray-600 hover:text-primary'
                )}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300',
                    isScrolled ? 'bg-primary' : 'bg-secondary'
                  )}
                />
              </motion.a>
            ))}
          </nav>

          {/* 🔸 Desktop CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="hidden lg:block"
          >
            <Button
              className={cn(
                'px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300',
                isScrolled
                  ? 'bg-primary hover:bg-secondary text-white'
                  : 'bg-white/10 text-white/40 border border-white/30 hover:bg-white/20 backdrop-blur-md'
              )}
              size="lg"
            >
              Join Now
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* 🔸 Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            className={cn(
              'lg:hidden transition-colors duration-300',
              isScrolled ? 'text-gray-700' : 'text-white'
            )}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* 🔹 Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden fixed inset-0 z-60 bg-white/95 backdrop-blur-md border-t border-border"
            >
              <div className="max-w-7xl mx-auto px-6 pt-24 pb-10 relative">

                {/* Close Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 transition-colors"
                >
                  <X size={26} />
                </button>

                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800">Menu</h3>
                  <div className="h-0.5 w-12 bg-primary mt-1 rounded-full" />
                </div>

                {/* Navigation */}
                <nav className="flex flex-col space-y-2 mb-10">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="block text-lg font-medium text-gray-800 hover:text-primary px-2 py-3 border-b border-gray-200/60 transition-all duration-200"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Call-to-Actions */}
                <div className="flex flex-col gap-3">

                  <Button className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-full text-base transition-all">
                    Join Now
                  </Button>

                  <a href="tel:+919876543210" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 rounded-full text-base transition-all"
                    >
                      <Phone className="mr-2 h-5 w-5" /> Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

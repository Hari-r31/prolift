'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InfoBanner = () => {
  const [scrollDuration, setScrollDuration] = useState(20);
  const [scrollDistance, setScrollDistance] = useState('-50%');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile — faster and longer movement
        setScrollDuration(12); // 🔥 Speed up
        setScrollDistance('-100%'); // 🔁 Move across full width
      } else {
        // Desktop — smooth, slower, subtle
        setScrollDuration(20);
        setScrollDistance('-50%');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const infoItems = [
    { icon: '🏸', text: '3 Wood Courts' },
    { icon: '🏸', text: '3 Synthetic Courts' },
    { icon: '🕔', text: '5AM–9PM' },
    { icon: '🧑‍🏫', text: '7+ Coaches' },
    { icon: '🏆', text: 'All Skill Levels' },
    { icon: '🎯', text: 'Expert Training' },
    { icon: '💪', text: 'Strength & Agility Programs' },
    { icon: '🔥', text: 'High-Performance Conditioning' },
  ];

  return (
    <section className="relative py-6 overflow-hidden bg-[linear-gradient(to_right,var(--primary),var(--third),var(--secondary))]">
      <div className="max-w-none">
        <motion.div
          className="flex items-center space-x-12 whitespace-nowrap will-change-transform"
          animate={{ x: ['0%', scrollDistance] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: scrollDuration,
            ease: 'linear',
          }}
        >
          {[...infoItems, ...infoItems].map((item, i) => (
            <div
              key={i}
              className="flex items-center space-x-3 text-black/95 font-semibold text-lg tracking-wide"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="uppercase tracking-wider whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Edge Fade Masks */}
      <div className="absolute left-0 top-0 w-32 h-full bg-linear-to-r from-black/20 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-linear-to-l from-black/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default InfoBanner;

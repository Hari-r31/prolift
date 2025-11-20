'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

interface BackToTopButtonProps {
  className?: string;
}

const BackToTopButton = ({ className = "" }: BackToTopButtonProps) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`fixed bottom-8 right-8 bg-cyan-500 hover:bg-cyan-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${className}`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-6 w-6" />
    </motion.button>
  );
};

export default BackToTopButton;
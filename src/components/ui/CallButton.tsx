'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

interface CallButtonProps {
  phoneNumber?: string;
  className?: string;
}

const CallButton = ({ 
  phoneNumber = "+91-8904768822", 
  className = "" 
}: CallButtonProps) => {
  const handleClick = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl ${className}`}
    >
      <Phone className="h-5 w-5" />
      <span>Call Now</span>
    </motion.button>
  );
};

export default CallButton;
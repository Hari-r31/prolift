'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

const WhatsAppButton = ({ 
  phoneNumber = "+91-8904768822", 
  message = "Hi! I'm interested in joining Prolift Badminton Academy. Can you provide more information?",
  className = "" 
}: WhatsAppButtonProps) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      <span>Chat with Us</span>
    </motion.button>
  );
};

export default WhatsAppButton;
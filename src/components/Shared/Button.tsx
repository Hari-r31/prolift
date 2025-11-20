'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon = false,
  ...props
}) => {
  const baseClasses: Record<ButtonVariant, string> = {
    primary: 'bg-gradient-to-r from-secondary to-primary text-white',
    secondary: 'bg-third text-black',
    outline:
      'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white',
    ghost: 'text-secondary hover:bg-secondary/10',
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-8',
    lg: 'py-4 px-12 text-lg',
  };

  const classes = `
    ${baseClasses[variant]} 
    ${sizeClasses[size]} 
    font-semibold 
    rounded-full 
    hover:shadow-xl 
    transition-all 
    duration-300 
    hover:scale-105 
    inline-flex 
    items-center 
    justify-center
    ${className}
  `;

  const content = (
    <>
      {children}
      {icon && (
        <motion.span
          className="ml-2 inline-flex"
          initial={{ x: 0 }}
          whileHover={{ x: 6 }}
          transition={{ type: 'spring', stiffness: 250, damping: 12 }}
        >
          <ArrowRight size={20} />
        </motion.span>
      )}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 },
  };

  // ✅ Internal or external link
  if (href) {
    const isExternal = href.startsWith('http');
    const Component = isExternal ? 'a' : Link;

    return (
      <motion.div {...motionProps}>
        <Component
          href={href}
          className={classes}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {content}
        </Component>
      </motion.div>
    );
  }

  // ✅ Motion-safe button
  return (
    <motion.button
      onClick={onClick}
      className={classes}
      {...motionProps}
      {...props} // ✅ now safe, typed from HTMLMotionProps
    >
      {content}
    </motion.button>
  );
};

export default Button;

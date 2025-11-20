'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Zap, Users, TrendingUp } from 'lucide-react';

const CoachingPhilosophy = () => {
  const philosophyVariants = {
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
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const philosophies = [
    {
      icon: Target,
      title: "Discipline",
      description: "Building consistent habits and routines that create champions both on and off the court.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Consistency",
      description: "Regular practice and steady progress are the keys to long-term success in badminton.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Fostering a supportive environment where players learn from each other and grow together.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "Embracing challenges as opportunities to learn and continuously improve skills and techniques.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={philosophyVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Coaching Philosophy
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            The core values that guide our training approach and shape our students into champions.
          </motion.p>
        </motion.div>

        {/* Philosophy Cards */}
        <motion.div
          variants={philosophyVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {philosophies.map((philosophy, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <Card className="h-full p-6 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 text-center bg-white">
                <CardContent className="p-0">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${philosophy.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <philosophy.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {philosophy.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {philosophy.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-green-500 to-orange-500 group-hover:w-full transition-all duration-300 mx-auto"></div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoachingPhilosophy;
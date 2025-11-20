'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Target, Zap, TrendingUp } from 'lucide-react';

const SchedulePrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const programsVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
    hover: { 
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" as const }
    }
  };

  const programs = [
    {
      id: 'professional',
      name: 'Professional',
      description: 'For full-time players across all ages who aspire to play at the highest level.',
      timings: '5AM-7AM, 10AM-1PM, 4-7PM (Mon-Sat)',
      frequency: '2-3 sessions/day, 6 days/week',
      icon: Target,
      color: 'from-red-500 to-orange-500',
      intensity: 'High',
      features: ['Advanced Techniques', 'Competition Prep', 'Physical Conditioning', 'Mental Training']
    },
    {
      id: 'intermediate',
      name: 'Intermediate',
      description: 'For local superstars looking to take their game to the next level.',
      timings: '6AM-7AM, 7AM-8AM, 8AM-9AM (Mon-Sun), 4PM-5PM, 5PM-6PM, 6PM-7PM (Mon-Sun)',
      frequency: '1 session/day, 5 days/week',
      icon: TrendingUp,
      color: 'from-blue-500 to-purple-500',
      intensity: 'Medium',
      features: ['Skill Development', 'Match Practice', 'Strategy Training', 'Fitness Drills']
    },
    {
      id: 'beginner',
      name: 'Beginner',
      description: 'For players looking to embark on their badminton journey.',
      timings: '6AM-7AM, 7AM-8AM, 8AM-9AM (Mon-Sun), 4PM-5PM, 5PM-6PM, 6PM-7PM (Mon-Sun)',
      frequency: '1 session/day, 3-5 days/week',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      intensity: 'Low',
      features: ['Basic Techniques', 'Footwork Fundamentals', 'Rules & Etiquette', 'Fun Games']
    }
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={programsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={cardVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Training Programs
          </motion.h2>
          <motion.p 
            variants={cardVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Choose the program that matches your skill level and goals
          </motion.p>
        </motion.div>

        {/* Program Cards */}
        <motion.div
          variants={programsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
              className="cursor-pointer"
            >
              <Card className={`h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                selectedProgram === program.id ? 'ring-2 ring-green-500' : ''
              }`}>
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-linear-to-br ${program.color} rounded-2xl flex items-center justify-center`}
                    >
                      <program.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <Badge className={getIntensityColor(program.intensity)}>
                      {program.intensity} Intensity
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {program.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {program.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-700">
                        <strong>Timings:</strong> {program.timings}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-700">
                        <strong>Frequency:</strong> {program.frequency}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 mb-2">What You'll Learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full prolift-gradient text-white font-semibold hover:shadow-lg transition-all duration-300"
                    size="lg"
                  >
                    Book Trial Class
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Branch Information */}
        <motion.div
          variants={programsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="bg-linear-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Academy Locations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Bellandur Branch</h4>
              <p className="text-gray-600 text-sm mb-2">Main Academy</p>
              <p className="text-gray-700">All Programs Available</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Kormangala Branch</h4>
              <p className="text-gray-600 text-sm mb-2">Coming Soon</p>
              <p className="text-gray-500">Limited Programs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SchedulePrograms;
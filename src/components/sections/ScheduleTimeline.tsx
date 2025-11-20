'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Zap, TrendingUp } from 'lucide-react';

const ScheduleTimeline = () => {
  const timelineVariants = {
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

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const sessions = [
    {
      time: "5AM–7AM",
      ageGroup: "6–10 years",
      coach: "Ravi Kumar",
      focus: "Basics & Fundamentals",
      intensity: "Low",
      type: "Little Champs",
      description: "Perfect for young beginners to learn the basics in a fun, engaging environment.",
      icon: Zap,
      color: "from-yellow-400 to-orange-500"
    },
    {
      time: "7AM–9AM",
      ageGroup: "11–15 years", 
      coach: "Aisha Singh",
      focus: "Footwork & Agility",
      intensity: "High",
      type: "Junior Development",
      description: "Intensive training focusing on footwork, agility, and technical skills.",
      icon: TrendingUp,
      color: "from-blue-400 to-purple-500"
    },
    {
      time: "9AM–11AM",
      ageGroup: "16+ years",
      coach: "Michael Chen",
      focus: "Advanced Techniques",
      intensity: "High",
      type: "Senior Training",
      description: "Advanced techniques and strategies for competitive players.",
      icon: Zap,
      color: "from-green-400 to-teal-500"
    },
    {
      time: "4PM–6PM",
      ageGroup: "11–15 years",
      coach: "Priya Sharma", 
      focus: "Match Practice",
      intensity: "Medium",
      type: "Junior Development",
      description: "Practice matches and tactical training for young players.",
      icon: Users,
      color: "from-pink-400 to-red-500"
    },
    {
      time: "6PM–8PM",
      ageGroup: "16+ years",
      coach: "David Park",
      focus: "Competition Prep",
      intensity: "High",
      type: "Elite Training",
      description: "Comprehensive preparation for tournaments and competitions.",
      icon: TrendingUp,
      color: "from-indigo-400 to-purple-600"
    },
    {
      time: "7PM–9PM",
      ageGroup: "Adults",
      coach: "Sarah Johnson",
      focus: "Fitness & Recreation",
      intensity: "Medium",
      type: "Adult Program",
      description: "Perfect for adults looking to stay fit while enjoying badminton.",
      icon: Users,
      color: "from-gray-400 to-gray-600"
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
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Daily Training Sessions
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our carefully crafted schedule ensures optimal training times for all age groups and skill levels.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-green-500 to-orange-500"></div>

          <div className="space-y-12">
            {sessions.map((session, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Time Badge */}
                <div className="shrink-0">
                  <div className={`bg-linear-to-r ${session.color} text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg`}>
                    {session.time}
                  </div>
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 max-w-2xl"
                >
                  <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {session.type}
                          </h3>
                          <p className="text-gray-600 mb-3">{session.description}</p>
                        </div>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-12 h-12 bg-linear-to-br ${session.color} rounded-xl flex items-center justify-center shrink-0`}
                        >
                          <session.icon className="h-6 w-6 text-white" />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Age Group</p>
                          <p className="font-semibold text-gray-900">{session.ageGroup}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Coach</p>
                          <p className="font-semibold text-gray-900">{session.coach}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Focus</p>
                          <p className="font-semibold text-gray-900">{session.focus}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Intensity</p>
                          <Badge className={getIntensityColor(session.intensity)}>
                            {session.intensity}
                          </Badge>
                        </div>
                      </div>

                      <button className="w-full bg-linear-to-r from-green-600 to-orange-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                        Book This Session
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-green-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleTimeline;
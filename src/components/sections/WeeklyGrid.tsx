'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

const WeeklyGrid = () => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.1,
        ease: "easeOut" as const
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const weeklySchedule = [
    {
      day: 'Mon',
      sessions: [
        { time: '5-7AM', type: 'Little Champs', coach: 'Ravi', available: 3 },
        { time: '7-9AM', type: 'Junior Dev', coach: 'Aisha', available: 2 },
        { time: '4-6PM', type: 'Junior Dev', coach: 'Priya', available: 1 },
        { time: '6-8PM', type: 'Elite', coach: 'David', available: 0 }
      ]
    },
    {
      day: 'Tue',
      sessions: [
        { time: '5-7AM', type: 'Little Champs', coach: 'Ravi', available: 4 },
        { time: '7-9AM', type: 'Senior', coach: 'Michael', available: 2 },
        { time: '4-6PM', type: 'Match Practice', coach: 'Priya', available: 3 },
        { time: '7-9PM', type: 'Adult', coach: 'Sarah', available: 5 }
      ]
    },
    {
      day: 'Wed',
      sessions: [
        { time: '5-7AM', type: 'Little Champs', coach: 'Ravi', available: 2 },
        { time: '7-9AM', type: 'Junior Dev', coach: 'Aisha', available: 1 },
        { time: '9-11AM', type: 'Senior', coach: 'Michael', available: 3 },
        { time: '6-8PM', type: 'Elite', coach: 'David', available: 0 }
      ]
    },
    {
      day: 'Thu',
      sessions: [
        { time: '5-7AM', type: 'Little Champs', coach: 'Ravi', available: 3 },
        { time: '7-9AM', type: 'Junior Dev', coach: 'Aisha', available: 2 },
        { time: '4-6PM', type: 'Junior Dev', coach: 'Priya', available: 4 },
        { time: '7-9PM', type: 'Adult', coach: 'Sarah', available: 2 }
      ]
    },
    {
      day: 'Fri',
      sessions: [
        { time: '5-7AM', type: 'Little Champs', coach: 'Ravi', available: 1 },
        { time: '7-9AM', type: 'Senior', coach: 'Michael', available: 0 },
        { time: '4-6PM', type: 'Match Practice', coach: 'Priya', available: 2 },
        { time: '6-8PM', type: 'Elite', coach: 'David', available: 1 }
      ]
    },
    {
      day: 'Sat',
      sessions: [
        { time: '6-8AM', type: 'Tournament Practice', coach: 'David', available: 3 },
        { time: '8-10AM', type: 'Junior Dev', coach: 'Priya', available: 4 },
        { time: '10AM-12PM', type: 'Senior', coach: 'Michael', available: 2 },
        { time: '4-6PM', type: 'Family Session', coach: 'Sarah', available: 6 }
      ]
    },
    {
      day: 'Sun',
      sessions: [
        { time: '6-8AM', type: 'Tournament Practice', coach: 'Ravi', available: 2 },
        { time: '8-10AM', type: 'Little Champs', coach: 'Priya', available: 5 },
        { time: '4-6PM', type: 'Recreational', coach: 'Sarah', available: 8 },
        { time: '6-8PM', type: 'Advanced Drills', coach: 'David', available: 1 }
      ]
    }
  ];

  const getAvailabilityColor = (available: number) => {
    if (available === 0) return 'bg-red-100 text-red-800 border-red-200';
    if (available <= 2) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-green-100 text-green-800 border-green-200';
  };

  const getAvailabilityText = (available: number) => {
    if (available === 0) return 'Full';
    if (available <= 2) return `${available} spots`;
    return `${available} spots`;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Weekly Training Schedule
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            View our complete weekly schedule and book your preferred training sessions.
          </motion.p>
        </motion.div>

        {/* Days Navigation */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {days.map((day) => (
            <motion.button
              key={day}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDay(selectedDay === day ? null : day)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedDay === day
                  ? 'bg-linear-to-r from-green-600 to-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {day}
            </motion.button>
          ))}
        </motion.div>

        {/* Schedule Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {weeklySchedule.map((daySchedule) => (
            <motion.div
              key={daySchedule.day}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`${selectedDay && selectedDay !== daySchedule.day ? 'opacity-50' : ''}`}
            >
              <Card className={`h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                selectedDay === daySchedule.day ? 'ring-2 ring-green-500' : ''
              }`}>
                <CardContent className="p-6">
                  {/* Day Header */}
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-br from-green-500 to-orange-500 rounded-full text-white font-bold text-lg mb-2">
                      {daySchedule.day[0]}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{daySchedule.day}</h3>
                  </div>

                  {/* Sessions */}
                  <div className="space-y-3">
                    {daySchedule.sessions.map((session, index) => (
                      <div
                        key={index}
                        className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-green-300 transition-colors duration-200"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span className="font-semibold text-gray-900">{session.time}</span>
                          </div>
                          <Badge className={getAvailabilityColor(session.available)}>
                            {getAvailabilityText(session.available)}
                          </Badge>
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-2">
                          <div className="font-medium text-gray-900">{session.type}</div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-3 w-3" />
                            <span>Coach {session.coach}</span>
                          </div>
                        </div>

                        <Button
                          size="sm"
                          className="w-full"
                          disabled={session.available === 0}
                          variant={session.available === 0 ? "secondary" : "default"}
                        >
                          {session.available === 0 ? 'Fully Booked' : 'Book Now'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span>Limited Spots</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span>Full</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeeklyGrid;
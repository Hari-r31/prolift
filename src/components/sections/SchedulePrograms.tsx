'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, Target, TrendingUp } from 'lucide-react';

const SchedulePrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2, ease: "easeOut" as const }
    },
  };

  const card = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
      description: 'For full-time players committed to high-level competitive training.',
      timings: '5AM–7AM, 10AM–1PM, 4–7PM',
      frequency: '2–3 sessions/day, 6 days/week',
      icon: Target,
      gradient: 'bg-linear-to-br from-primary to-secondary',
      intensity: 'High',
      features: ['Advanced Techniques', 'Competition Prep', 'Strength Training', 'Mental Coaching']
    },
    {
      id: 'intermediate',
      name: 'Intermediate',
      description: 'Ideal for developing players aiming to elevate their game.',
      timings: '6–9AM & 4–7PM (Daily)',
      frequency: '1 session/day, 5 days/week',
      icon: TrendingUp,
      gradient: 'bg-linear-to-br from-secondary to-third',
      intensity: 'Medium',
      features: ['Strategy Training', 'Footwork', 'Fitness', 'Match Play']
    },
    {
      id: 'beginner',
      name: 'Beginner',
      description: 'For students starting their badminton journey.',
      timings: '6–9AM & 4–7PM (Daily)',
      frequency: '3–5 sessions/week',
      icon: Users,
      gradient: 'bg-linear-to-br from-third to-primary',
      intensity: 'Low',
      features: ['Basic Techniques', 'Footwork', 'Rules & Discipline', 'Fun Games']
    }
  ];

  const intensityColor = {
    Low: 'bg-primary/10 text-primary',
    Medium: 'bg-secondary/10 text-secondary',
    High: 'bg-third/10 text-third',
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={card}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Training <span className="text-gradient">Programs</span>
          </motion.h2>

          <motion.p
            variants={card}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Select the right pathway based on your goals and skill level.
          </motion.p>
        </motion.div>

        {/* PROGRAM CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {programs.map(program => (
            <motion.div
              key={program.id}
              variants={card}
              whileHover="hover"
              onClick={() =>
                setSelectedProgram(selectedProgram === program.id ? null : program.id)
              }
              className="cursor-pointer group"
            >
              <Card
                className={`h-full bg-card border-border border rounded-2xl shadow-lg 
                transition-all duration-300 hover:shadow-2xl 
                ${selectedProgram === program.id ? 'ring-2 ring-primary' : ''}`}
              >
                <CardContent className="p-6">

                  {/* ICON + INTENSITY */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${program.gradient} flex items-center justify-center`}>
                      <program.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <Badge className={intensityColor[program.intensity]}>
                      {program.intensity} Intensity
                    </Badge>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {program.name}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {program.description}
                  </p>

                  {/* INFO */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span><strong>Timings:</strong> {program.timings}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span><strong>Frequency:</strong> {program.frequency}</span>
                    </div>
                  </div>

                  {/* FEATURES */}
                  <div className="mt-4">
                    <h4 className="font-semibold text-foreground text-sm mb-2">
                      What You'll Learn
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((f, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary"
                        >
                          {f}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className="
                      w-full mt-6
                      bg-gradient-primary
                      text-primary-foreground
                      font-semibold rounded-full
                      shadow-md hover:shadow-xl
                      transition-all duration-300
                    "
                  >
                    Book Trial Class
                  </Button>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* ACADEMY BRANCHES */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            rounded-2xl p-10 border border-border 
            bg-linear-to-r from-primary/5 via-background to-third/5
            shadow-lg
          "
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Academy Locations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-1">Bellandur Branch</h4>
              <p className="text-muted-foreground text-sm">Main Academy</p>
              <p className="text-foreground">All Programs Available</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-1">Kormangala Branch</h4>
              <p className="text-muted-foreground text-sm">Coming Soon</p>
              <p className="text-muted-foreground">Limited Programs</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SchedulePrograms;

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
      transition: { duration: 0.8, staggerChildren: 0.2, ease: "easeOut" as const }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  // Theme-based intensity colors
  const getIntensityColor = (level: string) => {
    if (level === "Low") return "bg-primary/10 text-primary";
    if (level === "Medium") return "bg-secondary/10 text-secondary";
    return "bg-third/10 text-third"; // High
  };

  // Sessions (gradient colors replaced with theme gradients)
  const sessions = [
    {
      time: "5AM–7AM",
      ageGroup: "6–10 years",
      coach: "Ravi Kumar",
      focus: "Basics & Fundamentals",
      intensity: "Low",
      type: "Little Champs",
      description: "Perfect program for kids starting their badminton journey.",
      icon: Zap,
      gradient: "bg-linear-to-r from-primary to-secondary"
    },
    {
      time: "7AM–9AM",
      ageGroup: "11–15 years",
      coach: "Aisha Singh",
      focus: "Footwork & Agility",
      intensity: "High",
      type: "Junior Development",
      description: "Dynamic sessions focusing on agility and proper movement.",
      icon: TrendingUp,
      gradient: "bg-linear-to-r from-secondary to-third"
    },
    {
      time: "9AM–11AM",
      ageGroup: "16+ years",
      coach: "Michael Chen",
      focus: "Advanced Techniques",
      intensity: "High",
      type: "Senior Training",
      description: "Intense drills and advanced technique refinement.",
      icon: Zap,
      gradient: "bg-linear-to-r from-third to-primary"
    },
    {
      time: "4PM–6PM",
      ageGroup: "11–15 years",
      coach: "Priya Sharma",
      focus: "Match Practice",
      intensity: "Medium",
      type: "Junior Development",
      description: "Tactical match practice for young competitive players.",
      icon: Users,
      gradient: "bg-linear-to-r from-primary to-secondary"
    },
    {
      time: "6PM–8PM",
      ageGroup: "16+ years",
      coach: "David Park",
      focus: "Competition Prep",
      intensity: "High",
      type: "Elite Training",
      description: "Serious prep for tournaments and competitive events.",
      icon: TrendingUp,
      gradient: "bg-linear-to-r from-secondary to-third"
    },
    {
      time: "7PM–9PM",
      ageGroup: "Adults",
      coach: "Sarah Johnson",
      focus: "Fitness & Recreation",
      intensity: "Medium",
      type: "Adult Program",
      description: "Ideal for adults improving fitness while enjoying the sport.",
      icon: Users,
      gradient: "bg-linear-to-r from-third to-primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Daily Training <span className="text-gradient">Sessions</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            A structured timeline offering the right training at the right time.
          </motion.p>
        </motion.div>

        {/* TIMELINE */}
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >

          {/* CENTER LINE (DESKTOP) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-[3px] h-full " />

          <div className="space-y-16 relative">
            {sessions.map((session, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row items-center gap-10 ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                }`}
              >

                {/* TIME BADGE */}
                <div className="shrink-0">
                  <div
                    className={`${session.gradient} text-primary-foreground px-6 py-3 rounded-full font-bold shadow-lg`}
                  >
                    {session.time}
                  </div>
                </div>

                {/* CARD */}
                <motion.div whileHover={{ scale: 1.02 }} className="flex-1 max-w-2xl">
                  <Card className="bg-card border-border border rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                    <CardContent className="p-6">

                      <div className="flex justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {session.type}
                          </h3>
                          <p className="text-muted-foreground text-sm">{session.description}</p>
                        </div>

                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-12 h-12 rounded-xl ${session.gradient} flex items-center justify-center`}
                        >
                          <session.icon className="h-6 w-6 text-primary-foreground" />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-muted-foreground text-xs">Age Group</p>
                          <p className="font-semibold text-foreground">{session.ageGroup}</p>
                        </div>

                        <div>
                          <p className="text-muted-foreground text-xs">Coach</p>
                          <p className="font-semibold text-foreground">{session.coach}</p>
                        </div>

                        <div>
                          <p className="text-muted-foreground text-xs">Focus</p>
                          <p className="font-semibold text-foreground">{session.focus}</p>
                        </div>

                        <div>
                          <p className="text-muted-foreground text-xs">Intensity</p>
                          <Badge className={`${getIntensityColor(session.intensity)} px-3`}>
                            {session.intensity}
                          </Badge>
                        </div>
                      </div>

                      <button className="
                        w-full mt-6 
                        bg-gradient-primary 
                        text-primary-foreground
                        py-2.5 rounded-full font-semibold
                        shadow-md hover:shadow-xl transition-all
                      ">
                        Book This Session
                      </button>

                    </CardContent>
                  </Card>
                </motion.div>

              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleTimeline;

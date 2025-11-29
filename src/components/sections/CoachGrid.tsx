'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Button from '../Shared/Button';
import { Award } from 'lucide-react';

const CoachGrid = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.15,
        ease: 'easeOut' as const,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' as const},
    },
    hover: {
      y: -12,
      scale: 1.03,
      transition: { duration: 0.25, ease: 'easeOut' as const },
    },
  };

  const coaches = [
    {
      id: 1,
      name: "Ravi Kumar",
      title: "Head Coach",
      certifications: "BWF Certified Level 2",
      experience: "15+ years",
      bio: "Former national player with extensive international coaching experience in elite performance training.",
      specialties: ["Advanced Techniques", "Competition Prep", "Game Strategy"],
      achievements: ["Coached 50+ National Players", "State Champion", "BWF Level 2 Certified"],
      image: "https://placehold.co/600x600/png"
    },
    {
      id: 2,
      name: "Aisha Singh",
      title: "Strength & Conditioning Coach",
      certifications: "ACE Certified Trainer",
      experience: "10+ years",
      bio: "Specialist in performance conditioning, agility, and injury-free athletic development.",
      specialties: ["Agility", "Speed Training", "Injury Prevention"],
      achievements: ["ACE Certified", "Sports Nutrition Expert", "1000+ Athletes Trained"],
      image: "https://placehold.co/600x600/png"
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Senior Coach",
      certifications: "BWF Certified Level 1",
      experience: "8+ years",
      bio: "Footwork and defense expert with a strong focus on technical precision and youth player development.",
      specialties: ["Footwork", "Defense", "Youth Training"],
      achievements: ["Championship Coach", "Technical Analyst", "Footwork Specialist"],
      image: "https://placehold.co/600x600/png"
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {coaches.map((coach) => (
            <motion.div
              key={coach.id}
              variants={card}
              whileHover="hover"
              className="group"
            >
              <Card
                className="
                  h-full rounded-3xl overflow-hidden
                  border border-border bg-card
                  shadow-xl hover:shadow-2xl
                  backdrop-blur-sm
                  transition-all duration-300
                "
              >
                <CardContent className="p-0">

                  {/* IMAGE */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="
                        w-full h-full object-cover
                        transition-all duration-700
                        group-hover:scale-110
                      "
                    />

                    {/* Gradient Overlay */}
                    <div className="
                      absolute inset-0 
                      bg-linear-to-t from-black/50 to-transparent
                    "></div>

                    {/* EXPERIENCE BADGE */}
                    <Badge
                      className="
                        absolute top-4 right-4
                        bg-primary text-primary-foreground
                        shadow-md rounded-full
                        px-4 py-1 text-xs font-semibold
                      "
                    >
                      {coach.experience}
                    </Badge>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">

                    {/* Name / Title */}
                    <h3 className="text-2xl font-bold text-foreground">
                      {coach.name}
                    </h3>

                    <p className="text-primary font-semibold text-sm mt-1">
                      {coach.title}
                    </p>

                    <p className="text-muted-foreground text-xs mt-1">
                      {coach.certifications}
                    </p>

                    {/* Bio */}
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {coach.bio}
                    </p>

                    {/* Specialties */}
                    <div className="mt-5">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Specialties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {coach.specialties.map((s, i) => (
                          <Badge
                            key={i}
                            className="
                              text-xs
                              bg-secondary/20 text-secondary
                              rounded-full
                              px-3 py-1
                            "
                          >
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Key Achievements
                      </h4>

                      <ul className="space-y-1">
                        {coach.achievements.map((ach, i) => (
                          <li
                            key={i}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <Award className="h-3.5 w-3.5 text-primary mr-2" />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button
                      size="sm"
                      className="
                        w-full mt-7
                        bg-gradient-primary text-primary-foreground
                        rounded-full font-semibold
                        shadow-md hover:shadow-xl
                        transition-all duration-300
                      "
                    >
                      Book With {coach.name.split(' ')[0]}
                    </Button>

                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CoachGrid;

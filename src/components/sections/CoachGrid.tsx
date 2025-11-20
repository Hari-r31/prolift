'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Calendar, Mail, Phone } from 'lucide-react';

const CoachGrid = () => {
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.15,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: { 
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const coaches = [
    {
      id: 1,
      name: "Ravi Kumar",
      title: "Head Coach",
      certifications: "BWF Certified Level 2",
      experience: "15+ years",
      bio: "Former national player with 15+ years of coaching experience at national and international levels. Specializes in advanced techniques and competition preparation.",
      specialties: ["Advanced Techniques", "Competition Prep", "Mental Conditioning"],
      achievements: ["Coached 50+ National Players", "State Championship Winner", "BWF Level 2 Certified"],
      image: "/coach1.jpg"
    },
    {
      id: 2,
      name: "Aisha Singh",
      title: "Fitness & Conditioning Coach",
      certifications: "ACE Certified Trainer",
      experience: "10+ years",
      bio: "Specialist in agility, strength, and core training for badminton athletes. Focuses on injury prevention and performance optimization.",
      specialties: ["Agility Training", "Core Strength", "Injury Prevention"],
      achievements: ["ACE Certified", "Sports Nutrition Expert", "1000+ Athletes Trained"],
      image: "/coach2.jpg"
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Senior Coach",
      certifications: "BWF Certified Level 1",
      experience: "8+ years",
      bio: "Expert in footwork and defensive techniques. Passionate about developing young talent and building strong foundations.",
      specialties: ["Footwork", "Defense", "Youth Development"],
      achievements: ["Youth Championship Coach", "Footwork Specialist", "Technical Analysis Expert"],
      image: "/coach3.jpg"
    },
    {
      id: 4,
      name: "Priya Sharma",
      title: "Junior Development Coach",
      certifications: "BWF Certified Level 1",
      experience: "6+ years",
      bio: "Specializes in training young champions (6-15 years). Creates fun, engaging sessions while building strong technical foundations.",
      specialties: ["Junior Training", "Basic Techniques", "Fun Learning"],
      achievements: ["Junior Expert", "Child Psychology Certified", "100+ Happy Parents"],
      image: "/coach4.jpg"
    },
    {
      id: 5,
      name: "David Park",
      title: "Technical Coach",
      certifications: "National Level Coach",
      experience: "12+ years",
      bio: "Master of technical analysis and stroke improvement. Uses video analysis and modern training methods for perfect technique.",
      specialties: ["Technical Analysis", "Video Coaching", "Stroke Correction"],
      achievements: ["Technical Analysis Expert", "Video Coaching Pioneer", "Stroke Specialist"],
      image: "/coach5.jpg"
    },
    {
      id: 6,
      name: "Sarah Johnson",
      title: "Mental Conditioning Coach",
      certifications: "Sports Psychology Certified",
      experience: "7+ years",
      bio: "Focuses on mental toughness, concentration, and competitive mindset development. Helps players overcome performance anxiety.",
      specialties: ["Mental Toughness", "Competition Psychology", "Performance Enhancement"],
      achievements: ["Sports Psychology Expert", "Mental Conditioning Specialist", "Peak Performance Coach"],
      image: "/coach6.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {coaches.map((coach) => (
            <motion.div
              key={coach.id}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  {/* Coach Image */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gray-400 rounded-full mx-auto mb-2"></div>
                        <p className="text-gray-600 font-medium">{coach.name}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-600 text-white">
                        {coach.experience}
                      </Badge>
                    </div>
                  </div>

                  {/* Coach Info */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {coach.name}
                      </h3>
                      <p className="text-green-600 font-semibold mb-2">
                        {coach.title}
                      </p>
                      <p className="text-sm text-gray-500 mb-3">
                        {coach.certifications}
                      </p>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {coach.bio}
                    </p>

                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {coach.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {coach.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-center">
                            <Award className="h-3 w-3 text-green-500 mr-2" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className="w-full prolift-gradient text-white font-semibold hover:shadow-lg transition-all duration-300"
                      size="sm"
                    >
                      Book Session with {coach.name.split(' ')[0]}
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
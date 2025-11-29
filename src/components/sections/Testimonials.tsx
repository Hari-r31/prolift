'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: 'easeOut' as const,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const testimonials = [
    {
      name: "Arjun Patel",
      age: "16 years",
      program: "Advanced Training",
      quote: "ProLift Academy transformed my game completely. The coaches are amazing and the facilities are world-class.",
      rating: 5,
      achievement: "State Champion 2024"
    },
    {
      name: "Divya Nair",
      age: "14 years",
      program: "Junior Development",
      quote: "Personalized attention and elite fitness training helped me improve faster than I imagined!",
      rating: 5,
      achievement: "District Winner"
    },
    {
      name: "Rohit Sharma",
      age: "22 years",
      program: "Professional Training",
      quote: "The technical analysis and mental conditioning programs are next level.",
      rating: 5,
      achievement: "National Qualifier"
    }
  ];

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-4"
          >
            What Our Students Say
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Real experiences from players who grew with ProLift Academy.
          </motion.p>
        </motion.div>

        {/* CAROUSEL */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: -currentIndex * 100 + '%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="flex"
            >
              {testimonials.map((t, index) => (
                <div key={index} className="w-full shrink-0 px-4">

                  <Card className="p-8 bg-card border border-border shadow-xl rounded-2xl">
                    <CardContent className="p-0">

                      {/* RATING */}
                      <div className="flex justify-center mb-4">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-primary fill-primary"
                          />
                        ))}
                      </div>

                      {/* QUOTE */}
                      <blockquote className="text-xl text-foreground text-center mb-6 leading-relaxed italic">
                        “{t.quote}”
                      </blockquote>

                      {/* DETAILS */}
                      <div className="text-center">
                        <div className="font-bold text-foreground text-lg">
                          {t.name}
                        </div>

                        <div className="text-muted-foreground text-sm">
                          {t.age} • {t.program}
                        </div>

                        <div className="text-secondary font-semibold text-sm mt-1">
                          🏆 {t.achievement}
                        </div>
                      </div>

                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ARROWS */}
          <button
            onClick={prev}
            className="
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4
              bg-card border border-border
              rounded-full p-3 shadow-md hover:shadow-lg
              transition-all duration-300
            "
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>

          <button
            onClick={next}
            className="
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-4
              bg-card border border-border
              rounded-full p-3 shadow-md hover:shadow-lg
              transition-all duration-300
            "
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>

          {/* DOTS */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 
                  ${i === currentIndex
                    ? 'bg-primary w-6'
                    : 'bg-muted w-2.5'
                  }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

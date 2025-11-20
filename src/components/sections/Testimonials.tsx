'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsVariants = {
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const testimonials = [
    {
      name: "Arjun Patel",
      age: "16 years",
      program: "Advanced Training",
      quote: "ProLift Academy transformed my game completely. The coaches are amazing and the facilities are world-class. I've improved my ranking from state level to national level in just 8 months!",
      rating: 5,
      achievement: "State Champion 2024"
    },
    {
      name: "Divya Nair",
      age: "14 years", 
      program: "Junior Development",
      quote: "The personalized attention I get here is incredible. Coach Aisha's fitness training has made me stronger and more confident on court. Best academy in Bangalore!",
      rating: 5,
      achievement: "District Winner"
    },
    {
      name: "Rohit Sharma",
      age: "22 years",
      program: "Professional Training",
      quote: "As someone who wants to pursue badminton professionally, ProLift has given me the perfect platform. The technical analysis and mental conditioning programs are top-notch.",
      rating: 5,
      achievement: "National Qualifier"
    },
    {
      name: "Ananya Reddy",
      age: "12 years",
      program: "Little Champs",
      quote: "My daughter loves coming to practice every day! The coaches make learning fun while maintaining discipline. We've seen remarkable improvement in her game and confidence.",
      rating: 5,
      achievement: "Tournament Winner"
    },
    {
      name: "Karan Malhotra",
      age: "18 years",
      program: "Elite Training",
      quote: "The comprehensive training approach at ProLift covers everything - technique, fitness, strategy, and mental toughness. It's more than just coaching, it's complete player development.",
      rating: 5,
      achievement: "All India Rank 45"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={testimonialsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            What Our Students Say
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Real stories from real champions who started their journey at ProLift Academy.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={testimonialsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ x: -currentIndex * 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <Card className="p-8 border-0 shadow-xl bg-white">
                    <CardContent className="p-0">
                      {/* Stars */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl text-gray-700 text-center mb-6 leading-relaxed italic">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="text-center">
                        <div className="font-bold text-gray-900 text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600 text-sm mb-1">
                          {testimonial.age} • {testimonial.program}
                        </div>
                        <div className="text-green-600 font-semibold text-sm">
                          🏆 {testimonial.achievement}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-green-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
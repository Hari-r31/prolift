

'use client';

import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  { name: 'BWF Certified Coach', icon: '🏆' },
  { name: 'Sports Science Diploma', icon: '🎓' },
  { name: 'First Aid Certified', icon: '⚕️' },
  { name: 'Nutrition Specialist', icon: '🥗' },
];

const Certifications = () => {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-gradient">Certifications</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our coaches hold internationally recognized certifications
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="
                bg-card 
                rounded-2xl 
                p-8 
                text-center 
                shadow-lg 
                hover:shadow-2xl 
                transition-all 
                duration-300 
                border border-border
              "
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="font-semibold text-foreground text-lg">
                {cert.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Button from '../Shared/Button';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What age groups do you train at Prolift Academy?",
      answer:
        "We offer training programs for all age groups from 6 years to adults. Our junior programs cater to 6 – 12 years, youth programs for 13–18 years, and adult programs for 18+ years. Each program is specifically designed to match the physical and mental development of the age group.",
    },
    {
      question: "Do I need prior badminton experience to join?",
      answer:
        "Not at all! We welcome players of all skill levels — from complete beginners to advanced players. Our coaches assess each player's current level and create personalized training plans to help them progress at their own pace.",
    },
    {
      question: "What equipment do I need to bring?",
      answer:
        "You'll need to bring your own badminton racket and comfortable sportswear. We provide high-quality shuttlecocks for training sessions. For beginners, we can guide you on selecting the right racket during your first session.",
    },
    {
      question: "How many students are there in each training batch?",
      answer:
        "We maintain a coach-to-student ratio of 1:8 to ensure personalized attention. This allows our coaches to focus on individual development while maintaining a dynamic group training environment.",
    },
    {
      question: "Are there trial sessions available?",
      answer:
        "Yes! We offer a complimentary trial session for new students to experience our training methodology and facilities. This helps you understand our coaching style before committing to a program.",
    },
    {
      question: "What are the academy timings?",
      answer:
        "We're open from 5AM to 9PM daily. We have multiple batches throughout the day including early morning (5–7AM), morning (10AM–12PM), afternoon (4–6PM), and evening (6:30–8:30PM) sessions to accommodate different schedules.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="page-hero"
      className="relative py-24 min-h-screen bg-white text-gray-900 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <HelpCircle size={36} className="text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked{' '}
            <span className="text-gradient">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Got questions about our training programs? Find answers below — everything from schedules to trial sessions.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 text-lg font-semibold text-gray-800"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-primary" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-gray-200"
                  >
                    <div className="px-6 py-4 text-gray-700 leading-relaxed bg-gray-50/70">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gray-100 border border-gray-200 rounded-3xl px-10 py-8">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Reach out to our team for details about training programs, facilities, or enrollment.
            </p>
            <Button
              size="lg"
              icon={true}
              href="/contact"
              className="bg-primary hover:bg-secondary text-white font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;

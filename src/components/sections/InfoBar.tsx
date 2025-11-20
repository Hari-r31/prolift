'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import CallButton from '@/components/ui/CallButton';
import { Button } from '@/components/ui/button';

const InfoBar = () => {
  const infoItems = [
    {
      icon: Phone,
      label: 'Call Us',
      text: '+91-8904768822',
      color: 'from-blue-500 to-blue-600',
      component: <CallButton className="w-full" />,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      text: '+91-8904768822',
      color: 'from-green-500 to-emerald-600',
      component: <WhatsAppButton className="w-full" />,
    },
    {
      icon: Mail,
      label: 'Email',
      text: 'proliftbaddy2022@gmail.com',
      color: 'from-orange-500 to-orange-600',
      action: {
        text: 'Send Email',
        link: 'mailto:proliftbaddy2022@gmail.com',
      },
    },
  ];

  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.15, ease: 'easeOut' as const },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const},
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GRID CARDS */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {infoItems.map((itemData, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="h-full"
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-linear-to-br from-gray-50 to-white rounded-2xl">
                <CardContent className="p-6 text-center flex flex-col justify-between h-full">
                  <div>
                    <div
                      className={`w-16 h-16 bg-linear-to-br ${itemData.color} rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300`}
                    >
                      <itemData.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {itemData.label}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {itemData.text}
                    </p>
                  </div>

                  {/* ACTION */}
                  {itemData.component ? (
                    <div className="mt-5">{itemData.component}</div>
                  ) : itemData.action ? (
                    <div className="mt-5">
                      <Button
                        asChild
                        size="sm"
                        className={`w-full bg-linear-to-r ${itemData.color} text-white font-medium rounded-full hover:shadow-md transition-all`}
                      >
                        <a
                          href={itemData.action.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <span>{itemData.action.text}</span>
                          <Navigation className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA SECTION */}
        <motion.div
          variants={item}
          className="mt-16 text-center bg-linear-to-r from-green-50 to-orange-50 rounded-3xl p-10 border border-green-100 shadow-md"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Visit Our Academy
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience our world-class facilities firsthand. Join us for an academy
            tour or a trial session — discover why Prolift is Bengaluru’s premier
            badminton destination.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300"
            >
              Schedule a Visit
            </Button>

            <Button
              variant="outline"
              className="border-green-600 text-green-700 hover:bg-green-50 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Virtual Tour
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InfoBar;

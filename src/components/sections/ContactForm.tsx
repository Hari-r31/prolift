'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
} from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate backend call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);

    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', program: '', message: '' });
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our programs? Want to schedule a visit?  
            Send us a message and we'll get back to you soon!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* CONTACT FORM */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Full Name *
                    </Label>
                    <div className="relative mt-2">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="pl-10 py-3 border-gray-300 focus:border-green-500 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Email Address *
                    </Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="pl-10 py-3 border-gray-300 focus:border-green-500 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 font-medium">
                      Phone Number *
                    </Label>
                    <div className="relative mt-2">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="pl-10 py-3 border-gray-300 focus:border-green-500 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Program */}
                  <div>
                    <Label htmlFor="program" className="text-gray-700 font-medium">
                      Interested Program
                    </Label>
                    <Select
                      value={formData.program}
                      onValueChange={(value) => handleInputChange('program', value)}
                    >
                      <SelectTrigger className="mt-2 py-3 border-gray-300 focus:border-green-500">
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="little-champs">Little Champs (6–10 yrs)</SelectItem>
                        <SelectItem value="junior-dev">Junior Development (11–15 yrs)</SelectItem>
                        <SelectItem value="senior">Senior Training (16+ yrs)</SelectItem>
                        <SelectItem value="elite">Elite Training</SelectItem>
                        <SelectItem value="adult">Adult Program</SelectItem>
                        <SelectItem value="private">Private Coaching</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Message
                    </Label>
                    <div className="relative mt-2">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Textarea
                        id="message"
                        placeholder="Tell us about your goals or any questions..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="pl-10 py-3 min-h-[120px] border-gray-300 focus:border-green-500 focus:ring-green-500 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-green-700 text-white py-3 text-lg font-semibold transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* MAP + INFO SECTION */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] relative">
              <iframe
                title="Prolift Badminton Academy Map"
                src="https://www.google.com/maps?q=Prolift+Badminton+Academy,+Bellandur,+Bangalore&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Academy Info */}
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-6 space-y-5">
                <h3 className="text-xl font-bold text-gray-900">
                  Academy Information
                </h3>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600 text-sm">
                      Green Glen Layout, Bellandur<br />
                      Landmark: Sobha Lakeview Club House<br />
                      Bengaluru, Karnataka 560103
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-gray-600 text-sm">+91 89047 68822</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600 text-sm">
                      proliftbaddy2022@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-1 text-primary">🕐</div>
                  <div>
                    <p className="font-medium text-gray-900">Working Hours</p>
                    <p className="text-gray-600 text-sm">
                      Monday – Sunday: 5:00 AM – 9:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;

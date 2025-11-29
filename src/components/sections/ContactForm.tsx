'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// UI Components
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

// Icons
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  MessageCircle as MessageCircleIcon,
} from 'lucide-react';

/* -------------------------------
   UNIFIED CTA BUTTON
-------------------------------- */
const CTAButton = ({ href, children, className = "" }) => (
  <Button
    asChild
    className={`
      w-full h-11 rounded-full font-semibold text-white
      bg-linear-to-r from-primary to-secondary
      shadow-md hover:shadow-lg
      flex items-center justify-center gap-2
      hover:scale-[1.02] active:scale-[0.97]
      transition-all duration-300
      ${className}
    `}
  >
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
      {children}
    </a>
  </Button>
);

export const CallButton = ({ className = "" }) => (
  <CTAButton href="tel:+918904768822" className={className}>
    <Phone className="h-5 w-5" />
    Call Now
  </CTAButton>
);

export const WhatsAppButton = ({ className = "" }) => (
  <CTAButton href="https://wa.me/918904768822" className={className}>
    <MessageCircleIcon className="h-5 w-5" />
    WhatsApp
  </CTAButton>
);

export const EmailButton = ({ className = "" }) => (
  <CTAButton href="mailto:proliftbaddy2022@gmail.com" className={className}>
    <Mail className="h-5 w-5" />
    Send Email
  </CTAButton>
);

/* -------------------------------
   MAIN COMPONENT
-------------------------------- */

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const infoItems = [
    { component: <CallButton className="w-full" /> },
    { component: <WhatsAppButton className="w-full" /> },
    { component: <EmailButton className="w-full" /> },
  ];

  const handleInputChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      message: '',
    });

    setIsSubmitting(false);
  };

  /* Animation Variants */
  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? Want to schedule a visit? Send us a message and we'll reply soon!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* CONTACT FORM */}
          <motion.div variants={itemVariants}>
            <Card className="border border-border shadow-xl bg-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* NAME */}
                  <div>
                    <Label>Full Name *</Label>
                    <div className="relative mt-2">
                      <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="pl-10 py-3 border-border"
                        required
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <Label>Email *</Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="pl-10 py-3 border-border"
                        required
                      />
                    </div>
                  </div>

                  {/* PHONE */}
                  <div>
                    <Label>Phone *</Label>
                    <div className="relative mt-2">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="pl-10 py-3 border-border"
                        required
                      />
                    </div>
                  </div>

                  {/* PROGRAM */}
                  <div>
                    <Label>Interested Program</Label>
                    <Select
                      value={formData.program}
                      onValueChange={(value) => handleInputChange('program', value)}
                    >
                      <SelectTrigger className="mt-2 py-3 border-border">
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="little-champs">Little Champs (6–10 yrs)</SelectItem>
                        <SelectItem value="junior-dev">Junior Development</SelectItem>
                        <SelectItem value="senior">Senior Training</SelectItem>
                        <SelectItem value="elite">Elite Training</SelectItem>
                        <SelectItem value="adult">Adult Program</SelectItem>
                        <SelectItem value="private">Private Coaching</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <Label>Message</Label>
                    <div className="relative mt-2">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Textarea
                        placeholder="Tell us about your goals..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="pl-10 py-3 min-h-[120px] border-border resize-none"
                      />
                    </div>
                  </div>

                  {/* SUBMIT */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-secondary text-primary-foreground py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* CTA BUTTONS */}
            <motion.div
              variants={container}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
            >
              {infoItems.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  {item.component}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* MAP + INFO PANEL */}
          <motion.div variants={itemVariants} className="space-y-8">

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=Prolift+Badminton+Academy,+Bellandur,+Bangalore&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* INFO PANEL */}
            <Card className="border border-border shadow-xl bg-card">
              <CardContent className="p-6 space-y-5">
                <h3 className="text-xl font-bold text-foreground">Academy Information</h3>

                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground text-sm">
                      Green Glen Layout, Bellandur<br />
                      Sobha Lakeview Club House<br />
                      Bengaluru, Karnataka 560103
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground text-sm">+91 89047 68822</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">
                      proliftbaddy2022@gmail.com
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

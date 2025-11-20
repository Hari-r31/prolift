
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Heart, 
  Shield, 
  Zap 
} from 'lucide-react';

const WhyProlift = () => {
  const features = [
    {
      icon: Award,
      title: 'Certified Coaches',
      description: 'Internationally certified coaches with years of competitive experience',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Users,
      title: 'Small Group Training',
      description: 'Personalized attention with 1:8 coach-to-student ratio',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: TrendingUp,
      title: 'Progress Tracking',
      description: 'Regular performance analysis and skill development tracking',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-600/10',
    },
    {
      icon: Heart,
      title: 'Holistic Development',
      description: 'Focus on physical fitness, mental toughness, and sportsmanship',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'World-class facilities with proper safety measures and equipment',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Zap,
      title: 'Competitive Exposure',
      description: 'Regular tournaments and match play opportunities',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-600/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-prolift-black mb-4">
            Why Choose <span className="text-gradient">Prolift?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to nurturing badminton champions through world-class training, 
            personalized coaching, and a supportive environment that brings out the best in every player.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="bg-gray-50 rounded-2xl p-8 h-full card-hover">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={32} className={feature.color} />
                </div>
                <h3 className="text-xl font-bold text-prolift-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyProlift;
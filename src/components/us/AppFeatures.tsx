'use client'
import { motion, useInView } from "framer-motion";
import { CreditCard, Calendar, Bell, MapPin, DollarSign, Clock } from "lucide-react";
import { useRef } from "react";

const AppFeatures: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: CreditCard,
      title: "Book with your digital wallet",
      description: "Start booking right away. Pay securely with Apple Pay, Google Pay, or any major credit card.",
      color: "#4977E5"
    },
    {
      icon: Calendar,
      title: "Schedule at your convenience",
      description: "Choose your preferred date and time with our flexible scheduling system. Same-day service available.",
      color: "#10B981"
    },
    {
      icon: Bell,
      title: "Real-time notifications",
      description: "Get instant updates when your cleaner is on the way, has arrived, and when the job is complete.",
      color: "#F59E0B"
    },
    {
      icon: MapPin,
      title: "Track your cleaner",
      description: "See your cleaner's location in real-time with live GPS tracking for peace of mind.",
      color: "#EF4444"
    },
    {
      icon: DollarSign,
      title: "Transparent pricing",
      description: "Know exactly what you'll pay before booking. No hidden fees, no surprises.",
      color: "#8B5CF6"
    },
    {
      icon: Clock,
      title: "Manage appointments easily",
      description: "View, reschedule, or cancel appointments with just a few taps. Full control at your fingertips.",
      color: "#06B6D4"
    }
  ];

  return (
    <section className="py-20 px-5 xl:px-0 bg-white" ref={ref}>
      <div className="max-w-[1139px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            The App
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Features you need. Nothing you don't.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#4977E5]/30 hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${feature.color}15` }}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={32} style={{ color: feature.color }} />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AppFeatures;


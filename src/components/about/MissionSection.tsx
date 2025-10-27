'use client'
import { motion, useInView } from "framer-motion";
import { Target, Heart, Shield, Sparkles } from "lucide-react";
import { useRef } from "react";

const MissionSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide exceptional cleaning services that create healthier, happier spaces for our clients while maintaining the highest standards of professionalism and care.",
      color: "#4977E5"
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We believe in integrity, reliability, and excellence. Every member of our team is committed to treating your space as if it were their own.",
      color: "#EF4444"
    },
    {
      icon: Shield,
      title: "Our Commitment",
      description: "Fully insured and bonded, we guarantee quality service with every visit. Your satisfaction and peace of mind are our top priorities.",
      color: "#10B981"
    },
    {
      icon: Sparkles,
      title: "Our Promise",
      description: "We promise eco-friendly products, meticulous attention to detail, and a sparkling clean space that you'll love coming home to.",
      color: "#F59E0B"
    }
  ];

  return (
    <section className="py-20 px-5 xl:px-0 bg-gray-50" ref={ref}>
      <div className="max-w-[1139px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Drives Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Our mission, values, and commitment to excellence guide everything we do
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <Icon size={32} style={{ color: value.color }} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;


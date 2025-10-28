'use client'
import { motion, useInView } from "framer-motion";
import { CheckCircle, Users, Clock, Award, Star, ThumbsUp } from "lucide-react";
import { useRef } from "react";

const WhyChooseUs: React.FC = () => {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const reasons = [
    {
      icon: CheckCircle,
      title: "Vetted Professionals",
      description: "All our cleaners are thoroughly background-checked and trained to deliver excellence"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book services at your convenience with easy online scheduling and real-time availability"
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "We stand behind our work with a 100% satisfaction guarantee on every service"
    },
    {
      icon: ThumbsUp,
      title: "Eco-Friendly Products",
      description: "We use safe, environmentally responsible cleaning products for your health and our planet"
    },
    {
      icon: Star,
      title: "Consistent Excellence",
      description: "Same-day service available with consistent, high-quality results you can count on"
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Join our community of satisfied customers who trust us with their spaces"
    }
  ];

  const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "5000+", label: "Happy Clients" },
    { number: "50+", label: "Expert Cleaners" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <section className="py-20 px-5 xl:px-8 bg-white" ref={ref}>
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Pebble Cleaning?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Experience the difference that professional, reliable, and caring service makes
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-start p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#4977E5] flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#4977E5] to-[#5b8aef] rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statsVariants}
                initial="hidden"
                animate={statsInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm sm:text-base text-white/90 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


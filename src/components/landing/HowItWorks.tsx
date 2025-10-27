'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users, CheckCircle } from "lucide-react";

const HowItWorks: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Calendar,
      title: "Book",
      description: "Choose your service, date, and address. Whether you need a home deep clean or an office refresh, Pebble makes it effortless."
    },
    {
      icon: Users,
      title: "Match",
      description: "We connect you with vetted, local cleaners who fit your schedule and budget."
    },
    {
      icon: CheckCircle,
      title: "Relax",
      description: "Track your booking in real time, message your cleaner, and pay securely — all in the app."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50/30 via-white to-purple-50/20 overflow-hidden" ref={ref}>
      {/* Subtle background shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="max-w-[1139px] mx-auto px-5 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📲 How Pebble Works
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-white/60 backdrop-blur-lg p-8 rounded-3xl border border-white/50 text-center hover:border-[#4977E5]/30 transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-[#4977E5] rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Step {index + 1} — {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#4977E5]/30" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-xl font-semibold text-[#4977E5]">
            🧽 That's cleaning made simple.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;


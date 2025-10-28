'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Clock, CreditCard, MessageCircle, Leaf } from "lucide-react";

const WhyChoosePebble: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: CheckCircle,
      title: "Vetted Professionals",
      description: "Every cleaner is background-checked and trained to Pebble standards."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Book instantly or set recurring cleans that fit your lifestyle."
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Pay seamlessly through the app — no cash, no stress."
    },
    {
      icon: MessageCircle,
      title: "Real-Time Updates",
      description: "Track job progress, upload before/after photos, and chat with your cleaner."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Options",
      description: "Choose sustainable cleaning products and reduce waste."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
    <section className="relative py-20 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20 overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob-slow"></div>
      <div className="max-w-[1280px] mx-auto px-5 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🧹 Why Choose Pebble Cleaning?
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-white/60 hover:border-[#4977E5]/40 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#4977E5]/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-[#4977E5]" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoosePebble;


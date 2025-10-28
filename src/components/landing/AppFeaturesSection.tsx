'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, MessageSquare, Star } from "lucide-react";

const AppFeaturesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Calendar,
      title: "Booking Screen",
      description: "Book any service in seconds"
    },
    {
      icon: MapPin,
      title: "Tracking Screen",
      description: "Know exactly when your cleaner arrives"
    },
    {
      icon: MessageSquare,
      title: "Messaging Screen",
      description: "Stay connected, right inside the app"
    },
    {
      icon: Star,
      title: "Reviews Screen",
      description: "Rate and rebook your favourites"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="relative py-20 bg-gradient-to-b from-purple-50/20 via-white to-blue-50/20 overflow-hidden" ref={ref}>
      {/* Decorative blobs */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob-slow"></div>
      <div className="w-full mx-auto px-5 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            📦 Built for simplicity. Designed for trust.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className="text-center bg-white/60 backdrop-blur-lg p-8 rounded-3xl border border-white/50 hover:border-[#4977E5]/30 transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6 relative h-[300px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#4977E5] rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-400 text-sm">App Screenshot</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppFeaturesSection;


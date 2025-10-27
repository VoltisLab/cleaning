'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MessageSquare, CreditCard, Bell, MapPin, Star } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Calendar,
      title: "Instant Booking",
      description: "Book your cleaner in under 60 seconds. Pick your date, time, and you're done."
    },
    {
      icon: MessageSquare,
      title: "In-App Chat",
      description: "Message your cleaner directly. Share special instructions in real-time."
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Pay safely through the app. No cash needed. Stripe-powered protection."
    },
    {
      icon: Bell,
      title: "Real-Time Tracking",
      description: "Know exactly when your cleaner arrives. Get updates every step of the way."
    },
    {
      icon: MapPin,
      title: "Local Professionals",
      description: "Matched with vetted cleaners in your area. Background-checked and insured."
    },
    {
      icon: Star,
      title: "Rate & Review",
      description: "Share your experience. Help others find the best cleaners in the community."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4977E5] to-[#5B7AFF]">
              right in your pocket
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manage every aspect of your cleaning from one beautiful app
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 h-full border-2 border-transparent hover:border-[#4977E5] transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


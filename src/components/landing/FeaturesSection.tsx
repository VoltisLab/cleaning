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
      <div className="w-full mx-auto px-6 xl:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Everything you need,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4977E5] to-[#5B7AFF] pb-1">
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
              <div className="bg-white rounded-3xl p-8 h-full border border-gray-200 hover:border-[#4977E5] hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-[#4977E5]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#4977E5]/20 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-[#4977E5]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
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


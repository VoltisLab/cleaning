'use client'
import { motion, useInView } from "framer-motion";
import { Shield, Lock, Fingerprint, Mail, Bell, Key } from "lucide-react";
import { useRef } from "react";

const AppSecurity: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Lock,
      title: "Instant card lock",
      description: "Lock your payment method with one tap, whether you think it's misplaced, lost or stolen."
    },
    {
      icon: Bell,
      title: "Real-time alerts",
      description: "Turn on instant push notifications to stay on top of your account activity and bookings."
    }
  ];

  const securityFeatures = [
    {
      icon: Fingerprint,
      title: "Fingerprint and facial recognition",
      description: "You can use your biometric data to ensure that only you can log into your app."
    },
    {
      icon: Mail,
      title: "Go Paperless",
      description: "Receive your monthly statements by email to increase account security and reduce waste."
    },
    {
      icon: Shield,
      title: "Full protection for peace of mind",
      description: "Your information is secured by 256-bit encryption and other security features."
    }
  ];

  return (
    <>
      {/* Build credit securely section */}
      <section className="py-20 px-5 xl:px-0 bg-white" ref={ref}>
        <div className="max-w-[1139px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Book securely
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We safeguard your data with end-to-end encryption and security features designed to protect your privacy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100 hover:border-[#4977E5]/50 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 bg-[#4977E5] rounded-2xl flex items-center justify-center mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(73, 119, 229, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4977E5] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4977E5]/90 transition-colors shadow-lg"
            >
              Download the app
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Security you can count on */}
      <section className="py-20 px-5 xl:px-0 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-[1139px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Security you can count on
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="w-16 h-16 bg-[#4977E5] rounded-2xl flex items-center justify-center mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#4977E5] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get started
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AppSecurity;


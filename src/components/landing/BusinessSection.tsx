'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, FileText, BarChart3 } from "lucide-react";
import Link from "next/link";

const BusinessSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Building2,
      text: "Manage multiple sites & recurring cleans"
    },
    {
      icon: Calendar,
      text: "Approve and track bookings across locations"
    },
    {
      icon: FileText,
      text: "Centralised monthly invoicing"
    },
    {
      icon: BarChart3,
      text: "Real-time performance insights"
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#4977E5] via-[#5B7AFF] to-[#7C3AED] text-white overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob-slow"></div>
      </div>
      <div className="max-w-[1139px] mx-auto px-5 xl:px-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🏢 Cleaning that scales with your business.
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              From offices to Airbnbs to property agencies — Pebble helps you manage multiple properties, teams, and invoices in one smart dashboard.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white/90">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/business">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/90 backdrop-blur-sm text-[#4977E5] px-10 py-5 rounded-full font-bold hover:bg-white hover:shadow-2xl transition-all text-lg"
              >
                👉 Learn About Business Accounts
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[400px] bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center"
          >
            <p className="text-white/60 text-lg">Dashboard Mockup</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;


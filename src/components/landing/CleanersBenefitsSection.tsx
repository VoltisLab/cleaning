'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Wallet, TrendingUp, Users, Shield, Clock, Sparkles } from "lucide-react";

const CleanersBenefitsSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Wallet,
      title: "0% Platform Fees",
      description: "Keep 100% of what you earn. No hidden charges, no commission cuts. What you charge is what you get."
    },
    {
      icon: Wallet,
      title: "Free to Use",
      description: "Join and start earning at absolutely no cost. No subscription fees, no monthly charges, no setup costs."
    },
    {
      icon: TrendingUp,
      title: "More Earnings",
      description: "With zero fees, you maximize your income. Every booking means more money in your pocket."
    },
    {
      icon: Users,
      title: "Access to Customers",
      description: "Connect with customers actively looking for cleaning services. Build your client base effortlessly."
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Get paid safely and on time. All transactions are protected and processed securely through the platform."
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Work on your own terms. Accept bookings that fit your schedule and availability."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-6 xl:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6 border border-blue-100 w-fit"
            >
              <Sparkles className="w-4 h-4 text-[#4977E5]" />
              <span className="text-sm font-semibold text-[#4977E5]">For Professional Cleaners</span>
            </motion.div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Keep 100% of Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4977E5] to-[#5B7AFF]">
                Earnings - Zero Fees
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join Pebble and enjoy a completely free platform designed to help you grow your cleaning business. No fees, no commissions, no hidden costs.
            </p>

            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-[#4977E5] to-[#5B7AFF] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Single Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-xs">
              <Image
                src="/landing/hero/phone-min.png"
                alt="Cleaner Benefits"
                width={320}
                height={640}
                className="w-full rounded-2xl"
                priority
                unoptimized
                quality={100}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CleanersBenefitsSection;

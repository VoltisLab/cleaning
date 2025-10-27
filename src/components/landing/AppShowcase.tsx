'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AppShowcase: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your cleaning,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4977E5] to-[#5B7AFF]">
                your control
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From booking to payment, everything happens in the app. No phone calls, no paperwork, no hassle.
            </p>

            <div className="space-y-6">
              {[
                { title: "Smart Scheduling", desc: "Book one-time or recurring cleans that fit your life" },
                { title: "Instant Notifications", desc: "Get updates when your cleaner is on the way" },
                { title: "Transparent Pricing", desc: "See costs upfront. No hidden fees, ever." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-[#4977E5] to-[#5B7AFF] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-2xl p-4 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Status</p>
                    <p className="font-bold text-sm">Booking Confirmed</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-4 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">★</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Rating</p>
                    <p className="font-bold text-sm">5.0 Stars</p>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <div className="flex items-center justify-center">
                <Image
                  src="/landing/showcase-phone.png"
                  alt="Pebble Cleaning App Showcase"
                  width={280}
                  height={560}
                  className="w-full max-w-xs"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;


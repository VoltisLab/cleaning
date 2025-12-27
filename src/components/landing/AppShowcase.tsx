'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

const AppShowcase: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Work on Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4977E5] to-[#5B7AFF]">
                Own Terms
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              As a cleaner on Pebble, you have full control over your work, schedule, and earnings.
            </p>

            <div className="space-y-6">
              {[
                { title: "Choose Your Jobs", desc: "See available jobs and accept only the ones that fit your schedule, location, and preferences." },
                { title: "Set Your Price", desc: "You decide what a job is worth. Pebble makes pricing and negotiation clear, simple, and respectful." },
                { title: "Built-in Negotiation", desc: "No endless messages. Counter offers, agree on terms, and confirm work — all inside the app." },
                { title: "Clear Terms, No Surprises", desc: "Job details, expectations, and payments are visible upfront so everyone knows what's agreed." }
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
                    <p className="font-bold text-sm">Offer Accepted</p>
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
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-bold text-sm">3.5 Miles away</p>
                  </div>
                </div>
              </motion.div>

              {/* Phones - Stacked on mobile, side by side on larger screens */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Image
                  src="/landing/hero/3.png"
                  alt="Pebble Cleaning App - Screen 1"
                  width={320}
                  height={640}
                  className="w-full max-w-xs"
                  unoptimized
                  quality={100}
                />
                <Image
                  src="/landing/hero/4.png"
                  alt="Pebble Cleaning App - Screen 2"
                  width={320}
                  height={640}
                  className="w-full max-w-xs"
                  unoptimized
                  quality={100}
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


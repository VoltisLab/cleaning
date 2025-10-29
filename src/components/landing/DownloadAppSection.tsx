'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const DownloadAppSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="download" className="relative py-20 bg-gradient-to-br from-[#4977E5] via-[#5B7AFF] to-[#7C3AED] overflow-hidden" ref={ref}>
      {/* Animated decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob-slow"></div>
      </div>
      <div className="max-w-[1280px] mx-auto px-5 xl:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start your first clean today 🧽
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Download Pebble on iOS or Android and experience the easiest way to keep your home or business spotless.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all"
            >
              <Image
                src="/app-store/apple-app-store.png"
                alt="Download on the App Store"
                width={200}
                height={60}
                className="w-auto h-[60px]"
              />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="transition-all"
            >
              <Image
                src="/app-store/google-play-store.png"
                alt="Get it on Google Play"
                width={200}
                height={60}
                className="w-auto h-[60px]"
              />
            </motion.a>
          </div>

          <p className="text-blue-100 text-sm">
            Secure payments, verified cleaners, instant peace of mind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadAppSection;


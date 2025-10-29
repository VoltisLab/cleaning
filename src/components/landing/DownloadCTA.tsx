'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const DownloadCTA: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="download" className="py-24 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-blob-slow"></div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 xl:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to experience
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
              effortless cleaning?
            </span>
          </h2>

          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Download the Pebble app and get your first booking done in minutes
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
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

          {/* Trust Badge */}
            <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-blue-100 text-sm"
          >
            ✓ Free to download  •  ✓ No credit card required  •  ✓ Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCTA;


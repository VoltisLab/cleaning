'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Apple, Smartphone } from "lucide-react";

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
      <div className="max-w-[1139px] mx-auto px-5 xl:px-0">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/90 backdrop-blur-sm text-[#4977E5] px-10 py-5 rounded-2xl font-bold inline-flex items-center justify-center gap-3 hover:bg-white hover:shadow-2xl transition-all"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/90 backdrop-blur-sm text-[#4977E5] px-10 py-5 rounded-2xl font-bold inline-flex items-center justify-center gap-3 hover:bg-white hover:shadow-2xl transition-all"
            >
              <Smartphone className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
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


'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Apple, Smartphone } from "lucide-react";

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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-5 rounded-2xl font-bold inline-flex items-center justify-center gap-4 hover:shadow-2xl transition-all w-full sm:w-auto group"
            >
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center group-hover:bg-[#4977E5] transition-colors">
                <Apple className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-600">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-5 rounded-2xl font-bold inline-flex items-center justify-center gap-4 hover:shadow-2xl transition-all w-full sm:w-auto group"
            >
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center group-hover:bg-[#4977E5] transition-colors">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-600">GET IT ON</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
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


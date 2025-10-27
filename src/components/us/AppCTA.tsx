'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Sparkles } from "lucide-react";

const AppCTA: React.FC = () => {
  return (
    <section className="relative py-20 px-5 xl:px-0 bg-gradient-to-br from-[#4977E5] via-[#5b8aef] to-purple-600 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-[1139px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-6"
          >
            <Sparkles size={40} className="text-white" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            It's time to be Seen
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Download the Pebble Cleaning app today and experience the future of home services.
          </p>

          {/* Download badges */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="hover:drop-shadow-2xl transition-all"
            >
              <Image
                src="/app-store/google-play-badge.svg"
                alt="Get it on Google Play"
                width={200}
                height={59}
                className="drop-shadow-xl"
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="hover:drop-shadow-2xl transition-all"
            >
              <Image
                src="/app-store/apple-store-badge.svg"
                alt="Download on the App Store"
                width={180}
                height={59}
                className="drop-shadow-xl"
              />
            </motion.button>
          </div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/30"
          >
            <Download size={20} className="text-white" />
            <span className="text-white font-medium">Available on iOS and Android</span>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 bg-white rounded-2xl shadow-2xl p-4 hidden lg:block"
        >
          <p className="text-sm font-bold text-[#4977E5]">✨ 50K+ Downloads</p>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-10 right-10 bg-white rounded-2xl shadow-2xl p-4 hidden lg:block"
        >
          <p className="text-sm font-bold text-[#4977E5]">⭐ 4.8 Rating</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AppCTA;


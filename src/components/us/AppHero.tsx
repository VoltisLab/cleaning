'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { Smartphone, QrCode } from "lucide-react";

const AppHero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#4977E5] via-[#5b8aef] to-[#4977E5] py-20 px-5 xl:px-0 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1139px] mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Get The App
            </motion.h1>
            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-semibold mb-6"
            >
              Step up your cleaning game.
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl mb-8 text-white/90"
            >
              Designed to support you and your goals. Download the app to book services instantly.
            </motion.p>

            {/* App store badges */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/app-store/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={53}
                  className="drop-shadow-xl"
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/app-store/apple-store-badge.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={53}
                  className="drop-shadow-xl"
                />
              </motion.button>
            </motion.div>

            {/* QR Code section */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
            >
              <p className="text-sm mb-4 text-white/90">Hold your device camera up to the QR code to download the app.</p>
              <div className="flex items-center gap-4">
                <div className="bg-white p-4 rounded-xl">
                  <QrCode size={80} className="text-[#4977E5]" />
                </div>
                <div className="text-sm text-white/80">
                  <p className="font-semibold mb-1">Quick Access</p>
                  <p>Scan to download instantly</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Phone mockup */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-[3rem] p-4 border-4 border-white/30 shadow-2xl">
                <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  <div className="bg-gradient-to-br from-[#4977E5] to-[#5b8aef] h-full flex items-center justify-center">
                    <Smartphone size={120} className="text-white/20" />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4"
              >
                <p className="text-sm font-bold text-[#4977E5]">Book in 2 mins</p>
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4"
              >
                <p className="text-sm font-bold text-[#4977E5]">Real-time tracking</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AppHero;


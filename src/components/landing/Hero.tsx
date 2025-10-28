"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Shield, Clock, Star } from 'lucide-react';

const phoneImages = [
  '/landing/hero/phone-app.png',
  '/landing/hero/phone-app-2.png'
];

const HeroSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % phoneImages.length);
    }, 3000); // Change slide every 3 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-purple-50" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow"></div>
      </div>
      
      <div className="max-w-[1280px] mx-auto px-6 xl:px-8 pt-12 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4 border border-blue-100 w-fit"
            >
              <Sparkles className="w-4 h-4 text-[#4977E5]" />
              <span className="text-sm font-semibold text-[#4977E5]">Trusted by 1,000+ UK customers</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
              Clean Spaces,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4977E5] to-[#5B7AFF]">
                Clear Minds
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 mb-6 leading-relaxed font-medium">
              Book professional cleaners in seconds. Track in real-time. Pay securely. All from your phone.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/booking">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-all"
                >
                  <Image
                    src="/app-store/app-store-en.png"
                    alt="Download on the App Store"
                    width={200}
                    height={60}
                    className="w-auto h-[60px]"
                  />
                </motion.div>
              </Link>

              <Link href="#features">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-all"
                >
                  <Image
                    src="/app-store/google-play-en.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    className="w-auto h-[60px]"
                  />
                </motion.div>
              </Link>
            </div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-8 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#4977E5]" />
                <span>Vetted Professionals</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#4977E5]" />
                <span>Same-Day Booking</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#4977E5]" />
                <span>5-Star Rated</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Phone Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-xs">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={phoneImages[currentSlide]}
                    alt={`Pebble Cleaning App ${currentSlide + 1}`}
                    width={280}
                    height={560}
                    className="w-full"
                    priority={currentSlide === 0}
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Slider Indicators */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                {phoneImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-[#4977E5] w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

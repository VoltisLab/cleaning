"use client";

import React, { useRef } from 'react';
import { motion, useInView} from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Shield, Clock, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-purple-50" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10 w-full">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-8 border border-blue-100 w-fit"
            >
              <Sparkles className="w-4 h-4 text-[#4977E5]" />
              <span className="text-sm font-semibold text-[#4977E5]">Trusted by 1,000+ UK customers</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Cleaning Made
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4977E5] to-[#5B7AFF]">
                Simple & Smart
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Book professional cleaners in seconds. Track in real-time. Pay securely. All from your phone.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/booking">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#4977E5] to-[#5B7AFF] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all w-full sm:w-auto"
                >
                  Get Started Free
                </motion.button>
              </Link>

              <Link href="#features">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-200 text-gray-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:border-[#4977E5] hover:text-[#4977E5] transition-all w-full sm:w-auto"
                >
                  See How It Works
                </motion.button>
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

          {/* Right - App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex items-center justify-center lg:justify-end h-full"
          >
            {/* Phone Frame */}
            <div className="relative w-full max-w-xs">
              <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden" style={{ height: '600px' }}>
                  {/* Status Bar */}
                  <div className="bg-white px-6 py-3 flex justify-between items-center">
                    <span className="text-sm font-semibold">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                      <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="p-6 bg-gradient-to-b from-blue-50 to-white h-full">
                    <div className="space-y-4">
                      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-full"></div>
                          <div className="flex-1">
                            <div className="h-3 bg-gray-200 rounded w-24 mb-2"></div>
                            <div className="h-2 bg-gray-100 rounded w-16"></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-100 rounded"></div>
                          <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                        <div className="h-3 bg-gray-200 rounded w-32 mb-3"></div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl"></div>
                          <div className="h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl"></div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                        <div className="h-3 bg-gray-200 rounded w-28 mb-3"></div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <div className="h-2 bg-gray-100 rounded w-20"></div>
                            <div className="h-2 bg-gray-200 rounded w-12"></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="h-2 bg-gray-100 rounded w-24"></div>
                            <div className="h-2 bg-gray-200 rounded w-16"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

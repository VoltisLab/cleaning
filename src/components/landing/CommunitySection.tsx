'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { MessageCircle, Sparkles, Users } from "lucide-react";

const CommunitySection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-purple-50/10 to-blue-50/30 overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute top-1/3 right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
      <div className="absolute bottom-1/3 left-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob-slow"></div>
      <div className="max-w-[1139px] mx-auto px-5 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Learn, share, and stay inspired 💬
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Join the Pebble Community — where customers and cleaners post their best tips, tricks, and transformations. From eco-friendly hacks to professional advice, there's always something new to discover.
          </p>

          <Link href="/community">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4977E5] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              🧽 Explore the Community
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-white/60 text-center hover:border-[#4977E5]/30 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 bg-[#4977E5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-[#4977E5]" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Before & After</h3>
            <p className="text-gray-600 text-sm">See real transformations from the community</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-white/60 text-center hover:border-[#4977E5]/30 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 bg-[#4977E5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-[#4977E5]" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Tips & Tricks</h3>
            <p className="text-gray-600 text-sm">Learn from professional cleaners</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-white/60 text-center hover:border-[#4977E5]/30 transition-all duration-300 hover:shadow-xl">
            <div className="w-12 h-12 bg-[#4977E5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-[#4977E5]" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Connect</h3>
            <p className="text-gray-600 text-sm">Share your success stories</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;


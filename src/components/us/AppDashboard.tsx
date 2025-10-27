'use client'
import { motion, useInView } from "framer-motion";
import { TrendingUp, Award, Star, ArrowRight } from "lucide-react";
import { useRef } from "react";

const AppDashboard: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-5 xl:px-0 bg-gradient-to-br from-blue-50 to-purple-50" ref={ref}>
      <div className="max-w-[1139px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Welcome back!</h3>
                  <p className="text-gray-600">Your personalized dashboard</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#4977E5] to-[#5b8aef] rounded-full flex items-center justify-center">
                  <Star size={24} className="text-white" />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200"
                >
                  <TrendingUp size={24} className="text-green-600 mb-2" />
                  <p className="text-3xl font-bold text-gray-900">24</p>
                  <p className="text-sm text-gray-600">Bookings</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200"
                >
                  <Award size={24} className="text-purple-600 mb-2" />
                  <p className="text-3xl font-bold text-gray-900">$120</p>
                  <p className="text-sm text-gray-600">Saved</p>
                </motion.div>
              </div>

              {/* Recent activity */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h4>
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.2 * item }}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-10 h-10 bg-[#4977E5] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{item}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">Deep Clean Service</p>
                        <p className="text-xs text-gray-600">Completed</p>
                      </div>
                      <ArrowRight size={16} className="text-gray-400 flex-shrink-0" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-[#4977E5] to-[#5b8aef] rounded-2xl shadow-2xl p-4 text-white"
            >
              <p className="text-2xl font-bold">98%</p>
              <p className="text-xs opacity-90">Satisfaction</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Looking out for you
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A personalized dashboard to help you reach your goals. Book and get instant confirmation in as little as 2 minutes.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Track all your bookings in one place",
                "Manage payments and invoices easily",
                "Access exclusive member rewards",
                "View your cleaning history and preferences"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.3 + (index * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-[#4977E5] rounded-full flex items-center justify-center flex-shrink-0">
                    <Star size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(73, 119, 229, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4977E5] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#4977E5]/90 transition-colors shadow-lg"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDashboard;


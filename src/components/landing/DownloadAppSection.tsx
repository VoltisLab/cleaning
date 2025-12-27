'use client';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Download Pebble on iOS or Android and experience the easiest way to keep your home or business spotless.
          </p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg font-medium text-white mb-6"
          >
            Be the first to know when Pebble launches!
          </motion.p>

          {/* Subscription Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get('email') as string;
              // Handle subscription logic here
              console.log('Subscribed:', email);
            }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white/95 border-2 border-white/20 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#4977E5] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </motion.form>

          {/* App Store Logos - Commented Out */}
          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <motion.a
              href="#"
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
            </motion.a>

            <motion.a
              href="#"
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
            </motion.a>
          </div> */}

          <p className="text-blue-100 text-sm">
            Secure payments, verified cleaners, instant peace of mind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadAppSection;


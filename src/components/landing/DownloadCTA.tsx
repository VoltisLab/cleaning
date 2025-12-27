'use client';
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { User, Briefcase } from "lucide-react";

const DownloadCTA: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [userType, setUserType] = useState<'booker' | 'cleaner'>('booker');
  const formRef = useRef<HTMLFormElement>(null);

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

          <p className="text-xl text-blue-100 mb-4 max-w-2xl mx-auto">
            Download the Pebble app and get your first booking done in minutes
          </p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg font-medium text-white mb-8"
          >
            Be the first to know when Pebble launches!
          </motion.p>

          {/* Subscription Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12 max-w-md mx-auto"
          >
            {/* User Type Selection */}
            <div className="flex gap-3 mb-4 justify-center">
              <motion.button
                type="button"
                onClick={() => setUserType('booker')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                  userType === 'booker'
                    ? 'bg-white text-[#4977E5] shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <User className="w-4 h-4" />
                Book Services
              </motion.button>
              <motion.button
                type="button"
                onClick={() => setUserType('cleaner')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                  userType === 'cleaner'
                    ? 'bg-white text-[#4977E5] shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Join as Cleaner
              </motion.button>
            </div>
            <form
              ref={formRef}
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const email = formData.get('email') as string;
                const { saveEmailSubscription } = await import('@/utils/emailCollection');
                const { toast } = await import('react-toastify');
                const result = await saveEmailSubscription(email, 'Download CTA', userType);
                if (result.success) {
                  toast.success(result.message || 'Subscribed successfully!');
                  if (formRef.current) {
                    formRef.current.reset();
                  }
                } else {
                  toast.error(result.message || 'Failed to subscribe');
                }
              }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
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
            </form>
          </motion.div>

          {/* Download Buttons - Commented Out */}
          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
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


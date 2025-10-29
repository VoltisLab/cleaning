'use client';
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, User, Briefcase } from "lucide-react";
import { subscribeToNewsletter } from "@/graphql/services/NewsLetter";
import { toast } from "react-toastify";

const Newsletter: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<'booker' | 'cleaner'>('booker');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    const res = await subscribeToNewsletter(email, userType);
    
    if (res?.subscribeToNewsletter?.success) {
      toast.success(res.subscribeToNewsletter.message || "Subscribed successfully!");
      setEmail("");
      setUserType('booker');
    } else {
      toast.error(res?.subscribeToNewsletter?.message || "Something went wrong.");
    }
    setLoading(false);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-16 h-16 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay in the loop
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest updates, exclusive offers, and cleaning tips delivered straight to your inbox
          </p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            {/* User Type Selection */}
            <div className="flex gap-3 mb-4 justify-center">
              <motion.button
                type="button"
                onClick={() => setUserType('booker')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  userType === 'booker'
                    ? 'bg-gradient-to-r from-[#4977E5] to-[#5B7AFF] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <User className="w-5 h-5" />
                Book Services
              </motion.button>
              <motion.button
                type="button"
                onClick={() => setUserType('cleaner')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  userType === 'cleaner'
                    ? 'bg-gradient-to-r from-[#4977E5] to-[#5B7AFF] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Briefcase className="w-5 h-5" />
                Join as Cleaner
              </motion.button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4977E5]/50 focus:border-[#4977E5] transition-all"
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#4977E5] to-[#5B7AFF] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  'Subscribing...'
                ) : (
                  <>
                    Subscribe
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>

          {/* Privacy Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm text-gray-500 mt-4"
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;


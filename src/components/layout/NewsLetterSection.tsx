"use client"
import { useRef, useState } from "react";
import Image from 'next/image'
import { motion, useInView } from "framer-motion";
import { Mail, User, Briefcase } from "lucide-react";
import Link from "next/link";
import { subscribeToNewsletter } from "@/graphql/services/NewsLetter";
import { toast } from "react-toastify";

const NewsletterSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState<'booker' | 'cleaner'>('booker');
  const [loading, setLoading] = useState(false)

  const handleSubmit = async() => {
    setLoading(true)
    const res = await subscribeToNewsletter(email, userType)
    console.log("res", res)
    if (res?.subscribeToNewsletter?.success) {
      toast.success(res.subscribeToNewsletter.message || "Subscribed successfully!");
      setEmail("");
      setUserType('booker');
    } else {
      toast.error(res.subscribeToNewsletter.message || "Something went wrong.");
    }
    setLoading(false)
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-8 md:py-16 relative bg-white" ref={ref}>
      <div className="max-w-[1280px] absolute left-1/2 transform -translate-x-1/2 xl:-top-24 -top-40 px-4 sm:px-6 xl:px-8">
        <div className="pt-12 md:pt-16 relative">
          {/* Image positioned outside the blue container */}
          <motion.div 
            initial={{ opacity: 0, x: -100, rotate: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -100, rotate: -10 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block absolute left-4 lg:left-8 xl:left-16 top-6 lg:top-10 z-10"
          >
            <Image
              src="/landing/news/cleaner.png"
              alt="Hero cleaning equipment"
              height={380}
              width={355.20}
              className="object-cover"
              priority
            />
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#4977E5] rounded-2xl md:rounded-3xl py-6 px-4 sm:py-8 sm:px-6 md:px-8 overflow-visible relative w-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              
              {/* Mobile Image */}
              <motion.div variants={itemVariants} className="md:hidden flex justify-center mb-4">
                <Image
                  src="/landing/news/cleaner.png"
                  alt="Hero cleaning equipment"
                  height={200}
                  width={186}
                  className="object-cover"
                />
              </motion.div>
              
              {/* Empty space for image on desktop */}
              <div className="hidden md:block h-32 2xl:h-40" />
              
              {/* Content */}
              <div className="text-white text-center xl:text-left">
                <motion.h2 
                  variants={itemVariants}
                  className="text-[20px] md:text-[24px] xl:text-[28px] font-bold mb-3 md:mb-4 font-dm-sans leading-tight "
                  >
                  Subscribe to our newsletter to get updates to our latest collections
                </motion.h2>
                <motion.p 
                  variants={itemVariants}
                  className="text-blue-100 mb-6 md:mb-8 text-sm sm:text-base font-dm-sans"
                >
                  Get 20% off on your first order just by subscribing to our newsletter
                </motion.p>
                
                {/* User Type Selection */}
                <motion.div 
                  variants={itemVariants} 
                  className="flex gap-2 mb-4 justify-center xl:justify-start flex-wrap"
                >
                  <motion.button
                    type="button"
                    onClick={() => setUserType('booker')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all text-sm ${
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
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all text-sm ${
                      userType === 'cleaner'
                        ? 'bg-white text-[#4977E5] shadow-lg'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Briefcase className="w-4 h-4" />
                    Join as Cleaner
                  </motion.button>
                </motion.div>

                {/* Newsletter Form */}
                <motion.div variants={itemVariants} className="space-y-3 sm:space-y-0">
                  <div className="flex flex-col sm:flex-row bg-white/15 backdrop-blur-sm rounded-[30px] xl:rounded-full p-1 gap-2 sm:gap-1 border border-gray-400">
                    <div className="flex flex-row gap-1 items-center relative w-full">
                      <Mail size={18} className="absolute left-2 xl:top-3.5 top-2.5 md:top-4" />
                      <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1  py-2.5 sm:py-3 placeholder:text-white pl-10 rounded-full text-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
                    />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSubmit}
                      className="bg-white cursor-pointer text-[#1D242D] xl:px-4 px-2 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap text-sm sm:text-base"
                    >
                      {loading? "loading" : "Subscribe"}
                    </motion.button>
                  </div>
                </motion.div>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-blue-100 text-[13px] mt-3 md:mt-4 font-lato leading-relaxed"
                >
                  You will be able to unsubscribe at any time.{' '} <br />
                  <span className="cursor-pointer font-lato hover:text-white transition-colors">
                    Read our privacy policy <Link href={"/privacy"} className="underline">here</Link>
                  </span>
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default NewsletterSection
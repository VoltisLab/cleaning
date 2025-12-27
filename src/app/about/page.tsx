'use client';
import React, { useState, useRef } from 'react'
import { User, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import Banner from '@/components/shared/Banner'
import AboutSection from '@/components/about/AboutSection'
import MissionSection from '@/components/about/MissionSection'
import WhyChooseUs from '@/components/about/WhyChooseUs'
import ServicesSection from '@/components/shared/ServicesSection'
import TestimonialsSection from '@/components/shared/TestimonialSection'
const About = () => {
  const [userType, setUserType] = useState<'booker' | 'cleaner'>('booker');
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className='min-h-screen bg-white '>
        <Banner page='About Us' />
        <AboutSection />
        <MissionSection />
        <WhyChooseUs />
        <ServicesSection />
        <TestimonialsSection />
        
        {/* Download App CTA */}
        <section className="max-w-[1280px] mx-auto px-4 xl:px-8 py-16">
          <div className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience Pebble Today</h2>
            <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
              Download our app and connect with trusted cleaning professionals in your area
            </p>
            <p className="text-lg font-medium text-gray-700 mb-4">
              Be the first to know when Pebble launches!
            </p>
            {/* User Type Selection */}
            <div className="flex gap-3 mb-4 justify-center max-w-md mx-auto">
              <motion.button
                type="button"
                onClick={() => setUserType('booker')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                  userType === 'booker'
                    ? 'bg-gradient-to-r from-[#4977E5] to-[#5B7AFF] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
                    ? 'bg-gradient-to-r from-[#4977E5] to-[#5B7AFF] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Join as Cleaner
              </motion.button>
            </div>
            {/* Subscription Form */}
            <form
              ref={formRef}
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const email = formData.get('email') as string;
                const { saveEmailSubscription } = await import('@/utils/emailCollection');
                const { toast } = await import('react-toastify');
                const result = await saveEmailSubscription(email, 'About Page', userType);
                if (result.success) {
                  toast.success(result.message || 'Subscribed successfully!');
                  if (formRef.current) {
                    formRef.current.reset();
                  }
                } else {
                  toast.error(result.message || 'Failed to subscribe');
                }
              }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-white border-2 border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4977E5]/50 focus:border-[#4977E5] transition-all"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#4977E5] to-[#5B7AFF] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            {/* App Store Logos - Commented Out */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#" className="hover:scale-105 transition-transform">
                <Image
                  src="/app-store/app-store-en.png"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-14 w-auto"
                />
              </a>
              <a href="#" className="hover:scale-105 transition-transform">
                <Image
                  src="/app-store/google-play-en.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-14 w-auto"
                />
              </a>
            </div> */}
          </div>
        </section>
    </div>
  )
}

export default About
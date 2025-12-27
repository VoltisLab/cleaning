'use client';
import React from 'react'
import Banner from '@/components/shared/Banner'
import AboutSection from '@/components/about/AboutSection'
import MissionSection from '@/components/about/MissionSection'
import WhyChooseUs from '@/components/about/WhyChooseUs'
import ServicesSection from '@/components/shared/ServicesSection'
import TestimonialsSection from '@/components/shared/TestimonialSection'
const About = () => {
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
            <p className="text-lg font-medium text-gray-700 mb-6">
              Be the first to know when Pebble launches!
            </p>
            {/* Subscription Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const email = formData.get('email') as string;
                // Handle subscription logic here
                console.log('Subscribed:', email);
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
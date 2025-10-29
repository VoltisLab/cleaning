import React from 'react'
import Image from 'next/image'
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
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Download our app and connect with trusted cleaning professionals in your area
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#" className="hover:scale-105 transition-transform">
                <Image
                  src="/app-store/apple-store-badge.svg"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-14 w-auto"
                />
              </a>
              <a href="#" className="hover:scale-105 transition-transform">
                <Image
                  src="/app-store/google-play-badge.svg"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-14 w-auto"
                />
              </a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About
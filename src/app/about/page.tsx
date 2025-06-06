import React from 'react'
import Banner from '@/components/about/Banner'
import AboutSection from '@/components/about/AboutSection'
import ServicesSection from '@/components/landing/ServicesSection'
import TestimonialsSection from '@/components/landing/TestimonialSection'
const About = () => {
  return (
    <div className='min-h-screen bg-white '>
        <Banner page='About Us' />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
    </div>
  )
}

export default About
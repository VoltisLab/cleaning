import React from 'react'
import Banner from '@/components/shared/Banner'
import AboutSection from '@/components/about/AboutSection'
import ServicesSection from '@/components/shared/ServicesSection'
import TestimonialsSection from '@/components/shared/TestimonialSection'
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
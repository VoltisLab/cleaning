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
    </div>
  )
}

export default About
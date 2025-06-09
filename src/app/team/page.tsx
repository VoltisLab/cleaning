import React from 'react'
import Banner from '@/components/about/Banner'
import TestimonialsSection from '@/components/landing/TestimonialSection'
import TeamSection from '@/components/landing/TeamSection'
const Team = () => {
  return (
    <div className='min-h-screen bg-white '>
        <Banner page='Team' />
        <TeamSection />
        <TestimonialsSection />
    </div>
  )
}

export default Team
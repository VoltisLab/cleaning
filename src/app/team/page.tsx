import React from 'react'
import Banner from '@/components/shared/Banner'
import TestimonialsSection from '@/components/shared/TestimonialSection'
import TeamSection from '@/components/landing/TeamSection'
const Team = () => {
  return (
    <div className='min-h-screen bg-white pb-36 '>
        <Banner page='Team' />
        <TeamSection />
        <TestimonialsSection />
    </div>
  )
}

export default Team
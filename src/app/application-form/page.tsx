import React, { Suspense } from 'react'
import Banner from '@/components/about/Banner'
import ApplicationForm from '@/components/application/ApplicationForm'
const About = () => {
  return (
    <div className='min-h-screen bg-white overflow-x-hidden'>
        <Banner page='Application Form' />
        <Suspense fallback={<div>Loading...</div>}>
        <ApplicationForm />
        
        </Suspense>
    </div>
  )
}

export default About
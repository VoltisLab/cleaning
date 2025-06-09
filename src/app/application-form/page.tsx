import React from 'react'
import Banner from '@/components/about/Banner'
import ApplicationForm from '@/components/application/ApplicationForm'
const About = () => {
  return (
    <div className='min-h-screen bg-white overflow-x-hidden'>
        <Banner page='Application Form' />
        <ApplicationForm />
    </div>
  )
}

export default About
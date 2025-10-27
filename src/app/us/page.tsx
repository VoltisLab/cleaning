import React from 'react'
import AppHero from '@/components/us/AppHero'
import AppFeatures from '@/components/us/AppFeatures'
import AppDashboard from '@/components/us/AppDashboard'
import AppSecurity from '@/components/us/AppSecurity'
import AppCTA from '@/components/us/AppCTA'

const UsPage = () => {
  return (
    <div className='min-h-screen bg-white'>
      <AppHero />
      <AppFeatures />
      <AppDashboard />
      <AppSecurity />
      <AppCTA />
    </div>
  )
}

export default UsPage


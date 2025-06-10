import Banner from '@/components/about/Banner'
import FAQ from '@/components/shared/FAQ'
import Availablerole from '@/components/work-with-us/Availablerole'
import BeforeApply from '@/components/work-with-us/BeforeApply'
import JoinUs from '@/components/work-with-us/JoinUs'
import WorkGallery from '@/components/work-with-us/WorkGallery'
import React from 'react'

const page = () => {
  return (
    <div >
        <Banner page='Work with us' />
        <div className=' py-10 flex flex-col gap-4 lg:gap-8 px-4 md:px-8 lg:px-0'>

        <WorkGallery/>
        <JoinUs/>
        <BeforeApply/>
        <Availablerole/>

        <FAQ/>
        </div>
    </div>
  )
}

export default page
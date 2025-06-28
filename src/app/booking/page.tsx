"use client"
import Banner from '@/components/shared/Banner'
import BookingForm from '@/components/booking/BookingForm'
import React from 'react'
import { Suspense } from "react";


const page = () => {
  return (
    <div className='min-h-screen'>
        <Banner page='Booking'/>
        <div className='flex flex-col  items-center px-10 pt-4 gap-8 pb-36'>
            

            <div className='
            w-full flex justify-center '>
                {/* <BookingForm/> */}
                    <Suspense fallback={<div>Loading...</div>}>
                      <BookingForm/>
                    </Suspense>
            </div>
        </div>
    </div>
  )
}

export default page
import Banner from '@/components/about/Banner'
import BookingForm from '@/components/booking/BookinForm'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen'>
        <Banner page='Booking'/>
        <div className='flex flex-col  items-center px-10 pt-4 gap-8 pb-36'>
            <h2 className='font-[700] text-2xl '>Book Our Service</h2>

            <div className='
            w-full flex justify-center '>
                <BookingForm/>
            </div>
        </div>
    </div>
  )
}

export default page
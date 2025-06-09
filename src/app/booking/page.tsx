import BookingForm from '@/components/booking/BookinForm'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen'>
        <div className='flex flex-col items-center py-4 gap-8'>
            <h2 className='font-[700] text-2xl '>Book Our Service</h2>

            <div>
                <BookingForm/>
            </div>
        </div>
    </div>
  )
}

export default page
import React from 'react'
import InputTag from './InputTag'

const LeaveReply = () => {
  return (
    <div className='flex flex-col gap-4'>
        
        <p className='font-[700] text-2xl lg:text-3xl'>Leave A Reply</p>

        <div>
            <form>
                <div className='flex flex-col gap-4' >
                    <div className='flex lg:flex-row flex-col  gap-2 w-full'>
                        <InputTag name="name" placeholder="Enter your full name" label="Your name"/>
                        <InputTag name="email" placeholder="Enter your email" label="Your email"/>
                    </div>
                    <InputTag name="subject" placeholder="select a subject" label="What kind of service are you looking for?" />
                    <div className='flex flex-col gap-3 w-full'>
                        <label className='text-base font-500'>Message</label>
                        <textarea placeholder='write your message' className='h-[227px] outline-none p-4 w-full border-1 border-[rgba(131,139,149,0.4)] rounded-2xl text-sm lg:text-base'></textarea>
                    </div>
                    <button className='px-6 py-3 bg-[#4977E5] text-white rounded-full w-fit cursor-pointer'>Submit</button>
                 </div>
            </form>
        </div>
    </div>
  )
}

export default LeaveReply
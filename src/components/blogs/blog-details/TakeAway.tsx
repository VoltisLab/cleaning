import Image from 'next/image'
import React from 'react'
import image from "@/../public/blogs/sub3.png"

const TakeAway = () => {
  return (
    <div className='flex flex-col gap-4'>
        
        <div>
            <p className='font-[700] text-2xl lg:text-3xl'>Takeaways</p>
            <ul className='text-sm text-[#838B95] font-[400] list-disc list-inside flex flex-col gap-2'>
                <li>As an artist you can leverage generative AI to overcome creative.</li>
                <li>AI tools give access to abilities and functions for those without the budget.</li>
                <li>AI can enhance existing art with additional stylizations and technical improvements</li>
                <li>Conceptualizing, drafting, and creating WIPs is easier with AI, cutting down the preparation time needed to create art.</li>
            </ul>
        </div>

        <div className='lg:h-[408px] h-[200px] w-full relative rounded-2xl'>
            <Image src={image} alt="main" fill className='object-contain ' />
        </div>
        <span className='text-sm font-[400] text-[#838B95] flex flex-col gap-6'>
            <p>The rush to give employees access to all the tools they’d need to work from home was a bit, well, sudden for many employers. But after
                 everyone settled in, what quickly became apparent to many office-based teams is that employees could be productive and focused when not in the 
                office—in many cases, even more so. Employers everywhere began to understand that remote work really works.</p>
            
            <p>Whether you’re on the hunt for a remote job or are already working virtually, check out this list of the advantages of working from home, 
                along with some of the top companies that hire for remote jobs.</p>
        </span>
    </div>
  )
}

export default TakeAway
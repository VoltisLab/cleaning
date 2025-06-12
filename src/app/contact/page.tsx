import React from 'react'
import Banner from '@/components/shared/Banner'
import ContactForm from '@/components/contact/ContactForm'
const Contact = () => {
  return (
    <div className='min-h-screen bg-white '>
        <Banner page='Contact' />
        <ContactForm />
    </div>
  )
}

export default Contact
"use client"
import React, { useRef } from 'react'
import FAQCard from './FAQCard'
import { useInView, motion } from 'framer-motion';

const FAQ = () => {
    const array = [
        {
            id: "1",
            title: "Do I need to be home during the clean?",
            detail: "No, it’s entirely up to you. Many of our clients provide us with a key or access code-your cleaner is fully vetted and trustworthy."
        },
        {
            id: "2",
            title: "What areas do you cover?",
            detail: "We currently serve Greater Manchester, Lancashire, and surrounding areas. If you’re unsure whether we cover your location, feel free to get in touch!"
        },
        {
            id: "3",
            title: "Will I have the same cleaner each time?",
            detail: "Yes, for regular services, we aim to send you the same cleaner each time to ensure consistency and comfort."
        },
  {
            id: "4",
            title: "What if I’m not happy with the clean?",
            detail: "Customer satisfaction is our priority. If something’s not right, contact us within 24 hours and we’ll make it right as soon as possible."
        },
  {
            id: "5",
            title: "What if I’m not happy with the clean?",
            detail: "We can bring all necessary cleaning supplies and equipment, or we can use yours if preferred-just let us know your preference."
        },
  {
            id: "6",
            title: "How do I pay for the service?",
            detail: "We offer flexible payment options including bank transfer, card payment, and direct debit. We’ll confirm your preferred method during booking."
        },
  
  
    ]
const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={slideInLeft}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="lg:mb-10 mb-40 flex flex-col items-center gap-6"
    >
      <p className="font-[700] text-4xl text-center">Frequently Asked Questions</p>

      <div className="w-full lg:px-0 px-4 items-center flex flex-col">
        {array.map((item, index) => (
          <FAQCard
            key={item.id}
            title={item.title}
            isLast={index === array.length - 1}
            detail={item.detail}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default FAQ
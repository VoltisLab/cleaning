"use client"
import { useState } from "react";
import Image from 'next/image'

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-[1139px] absolute right-1/5 -top-20">
        {/* Extra padding top to accommodate overflow */}
        <div className="pt-16 relative">
          {/* Image positioned outside the blue container */}
          <div className="absolute left-8 lg:left-16 top-10 z-10">
            <Image
              src="/landing/news/cleaner.png"
              alt="Hero cleaning equipment"
              height={380}
              width={355.20}
              className="object-cover"
            />
          </div>
          
          <div className="bg-[#4977E5] rounded-3xl py-8 pr-20 overflow-visible relative">
            <div className="grid xl:grid-cols-2 gap-8 items-center">
              {/* Empty space for image on desktop */}
              <div className="hidden lg:block h-[150px]">
                {/* Image is absolutely positioned above */}
              </div>
              
              {/* Content */}
              <div className="text-white ">
                <h2 className="text-[28px] font-bold mb-4">
                  Subscribe to our newsletter to get updates to our latest collections
                </h2>
                <p className="text-blue-100 mb-8">
                  Get 20% off on your first order just by subscribing to our newsletter
                </p>
                <div className="flex flex-col sm:flex-row border-gray-100 bg-white opacity-15 rounded-full gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 rounded-full text-white  focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button
                    onClick={handleSubmit}
                    className="bg-white text-[#4977E5] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-blue-100 text-sm mt-4">
                  You will be able to unsubscribe at any time.{' '}
                  <span className="underline cursor-pointer">
                    Read our privacy policy here
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
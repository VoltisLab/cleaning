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
    <section className="py-8 md:py-16 relative">
      <div className="w-full max-w-[1139px] absolute left-1/2 transform -translate-x-1/2 -top-12 md:-top-32 px-4 sm:px-6 lg:px-0">
        {/* Extra padding top to accommodate overflow */}
        <div className="pt-12 md:pt-16 relative">
          {/* Image positioned outside the blue container - Hidden on mobile, positioned for tablet/desktop */}
          <div className="hidden md:block absolute left-4 lg:left-8 xl:left-16 top-6 lg:top-10 z-10">
            <Image
              src="/landing/news/cleaner.png"
              alt="Hero cleaning equipment"
              height={380}
              width={355.20}
              className="object-cover w-48 h-52 sm:w-56 sm:h-60 lg:w-72 lg:h-80 xl:w-[355px] xl:h-[380px]"
              priority
            />
          </div>
          
          <div className="bg-[#4977E5] rounded-2xl md:rounded-3xl py-6 px-4 sm:py-8 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-visible relative w-full">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8 items-center">
              
              {/* Mobile Image */}
              <div className="md:hidden flex justify-center mb-4">
                <Image
                  src="/landing/news/cleaner.png"
                  alt="Hero cleaning equipment"
                  height={200}
                  width={186}
                  className="object-cover"
                />
              </div>
              
              {/* Empty space for image on desktop */}
              <div className="hidden xl:block h-32 2xl:h-40">
                {/* Image is absolutely positioned above */}
              </div>
              
              {/* Content */}
              <div className="text-white text-center xl:text-left">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[28px] xl:text-3xl font-bold mb-3 md:mb-4 leading-tight">
                  Subscribe to our newsletter to get updates to our latest collections
                </h2>
                <p className="text-blue-100 mb-6 md:mb-8 text-sm sm:text-base">
                  Get 20% off on your first order just by subscribing to our newsletter
                </p>
                
                {/* Newsletter Form */}
                <div className="space-y-3 sm:space-y-0">
                  <div className="flex flex-col sm:flex-row bg-white/15 backdrop-blur-sm rounded-full p-1 gap-2 sm:gap-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
                    />
                    <button
                      onClick={handleSubmit}
                      className="bg-white text-[#4977E5] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap text-sm sm:text-base"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                
                <p className="text-blue-100 text-xs sm:text-sm mt-3 md:mt-4 leading-relaxed">
                  You will be able to unsubscribe at any time.{' '}
                  <span className="underline cursor-pointer hover:text-white transition-colors">
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

export default NewsletterSection
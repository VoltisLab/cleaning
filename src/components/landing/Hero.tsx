import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br relative overflow-hidden">
      <div className="max-w-[1139px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <div className="mb-4">
              <span className="text-[#4977E5] font-medium text-sm tracking-wider uppercase">
                CLEAN HOME, HAPPY LIFE.
              </span>
            </div>
            <h1 className="text-[56px] font-dm-sans font-bold text-gray-900 mb-6 leading-tight">
              With Cleaning Solutions, {' '}
              <Image
                src={"/landing/hero/star.svg"}
                alt={"Star"}
                width={20}
                height={20}
                className="object-contain bottom-60 absolute -left-4"
              />
              <span className="text-[#4977E5]">your home’s</span> in good hands.
            </h1>
            <p className="text-[#838B95] text-[15px] mb-10 leading-relaxed max-w-lg font-lato">
              We&apos;ve got all your cleaning and home services covered! Our fully vetted and highly experienced team are committed to delivering top-quality services. We know how important trust and reliability are to our customers, which is why we carefully choose only the best professionals to join our team.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#4977E5] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg">
                About Us
              </button>
              <button className="border-2 border-[#4977E5] text-[#4977E5] px-8 py-4 rounded-full font-semibold hover:border-[#5977E5] transition-colors bg-white">
                Book a Service
              </button>
            </div>
          </div>

          {/* Right Image - Adjusted to match left content height */}
          <div className="relative h-full w-full ">
            <Image
              src={"/landing/hero/heroImage.png"}
              alt={"Hero cleaning equipment"}
             fill
              className="object-cover w-full h-full "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
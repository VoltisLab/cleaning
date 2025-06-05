import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br relative overflow-hidden md:px-0 px-5">
      <div className="max-w-[1139px] mx-auto">
        <div className="grid lg:grid-cols-[40%_60%] gap-8 items-center">
          {/* Left Content */}
          <div className="relative z-10 py-8 lg:py-12">
            <div className="mb-4">
              <span className="text-[#4977E5] font-medium text-sm tracking-wider uppercase">
                CLEAN HOME, HAPPY LIFE.
              </span>
            </div>
            <h1 className="text-[48px] lg:text-[52px] font-dm-sans font-bold text-gray-900 mb-4 leading-tight">
              With Cleaning Solutions, {' '}
              <Image
                src={"/landing/hero/star.svg"}
                alt={"Star"}
                width={20}
                height={20}
                className="object-contain absolute -top-4 -left-4"
              />
              <span className="text-[#4977E5]">your home&apos;s</span> in good hands.
            </h1>
            <p className="text-[#838B95] text-[15px] mb-8 leading-relaxed max-w-lg font-lato">
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

          {/* Right Image - Taller and wider than text container */}
          <div className="relative w-full h-[700px] lg:h-[800px]">
            <Image
              src={"/landing/hero/heroImage.png"}
              alt={"Hero cleaning equipment"}
              fill
              className="object-cover rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
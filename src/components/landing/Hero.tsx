import React  from 'react';
const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="text-[#5B7AFF] font-medium text-sm tracking-wide uppercase">
                LEARN FROM TODAY
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Happiness Is Found{' '}
              <span className="text-[#5B7AFF]">Cleaning</span> House
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Awesome site on the top advertising a Courses available business online
              includes assembling having awesome site on the top advertising a
              Courses available business having.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#5B7AFF] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
                About Us
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-gray-400 transition-colors">
                Book a Service
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl p-8 relative overflow-hidden">
              <div className="w-64 h-48 bg-blue-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <div className="text-white text-6xl">🧹</div>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🧽</span>
              </div>
              <div className="absolute top-20 left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✨</span>
              </div>
              <div className="absolute bottom-8 right-8 w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🧼</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
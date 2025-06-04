import { CheckCircle, Users } from "lucide-react";

const StatsSection: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Done' },
    { number: '800', label: 'Happy Clients' },
    { number: '18+', label: 'Award Winner' },
    { number: '600+', label: 'Team Members' }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We Make Clots Look Great
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Training programs can bring you a super exciting experience of learning through
              online! You never face any negative experience while enjoying your classes Awesome
              site on the top advertising a Courses available business having.
            </p>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ad litora
              torquent.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Residential Cleaning Services Near You!</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Commercial Cleaning Service in Australia.</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Professional Floor & Carpet Cleaning.</span>
              </div>
            </div>
            <button className="bg-[#5B7AFF] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
              Learn More
            </button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="w-full h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">🧽🧹</div>
              </div>
              <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📦</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold">15+</div>
                    <div className="text-xs text-gray-600">Blog Options</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold">100+</div>
                    <div className="text-xs text-gray-600">Trusted People</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#5B7AFF] to-[#7B5AFF] rounded-3xl p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StatsSection;
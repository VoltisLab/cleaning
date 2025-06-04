import { CheckCircle } from "lucide-react";
import Image from "next/image";

interface StatItem {
  number: string;
  label: string;
}

const StatsSection: React.FC = () => {
 const stats: StatItem[] = [
    { number: "500+", label: "Projects Done" },
    { number: "800", label: "Happy Clients" },
    { number: "18+", label: "Award Winner" },
    { number: "600+", label: "Team Members" }
  ];
  return (
    <section className="py-20">
      <div className="max-w-[1139px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What We Offer
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
            <button className="bg-[#4977E5] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">
              Learn More
            </button>
          </div>
           <div className="relative h-full w-full ">
              <Image
                src={"/landing/statsSection/statsImage.png"}
                alt={"Hero cleaning equipment"}
                fill
                className="object-cover w-full h-full "
                priority
              />   
          </div>
        </div>

        <div className="relative rounded-3xl px-8 mt-16 lg:py-20 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: "url('/landing/statsSection/mask.png')",
        }}
      />
      
      {/* Blue overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4977E5] via-[#4977E5] to-90%" />
      
      {/* Additional overlay for better text readability */}
      <div className="absolute inset-0 bg-blue-600/20" />

      {/* Stats grid */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center text-white">
            <div className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 lg:mb-3 drop-shadow-lg">
              {stat.number}
            </div>
            <div className="text-sm lg:text-base xl:text-lg font-medium opacity-90 drop-shadow-md">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>

      </div>


      
    </section>
  );
};
export default StatsSection;
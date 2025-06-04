import { TestimonialData } from "@/lib/types";
import { Star } from "lucide-react";

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialData[] = [
    {
      name: 'Alexa Bliss',
      rating: 5,
      content: 'Training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes Awesome site on the top advertising a Courses available business having.',
      avatar: '👩'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center space-x-2 mb-4">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm">👤</span>
              </div>
            ))}
          </div>
          <h3 className="font-bold text-xl mb-2">{testimonials[0].name}</h3>
          <div className="flex justify-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 text-lg italic max-w-3xl mx-auto">
            &quot;{testimonials[0].content}&quot;
          </p>
          <div className="flex justify-center mt-8 space-x-2">
            <button className="w-3 h-3 bg-gray-300 rounded-full"></button>
            <button className="w-3 h-3 bg-[#5B7AFF] rounded-full"></button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;
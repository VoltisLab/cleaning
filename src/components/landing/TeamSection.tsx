import { TeamMember } from "@/lib/types";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Avril Lavigne',
      role: 'Cleaner',
      image: '👩',
      bgColor: 'bg-teal-200'
    },
    {
      name: 'Alexa Bliss',
      role: 'Cleaner',
      image: '👩',
      bgColor: 'bg-gray-200'
    },
    {
      name: 'Steave Smith',
      role: 'Cleaner',
      image: '👨',
      bgColor: 'bg-red-200'
    },
    {
      name: 'Jessica',
      role: 'Cleaner',
      image: '👩',
      bgColor: 'bg-pink-200'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600">
            Awesome site on the top advertising a business online includes
            assembling having the most best.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className={`${member.bgColor} rounded-3xl p-8 mb-4 aspect-square flex items-center justify-center`}>
                <div className="text-6xl">{member.image}</div>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{member.role}</p>
              <div className="flex justify-center space-x-3">
                <Facebook className="w-4 h-4 text-blue-600 hover:text-blue-700 cursor-pointer" />
                <Twitter className="w-4 h-4 text-blue-400 hover:text-blue-500 cursor-pointer" />
                <Linkedin className="w-4 h-4 text-blue-700 hover:text-blue-800 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
import { TeamMember } from "@/lib/types";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from 'next/image'
const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Avril Lavigne',
      role: 'Cleaner',
      image: '/landing/team/team1.png',
    },
    {
      name: 'Alexa Bliss',
      role: 'Cleaner',
      image: '/landing/team/team2.png',
    },
    {
      name: 'Steave Smith',
      role: 'Cleaner',
      image: '/landing/team/team3.png',
    },
    {
      name: 'Jessica',
      role: 'Cleaner',
      image: '/landing/team/team4.png',
    }
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-[1139px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Awesome site on the top advertising a business online includes
            assembling having the most best.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className={`rounded-3xl mb-4 aspect-square flex items-center justify-center`}>
                <Image
                  src={member.image}
                  alt={"Hero cleaning equipment"}
                  height={264}
                  width={299.90}
              />
              </div>
             <div className="absolute -bottom-16 shadow border-t-5 ml-5 border-t-[#4977E5] w-[212px] rounded-b-[12px] pb-3 bg-white">
                <h3 className="font-bold text-gray-900 mb-1 mt-4 text-[20px]">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{member.role}</p>
                <div className="flex justify-center gap-3">
                  <Facebook className="w-4 h-4 text-blue-600 hover:text-blue-700 cursor-pointer" />
                  <Twitter className="w-4 h-4 text-blue-400 hover:text-blue-500 cursor-pointer" />
                  <Instagram className="w-4 h-4 text-blue-700 hover:text-blue-800 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
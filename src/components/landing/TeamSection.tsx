'use client'
import { TeamMember } from "@/lib/types";
import Image from 'next/image'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TeamSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const cardOverlayVariants = {
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="py-16"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-[1139px] mx-auto px-4">
        <motion.div 
          variants={headerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-lg mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
              }
            }}
          >
            Awesome site on the top advertising a business online includes
            assembling having the most best.
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12"
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover="hover"
              className="text-center"
            >
              {/* Image container with relative positioning */}
              <div className="relative rounded-3xl mb-8 md:mb-12 aspect-square flex items-center justify-center">
                <motion.div
                  variants={imageVariants}
                  className="relative"
                >
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    height={264}
                    width={299.90}
                    className="rounded-3xl object-cover"
                  />
                </motion.div>
                
                {/* Card positioned absolutely relative to the image */}
                <motion.div 
                  variants={cardOverlayVariants}
                  className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 border border-gray-200 border-t-4 border-t-[#4977E5] w-[85%] max-w-[212px] min-w-[180px] rounded-b-[12px] pb-3 bg-white"
                >
                  <motion.h3 
                    className="font-bold text-gray-900 mb-1 mt-4 text-[18px] md:text-[20px] px-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 text-sm mb-3 px-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    {member.role}
                  </motion.p>
                  <motion.div 
                    className="flex justify-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  >
                    <motion.div
                      variants={socialIconVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Image 
                        src="/landing/newssection/Frame.svg"
                        alt="Facebook"
                        height={10}
                        width={10}
                        className="" />
                    </motion.div>
                    <motion.div
                      variants={socialIconVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Image 
                         src="/landing/newssection/Frame-1.svg"
                        alt="Facebook"
                        height={17}
                        width={17}
                        className="" />
                    </motion.div>
                    <motion.div
                      variants={socialIconVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                        <Image 
                         src="/landing/newssection/Frame-2.svg"
                        alt="Facebook"
                        height={16}
                        width={16}
                        className="" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
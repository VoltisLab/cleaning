'use client';
import { motion, useInView } from "framer-motion";
import { Facebook, Instagram, Linkedin} from "lucide-react";
import Image from 'next/image'
import Link from "next/link";
import { useRef } from "react";
const Footer: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const companyLinks = [{title: 'About', href: '/about' }];
  const supportLinks = [
    { title: 'Terms', href: '/terms' },
    { title: 'Privacy', href: '/privacy' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  

  return (
    <footer className="bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] text-white md:pt-48 pt-100 pb-16 px-5 xl:px-8" ref={ref}>
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-between items-start"
        >
          
          <motion.div variants={itemVariants} className="xl:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
               <Image
                src={"/Pebble2.svg"}
                alt={"Logo"}
                width={97}
                height={35}
                className="brightness-0 invert"
                />
            </div>
            <p className="text-white mb-6 leading-relaxed max-w-xs md:text-[16px] text-sm">
              Pebble Cleaning is your trusted partner for reliable, affordable, and spotless cleaning across the UK. We treat every home and business like our own. 
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-sm md:text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <Link href={link.href} key={index} className="text-white hover:text-white transition-colors md:text-[16px] text-xs">
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="mt-5"
                >
                  {link.title}
                </motion.li>
                </Link>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-sm md:text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <Link href={link.href} key={index} className="text-white hover:text-white transition-colors md:text-[16px] text-xs">
                  <motion.li 
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="mt-5"
                  >
                    {link.title}
                  </motion.li>
                </Link>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} >
            <h4 className="font-bold mb-7  text-sm md:text-lg ">Contact Us</h4>        
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center "
              >
                <span className="text-white text-xs mb-3 xl:text-[16px] ">hello@pebblecleaning.com</span>
              </motion.div>
              <div className="flex gap-4 mt-3">
              {[{icon: Facebook, href: '' }, {icon: Instagram, href: 'https://instagram.com/pebblecleaning' }, {icon: Linkedin, href: 'https://www.linkedin.com/company/pebbleapp' }].map((Icon, index) => (
                <motion.a
                key={index}
                href={Icon.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon.icon className="w-6 h-6 text-white hover:text-white cursor-pointer" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="border-t border-white/50 mt-12 pt-8"
        >
          <div className="flex justify-center items-center w-full">
            <p className="text-white/70 text-sm text-center">
             © {new Date().getFullYear()} Voltis Labs. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
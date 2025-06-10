'use client';
import { motion, useInView } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Image from 'next/image'
import Link from "next/link";
import { useRef } from "react";
const Footer: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const companyLinks = [{title: 'About Us', href: '/about' }, {title: 'Services', href: '/services'}, {title: 'Team', href: '/team'}, {title: 'Testimonial', href: '/team'}];
  const supportLinks = ['Help Center', 'Tweet @ Us', 'Feedback'];

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
    <footer className="bg-[#051625] text-white md:pt-48 pt-100 pb-16 xl:px-0 px-5" ref={ref}>
      <div className="max-w-[1139px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 items-start"
        >
          
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
               <Image
                src={"/landing/logoWhite.png"}
                alt={"Logo"}
                width={138}
                height={50}
                />
            </div>
            <p className="text-white mb-6 leading-relaxed max-w-xs">
              Pebble Cleaning is your trusted partner for reliable, affordable, and spotless cleaning across the UK. We treat every home and business like our own. 
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <Link href={link.href} key={index} className="text-white hover:text-white transition-colors">
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.title}
                </motion.li>
                </Link>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-white hover:text-white transition-colors">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="min-w-sm">
            <h4 className="font-bold mb-7">Contact Us</h4>        
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center "
              >
                <Mail className="w-4 h-4 text-white" color="white" />
                <span className="text-white text-sm ml-1 ">hello@pebblecleaning.com</span>
              </motion.div>
              <div className="flex gap-4 mt-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6 text-white hover:text-white cursor-pointer" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="border-t border-gray-600 mt-12 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-white text-sm">
             © Copyright Voltis Labs {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 lg:mt-0">
              {['Privacy Policy', 'Terms of Use', 'Legal', 'Site Map'].map((link, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -2 }}
                  href="#" 
                  className="text-white hover:text-white text-sm transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
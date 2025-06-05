import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Image from 'next/image'
const Footer: React.FC = () => {
  const companyLinks = ['About Us', 'Services', 'Team', 'Testimonial'];
  const supportLinks = ['Help Center', 'Tweet @ Us', 'Webinars', 'Feedback'];
  const resourceLinks = ['Courses', 'Become Teacher', 'Service', 'All in One'];

  return (
    <footer className="bg-[#051625] text-white pt-48 pb-16">
      <div className="max-w-[1139px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-8 items-start">
          
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
               <Image
                src={"/landing/logoWhite.png"}
                alt={"Logo"}
                width={138}
                height={50}
                />
            </div>
            <p className="text-white mb-6 leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-white hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-white hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-white hover:text-white cursor-pointer" />
              <Linkedin className="w-6 h-6 text-white hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h3 className="font-bold text-lg mb-6">Links</h3>
            <ul className="space-y-3 mb-6">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

            <div className="pt-6">
              <h4 className="font-bold mb-4">Contact Us</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">(91) 98765 43321 54</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-white" />
                  <span className="text-white text-sm">support@mail.com</span>
                </div>
              </div>
            </div>
         
            
          <div>
            
          </div>
        </div>
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-white text-sm">
              © Copyright White Labs 2025. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 lg:mt-0">
              <a href="#" className="text-white hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white hover:text-white text-sm transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-white hover:text-white text-sm transition-colors">
                Legal
              </a>
              <a href="#" className="text-white hover:text-white text-sm transition-colors">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
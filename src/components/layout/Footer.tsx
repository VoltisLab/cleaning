import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const companyLinks = ['About Us', 'Services', 'Team', 'Testimonial'];
  const supportLinks = ['Help Center', 'Tweet @ Us', 'Webinars', 'Feedback'];
  const resourceLinks = ['Courses', 'Become Teacher', 'Service', 'All in One'];

  return (
    <footer className="bg-[#1a2332] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-[#5B7AFF] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold">Cleaning</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
              Aliquam in hendrerit ante, at volutpat massa. Pellentesque iaculis
              congue luctus.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
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
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
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
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-600 pt-6">
              <h4 className="font-bold mb-4">Contact Us</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">(91) 98765 43321 54</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-400 text-sm">support@mail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © Copyright White Labs 2025. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 lg:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Legal
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
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
'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, ShoppingCart, Search, User, Menu, X, Phone, Mail } from 'lucide-react';
// Define types for better type safety
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface ServiceItem {
  label: string;
  href: string;
}

interface Social {
  name: string;
  path: string;
}

const Header = () => {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Properly type the ref for HTMLDivElement
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreenSize = (): void => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    // Type the event parameter as MouseEvent
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#', hasDropdown: true },
    { label: 'Pricing', href: '#' },
    { label: 'Blog', href: '/blogs' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  const serviceItems: ServiceItem[] = [
    { label: 'Residential Cleaning', href: '#' },
    { label: 'Commercial Cleaning', href: '#' },
    { label: 'Laundry Service', href: '#' }
  ];

  const socials: Social[] = [
    { name: 'Facebook', path: "/landing/header/facebook.svg" },
    { name: 'Twitter', path: "/landing/header/twitter.svg" },
    { name: 'Instagram', path: "/landing/header/instagram.svg" },
    { name: 'Be', path: "/landing/header/Be.svg" },
  ];

  // Type the label parameter as string
  const handleTabClick = (label: string, href:string): void => {
    if (label === 'Services') {
      if (isMobile) {
        setIsMobileServicesOpen(!isMobileServicesOpen);
        setActiveTab(label);
        window.location.href = href
      } else {
        setIsServicesOpen(!isServicesOpen);
        setActiveTab(label);
        window.location.href = href
      }
    } else {
      window.location.href = href
      setActiveTab(label);
      setIsServicesOpen(false);
      setIsMobileServicesOpen(false);
      // Close mobile menu for other nav items
      if (isMobile) {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div className="bg-[#4977E5] text-white py-3 text-sm hidden lg:block">
        <div className="max-w-[1139px] mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {socials.map((social, index) => (
                <Image
                  key={index}
                  src={social.path}
                  alt={social.name}
                  width={social.name === "Facebook"? 8 : 15}
                  height={social.name === "Facebook"? 8 : 15}
                  className="hover:opacity-80 transition-opacity cursor-pointer"
                />
              ))}
            </div>
            <div className="flex items-center text-xs space-x-6">
              <div className="flex items-center space-x-2">
                <Image
                  src="/landing/header/call.svg"
                  alt="Phone"
                  width={14}
                  height={14}
                />
                <span className="font-semibold">(91) 98765 43321 54</span>
              </div>
              <div className="w-px h-4 bg-white/50"></div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/landing/header/message.svg"
                  alt="Email"
                  width={15}
                  height={15}
                />
                <span className="font-semibold">hello@pebblecleaning.com</span>
              </div>
              <div className="w-px h-4 bg-white/50"></div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/landing/header/location.svg"
                  alt="Location"
                  width={15}
                  height={15}
                />
                <span className="font-semibold">380 Albert St, US</span>
              </div>
              <div className="w-px h-4 bg-white/50"></div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/landing/header/call.svg"
                  alt="Hours"
                  width={15}
                  height={15}
                />
                <span className="font-semibold">Sunday-Friday 9:00am-10pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden bg-[#4977E5] text-white py-2">
        <div className="px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span className="text-xs font-semibold">(91) 98765 43321</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span className="text-xs font-semibold">hello@pebblecleaning.com</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-[1139px] mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/landing/header/logo.png"
                alt="Logo"
                width={138}
                height={50}
                className="md:w-36 md:h-14 cursor-pointer"
                onClick={()=> window.location.href = "/"}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 relative">
              {navItems.map((item, index) => (
                <div key={index} className="relative" ref={item.hasDropdown ? dropdownRef : null}>
                  <button
                    onClick={() => handleTabClick(item.label, item.href)}
                    className={`${
                      activeTab === item.label ? "text-[#4977E5]" : "text-[#051625]"
                    } hover:text-[#4977E5] font-medium flex items-center text-[15px] transition-colors duration-200 py-2 cursor-pointer`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown 
                        size={16} 
                        className={`ml-1 transition-transform duration-200 ${
                          isMobile 
                            ? (activeTab === item.label && isMobileServicesOpen ? 'rotate-180' : '')
                            : (isServicesOpen ? 'rotate-180' : '')
                        }`} 
                      />
                    )}
                  </button>
                  
                  {/* Desktop Dropdown */}
                  {item.hasDropdown && isServicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden animate-in slide-in-from-top-2 duration-200">
                      <div className="py-2">
                        {serviceItems.map((service, idx) => (
                          <a
                            key={idx}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#4977E5] transition-colors"
                          >
                            {service.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingCart size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#4977E5] text-white text-xs rounded-full flex items-center justify-center">
                  2
                </span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingCart size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#4977E5] text-white text-xs rounded-full flex items-center justify-center">
                  2
                </span>
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {isMenuOpen ? <X size={24} color='#4977E5' /> : <Menu color='#4977E5' size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden bg-white border-t transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => handleTabClick(item.label, item.href)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left font-medium transition-colors ${
                    activeTab === item.label 
                      ? "bg-[#4977E5]/10 text-[#4977E5]" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-200 ${
                        activeTab === item.label && isServicesOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </button>
                
                {/* Mobile Services Dropdown */}
                {item.hasDropdown && activeTab === item.label && isMobileServicesOpen && (
                  <div className="mt-2 space-y-1 animate-in slide-in-from-top-2 duration-200 shadow-md rounded-[12px] max-w-48 p-2">
                    {serviceItems.map((service, idx) => (
                      <a
                        key={idx}
                        href={service.href}
                        className="block p-3 rounded-lg transition-colors text-gray-700 hover:text-[#4977E5] hover:bg-blue-50"
                      >
                        {service.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile Contact Info */}
          <div className="px-4 py-4 bg-gray-50 border-t space-y-3">
            <div className="flex items-center space-x-3 text-sm">
               <Image
                src="/landing/header/call.svg"
                alt="Phone"
                width={17}
                height={17}
                className='bg-[#4977E5] p-2 h-8 w-8 rounded-full'
              />
              <span className="font-medium text-[#4977E5]">(91) 98765 43321 54</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
               <Image
                src="/landing/header/message.svg"
                alt="Email"
                width={17}
                height={17}
                className='bg-[#4977E5] p-2 h-8 w-8 rounded-full'
              />
              <span className="font-medium text-[#4977E5]">hello@pebblecleaning.com</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Image
                src="/landing/header/location.svg"
                alt="Location"
                width={17}
                height={17}
                className='bg-[#4977E5] p-2 h-8 w-8 rounded-full'
              />
              <span className="font-medium text-[#4977E5]">380 Albert St, US</span>
            </div>
            <div className="flex items-center justify-center space-x-4 pt-3">
              {socials.map((social, index) => (
                <div
                  key={index}
                  className="w-8 h-8 bg-[#4977E5] rounded-full flex items-center justify-center hover:bg-[#4977E5]/80 transition-colors cursor-pointer"
                >
                  <Image
                    src={social.path}
                    alt={social.name}
                    width={15}
                    height={15}
                    className="filter brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronRight, ShoppingCart, User, Menu, X } from 'lucide-react';
import Link from 'next/link';

// Define types for better type safety
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface DetailedService {
  label: string;
  href: string;
}

interface SubService {
  label: string;
  href: string;
  detailedServices?: DetailedService[];
}

interface ServiceCategory {
  label: string;
  href: string;
  subServices: SubService[];
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
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoveredSubService, setHoveredSubService] = useState<string | null>(null);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  // Properly type the ref for HTMLDivElement
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreenSize = (): void => {
      const newIsMobile = window.innerWidth < 1024;
      setIsMobile(newIsMobile);
      
      // Reset states when switching between mobile and desktop
      if (!newIsMobile) {
        setIsMenuOpen(false);
        setIsMobileServicesOpen(false);
        setOpenMobileCategory(null);
      } else {
        setIsServicesOpen(false);
        setHoveredCategory(null);
      }
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
        setHoveredCategory(null);
        setHoveredSubService(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Clean up timeout on unmount
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: 'services', hasDropdown: true },
    { label: 'Pricing', href: '#' },
    { label: 'Work With Us', href: '/work-with-us' },
    { label: 'Team', href: '/team' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  const serviceCategories: ServiceCategory[] = [
    {
      label: 'Residential Cleaning',
      href: 'services/residential',
      subServices: [
        { label: 'Standard Home Cleaning', href: 'services/residential/standard' },
        { label: 'Deep Cleaning', href: 'services/residential/deep' },
        { label: 'Move-In / Move-Out Cleaning', href: 'services/residential/move-in-out' },
        { label: 'End of Tenancy Cleaning', href: 'services/residential/tenancy' },
        { label: 'Spring Cleaning', href: 'services/residential/spring' },
        { label: 'After-Party Cleaning', href: 'services/residential/party' },
        { label: 'Appliance Cleaning', href: 'services/residential/appliance' },
        { label: 'Carpet & Upholstery Cleaning', href: 'services/residential/carpet' }
      ]
    },
    {
      label: 'Commercial Cleaning',
      href: 'services/commercial',
      subServices: [
        { label: 'Office Cleaning', href: '/services/commercial/office' },
        { label: 'Retail Store Cleaning', href: '/services/commercial/retail' },
        { label: 'Restaurant & Café Cleaning', href: '/services/commercial/restaurant' },
        { label: 'Parking Lot Cleaning', href: '/services/commercial/parking' },
        { label: 'Gym Cleaning', href: '/services/commercial/gym' },
        { label: 'Salon & Spa Cleaning', href: '/services/commercial/salon' },
        { label: 'Medical Clinic Cleaning', href: '/services/commercial/medical' },
        { label: 'Industrial/Warehouse Cleaning', href: '/services/commercial/industrial' }
      ]
    },
    {
      label: 'Laundry Services',
      href: '/services/laundry',
      subServices: [
        { label: 'Wash & Fold Service', href: '/services/laundry/wash-fold' },
        { label: 'Ironing Service', href: '/services/laundry/ironing' },
        { label: 'Pickup & Delivery', href: '/services/laundry/pickup-delivery' },
        { label: 'Dry Cleaning Coordination', href: '/services/laundry/dry-cleaning' },
        { label: 'Delicates Care', href: '/services/laundry/delicates' },
        { label: 'Bedding & Towels Only', href: '/services/laundry/bedding' }
      ]
    },
    {
      label: 'Airbnb Cleaning',
      href: '/services/airbnb',
      subServices: [
        { label: 'Wash & Fold Service', href: '/services/laundry/wash-fold' },
        { label: 'Ironing Service', href: '/services/laundry/ironing' },
        { label: 'Pickup & Delivery', href: '/services/laundry/pickup-delivery' },
        { label: 'Dry Cleaning Coordination', href: '/services/laundry/dry-cleaning' },
        { label: 'Delicates Care', href: '/services/laundry/delicates' },
        { label: 'Bedding & Towels Only', href: '/services/laundry/bedding' }
      ]
    }
  ];

  const socials: Social[] = [
    { name: 'Facebook', path: "/landing/header/facebook.svg" },
    { name: 'Twitter', path: "/landing/header/twitter.svg" },
    { name: 'Instagram', path: "/landing/header/instagram.svg" },
  ];

  // Type the label parameter as string
  const handleTabClick = (label: string): void => {
    if (label === 'Services') {
      setActiveTab(label);
      if (isMobile) {
        // On mobile, don't close the services dropdown immediately
        // Let the user interact with it
      } else {
        setIsServicesOpen(false);
        setIsMobileServicesOpen(false);
      }
    } else {
      setActiveTab(label);
      setIsServicesOpen(false);
      setIsMobileServicesOpen(false);
      setOpenMobileCategory(null);
      // Close mobile menu for other nav items
      if (isMobile) {
        setIsMenuOpen(false);
      }
    }
  };

  const handleServicesHover = (isHovering: boolean): void => {
    if (!isMobile) {
      if (isHovering) {
        setIsServicesOpen(true);
      } else {
        // Add small delay before closing to prevent flickering
        setTimeout(() => {
          setIsServicesOpen(false);
          setHoveredCategory(null);
        }, 100);
      }
    }
  };

  const toggleMobileServices = (): void => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
    setActiveTab('Services');
    // Close any open mobile categories when toggling services
    if (!isMobileServicesOpen) {
      setOpenMobileCategory(null);
    }
  };

  const toggleMobileCategory = (categoryLabel: string): void => {
    setOpenMobileCategory(openMobileCategory === categoryLabel ? null : categoryLabel);
  };

  // Handle category hover with debouncing
  const handleCategoryHover = (categoryLabel: string): void => {
    if (!isMobile) {
      // Clear any existing timeout
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        setHoverTimeout(null);
      }
      
      // Immediately set the hovered category
      setHoveredCategory(categoryLabel);
    }
  };

  const handleCategoryLeave = (): void => {
    if (!isMobile) {
      // Clear any existing timeout
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
      
      // Set a delay before hiding to prevent flickering
      const timeout = setTimeout(() => {
        setHoveredCategory(null);
      }, 150);
      
      setHoverTimeout(timeout);
    }
  };

  return (
    <div>
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
              <div className="w-px h-4 bg-white/50"></div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/landing/header/message.svg"
                  alt="Email"
                  width={15}
                  height={15}
                />
                <span className="font-semibold">contact@pebblecleaning.com</span>
              </div>         
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-[1139px] mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={"/"} className="flex items-center">
              <Image
                src="/landing/header/logo.png"
                alt="Logo"
                width={138}
                height={50}
                className="md:w-36 md:h-14 cursor-pointer"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 relative">
              {navItems.map((item, index) => (
                <Link href={item.href} key={index}  >
                <div 
                  className="relative" 
                  ref={item.hasDropdown ? dropdownRef : null}
                >
                  {item.hasDropdown ? (
                    // Services dropdown with extended hover area
                    <div
                      className="relative"
                      onMouseEnter={() => handleServicesHover(true)}
                      onMouseLeave={() => handleServicesHover(false)}
                    >
                      <button
                        onClick={() => handleTabClick(item.label)}
                        className={`${
                          activeTab === item.label ? "text-[#4977E5]" : "text-[#051625]"
                        } hover:text-[#4977E5] font-medium flex items-center text-[15px] transition-colors duration-200 py-2 cursor-pointer`}
                      >
                        {item.label}
                        <ChevronDown 
                          size={16} 
                          className={`ml-1 transition-transform duration-200 ${
                            isServicesOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {/* Desktop Dropdown - Single Level with Inline Categories and Subcategories */}
                      {isServicesOpen && (
                        <div 
                          className="absolute top-full left-0 pt-2 z-50"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => {
                            setIsServicesOpen(false);
                            setHoveredCategory(null);
                          }}
                        >
                          <div className="w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden max-h-96 overflow-y-auto custom-scrollbar">
                            <style jsx>{`
                              .custom-scrollbar::-webkit-scrollbar {
                                width: 3px;
                              }
                              .custom-scrollbar::-webkit-scrollbar-track {
                                background: #f1f5f9;
                                border-radius: 10px;
                              }
                              .custom-scrollbar::-webkit-scrollbar-thumb {
                                background: #4977E5;
                                border-radius: 10px;
                                border: 1px solid #4977E5;
                              }
                              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                background: #4977E5;
                              }
                              .custom-scrollbar {
                                scrollbar-width: thin;
                                scrollbar-color: #cbd5e1 #f1f5f9;
                              }
                            `}</style>
                            <div className="">
                              {serviceCategories.map((category, idx) => (
                                <Link href={category.href} key={idx} className="border-b border-gray-100 last:border-b-0 hover:bg-blue-100">
                                  {/* Category Header */}
                                  <div className="flex items-center justify-between px-4 py-4 text-sm font-semibold text-[#4977E5] hover:bg-blue-50">
                                    <span 
                                      className="cursor-pointer hover:underline transition-all duration-200"
                                    >
                                      {category.label}
                                    </span>
                                    {/* Hover wrapper for easier triggering */}
                                    <div 
                                      className="flex items-center justify-center w-12 h-8 bg-gradient-to-r from-[#4977E5]/5 to-blue-50/50 hover:from-[#4977E5]/10 hover:to-blue-50 rounded-md cursor-pointer transition-all duration-200"
                                      onMouseEnter={() => handleCategoryHover(category.label)}
                                      onMouseLeave={handleCategoryLeave}
                                    >
                                      <ChevronRight 
                                        size={16} 
                                        className={`text-[#4977E5] transition-transform duration-200 ${
                                          hoveredCategory === category.label ? 'rotate-90' : ''
                                        }`}
                                      />
                                    </div>
                                  </div>
                                  
                                  {/* Subcategories - Show inline when chevron is hovered */}
                                  {hoveredCategory === category.label && (
                                    <div 
                                      className="px-2 pb-3 bg-gray-50/50 animate-in slide-in-from-top-2 duration-200"
                                      onMouseEnter={() => handleCategoryHover(category.label)}
                                      onMouseLeave={handleCategoryLeave}
                                    >
                                      <div className="grid grid-cols-1 gap-1">
                                        {category.subServices.map((subService, subIdx) => (
                                          <a
                                            key={subIdx}
                                            href={subService.href}
                                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-white hover:text-[#4977E5] transition-all duration-200 rounded-lg border-l-3 border-transparent hover:border-[#4977E5] hover:pl-4 hover:shadow-sm group"
                                          >
                                            <div className="flex items-center justify-between">
                                              <span className="font-medium">{subService.label}</span>
                                              <div className="w-2 h-2 bg-[#4977E5] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            </div>
                                          </a>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    // Regular navigation items
                    <button
                      onClick={() => handleTabClick(item.label)}
                      className={`${
                        activeTab === item.label ? "text-[#4977E5]" : "text-[#051625]"
                      } hover:text-[#4977E5] font-medium flex items-center text-[15px] transition-colors duration-200 py-2 cursor-pointer`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
                </Link>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingCart size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingCart size={20} className="text-gray-600" />
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
                {item.hasDropdown ? (
                  <>
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveTab(item.label);
                          setIsMenuOpen(false);
                          setIsMobileServicesOpen(false);
                          setOpenMobileCategory(null);
                        }}
                        className={`flex-1 text-left p-3 rounded-lg font-medium transition-colors ${
                          activeTab === item.label 
                            ? "bg-[#4977E5]/10 text-[#4977E5]" 
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={toggleMobileServices}
                        className="p-4 rounded-lg transition-colors hover:bg-blue-50"
                      >
                        <ChevronDown 
                          size={16} 
                          color='#4977E5'
                          className={`transition-transform duration-200 ${
                            isMobileServicesOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    </div>
                    
                    {/* Mobile Services Dropdown */}
                    {isMobileServicesOpen && (
                      <>
                        <style jsx>{`
                          .mobile-custom-scrollbar::-webkit-scrollbar {
                            width: 3px;
                          }
                          .mobile-custom-scrollbar::-webkit-scrollbar-track {
                            background: #f1f5f9;
                            border-radius: 10px;
                          }
                          .mobile-custom-scrollbar::-webkit-scrollbar-thumb {
                            background: #4977E5;
                            border-radius: 10px;
                            border: 1px solid #4977E5;
                          }
                          .mobile-custom-scrollbar::-webkit-scrollbar-thumb:hover {
                            background: #4977E5;
                          }
                          .mobile-custom-scrollbar {
                            scrollbar-width: thin;
                            scrollbar-color: #cbd5e1 #f1f5f9;
                          }
                          .mobile-sub-scrollbar::-webkit-scrollbar {
                            width: 2px;
                          }
                          .mobile-sub-scrollbar::-webkit-scrollbar-track {
                            background: #f8fafc;
                            border-radius: 10px;
                          }
                          .mobile-sub-scrollbar::-webkit-scrollbar-thumb {
                            background: #4977E5;
                            border-radius: 10px;
                          }
                          .mobile-sub-scrollbar::-webkit-scrollbar-thumb:hover {
                            background: #4977E5;
                          }
                          .mobile-sub-scrollbar {
                            scrollbar-width: thin;
                            scrollbar-color: #4977E5 #f8fafc;
                          }
                        `}</style>
                        <div className="mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden max-h-80 overflow-y-auto mobile-custom-scrollbar animate-in slide-in-from-top-2 duration-200">
                          <div className="space-y-1">
                            {serviceCategories.map((category, idx) => (
                              <div key={idx} className="border-b border-gray-100 last:border-b-0">
                                <div className="flex items-center justify-between px-4 py-3">
                                  <Link
                                    href={category.href}
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                      setIsMobileServicesOpen(false);
                                      setOpenMobileCategory(null);
                                    }}
                                    className="flex-1 block text-sm font-semibold text-[#4977E5] hover:underline transition-all duration-200"
                                  >
                                    {category.label}
                                  </Link>
                                  <button
                                    onClick={() => toggleMobileCategory(category.label)}
                                    className="flex items-center justify-center w-10 h-8 bg-gradient-to-r from-[#4977E5]/5 to-blue-50/50 hover:from-[#4977E5]/10 hover:to-blue-50 rounded-md transition-all duration-200"
                                  >
                                    <ChevronDown 
                                      size={14} 
                                      className={`text-[#4977E5] transition-transform duration-200 ${
                                        openMobileCategory === category.label ? 'rotate-180' : ''
                                      }`} 
                                    />
                                  </button>
                                </div>
                                
                                {/* Mobile Sub-services */}
                                {openMobileCategory === category.label && (
                                  <div className="px-2 pb-3 bg-gray-50/50 max-h-48 overflow-y-auto mobile-sub-scrollbar">
                                    <div className="space-y-1 animate-in slide-in-from-top-2 duration-200">
                                      {category.subServices.map((subService, subIdx) => (
                                        <Link
                                          key={subIdx}
                                          href={subService.href}
                                          onClick={() => {
                                            setIsMenuOpen(false);
                                            setIsMobileServicesOpen(false);
                                            setOpenMobileCategory(null);
                                          }}
                                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-white hover:text-[#4977E5] transition-all duration-200 rounded-lg border-l-3 border-transparent hover:border-[#4977E5] hover:pl-4 hover:shadow-sm group"
                                        >
                                          <div className="flex items-center justify-between">
                                            <span className="font-medium">{subService.label}</span>
                                            <div className="w-2 h-2 bg-[#4977E5] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveTab(item.label);
                      setIsMenuOpen(false);
                      setIsMobileServicesOpen(false);
                      setOpenMobileCategory(null);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left font-medium transition-colors ${
                      activeTab === item.label 
                        ? "bg-[#4977E5]/10 text-[#4977E5]" 
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile Contact Info */}
          <div className="px-4 py-4 bg-gray-50 border-t space-y-3">
            
            <div className="flex items-center space-x-3 text-sm">
               <Image
                src="/landing/header/message.svg"
                alt="Email"
                width={17}
                height={17}
                className='bg-[#4977E5] p-2 h-8 w-8 rounded-full'
              />
              <span className="font-medium text-[#4977E5]">contact@pebblecleaning.com</span>
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
    </div>
  );
};

export default Header;
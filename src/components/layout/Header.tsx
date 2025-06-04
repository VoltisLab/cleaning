'use client';
import { NavItem } from '@/lib/types';
import Image from 'next/image';
import { ChevronDown, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeTab, setActiveTab] = useState<string>("Home");

  const navItems: NavItem[] = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#', hasDropdown: true },
    { label: 'Pages', href: '#'},
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  const socials = [
    { name: 'Facebook', path: "/landing/header/facebook.svg" },
    { name: 'Twitter', path: "/landing/header/twitter.svg" },
    { name: 'Instagram', path: "/landing/header/instagram.svg" },
    { name: 'Be', path: "/landing/header/Be.svg" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#4977E5] text-white py-4 text-sm ">
        <div className="max-w-[1139px] mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {socials.map((social, index) => (
                <Image
                key={index}
                src={social.path}
                alt={social.name}
                width={15}
                height={15}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center text-xs">
            <div className="flex items-center space-x-1">
               <Image
                src={"/landing/header/call.svg"}
                alt={"Logo"}
                width={14}
                height={14}
                />
              <span className='font-lato font-semibold text-[14px]'>(91) 98765 43321 54</span>
            </div>
            <span className="mx-4 w-px h-5 bg-white/50 font-bold"></span>
            <div className="flex items-center gap-2 font-medium">
              <Image
                src={"/landing/header/message.svg"}
                alt={"Logo"}
                width={15}
                height={15}
                />
              <span  className='font-lato font-semibold text-[14px]'>support@mail.com</span>
            </div>
            <span className="mx-4 w-px h-5 bg-white/50 font-bold"></span>
            <div className="flex items-center gap-2">
              <Image
                src={"/landing/header/location.svg"}
                alt={"Logo"}
                width={15}
                height={15}
                />
              <span  className='font-lato font-semibold text-[14px]' >380 Albert St, US</span>
            </div>
            <span className="mx-4 w-px h-5 bg-white/50 font-bold"></span>
            <div className='items-center gap-2 flex'>
                <Image
                src={"/landing/header/call.svg"}
                alt={"Logo"}
                width={15}
                height={15}
                />
            <span  className='font-lato font-semibold text-[14px]'>Sunday-Friday 9:00am-10pm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white ">
        <div className="max-w-[1139px] mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <Image
                src={"/landing/header/logo.png"}
                alt={"Logo"}
                width={138}
                height={50}
                />
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => {setActiveTab(item.label)}}
                  className={`${activeTab == item.label? "text-[#4977E5]" : "text-[#051625]"}  hover:text-[#5977E5] font-medium flex items-center text-[15px] font-dm-sans]`}
                >
                  {item.label}
                  {item.hasDropdown && <span className="ml-1 text-xs"><ChevronDown /></span>}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded">
                <svg className="w-5 h-5" fill="none" stroke="#000" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
               <ShoppingCart color='black' />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <svg className="w-5 h-5" fill="none" stroke="#000" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
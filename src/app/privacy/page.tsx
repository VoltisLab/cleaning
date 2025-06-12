'use client';
import React, { useState } from 'react';
import { Shield, Cookie, Eye, Lock, Users, Globe, Calendar, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import Banner from '@/components/shared/Banner';

interface PolicySection {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const PoliciesPage = () => {
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'cookies'>('privacy');

  const policySections: PolicySection[] = [
    { id: 'privacy', title: 'Privacy Policy', icon: <Shield className="w-5 h-5" /> },
    { id: 'cookies', title: 'Cookies Policy', icon: <Cookie className="w-5 h-5" /> }
  ];

  const PrivacyPolicy = () => (
    <div className=" flex flex-col gap-8 pb-32">
      {/* Introduction */}
      <section className="bg-gradient-to-br from-[#4977E5]/5 to-blue-50 p-6 rounded-xl border-l-4 border-[#4977E5]">
        <div className="flex items-start gap-4">
          <Shield className="w-8 h-8 text-[#4977E5] mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-xl xl:text-2xl font-bold text-gray-900 mb-3">Privacy Policy</h2>
            <p className="text-gray-700 xl:text-lg">
              At Pebble Cleaning Services, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cleaning and laundry services.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Eye className="w-6 h-6 text-[#4977E5]" />
          <h3 className="text-xl font-semibold text-gray-900">Information We Collect</h3>
        </div>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#4977E5]" />
              Personal Information
            </h4>
            <ul className="space-y-2 text-gray-700 ml-7">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Contact details (name, email address, phone number)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Service address and access instructions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Payment information and billing details</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Service preferences and special instructions</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#4977E5]" />
              Usage Information
            </h4>
            <ul className="space-y-2 text-gray-700 ml-7">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Website usage data and analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Device information and IP address</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                <span>Service history and feedback</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-6 h-6 text-[#4977E5]" />
          <h3 className="xl:text-xl font-semibold text-gray-900">How We Use Your Information</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-[#4977E5]">
              <h4 className="font-semibold text-gray-800 mb-2">Service Delivery</h4>
              <p className="text-gray-600 text-sm">Scheduling appointments, providing cleaning and laundry services, and managing your account.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-gray-800 mb-2">Communication</h4>
              <p className="text-gray-600 text-sm">Sending service confirmations, updates, and responding to your inquiries.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-gray-800 mb-2">Payment Processing</h4>
              <p className="text-gray-600 text-sm">Processing payments, managing billing, and maintaining financial records.</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-gray-800 mb-2">Service Improvement</h4>
              <p className="text-gray-600 text-sm">Analyzing usage patterns to enhance our services and customer experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Sharing */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-6 h-6 text-[#4977E5]" />
          <h3 className="text-xl font-semibold text-gray-900">Information Sharing and Disclosure</h3>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-1">Important Notice</h4>
              <p className="text-yellow-700 text-sm">We do not sell, trade, or rent your personal information to third parties for marketing purposes.</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Service Providers</h4>
            <p className="text-gray-600 text-sm">We may share information with trusted third parties who assist in service delivery (e.g., payment processors, cleaning staff).</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">Legal Requirements</h4>
            <p className="text-gray-600 text-sm">We may disclose information when required by law or to protect our rights and safety.</p>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-[#4977E5]" />
          <h3 className="text-xl font-semibold text-gray-900">Data Security</h3>
        </div>
        <p className="text-gray-700 mb-4">
          We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Lock className="w-8 h-8 text-[#4977E5] mx-auto mb-2" />
            <h4 className="font-semibold text-gray-800 mb-1">Encryption</h4>
            <p className="text-gray-600 text-sm">Data encrypted in transit and at rest</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <Shield className="w-8 h-8 text-[#4977E5] mx-auto mb-2" />
            <h4 className="font-semibold text-gray-800 mb-1">Access Control</h4>
            <p className="text-gray-600 text-sm">Limited access on need-to-know basis</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <CheckCircle className="w-8 h-8 text-[#4977E5] mx-auto mb-2" />
            <h4 className="font-semibold text-gray-800 mb-1">Regular Audits</h4>
            <p className="text-gray-600 text-sm">Continuous security monitoring</p>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <CheckCircle className="w-6 h-6 text-[#4977E5]" />
          <h3 className="text-xl font-semibold text-gray-900">Your Rights and Choices</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <Eye className="w-5 h-5 text-[#4977E5] mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">Access & Portability</h4>
                <p className="text-gray-600 text-sm">Request copies of your personal data</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">Correction</h4>
                <p className="text-gray-600 text-sm">Update or correct inaccurate information</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">Deletion</h4>
                <p className="text-gray-600 text-sm">Request deletion of your data</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
              <Lock className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">Restriction</h4>
                <p className="text-gray-600 text-sm">Limit how we process your data</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );

  const CookiesPolicy = () => (
    <div className="flex flex-col gap-8 pb-32">
      {/* Introduction */}
      <section className="bg-gradient-to-br from-[#4977E5]/5 to-blue-50 p-6 rounded-xl border-l-4 border-[#4977E5]">
        <div className="flex items-start gap-4">
          <Cookie className="w-8 h-8 text-[#4977E5] mt-1 flex-shrink-0" />
          <div>
            <h2 className="xl:text-2xl text-xl font-bold text-gray-900 mb-3">Cookies Policy</h2>
            <p className="text-gray-700 xl:text-lg">
              This Cookies Policy explains how Pebble Cleaning Services uses cookies and similar technologies on our website to provide you with a better, faster, and safer experience.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Cookie className="w-6 h-6 text-[#4977E5]" />
          <h3 className="text-xl font-semibold text-gray-900">What Are Cookies?</h3>
        </div>
        <div className="prose text-gray-700 max-w-none">
          <p className="mb-4">
            Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They help us make your browsing experience better by remembering your preferences and improving website functionality.
          </p>
          <div className="bg-blue-50 border-l-4 border-[#4977E5] p-4 rounded-r-lg">
            <p className="text-gray-700 font-medium">
              Cookies cannot harm your device or files. They simply help us understand how you use our website so we can improve your experience.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-6 h-6 text-[#4977E5]" />
          <h3 className="text-xl font-semibold text-gray-900">Types of Cookies We Use</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="border border-green-200 rounded-lg p-4 bg-green-50">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-gray-800">Essential Cookies</h4>
              </div>
              <p className="text-gray-600 text-sm mb-2">Required for basic website functionality</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• User authentication and session management</li>
                <li>• Shopping cart functionality</li>
                <li>• Security and fraud prevention</li>
              </ul>
            </div>
            
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-gray-800">Analytics Cookies</h4>
              </div>
              <p className="text-gray-600 text-sm mb-2">Help us understand website usage</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Page views and user interactions</li>
                <li>• Popular content identification</li>
                <li>• Website performance monitoring</li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-gray-800">Preference Cookies</h4>
              </div>
              <p className="text-gray-600 text-sm mb-2">Remember your choices and settings</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Language and location preferences</li>
                <li>• Service area selections</li>
                <li>• Display customizations</li>
              </ul>
            </div>
            
            <div className="border border-orange-200 rounded-lg p-4 bg-orange-50">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-gray-800">Marketing Cookies</h4>
              </div>
              <p className="text-gray-600 text-sm mb-2">Deliver relevant advertisements</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Personalized service recommendations</li>
                <li>• Social media integration</li>
                <li>• Campaign effectiveness tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-6 h-6 text-[#4977E5]" />
          <h3 className="text-xl font-semibold text-gray-900">Third-Party Services</h3>
        </div>
        <p className="text-gray-700 mb-6">
          We work with trusted third-party services that may also place cookies on your device. These services help us provide better functionality and insights.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-red-600 font-bold text-lg">G</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Google Analytics</h4>
            <p className="text-gray-600 text-sm">Website performance and user behavior analysis</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 font-bold text-lg">F</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Facebook Pixel</h4>
            <p className="text-gray-600 text-sm">Social media integration and advertising</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 font-bold text-lg">S</span>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Stripe</h4>
            <p className="text-gray-600 text-sm">Secure payment processing</p>
          </div>
        </div>
      </section>

      {/* Cookie Duration */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="w-6 h-6 text-[#4977E5]" />
          <h3 className="text-xl font-semibold text-gray-900">Cookie Duration</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              Session Cookies
            </h4>
            <p className="text-gray-600 text-sm mb-2">Temporary cookies that expire when you close your browser</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Shopping cart contents</li>
              <li>• Login sessions</li>
              <li>• Form data</li>
            </ul>
          </div>
          <div className="border border-green-200 rounded-lg p-4 bg-green-50">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-600" />
              Persistent Cookies
            </h4>
            <p className="text-gray-600 text-sm mb-2">Stored on your device for a specified period (up to 2 years)</p>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• User preferences</li>
              <li>• Analytics data</li>
              <li>• Marketing tracking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-6 h-6 text-[#4977E5]" />
          <h3 className="text-xl font-semibold text-gray-900">Managing Your Cookie Preferences</h3>
        </div>
        <div className="space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Browser Settings</h4>
                <p className="text-yellow-700 text-sm">
                  You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Popular Browsers:</h4>
              <div className="space-y-2">
                <a href="#" className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-800">Google Chrome</div>
                  <div className="text-sm text-gray-600">Settings → Privacy → Cookies</div>
                </a>
                <a href="#" className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-800">Mozilla Firefox</div>
                  <div className="text-sm text-gray-600">Options → Privacy → Cookies</div>
                </a>
                <a href="#" className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-800">Safari</div>
                  <div className="text-sm text-gray-600">Preferences → Privacy</div>
                </a>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Cookie Consent:</h4>
              <div className="p-4 bg-[#4977E5]/5 border border-[#4977E5]/20 rounded-lg">
                <p className="text-gray-700 text-sm mb-3">
                  You can change your cookie preferences at any time using our consent manager.
                </p>
                <button className="bg-[#4977E5] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4977E5]/90 transition-colors">
                  Manage Cookie Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );

  return (
    <div className="min-h-screen bg-white ">
      {/* Header */}
      <Banner page='Privacy & Cookies' />

      {/* Navigation */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-1">
            {policySections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActivePolicy(section.id as 'privacy' | 'cookies')}
                className={`flex items-center gap-2 xl:px-6 px-2 py-4 font-medium transition-all duration-200 border-b-2 ${
                  activePolicy === section.id
                    ? 'text-[#4977E5] border-[#4977E5] bg-[#4977E5]/5'
                    : 'text-gray-600 border-transparent hover:text-[#4977E5] hover:bg-gray-50'
                }`}
              >
                {section.icon}
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className=" lg:px-0 px-4 py-12 mx-auto max-w-[1139px] bg-white">
        {activePolicy === 'privacy' ? <PrivacyPolicy /> : <CookiesPolicy />}
      </div>
    </div>
  );
};

export default PoliciesPage;
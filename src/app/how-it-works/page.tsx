'use client';
import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Send, 
  CheckCircle, 
  XCircle, 
  Repeat, 
  CreditCard, 
  Shield, 
  Clock, 
  Star,
  FileText,
  MessageSquare,
  AlertCircle,
  Briefcase,
  Users,
  ThumbsUp,
  TrendingUp
} from 'lucide-react';
import Banner from '@/components/shared/Banner';

const HowItWorksPage = () => {
  const [activeMethod, setActiveMethod] = useState<'booking' | 'posting'>('booking');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Banner page='How It Works' />

      {/* Content */}
      <div className="xl:px-8 px-4 py-12 mx-auto max-w-[1280px] bg-white">
        <div className="flex flex-col gap-12 pb-32">
          
          {/* Introduction */}
          <section className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Two Simple Ways to Get Your Space
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4977E5] to-[#5B7AFF]">
                Sparkling Clean
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you need a specific cleaner or want multiple offers from professionals, Pebble makes it easy to find the perfect cleaning solution for your needs.
            </p>
          </section>

          {/* Method Selection Tabs */}
          <div className="flex justify-center">
            <div className="bg-gray-100 p-2 rounded-xl inline-flex gap-2">
              <button
                onClick={() => setActiveMethod('booking')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeMethod === 'booking'
                    ? 'bg-[#4977E5] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  <span>Book a Service</span>
                </div>
              </button>
              <button
                onClick={() => setActiveMethod('posting')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeMethod === 'posting'
                    ? 'bg-[#4977E5] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  <span>Post a Job</span>
                </div>
              </button>
            </div>
          </div>

          {/* Booking a Service Flow */}
          {activeMethod === 'booking' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              {/* Header */}
              <div className="bg-gradient-to-br from-[#4977E5]/5 to-blue-50 p-6 rounded-xl border-l-4 border-[#4977E5]">
                <div className="flex items-start gap-4">
                  <Search className="w-8 h-8 text-[#4977E5] mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Book a Service</h2>
                    <p className="text-gray-700 text-lg">
                      Find and book verified cleaners near you. Browse profiles, compare ratings, and connect directly with the perfect service provider for your needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 1: Search & Discover */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Search className="w-7 h-7 text-[#4977E5]" />
                      Search & Discover Services
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                      Start by exploring the cleaning services available in your area. You have two options:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Search className="w-6 h-6 text-[#4977E5]" />
                          <h4 className="font-semibold text-gray-800">Search for Services</h4>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Use our search feature to find specific cleaning services, filter by type, and browse detailed service descriptions.
                        </p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <MapPin className="w-6 h-6 text-[#4977E5]" />
                          <h4 className="font-semibold text-gray-800">Browse Nearby Services</h4>
                        </div>
                        <p className="text-gray-700 text-sm">
                          Discover service providers operating in your neighborhood with real-time availability and competitive pricing.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        What You&apos;ll See:
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Service provider profiles with ratings and reviews</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Detailed service descriptions and pricing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Availability calendars and response rates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Verified badges and certifications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Photos of previous work</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Send Booking Request */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Send className="w-7 h-7 text-[#4977E5]" />
                      Send a Booking Request
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                      Once you&apos;ve found a service provider you like, send them a detailed booking request with your specific requirements.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-[#4977E5] p-5 rounded-r-lg mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-[#4977E5]" />
                        Your Booking Request Includes:
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                          <span><strong>Service Type:</strong> Specify exactly what cleaning service you need</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                          <span><strong>Date & Time:</strong> Your preferred schedule and duration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                          <span><strong>Property Details:</strong> Size, type, and access information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                          <span><strong>Special Requirements:</strong> Any specific tasks or areas that need attention</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                          <span><strong>Additional Notes:</strong> Pets, allergies, supplies needed, or other important details</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-6 h-6 text-[#4977E5] mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Pro Tip</h4>
                          <p className="text-gray-700 text-sm">
                            The more details you provide in your booking request, the more accurate the cleaner&apos;s response will be. Include photos if possible to help them understand the scope of work.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Receive Response */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <MessageSquare className="w-7 h-7 text-[#4977E5]" />
                      Receive Cleaner&apos;s Response
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                      The service provider will review your request and respond with one of three options:
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-center">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <CheckCircle className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Accept</h4>
                        <p className="text-gray-700 text-sm">
                          They agree to your terms and pricing. You can proceed to book immediately.
                        </p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-center">
                        <div className="w-12 h-12 bg-[#4977E5] rounded-full flex items-center justify-center mx-auto mb-3">
                          <Repeat className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Custom Offer</h4>
                        <p className="text-gray-700 text-sm">
                          They send a tailored proposal with adjusted pricing or terms based on your specific needs.
                        </p>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-5 text-center">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <XCircle className="w-7 h-7 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2">Decline</h4>
                        <p className="text-gray-700 text-sm">
                          They&apos;re unable to accommodate your request. You can contact other cleaners.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-[#4977E5] rounded-lg p-5">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Repeat className="w-5 h-5 text-[#4977E5]" />
                        Negotiate with Counter Offers
                      </h4>
                      <p className="text-gray-700 mb-4">
                        If you receive a custom offer that doesn&apos;t quite match your budget or requirements, you can send a counter offer. This negotiation process continues until both parties reach an agreement on:
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <TrendingUp className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                          <span><strong>Final Price:</strong> Agreed upon service cost</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <TrendingUp className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                          <span><strong>Scope of Work:</strong> Exactly what will be cleaned</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <TrendingUp className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                          <span><strong>Timeline:</strong> When the service will be performed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <TrendingUp className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                          <span><strong>Additional Services:</strong> Any extras included or excluded</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Secure Payment */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <CreditCard className="w-7 h-7 text-[#4977E5]" />
                      Make Secure Payment
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                      Once you&apos;ve agreed on the terms, book the service provider by making a secure payment through the Pebble platform.
                    </p>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-6 mb-6">
                      <div className="flex items-start gap-4">
                        <Shield className="w-10 h-10 text-[#4977E5] flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 text-lg">🔒 Your Payment is Protected with Escrow</h4>
                          <p className="text-gray-700 mb-4">
                            Your payment is held securely in escrow and not released to the service provider until the job is completed to your satisfaction. This protects both you and the cleaner.
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg p-4">
                              <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-[#4977E5]" />
                                How Escrow Works:
                              </h5>
                              <ol className="space-y-2 text-gray-700 text-sm list-decimal list-inside">
                                <li>Payment is held securely in escrow</li>
                                <li>Cleaner completes the job</li>
                                <li>You review the work</li>
                                <li>Payment is released when you approve</li>
                              </ol>
                            </div>
                            <div className="bg-white rounded-lg p-4">
                              <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-[#4977E5]" />
                                Your Protection:
                              </h5>
                              <ul className="space-y-2 text-gray-700 text-sm">
                                <li>• Secure Stripe payment processing</li>
                                <li>• Dispute resolution support</li>
                                <li>• Full refund protection</li>
                                <li>• Encrypted transactions</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5: Service Completion */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      5
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <ThumbsUp className="w-7 h-7 text-[#4977E5]" />
                      Service Completion & Payment Release
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                      After the service provider completes the cleaning job, you have control over when the payment is released.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Clock className="w-5 h-5 text-[#4977E5]" />
                          Automatic Release (24 Hours)
                        </h4>
                        <p className="text-gray-700">
                          If no issues are reported, the payment is automatically released to the service provider 24 hours after job completion. This gives you enough time to inspect the work and raise any concerns.
                        </p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[#4977E5]" />
                          Instant Release (Your Choice)
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Happy with the service? You can release the payment immediately after the job is completed. This helps service providers receive their earnings faster and builds trust in the community.
                        </p>
                        <div className="bg-white rounded-lg p-4">
                          <p className="text-gray-700 text-sm font-semibold mb-2">After Payment Release:</p>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span>Rate and review the service provider</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Repeat className="w-4 h-4 text-[#4977E5]" />
                              <span>Easily rebook for recurring services</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-gray-600" />
                              <span>Download your receipt and service report</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-[#4977E5]" />
                          Report an Issue
                        </h4>
                        <p className="text-gray-700">
                          If you&apos;re not satisfied with the service, you can report an issue within the 24-hour window. Our support team will help mediate and find a fair resolution before any payment is released.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Post a Job Flow */}
          {activeMethod === 'posting' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              {/* Header */}
              <div className="bg-gradient-to-br from-[#4977E5]/5 to-blue-50 p-6 rounded-xl border-l-4 border-[#4977E5]">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-8 h-8 text-[#4977E5] mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Post a Job</h2>
                    <p className="text-gray-700 text-lg">
                      Create a job listing and let multiple service providers compete for your business. Get the best offers and choose the perfect match for your cleaning needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 1: Create Job Post */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <FileText className="w-7 h-7 text-[#4977E5]" />
                      Create Your Job Posting
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                      Post your cleaning job on the Pebble marketplace with detailed requirements. This gives you access to multiple qualified service providers who can bid for your job.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-[#4977E5] p-5 rounded-r-lg mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-[#4977E5]" />
                        Include in Your Job Post:
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                          <span><strong>Job Title:</strong> Clear, descriptive title (e.g., &quot;Deep Clean 3-Bedroom House&quot;)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                          <span><strong>Detailed Description:</strong> Specific tasks, rooms, and areas to be cleaned</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                          <span><strong>Property Information:</strong> Size, type, current condition, and access details</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                          <span><strong>Schedule Preferences:</strong> Preferred date, time, and estimated duration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                          <span><strong>Budget Range:</strong> Your expected price range (optional but recommended)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                          <span><strong>Photos:</strong> Upload images to give cleaners a clear view of the space</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                          <span><strong>Special Requirements:</strong> Eco-friendly products, pet considerations, allergies, etc.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white border border-blue-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <Users className="w-5 h-5 text-[#4977E5]" />
                          Who Will See It:
                        </h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Verified service providers in your area</li>
                          <li>• Cleaners matching your service type</li>
                          <li>• Highly-rated professionals</li>
                        </ul>
                      </div>

                      <div className="bg-white border border-blue-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                          <Clock className="w-5 h-5 text-[#4977E5]" />
                          Timeline:
                        </h5>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          <li>• Job goes live immediately</li>
                          <li>• Receive offers within hours</li>
                          <li>• Compare and choose at your pace</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Receive Offers */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Send className="w-7 h-7 text-[#4977E5]" />
                      Receive Multiple Offers
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                      Qualified service providers will review your job posting and send you competitive offers. Each offer includes their proposed pricing, availability, and approach to your cleaning needs.
                    </p>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-5 mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-[#4977E5]" />
                        What Each Offer Contains:
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <TrendingUp className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                            <span><strong>Proposed Price:</strong> Total cost breakdown</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <TrendingUp className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                            <span><strong>Timeline:</strong> When they can start</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <TrendingUp className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                            <span><strong>Duration:</strong> Estimated time needed</span>
                          </li>
                        </ul>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <TrendingUp className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                            <span><strong>Approach:</strong> Their cleaning plan</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <TrendingUp className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                            <span><strong>Supplies:</strong> What&apos;s included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <TrendingUp className="w-5 h-5 text-[#4977E5] mt-0.5 flex-shrink-0" />
                            <span><strong>Profile Info:</strong> Ratings & reviews</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-white border-2 border-[#4977E5] rounded-lg p-5">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        Compare Offers Easily:
                      </h4>
                      <p className="text-gray-700 mb-3">
                        Our platform makes it simple to compare multiple offers side-by-side. Review each service provider&apos;s:
                      </p>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div className="bg-blue-50 rounded-lg p-3 text-center">
                          <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                          <p className="text-sm font-semibold text-gray-800">Ratings & Reviews</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3 text-center">
                          <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                          <p className="text-sm font-semibold text-gray-800">Completion Rate</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3 text-center">
                          <Clock className="w-6 h-6 text-[#4977E5] mx-auto mb-2" />
                          <p className="text-sm font-semibold text-gray-800">Response Time</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Negotiate */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <Repeat className="w-7 h-7 text-[#4977E5]" />
                      Negotiate & Find the Perfect Match
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                      Don&apos;t just accept the first offer! Use our built-in negotiation feature to exchange counter offers with service providers until you reach the perfect agreement.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-[#4977E5] p-5 rounded-r-lg mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-[#4977E5]" />
                        How Counter Offers Work:
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-[#4977E5] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                            1
                          </div>
                          <p className="text-gray-700 pt-1">
                            <strong>Receive Initial Offer:</strong> Service provider sends their proposal
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-[#4977E5] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                            2
                          </div>
                          <p className="text-gray-700 pt-1">
                            <strong>Send Counter Offer:</strong> Adjust price, scope, or timeline to better fit your needs
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-[#4977E5] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                            3
                          </div>
                          <p className="text-gray-700 pt-1">
                            <strong>Provider Responds:</strong> They accept or send their own counter offer
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                            <CheckCircle className="w-5 h-5" />
                          </div>
                          <p className="text-gray-700 pt-1">
                            <strong>Agreement Reached:</strong> Both parties agree on final terms
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                        <h5 className="font-semibold text-gray-800 mb-3">What You Can Negotiate:</h5>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#4977E5]" />
                            <span>Total price and payment terms</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#4977E5]" />
                            <span>Scope of work and specific tasks</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#4977E5]" />
                            <span>Start date and completion timeline</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#4977E5]" />
                            <span>Cleaning products and supplies</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#4977E5]" />
                            <span>Additional services or add-ons</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                        <h5 className="font-semibold text-gray-800 mb-3">Negotiation Tips:</h5>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>Be clear about your priorities</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>Stay respectful and professional</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>Consider value, not just price</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>Check provider ratings first</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>Ask questions before deciding</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4: Secure Payment */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      4
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <CreditCard className="w-7 h-7 text-[#4977E5]" />
                      Book & Pay Securely
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                      Once you&apos;ve selected the best offer and reached an agreement, book the service provider by making a secure payment through Pebble.
                    </p>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <Shield className="w-10 h-10 text-[#4977E5] flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3 text-lg">🔒 Protected by Escrow Payment System</h4>
                          <p className="text-gray-700 mb-4">
                            Your payment is held securely in escrow and only released to the service provider after the job is completed to your satisfaction. This ensures quality work and protects your investment.
                          </p>
                          <div className="bg-white rounded-lg p-5">
                            <h5 className="font-semibold text-gray-800 mb-3">Payment Process:</h5>
                            <div className="space-y-3">
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                  1
                                </div>
                                <p className="text-gray-700 pt-1">
                                  <strong>Payment Held in Escrow:</strong> Your money is secured when you book
                                </p>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                  2
                                </div>
                                <p className="text-gray-700 pt-1">
                                  <strong>Service Completed:</strong> Cleaner finishes the job as agreed
                                </p>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                                  3
                                </div>
                                <p className="text-gray-700 pt-1">
                                  <strong>You Review:</strong> Inspect the work and approve quality
                                </p>
                              </div>
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                                  <CheckCircle className="w-5 h-5" />
                                </div>
                                <p className="text-gray-700 pt-1">
                                  <strong>Payment Released:</strong> Funds transferred to service provider
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5: Service Completion */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      5
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <ThumbsUp className="w-7 h-7 text-[#4977E5]" />
                      Job Completion & Payment Release
                    </h3>
                    <p className="text-gray-700 text-lg mb-6">
                      After the service provider completes the cleaning job, you control when the payment is released from escrow.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Clock className="w-5 h-5 text-[#4977E5]" />
                          Automatic Release (24-Hour Safety Window)
                        </h4>
                        <p className="text-gray-700">
                          If no issues are reported, payment is automatically released 24 hours after job completion. This window gives you time to thoroughly inspect the work, check all areas, and raise any concerns if needed.
                        </p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[#4977E5]" />
                          Instant Release (Immediate Approval)
                        </h4>
                        <p className="text-gray-700 mb-4">
                          Thrilled with the results? Release the payment right away! This helps service providers get paid faster and encourages excellent service quality.
                        </p>
                        <div className="bg-white rounded-lg p-4 border border-blue-300">
                          <p className="text-gray-700 text-sm font-semibold mb-3">Complete Your Experience:</p>
                          <div className="grid md:grid-cols-3 gap-3">
                            <div className="flex items-center gap-2">
                              <Star className="w-5 h-5 text-yellow-500" />
                              <span className="text-sm text-gray-700">Rate service</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MessageSquare className="w-5 h-5 text-[#4977E5]" />
                              <span className="text-sm text-gray-700">Leave review</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Repeat className="w-5 h-5 text-[#4977E5]" />
                              <span className="text-sm text-gray-700">Rebook easily</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-[#4977E5]" />
                          Issue Resolution Support
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Not completely satisfied? Report any issues within 24 hours and our support team will step in to help resolve the situation fairly.
                        </p>
                        <div className="bg-white rounded-lg p-3 border border-blue-300">
                          <p className="text-gray-700 text-sm">
                            <strong>We&apos;ve got your back:</strong> Our team reviews disputes, facilitates communication, and ensures fair outcomes for both customers and service providers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Benefits Section */}
          <section className="bg-gradient-to-br from-[#4977E5] to-[#5B7AFF] rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Pebble?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Secure Payments</h3>
                <p className="text-blue-100">Escrow protection ensures your money is safe until you&apos;re satisfied</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Verified Professionals</h3>
                <p className="text-blue-100">All service providers are background-checked and rated by real customers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                <p className="text-blue-100">Our team is always here to help resolve any issues or answer questions</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-6">
              Download the Pebble app today and experience hassle-free cleaning services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#4977E5] hover:bg-[#3967d4] text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg">
                <span>Download on iOS</span>
              </button>
              <button className="bg-[#4977E5] hover:bg-[#3967d4] text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg">
                <span>Download on Android</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;


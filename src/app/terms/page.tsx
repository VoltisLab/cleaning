'use client';
import React from 'react';
import { Shield, FileText, Scale, AlertCircle, Users, CreditCard, Calendar, CheckCircle, XCircle } from 'lucide-react';
import Banner from '@/components/shared/Banner';

const TermsPage = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Banner page='Terms & Conditions' />

      {/* Content */}
      <div className="xl:px-8 px-4 py-12 mx-auto max-w-[1280px] bg-white">
        <div className="flex flex-col gap-8 pb-32">
          {/* Introduction */}
          <section className="bg-gradient-to-br from-[#4977E5]/5 to-blue-50 p-6 rounded-xl border-l-4 border-[#4977E5]">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-[#4977E5] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-xl xl:text-2xl font-bold text-gray-900 mb-3">Terms and Conditions</h2>
                <p className="text-gray-700 xl:text-lg">
                  Welcome to Pebble Cleaning Services. These Terms and Conditions govern your use of our services and mobile application. By booking or using our services, you agree to be bound by these terms.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Last updated: {new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Agreement to Terms */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-6 h-6 text-[#4977E5]" />
              <h3 className="text-xl font-semibold text-gray-900">1. Agreement to Terms</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                By accessing and using Pebble Cleaning Services ("Pebble," "we," "us," or "our"), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
              <p>
                If you do not agree with any part of these terms, you must not use our services or application.
              </p>
            </div>
          </section>

          {/* Services Description */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-[#4977E5]" />
              <h3 className="text-xl font-semibold text-gray-900">2. Services Description</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Pebble provides a platform connecting customers with professional cleaning service providers across the UK. Our services include:
              </p>
              <ul className="space-y-2 ml-7">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Residential cleaning services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Commercial cleaning services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Laundry services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Airbnb and short-term rental cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Specialized cleaning services</span>
                </li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-[#4977E5] p-4 rounded-r-lg mt-4">
                <p className="text-gray-700 font-medium">
                  Pebble acts as an intermediary platform. While we carefully vet our service providers, the actual cleaning services are performed by independent contractors.
                </p>
              </div>
            </div>
          </section>

          {/* Booking and Payments */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-6 h-6 text-[#4977E5]" />
              <h3 className="text-xl font-semibold text-gray-900">3. Booking and Payments</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">3.1 Booking Process</h4>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• All bookings must be made through our mobile application or website</li>
                  <li>• You must provide accurate property details and access information</li>
                  <li>• Bookings are subject to availability of service providers</li>
                  <li>• You will receive confirmation once a service provider accepts your booking</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">3.2 Payment Terms</h4>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• All payments are processed securely through Stripe</li>
                  <li>• Payment is required at the time of booking or upon service completion</li>
                  <li>• Prices are quoted in GBP and include applicable VAT</li>
                  <li>• Additional charges may apply for extra services or supplies</li>
                  <li>• You will receive a digital receipt via email after payment</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">3.3 Pricing</h4>
                <p className="text-gray-700">
                  Service prices are displayed in the app and may vary based on:
                </p>
                <ul className="space-y-2 text-gray-700 ml-4 mt-2">
                  <li>• Type and scope of cleaning service</li>
                  <li>• Property size and condition</li>
                  <li>• Location and travel requirements</li>
                  <li>• Time and date of service</li>
                  <li>• Special requirements or additional tasks</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cancellation and Refund Policy */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-[#4977E5]" />
              <h3 className="text-xl font-semibold text-gray-900">4. Cancellation and Refund Policy</h3>
            </div>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Free Cancellation
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Cancel up to 24 hours before the scheduled service for a full refund (minus processing fees).
                  </p>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                    Late Cancellation
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Cancellations within 24 hours may incur a 50% cancellation fee.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">4.1 Refund Processing</h4>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li>• Refunds are processed within 5-10 business days</li>
                  <li>• Refunds are issued to the original payment method</li>
                  <li>• Service quality issues must be reported within 24 hours</li>
                  <li>• We reserve the right to investigate refund claims</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">4.2 Rescheduling</h4>
                <p className="text-gray-700">
                  You may reschedule a booking free of charge up to 24 hours before the scheduled service. Rescheduling requests within 24 hours are subject to availability and may incur additional charges.
                </p>
              </div>
            </div>
          </section>

          {/* Customer Responsibilities */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-[#4977E5]" />
              <h3 className="text-xl font-semibold text-gray-900">5. Customer Responsibilities</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>As a customer using Pebble services, you agree to:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#4977E5] font-bold">5.1</span>
                  <span>Provide accurate property information, including access details and any special requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4977E5] font-bold">5.2</span>
                  <span>Ensure the property is accessible at the scheduled time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4977E5] font-bold">5.3</span>
                  <span>Secure or remove valuable items and personal belongings before service</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4977E5] font-bold">5.4</span>
                  <span>Disclose any pets, hazards, or health concerns on the property</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4977E5] font-bold">5.5</span>
                  <span>Treat service providers with respect and professionalism</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4977E5] font-bold">5.6</span>
                  <span>Report any issues or concerns within 24 hours of service completion</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Liability and Insurance */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-[#4977E5]" />
              <h3 className="text-xl font-semibold text-gray-900">6. Liability and Insurance</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">6.1 Service Provider Insurance</h4>
                <p>
                  All service providers on our platform carry public liability insurance. However, Pebble is not liable for damages or losses that occur during service provision beyond the coverage provided by the service provider's insurance.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">6.2 Limitation of Liability</h4>
                <p>
                  Pebble's total liability for any claims arising from our services shall not exceed the amount paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">Important Notice</h4>
                    <p className="text-yellow-700 text-sm">
                      Customers are responsible for securing their valuables. We strongly recommend removing or securing high-value items before any cleaning service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#4977E5]" />
              <h3 className="text-xl font-semibold text-gray-900">7. Intellectual Property</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                All content on the Pebble platform, including but not limited to logos, text, graphics, images, and software, is the property of Pebble or its licensors and is protected by copyright and trademark laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
              </p>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-6 h-6 text-[#4977E5]" />
              <h3 className="text-xl font-semibold text-gray-900">8. Dispute Resolution</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                If you have any concerns or disputes regarding our services:
              </p>
              <ol className="space-y-3 ml-6 list-decimal">
                <li>Contact our customer support team at hello@pebblecleaning.com within 24 hours of the issue</li>
                <li>Provide detailed information and evidence (photos, descriptions) of the issue</li>
                <li>Allow us reasonable time to investigate and respond to your claim</li>
                <li>Cooperate with any investigation or resolution process</li>
              </ol>
              <p>
                If we cannot resolve the dispute through our customer service channels, both parties agree to attempt mediation before pursuing legal action.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-[#4977E5]" />
              <h3 className="text-xl font-semibold text-gray-900">9. Changes to Terms</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website or app. Your continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
              <p>
                We will notify users of significant changes via email or in-app notification.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-6 h-6 text-[#4977E5]" />
              <h3 className="text-xl font-semibold text-gray-900">10. Governing Law</h3>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-br from-[#4977E5]/5 to-blue-50 p-6 rounded-xl border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-[#4977E5]" />
              <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>
            </div>
            <div className="text-gray-700">
              <p className="mb-2">If you have any questions about these Terms and Conditions, please contact us:</p>
              <div className="space-y-2 mt-4">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:hello@pebblecleaning.com" className="text-[#4977E5] hover:underline">
                    hello@pebblecleaning.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Website:</span>
                  <a href="https://pebblecleaning.com" className="text-[#4977E5] hover:underline">
                    pebblecleaning.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;


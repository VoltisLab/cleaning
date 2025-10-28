'use client';
import React from 'react';
import { Shield, FileText, Scale, AlertCircle, Users, CreditCard, Calendar, CheckCircle, XCircle, Book, Mail } from 'lucide-react';
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
                <h1 className="text-2xl xl:text-3xl font-bold text-gray-900 mb-3">Terms and Conditions</h1>
                <p className="text-gray-700 xl:text-lg mb-4">
                  Welcome to Pebble (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the Pebble mobile application, website, and related services (collectively, the &quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-700 xl:text-lg">
                  If you do not agree to these Terms, please do not use our Services.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Last Updated: October 28, 2025 | Version: 1.0</span>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Definitions */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Book className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">2. Definitions</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li><strong>&quot;Customer&quot;</strong> refers to individuals who book cleaning services through the Pebble platform.</li>
              <li><strong>&quot;Cleaner&quot;</strong> refers to independent service providers who offer cleaning services through the Pebble platform.</li>
              <li><strong>&quot;User&quot;</strong> refers to both Customers and Cleaners.</li>
              <li><strong>&quot;Booking&quot;</strong> refers to a scheduled cleaning service arranged through the Pebble platform.</li>
              <li><strong>&quot;Platform&quot;</strong> refers to the Pebble mobile application and website.</li>
            </ul>
          </section>

          {/* 3. Eligibility */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">3. Eligibility</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">3.1 Age Requirement</h3>
                <p className="text-gray-700">You must be at least 18 years of age to use our Services. By using the Services, you represent and warrant that you are at least 18 years old.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">3.2 Account Registration</h3>
                <p className="text-gray-700 mb-2">To access certain features of the Services, you must register for an account. You agree to:</p>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li>• Provide accurate, current, and complete information during registration</li>
                  <li>• Maintain and promptly update your account information</li>
                  <li>• Maintain the security of your account credentials</li>
                  <li>• Accept responsibility for all activities that occur under your account</li>
                  <li>• Immediately notify us of any unauthorized use of your account</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Services Description */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">4. Services Description</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">4.1 Platform Services</h3>
                <p className="text-gray-700">Pebble operates as a technology platform that connects Customers seeking cleaning services with independent Cleaners who provide such services. Pebble does not provide cleaning services directly and is not a cleaning service provider.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">4.2 Cleaner Status</h3>
                <p className="text-gray-700">Cleaners are independent contractors and not employees, agents, or representatives of Pebble. Pebble does not control how Cleaners perform their cleaning services, and Cleaners are solely responsible for the quality and manner of services provided.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">4.3 Service Availability</h3>
                <p className="text-gray-700">Services are subject to availability in your geographic area. We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time without prior notice.</p>
              </div>
            </div>
          </section>

          {/* 5. Booking and Payments */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">5. Booking and Payments</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">5.1 Booking Process</h3>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li>• Customers can browse available Cleaners and their profiles</li>
                  <li>• Customers can request bookings by selecting a Cleaner, date, time, and service type</li>
                  <li>• Cleaners have the right to accept or decline booking requests</li>
                  <li>• Bookings are confirmed once a Cleaner accepts the request</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">5.2 Pricing</h3>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li>• Service prices are set by individual Cleaners and displayed on their profiles</li>
                  <li>• All prices are quoted in the local currency</li>
                  <li>• Prices include the cleaning service cost and may include applicable taxes and service fees</li>
                  <li>• Pebble may charge a platform fee or commission, which will be disclosed separately</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">5.3 Payment Methods</h3>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li>• Payment is processed through the Pebble platform using secure payment processors</li>
                  <li>• Accepted payment methods include credit cards, debit cards, and other methods as displayed in the app</li>
                  <li>• By providing payment information, you authorize us to charge the specified payment method</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">5.4 Payment Processing</h3>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li>• Payment is authorized at the time of booking confirmation</li>
                  <li>• Payment is typically charged upon completion of the cleaning service</li>
                  <li>• A pre-authorization hold may be placed on your payment method</li>
                  <li>• Receipts will be provided electronically through the app</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">5.5 Service Fees</h3>
                <p className="text-gray-700">Pebble may charge service fees to Customers and/or Cleaners for use of the Platform. These fees will be clearly disclosed before you confirm a booking.</p>
              </div>
            </div>
          </section>

          {/* 6. Cancellation and Refund Policy */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">6. Cancellation and Refund Policy</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">6.1 Customer Cancellations</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      24+ Hours Before
                    </h4>
                    <p className="text-gray-700 text-sm">Full refund</p>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600" />
                      12-24 Hours Before
                    </h4>
                    <p className="text-gray-700 text-sm">50% refund</p>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      Less than 12 Hours
                    </h4>
                    <p className="text-gray-700 text-sm">No refund</p>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      After Cleaner Arrived
                    </h4>
                    <p className="text-gray-700 text-sm">No refund</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">6.2 Cleaner Cancellations</h3>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li>• If a Cleaner cancels a confirmed booking, the Customer will receive a full refund</li>
                  <li>• Repeated cancellations by a Cleaner may result in account suspension or termination</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">6.3 Emergency Cancellations</h3>
                <p className="text-gray-700">Cancellations due to emergencies, natural disasters, or circumstances beyond reasonable control may be handled on a case-by-case basis.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">6.4 Refund Processing</h3>
                <p className="text-gray-700">Approved refunds will be processed within 5-10 business days to the original payment method.</p>
              </div>
            </div>
          </section>

          {/* 7. User Conduct and Responsibilities */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">7. User Conduct and Responsibilities</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">7.1 Prohibited Activities</h3>
                <p className="text-gray-700 mb-2">You agree not to:</p>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li>• Violate any applicable laws or regulations</li>
                  <li>• Infringe on intellectual property rights of others</li>
                  <li>• Transmit viruses, malware, or harmful code</li>
                  <li>• Harass, abuse, or harm other Users</li>
                  <li>• Use the Services for fraudulent purposes</li>
                  <li>• Attempt to gain unauthorized access to the Platform</li>
                  <li>• Scrape, collect, or harvest data from the Platform</li>
                  <li>• Impersonate any person or entity</li>
                  <li>• Interfere with or disrupt the Services</li>
                  <li>• Contact other Users outside the Platform to bypass Pebble fees</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">7.2 Customer Responsibilities</h3>
                <p className="text-gray-700 mb-2">Customers agree to:</p>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li>• Provide accurate location and access information</li>
                  <li>• Ensure the property is accessible at the scheduled time</li>
                  <li>• Remove valuable or fragile items from the cleaning area</li>
                  <li>• Provide a safe working environment for Cleaners</li>
                  <li>• Communicate special requirements or concerns before the service</li>
                  <li>• Treat Cleaners with respect and professionalism</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 mb-2">7.3 Cleaner Responsibilities</h3>
                <p className="text-gray-700 mb-2">Cleaners agree to:</p>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li>• Provide cleaning services professionally and competently</li>
                  <li>• Arrive on time for scheduled bookings</li>
                  <li>• Bring necessary cleaning supplies and equipment (unless otherwise specified)</li>
                  <li>• Respect the Customer&apos;s property and privacy</li>
                  <li>• Maintain appropriate licenses, permits, and insurance</li>
                  <li>• Comply with all applicable health and safety regulations</li>
                  <li>• Report any damages or issues immediately</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 8. Ratings and Reviews */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">8. Ratings and Reviews</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">8.1 Review System</h3>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li>• Users may rate and review each other after a completed service</li>
                  <li>• Reviews must be honest, accurate, and based on actual experiences</li>
                  <li>• Reviews must not contain offensive language, personal attacks, or discriminatory content</li>
                  <li>• Pebble reserves the right to remove reviews that violate these Terms</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">8.2 Impact of Ratings</h3>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li>• Persistent low ratings may result in account restrictions or termination</li>
                  <li>• High ratings may increase visibility on the Platform</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 9. Safety and Insurance */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">9. Safety and Insurance</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">9.1 Background Checks</h3>
                <p className="text-gray-700">While we may conduct background checks on Cleaners, we do not guarantee the results of such checks and are not responsible for the conduct of any User.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">9.2 Insurance</h3>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li>• Cleaners are responsible for maintaining appropriate insurance coverage</li>
                  <li>• Pebble is not responsible for injuries or damages that occur during cleaning services</li>
                  <li>• Customers should verify their homeowners or renters insurance coverage</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">9.3 Safety Incidents</h3>
                <p className="text-gray-700">Users should immediately report any safety concerns, injuries, or property damage through the Platform.</p>
              </div>
            </div>
          </section>

          {/* 10. Intellectual Property */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">10. Intellectual Property</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">10.1 Platform Ownership</h3>
                <p className="text-gray-700">The Platform, including all content, features, and functionality, is owned by Pebble and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">10.2 Limited License</h3>
                <p className="text-gray-700">We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for personal, non-commercial purposes in accordance with these Terms.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">10.3 User Content</h3>
                <p className="text-gray-700">You retain ownership of any content you submit through the Platform, but you grant Pebble a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content in connection with operating the Services.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">10.4 Trademarks</h3>
                <p className="text-gray-700">Pebble and related logos are trademarks of Pebble. You may not use these trademarks without our prior written permission.</p>
              </div>
            </div>
          </section>

          {/* 11. Privacy and Data Protection */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">11. Privacy and Data Protection</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">11.1 Privacy Policy</h3>
                <p className="text-gray-700">Your use of the Services is subject to our Privacy Policy, which is incorporated into these Terms by reference.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">11.2 Data Collection</h3>
                <p className="text-gray-700">We collect, use, and share your personal information as described in our Privacy Policy.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">11.3 Communications</h3>
                <p className="text-gray-700">By using the Services, you consent to receive communications from us electronically, including emails, push notifications, and in-app messages.</p>
              </div>
            </div>
          </section>

          {/* 12. Disclaimers and Limitations of Liability */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">12. Disclaimers and Limitations of Liability</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">12.1 Service Disclaimer</h3>
                <p className="text-gray-700 text-sm">THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">12.2 Cleaner Services Disclaimer</h3>
                <p className="text-gray-700 text-sm">PEBBLE DOES NOT WARRANT THE QUALITY, SAFETY, OR LEGALITY OF SERVICES PROVIDED BY CLEANERS. PEBBLE IS NOT RESPONSIBLE FOR THE ACTS, ERRORS, OMISSIONS, REPRESENTATIONS, WARRANTIES, BREACHES, OR NEGLIGENCE OF ANY CLEANERS.</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">12.3 Limitation of Liability</h3>
                <p className="text-gray-700 text-sm">TO THE MAXIMUM EXTENT PERMITTED BY LAW, PEBBLE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">12.4 Maximum Liability</h3>
                <p className="text-gray-700 text-sm">IN NO EVENT SHALL PEBBLE&apos;S TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT PAID BY YOU TO PEBBLE IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">12.5 Jurisdictional Limitations</h3>
                <p className="text-gray-700">Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability. In such jurisdictions, our liability will be limited to the greatest extent permitted by law.</p>
              </div>
            </div>
          </section>

          {/* 13. Indemnification */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">13. Indemnification</h2>
            </div>
            <p className="text-gray-700">
              You agree to indemnify, defend, and hold harmless Pebble, its affiliates, officers, directors, employees, agents, and licensors from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising from:
            </p>
            <ul className="space-y-2 ml-4 text-gray-700 mt-3">
              <li>• Your use of the Services</li>
              <li>• Your violation of these Terms</li>
              <li>• Your violation of any rights of another party</li>
              <li>• Your conduct in connection with the Services</li>
            </ul>
          </section>

          {/* 14. Dispute Resolution */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">14. Dispute Resolution</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">14.1 Informal Resolution</h3>
                <p className="text-gray-700">If you have a dispute with Pebble, you agree to first contact us and attempt to resolve the dispute informally by contacting our customer support team.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">14.2 Arbitration Agreement</h3>
                <p className="text-gray-700">If the informal resolution process fails, you agree that any dispute, claim, or controversy arising out of or relating to these Terms or the Services will be resolved through binding arbitration, rather than in court, except that you may assert claims in small claims court if your claims qualify.</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">14.3 Class Action Waiver</h3>
                <p className="text-gray-700 text-sm">YOU AGREE THAT ANY ARBITRATION OR PROCEEDING SHALL BE LIMITED TO THE DISPUTE BETWEEN YOU AND PEBBLE INDIVIDUALLY. YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">14.4 Governing Law</h3>
                <p className="text-gray-700">These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Pebble is registered, without regard to its conflict of law provisions.</p>
              </div>
            </div>
          </section>

          {/* 15. Account Suspension and Termination */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">15. Account Suspension and Termination</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">15.1 Termination by You</h3>
                <p className="text-gray-700">You may terminate your account at any time by contacting customer support or using the account deletion feature in the app.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">15.2 Termination by Us</h3>
                <p className="text-gray-700 mb-2">We reserve the right to suspend or terminate your account and access to the Services at any time, with or without notice, for any reason, including if:</p>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li>• You breach these Terms</li>
                  <li>• Your conduct poses a risk to other Users</li>
                  <li>• You engage in fraudulent activity</li>
                  <li>• We are required to do so by law</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">15.3 Effect of Termination</h3>
                <p className="text-gray-700 mb-2">Upon termination:</p>
                <ul className="space-y-2 ml-4 text-gray-700">
                  <li>• Your right to use the Services will immediately cease</li>
                  <li>• Outstanding payments will remain due</li>
                  <li>• Provisions that by their nature should survive termination will survive</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 16. Modifications to Terms */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">16. Modifications to Terms</h2>
            </div>
            <p className="text-gray-700 mb-3">
              We reserve the right to modify these Terms at any time. We will notify you of material changes by:
            </p>
            <ul className="space-y-2 ml-4 text-gray-700">
              <li>• Posting the updated Terms on the Platform</li>
              <li>• Sending an email notification</li>
              <li>• Displaying an in-app notification</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Your continued use of the Services after the effective date of the updated Terms constitutes acceptance of the changes.
            </p>
          </section>

          {/* 17. General Provisions */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">17. General Provisions</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">17.1 Entire Agreement</h3>
                <p className="text-gray-700">These Terms, together with our Privacy Policy, constitute the entire agreement between you and Pebble regarding the Services.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">17.2 Severability</h3>
                <p className="text-gray-700">If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">17.3 Waiver</h3>
                <p className="text-gray-700">Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such right or provision.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">17.4 Assignment</h3>
                <p className="text-gray-700">You may not assign or transfer these Terms or your account without our prior written consent. We may assign or transfer these Terms without restriction.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">17.5 Force Majeure</h3>
                <p className="text-gray-700">We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, or strikes.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">17.6 Third-Party Services</h3>
                <p className="text-gray-700">The Services may contain links to third-party websites or services. We are not responsible for the content, policies, or practices of third-party websites or services.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">17.7 Language</h3>
                <p className="text-gray-700">These Terms may be translated into other languages for your convenience. In the event of any conflict between the English version and a translated version, the English version shall prevail.</p>
              </div>
            </div>
          </section>

          {/* 18. Contact Information */}
          <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">18. Contact Information</h2>
            </div>
            <p className="text-gray-700 mb-4">If you have any questions, concerns, or complaints regarding these Terms or the Services, please contact us at:</p>
            <div className="bg-blue-50 border-l-4 border-[#4977E5] p-4 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-2">Pebble Customer Support</p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Email:</strong> <a href="mailto:hello@pebblecleaning.com" className="text-[#4977E5] hover:underline">hello@pebblecleaning.com</a></li>
                <li><strong>Website:</strong> <a href="https://pebblecleaning.com" className="text-[#4977E5] hover:underline">pebblecleaning.com</a></li>
              </ul>
            </div>
          </section>

          {/* 19. Acknowledgment */}
          <section className="bg-gradient-to-br from-[#4977E5]/10 to-blue-100 p-6 rounded-xl border-2 border-[#4977E5]">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8 text-[#4977E5]" />
              <h2 className="text-xl font-semibold text-gray-900">19. Acknowledgment</h2>
            </div>
            <p className="text-gray-800 font-medium">
              BY USING THE PEBBLE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;

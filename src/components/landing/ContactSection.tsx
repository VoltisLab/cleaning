"use client"
import { MapPin, Phone } from "lucide-react";
import { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    residence: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-4 left-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✨</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">👥</div>
                <div className="bg-white rounded-lg p-4 inline-flex items-center space-x-2 shadow-lg">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <div>
                    <div className="font-bold text-sm">Location</div>
                    <div className="text-xs text-gray-600">Call for help</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-[#5B7AFF]" />
                  <span className="text-sm font-medium">365-245-0655</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center mb-8">
              <div className="text-4xl mb-4">📞</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Having Question?
              </h2>
              <h3 className="text-3xl font-bold mb-4">
                Get in <span className="text-[#5B7AFF]">touch!</span>
              </h3>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#5B7AFF]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#5B7AFF]"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Residence</label>
                <select
                  name="residence"
                  value={formData.residence}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-[#5B7AFF] appearance-none"
                >
                  <option value="">Select your residence</option>
                  <option value="usa">United States</option>
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
                </select>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-[#5B7AFF] text-white py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
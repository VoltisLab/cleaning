"use client"
import { useState } from "react";
import Image from "next/image";
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
      <div className="max-w-[1139px] mx-auto px-4">
        <div className="grid xl:grid-cols-2 gap-16 items-center">
          <div className="relative h-full w-full ">
            <Image
              src={"/landing/contact/image.png"}
              alt={"Hero cleaning equipment"}
              fill
              className="object-cover w-full h-full "
              priority
            />
          </div>
          <div className="shadow-lg md:p-10 p-3 rounded-[16px]">
             <div className="relative">
                <Image
                    src={"/landing/contact/brush1.png"}
                    alt={"Hero cleaning equipment"}
                    height={100.28}
                    width={100.28}
                    className="object-fit-contain absolute -left-18 -top-20"
                />
              </div>
            <div className="text-center mb-8 ">
             
              <h2 className="md:text-[40px] text-[20px] font-bold text-gray-900 mb-2">
                Having Question?
              </h2>
              <h3 className="md:text-[40px] text-[20px] font-bold mb-4 text-gray-900">
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
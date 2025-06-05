import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdMail } from "react-icons/md";

export default function BookNow() {
  return (
    <div className="px-6 py-5 max-w-sm mx-auto w-full md:w-[22.5rem] lg:-translate-y-1/2 z-10 rounded-3xl bg-white shadow-md shrink-0 h-fit ">
      <h1 className="font-bold text-2xl mb-7">Book now</h1>
      <form className="space-y-4">
        <input
          type="text"
          className="w-full outline-none border border-[#93949E]/40 rounded-[18px] px-[1.15rem] py-2.5 placeholder:text-[#93949E]"
          placeholder="Enter your name"
        />
        <input
          type="text"
          className="w-full outline-none border border-[#93949E]/40 rounded-[18px] px-[1.15rem] py-2.5 placeholder:text-[#93949E]"
          placeholder="Enter your name"
        />
        <input
          type="text"
          className="w-full outline-none border border-[#93949E]/40 rounded-[18px] px-[1.15rem] py-2.5 placeholder:text-[#93949E]"
          placeholder="Enter your name"
        />

        <div className="flex items-center gap-2 ">
          <input
            type="text"
            className="w-full outline-none border border-[#93949E]/40 rounded-[18px] px-[1.15rem] py-2.5 placeholder:text-[#93949E]"
            placeholder="Date"
          />
          <input
            type="text"
            className="w-full outline-none border border-[#93949E]/40 rounded-[18px] px-[1.15rem] py-2.5 placeholder:text-[#93949E]"
            placeholder="Time"
          />
        </div>

        <textarea
          className="w-full outline-none border border-[#93949E]/40 rounded-[18px] px-[1.15rem] py-2.5"
          placeholder="Write here"
        />

        <button className="rounded-4xl px-5 py-2 bg-[#4977E5] text-white font-medium text-sm cursor-pointer hover:bg-blue-800 transition">
          Submit
        </button>
      </form>

      {/* line  */}
      <div className="my-5 h-px w-full bg-[#93949E]/40"></div>

      {/* Contact details */}
      <div>
        <h1 className="font-bold text-2xl mb-7">Contact Details</h1>
        <div className="space-y-4 text-[#838B95]">
          <p className="flex gap-3">
            <FaLocationDot size={18} className="text-[#4977E5]" />
            <span className="leading-[160%]">
              785 15h Street, Office 468 Berlin, De 845612
            </span>
          </p>

          <p className="flex gap-3">
            <MdMail size={18} className="text-[#4977E5]" />
            <span className="leading-[160%]">creativeitem@gmail.com</span>
          </p>

          <p className="flex gap-3">
            <MdCall size={18} className="text-[#4977E5]" />
            <span className="leading-[160%]">+45654121344</span>
          </p>
        </div>
      </div>
    </div>
  );
}

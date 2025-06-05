import Image from "next/image";
import { BiChevronDown, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaQuoteRight } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { MdMoreVert, MdStar, MdStarHalf } from "react-icons/md";

const testimonials = [
  {
    name: "Alexa Bliss",
    comment:
      "Training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes Awesome site.",
    date: "January 9, 2022",
  },
  {
    name: "Taylor Swift",
    comment:
      "Many remote jobs also come with flexible schedules, which means that workers can start and end their day as they choose, as long as their work.",
    date: "January 9, 2022",
  },
  {
    name: "Amber Ross",
    comment:
      "Many remote jobs also come with flexible schedules, which means that workers can start and end their day as they choose, as long as their work.",
    date: "January 9, 2022",
  },
];

export default function Review() {
  return (
    <section className="space-y-10 text-[#838B95] mb-15">
      <h1 className="text-3xl font-bold text-[#051625] mb-4">
        Edit Your Review
      </h1>

      <form className="space-y-8">
        <div className="space-y-4">
          <label htmlFor="" className="font-medium text-[#051625] inline-block">
            Rating
          </label>
          <div className="relative max-w-lg">
            <BiChevronDown
              className="absolute top-1/2 right-5 -translate-y-1/2"
              size={30}
            />
            <input
              type="text"
              className="w-full outline-none border border-[#93949E]/40 rounded-3xl px-6 py-4  placeholder:text-[#93949E]"
              placeholder="Rating"
            />
          </div>
        </div>

        <div className="space-y-4">
          <label htmlFor="" className="font-medium text-[#051625] inline-block">
            Review
          </label>
          <div className="relative">
            <textarea
              className="w-full outline-none h-56 border border-[#93949E]/40 rounded-3xl px-6 py-4  placeholder:text-[#93949E]"
              placeholder="Write your review"
            />
          </div>
        </div>

        <button className="bg-[#4977E5] px-7 py-4 text-white rounded-4xl transition hover:bg-blue-800 cursor-pointer">
          Upload Review
        </button>
      </form>
    </section>
  );
}

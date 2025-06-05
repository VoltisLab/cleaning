import { BiChevronDown } from "react-icons/bi";

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

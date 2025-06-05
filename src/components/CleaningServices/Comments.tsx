import Image from "next/image";
import { MdMoreVert } from "react-icons/md";

export default function Comments() {
  return (
    <section className="space-y-4 text-[#838B95] mb-32">
      <h1 className="text-3xl font-bold text-[#051625] mb-4">2 Comments</h1>
      <div className="flex gap-2 justify-between border-l border-b border-[#838B95] rounded-b-2xl pb-10 ml-7">
        {/* <div className="h-90 w-2 bg-[#838B95]"></div> */}
        <div className=" rounded-b-2xl">
          <div className="flex pb-20 border-b border-[#838B95] rounded-b-2xl relative">
            <button className="absolute -top-3 right-0 p-1 rounded-3xl flex items-center justify-center bg-gray-200">
              <MdMoreVert size={20} />
            </button>{" "}
            <div className="relative rounded-full size-14.5 overflow-hidden shrink-0 -ml-8">
              <Image
                src={"/cleaning-services/beautiful.jpg"}
                alt={`Cleaning service `}
                fill
                sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                className="object-cover"
              />
            </div>
            <div className="ml-5">
              <h2 className="font-bold text-[#051625] text-xl mb-1">
                Taylor swift
              </h2>
              <p className="text-[15px] mb-4">January 9, 2022 . 7:08 pm</p>
              <p className="text-[15px] mb-4">
                Many remote jobs also come with flexible schedules, which means
                that workers can start and end their day as they choose, as long
                as their work.
              </p>

              <button className="bg-blue-600 text-white rounded-3xl text-[10px] px-4 py-2.5">
                Reply
              </button>
            </div>
          </div>

          {/* sub Comments  */}
          <div className="flex gap-3 bg-white -mt-8 ml-5 pl-3 relative">
            <button className="absolute -top-3 right-0 p-1 rounded-3xl flex items-center justify-center bg-gray-200">
              <MdMoreVert size={20} />
            </button>
            <div className="relative rounded-full size-14.5 overflow-hidden shrink-0">
              <Image
                src={"/cleaning-services/beautiful.jpg"}
                alt={`Cleaning service `}
                fill
                sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="font-bold text-[#051625] text-xl mb-1">
                Taylor swift
              </h2>
              <p className="text-[15px] mb-4">January 9, 2022 . 7:08 pm</p>
              <p className="text-[15px] mb-4">
                Many remote jobs also come with flexible schedules, which means
                that workers can start and end their day as they choose, as long
                as their work.
              </p>

              <button className="bg-blue-600 text-white rounded-3xl text-[10px] px-4 py-2.5">
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white ml-13 -mt-7.5 pl-3 font-medium text-black cursor-pointer text-[15px]">
        View 1 more reply...
      </div>
    </section>
  );
}

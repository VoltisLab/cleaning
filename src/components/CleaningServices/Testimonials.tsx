import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaQuoteRight } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";
import { MdStar, MdStarHalf } from "react-icons/md";

export default function Testimonials() {
  return (
    <section className="space-y-4">
      {/* Photos  */}
      <div className="flex gap-3 justify-center items-center">
        <div className="relative rounded-full size-8.5 overflow-hidden shrink-0">
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

        <div className="relative rounded-full size-11 overflow-hidden shrink-0">
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

        <div className="relative rounded-full size-14 overflow-hidden shrink-0">
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

        <div className="relative rounded-full size-11 overflow-hidden shrink-0">
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

        <div className="relative rounded-full size-8.5 overflow-hidden shrink-0">
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
      </div>

      {/* name  */}
      <p className="text-center font-medium text-lg text-[#051625]">
        Alexa Bliss
      </p>

      <p className="flex justify-center items-center text-yellow-500">
        <MdStar />
        <MdStar />
        <MdStarHalf />
        <IoMdStarOutline />
      </p>

      <div className="flex items-center gap-2 justify-between">
        <button className="size-13 shrink-0 bg-gray-200 shadow flex items-center justify-center rounded-full active:bg-blue-600 cursor-pointer">
          <BiChevronLeft size={30} />
        </button>

        <p className="text-center text-[#838B95] text-[15px]">
          Training programs can bring you a super exciting experience of
          learning through online! You never face any negative experience while
          enjoying your classes Awesome site. on the top advertising a Courses
          available available business having..
        </p>

        <button className="size-13 shrink-0 text-white shadow flex items-center justify-center rounded-full bg-blue-600">
          <BiChevronRight size={30} />
        </button>
      </div>

      <p className="text-center">
        <FaQuoteRight size={45} className="mx-auto text-blue-600" />
      </p>
    </section>
  );
}

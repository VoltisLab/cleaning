import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";
import { IoMdHome, IoMdStar } from "react-icons/io";

export default function Heroes() {
  return (
    <section className="h-[26rem] w-full relative">
      <div className="absolute top-0 left-0 z-10 bg-[#406ACFC2] size-full"></div>
      <div className="absolute size-full top-0 left-0">
        <div className="relative w-full h-full">
          {" "}
          {/* You can adjust height */}
          <Image
            src="https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Assorted color apparels"
            fill
            sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
            className="object-cover"
            priority // Optional: for above-the-fold images
          />
        </div>
      </div>
      {/* Main content  */}
      <div className="relative z-10 px-4 xl:px-8 py-9.5 text-white w-full mx-auto">
        <nav className="font-medium flex items-center gap-2">
          <IoMdHome size={18} />
          <span>Home</span>
          <BiChevronRight size={20} />
          <span>Service</span>
        </nav>

        <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-2.5">
          Offer Cleaning
        </h1>

        <div className="bg-white/23 rounded-[10px] inline-flex py-2.5 px-4 justify-center items-center gap-2">
          <IoMdStar size={20} />
          <span className="font-semibold text-lg">4.0 (2)</span>
        </div>

        <ul className="mt-5 space-y-4">
          <li className="items-center flex gap-2 ">
            <p className="bg-white/23 rounded-full flex items-center justify-center p-1.5">
              <GiCheckMark size={14} className="shrink-0" />
            </p>
            <span className="font-medium text-lg">On time work completion</span>
          </li>

          <li className="items-center flex gap-2 ">
            <p className="bg-white/23 rounded-full flex items-center justify-center p-1.5">
              <GiCheckMark size={14} className="shrink-0" />
            </p>
            <span className="font-medium text-lg">
              Trusted and Experienced Cleaner
            </span>
          </li>

          <li className="items-center flex gap-2 ">
            <p className="bg-white/23 rounded-full flex items-center justify-center p-1.5">
              <GiCheckMark size={14} className="shrink-0" />
            </p>
            <span className="font-medium text-lg">
              Best Quality Cleaning Accessories
            </span>
          </li>
        </ul>
      </div>

      {/* section 2 */}
    </section>
  );
}

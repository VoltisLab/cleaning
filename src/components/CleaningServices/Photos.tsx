import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdMail } from "react-icons/md";
import BookNow from "./BookNow";
import Services from "./services";
import HowWeWork from "./HowWeWork";

const images = [
  "/cleaning-services/scrub-floor.png",
  "/cleaning-services/scrub-floor.png",
  "/cleaning-services/scrub-floor.png",
  "/cleaning-services/scrub-floor.png",
  "/cleaning-services/scrub-floor.png",
  "/cleaning-services/scrub-floor.png",
  "/cleaning-services/scrub-floor.png",
  "/cleaning-services/scrub-floor.png",
  "/cleaning-services/scrub-floor.png",
  "/cleaning-services/scrub-floor.png",
];

export default function Photos() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl text-[#051625] font-bold">Photos</h1>

      <div className="flex gap-4 p-4 bg-[#4977E51F] overflow-hidden rounded-2xl">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative size-32 rounded-2xl overflow-hidden shrink-0"
          >
            <Image
              src={src}
              alt={`Cleaning service ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

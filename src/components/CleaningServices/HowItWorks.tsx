import Image from "next/image";
import BookNow from "./BookNow";
import Comments from "./Comments";
import HowWeWork from "./HowWeWork";
import Photos from "./Photos";
import Review from "./Review";
import Services from "./services";
import Testimonials from "./Testimonials";
import Video from "./Video";

export default function HowItWorks() {
  return (
    <section className="flex justify-between gap-2 flex-col lg:flex-row">
      <div className="max-w-2xl w-full lg:max-w-xl xl:max-w-3xl mx-auto space-y-7.5">
        <div className="relative w-full h-[50vw] sm:h-[45vw] md:h-[29rem] rounded-2xl overflow-hidden -mt-6 md:-mt-14 z-10 shrink-0">
          <Image
            src="/cleaning-services/scrub-floor.png"
            alt="Assorted color apparels"
            fill
            sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
            className="object-cover"
            priority // Optional: for above-the-fold images
          />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl text-[#051625] font-bold">
            Must have cleaning products for kitchen
          </h1>
          <p className="mt-4 text-[#838B95]">
            The rush to give employees access to all the tools they’d need to
            work from home was a bit, well, sudden for many employers. But after
            everyone settled in, what quickly became apparent to many
            office-based teams is that employees could be productive and focused
            when not in the office—in many cases, even more so. Employers
            everywhere began to understand that remote work really works.
          </p>
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl text-[#051625] font-bold">
            Overview Of Home Cleaning
          </h1>
          <p className="mt-4 text-[#838B95]">
            As we’ve long known, remote work has a host of advantages for
            workers. We’re listing out the best of the best benefits of working
            from home—some you may already be aware of, and some that may open
            your eyes even more to remote work’s impact on employers, employees,
            the economy, and the planet.
          </p>
        </div>
        <div className="relative w-full h-[50vw] sm:h-[45vw] md:h-[29rem] rounded-2xl overflow-hidden z-10 shrink-0">
          <Image
            src="/cleaning-services/scrub-floor.png"
            alt="Assorted color apparels"
            fill
            sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw,
               33vw"
            className="object-cover"
            priority
          />
        </div>
        <Services />
        <HowWeWork />
        <Photos />
        <Video />
        <Testimonials />
        <Comments />
        <Review />
      </div>
      {/* Book now  */}
      <BookNow />
    </section>
  );
}

"use client";
import { FaPlay } from "react-icons/fa6";

import { useRef, useState } from "react";
import { FaPause } from "react-icons/fa";

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => console.error("Video play failed:", error));
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };
  return (
    <section className="space-y-4 mt-10">
      <h1 className="text-3xl text-[#051625] font-bold">Video</h1>

      <div className="relative w-full h-[50vw] sm:h-[45vw] md:h-[29rem] rounded-2xl overflow-hidden shrink-0">
        <video
          ref={videoRef}
          className="object-cover w-full h-full"
          muted
          playsInline
          onEnded={handleVideoEnd}
        >
          <source src="/cleaning-services/cleaning.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Shadow overlay - only visible when video is not playing */}
        {!isPlaying && (
          <div className="size-full bg-black/50 absolute top-0 right-0"></div>
        )}

        {/* Play button - only visible when video is not playing */}
        {!isPlaying && (
          <div className="size-[86px] border border-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center rounded-full">
            <button
              onClick={togglePlay}
              className="size-16 bg-[#4977E5] text-white rounded-full flex justify-center items-center transition hover:bg-blue-800 cursor-pointer"
            >
              <FaPlay size={20} />
            </button>
          </div>
        )}

        {/* Pause button - only visible when video is playing (for better UX) */}
        {isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full flex justify-center items-center transition hover:bg-black/70 cursor-pointer"
          >
            <FaPause size={16} />
          </button>
        )}
      </div>
    </section>
  );
}

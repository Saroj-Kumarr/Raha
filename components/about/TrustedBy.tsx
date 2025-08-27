"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const images: string[] = Array.from({ length: 11 }, (_, i) => `/${i + 1}.svg`);

export default function TrustedBy() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animationFrame: number;
    let offset = 0;

    const scroll = () => {
      offset -= 1; // Adjust to control the speed.
      if (Math.abs(offset) >= track.scrollWidth / 2) {
        offset = 0;
      }
      track.style.transform = `translateX(${offset}px)`;
      animationFrame = requestAnimationFrame(scroll);
    };
    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="bg-white py-8 md:py-16 flex flex-col justify-center items-center">
      {/* ==== Title with Decorative Lines ==== */}
      <div className="w-full mb-8">
        <div className="flex items-center gap-4 w-full">
          {/* Decorative line left */}
          <div className="flex-1 h-px bg-[#747C90]"></div>
          {/* Center text */}
          <div className="flex-shrink-0 text-center">
            <p className="text-lg text-[#747C90]">
              Trusted by 100+ organisations
            </p>
          </div>
          {/* Decorative line right */}
          <div className="flex-1 h-px bg-[#747C90]"></div>
        </div>
      </div>

      {/* ==== Infinite Auto-scroll Logo Row ==== */}
      <div className="overflow-hidden w-full flex justify-center">
        <div
          ref={trackRef}
          className="flex gap-12"
          style={{
            minWidth: "200%",
            willChange: "transform",
          }}
        >
          {[...images, ...images].map((src, i) => (
            <div key={i} className="flex-shrink-0 flex items-center">
              <Image
                src={src}
                alt={`Logo ${(i % 12) + 1}`}
                width={120}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

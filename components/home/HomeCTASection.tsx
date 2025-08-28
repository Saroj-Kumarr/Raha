import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomeCTASection() {
  return (
    <div className="bg-white py-8 sm:py-12 px-5 md:px-20 lg:px-24">
      <div className="">
        <div className="relative bg-[#07392A] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row md:max-h-[350px]">
            {/* Content section */}
            <div className="w-full md:w-1/2 px-6 sm:px-8 md:px-16 py-8 sm:py-12 md:py-20 flex flex-col justify-center relative z-20 order-2 md:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-6 sm:mb-8 md:mb-12">
                Care that covers it all—for the health of those who matter most.
              </h1>

              <Link href="/quote">
                <button className="inline-flex items-center justify-center w-full md:w-52 gap-3 bg-white text-[#07392A] font-semibold px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                  Get a Quote
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </Link>
            </div>

            {/* Image section with gradient */}
            <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-[350px] relative order-1 md:order-2">
              <img
                src="/group-people.svg"
                alt="Team collaboration in office"
                className="w-full h-full object-cover object-center"
              />
              {/* Very subtle gradient overlay from left */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#07392A] to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

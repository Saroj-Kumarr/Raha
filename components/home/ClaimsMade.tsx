import { CornerDownRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ClaimsMade = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center ">
      <div className="flex flex-col lg:flex-row w-full md:px-5 gap-8">
        {/* Left image container */}
        <div className="flex-1 relative flex items-center justify-center order-1">
          <div className="relative w-full h-64 sm:h-80 lg:h-[400px]">
            <Image
              src="/policy.svg"
              alt="Dashboard Interface"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        {/* Right side container */}
        <div className="flex-1 flex flex-col justify-center  order-2 lg:order-1">
          <div className="max-w-lg mx-auto lg:mx-0 md:text-center lg:text-left">
            <p className="text-[#2561ED] text-sm mb-4 tracking-[4px] uppercase font-medium">
              Claims Made Simple
            </p>
            <div className="mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#00150E] leading-tight">
                Initiate in minutes.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#747C90] leading-8 mb-6 sm:mb-8">
              Skip the paperwork hassle. Start and track your claims quickly,
              with clear updates at every step.. No juggling between
              tools—everything you need is right here.
            </p>

            <button className="flex gap-2 items-center mt-8 md:mt-12">
              <CornerDownRight size={16} /> Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimsMade;

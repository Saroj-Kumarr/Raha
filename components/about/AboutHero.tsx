import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

const AboutHero = () => {
  return (
    <div className="flex items-center justify-center py-8 md:py-20">
      <div className="p-5 md:p-0">
        <div>
          <h1 className="text-3xl md:text-4xl font-medium lg:text-5xl text-center md:text-center">
            Empowering Organisations through
          </h1>
          <h1 className="text-3xl md:text-4xl font-medium lg:text-5xl mt-3 text-center md:text-center">
            <span className="text-[#17AD7F]">human centric,</span> digitally
            agile solutions.
          </h1>
        </div>

        {/* Mobile paragraph visible only on mobile */}
        <p className="text-[#747C90] block md:hidden md:text-[20px] text-center mt-5">
          End-to-end employee care—Insurance, Wellness, and OPD support that
          drives healthier workplaces protection one smooth experience.
        </p>

        {/* Desktop paragraphs as is */}
        <p className="text-[#747C90] hidden md:block text-[20px] text-center mt-5">
          End-to-end employee care—Insurance, Wellness, and OPD support that
          drives healthier workplaces
        </p>
        <p className="text-[#747C90] hidden md:block text-[20px] text-center">
          protection one smooth experience.
        </p>

        <div className="flex justify-center md:justify-center mt-10 space-x-4">
          <Button className="h-12 md:h-14 cursor-pointer bg-[#17AD7F] rounded-sm w-52 md:w-56 font-normal text-white">
            Explore Services <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AboutHero;

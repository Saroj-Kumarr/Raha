import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="flex items-center justify-center py-8 md:py-20">
      <div className="p-5 md:p-0">
        <div>
          <h1 className="text-4xl md:text-center">
            Building{" "}
            <span className="text-[#17AD7F] font-medium">Healthier</span>{" "}
            Workplaces. <span className="font-semibold">One</span>
          </h1>
          <h1 className="text-4xl md:text-center mt-[2px]">
            <span className="font-semibold">Benefits</span> at a Time.
          </h1>
        </div>
        <p className="text-[#747C90] hidden md:block text-[20px] text-center mt-5 ">
          Born from a belief that companies can empower growth, not just provide
          insurance. At Raha, we make wellness and
        </p>
        <p className="text-[#747C90] hidden md:block text-[20px] text-center">
          protection one smooth experience.
        </p>
        <p className="text-[#747C90] block md:hidden mt-5 ">
          Born from a belief that companies can <br /> empower growth, not just
          provide <br />
          insurance.
        </p>

        <div className="flex items-center md:justify-center mt-9 space-x-4">
          <Button className="h-10 md:h-11 cursor-pointer bg-[#17AD7F] rounded-sm md:w-48 font-normal text-white">
            Meet the Team
          </Button>
          <Button className="h-10 md:h-11 cursor-pointer hover:bg-transparent  border border-black bg-transparent rounded-sm md:w-48 font-normal text-black">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;

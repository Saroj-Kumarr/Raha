import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const FeatureHero = () => {
  return (
    <div className="flex items-center justify-center md:min-h-screen py-8 md:py-20">
      <div className="md:px-0">
        <div className="flex items-center justify-center mb-8">
          <div className="rounded-md px-3 py-[2px] text-[#03704F] bg-[#ECFFF9]">
            Effortless. Reliable. Future-ready.
          </div>
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl md:leading-14 font-medium text-center">
            <span className="text-[#17AD7F]"> Insurance, </span> Built for{" "}
            <br />
            everyone
          </h1>
        </div>

        <div className="flex items-center justify-center mt-12 space-x-4 ">
          <Button className="h-11 md:h-14  cursor-pointer bg-[#17AD7F] rounded-sm md:w-48 font-normal text-white">
            See It in Action <ArrowRight />
          </Button>
          <Button className="h-11 md:h-14  cursor-pointer hover:bg-transparent  border border-black bg-transparent rounded-sm md:w-48 font-normal text-black">
            Book a Demo <ArrowRight className="text-black" />
          </Button>
        </div>

        <div className="relative h-[220px] md:h-[800px] w-screen ">
          <Image
            src="/feature_home.svg"
            alt="Description of image"
            className=""
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureHero;

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const FeatureHero = () => {
  return (
    <div className="flex items-center justify-center md:min-h-screen py-8 md:py-20">
      <div className="px-5 md:px-0">
        <div>
          <h1 className="text-4xl hidden md:block text-center">
            Smarter Insurance, <span className="text-[#17AD7F]">Built</span>
          </h1>
          <h1 className="text-4xl hidden md:block text-center">
            for <span className="font-semibold">HRs</span>
          </h1>
          <h1 className="text-4xl md:hidden">Smarter Insurance,</h1>
          <h1 className="text-4xl md:hidden">
            <span className="text-[#17AD7F]">Built </span>for{" "}
            <span className="font-semibold">HRs</span>
          </h1>
        </div>
        <p className="text-[#747C90] md:text-[20px] md:text-center mt-4 ">
          Onboard employees, track claims, and manage policies—all from one
          powerful, easy-to-use dashboard.
        </p>
        <div className="flex items-center md:justify-center mt-8 space-x-4">
          <Button className="h-10 md:h-11 cursor-pointer bg-[#17AD7F] rounded-sm md:w-48 font-normal text-white">
            See It in Action
          </Button>
          <Button className="h-10 md:h-11 cursor-pointer hover:bg-transparent  border border-black bg-transparent rounded-sm md:w-48 font-normal text-black">
            Book a Demo
          </Button>
        </div>
        <div className="relative h-[220px] md:h-auto md:mt-10">
          <Image
            className="md:hidden"
            src="/mobile_feature.svg"
            alt="mobile feature"
            fill
          />
          <Image
            src="/feature_hero.svg"
            alt="Description of image"
            className="hidden md:block"
            width={780}
            height={490}
          />
          <Image
            className="absolute -top-8 -left-20 hidden md:block"
            src="/feature_uploading.svg"
            alt="Description of image"
            width={225}
            height={205}
          />
          <Image
            className="absolute right-0 bottom-16 hidden md:block"
            src="/feature_claims.svg"
            alt="Description of image"
            width={280}
            height={180}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureHero;

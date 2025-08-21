import Image from "next/image";
import { ChevronRight, CornerDownRight } from "lucide-react";
import { Button } from "../ui/button";

const UpdatePolicy = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full md:px-8">
        {/* Image container - shows first on mobile */}
        <div className="flex-1 h-64 sm:h-80 lg:h-[450px] relative flex items-center justify-center order-1 lg:order-2">
          <div className="relative w-full  h-64 sm:h-80 lg:h-full">
            <Image
              src="/feature_3.svg"
              alt="Dashboard Interface"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        {/* Text container - shows second on mobile */}
        <div className="flex-1 flex flex-col justify-center  order-2 lg:order-1">
          <div className="max-w-lg mx-auto lg:mx-0 md:text-center lg:text-left">
            <div className="mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#00150E] leading-tight">
                Live claim tracking. Zero guesswork.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#747C90] leading-8 mb-6 sm:mb-8">
              Get real-time visibility on every claim. Filter by employee,
              stage, or TAT to keep everyone informed.
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

export default UpdatePolicy;

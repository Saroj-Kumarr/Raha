import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const SmarterWay = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full px-4 sm:px-5 lg:px-24">
        {/* Left image container */}
        <div className="flex-1 h-64 sm:h-80 lg:h-[450px] relative flex items-center justify-center order-1">
          <div className="relative w-full h-64 sm:h-80 lg:h-full">
            <Image
              src="/feature_left.svg"
              alt="Dashboard Interface"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        {/* Right text container */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 order-2">
          <div className="max-w-lg mx-auto lg:mx-0 md:text-center lg:text-left">
            <div className="mb-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#00150E] leading-tight">
                A<span className="text-[#B76F06] font-medium"> Smarter </span>{" "}
                Way to Manage
              </h1>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#00150E]">
                Your Workforce
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#747C90] leading-relaxed mb-6 sm:mb-8">
              View, filter, and update employee details, dependents, policy
              status, and claims—all in one place. Empowered HR, supported
              employees.
            </p>

            <Button className="hidden md:inline-flex items-center gap-3 bg-[#00150E] hover:bg-[#00150E]/80 transition-all duration-300 text-white h-11 w-52 rounded-sm font-semibold">
              <span className="relative bottom-[2px]">Schedule a Demo</span>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmarterWay;

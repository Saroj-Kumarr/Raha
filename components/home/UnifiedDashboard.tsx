import { CornerDownRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const UnifiedDashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <div className="flex flex-col lg:flex-row w-full md:px-8">
        {/* Image container - shows first on mobile */}
        <div className="flex-1 h-64 sm:h-80 lg:h-[450px] relative flex items-center justify-center order-1 lg:order-2">
          <div className="relative w-full  h-64 sm:h-80 lg:h-[400px]">
            <Image
              src="/good_morning_2.png"
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
            <p className="text-[#2561ED] text-sm mb-4 tracking-[4px] uppercase font-medium">
              Unified Dashboard
            </p>
            <div className="mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#00150E] leading-tight">
                All services. One place.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#747C90] leading-8 mb-6 sm:mb-8">
              Manage insurance, wellness, and OPD services with a single,
              easy-to-use dashboard. No juggling between tools—everything you
              need is right here.
            </p>

            <Link href="/quote">
              <Button
                variant="ghost"
                className="p-0 h-10 font-medium text-foreground hover:text-primary"
              >
                <CornerDownRight size={16} /> Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnifiedDashboard;

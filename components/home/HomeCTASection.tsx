import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HomeCTASection() {
  return (
    <div className="bg-white py-8 sm:py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg">
          <div className="flex flex-col md:flex-row">
            {/* Mobile: Image first, Desktop: Content first */}

            {/* Image section */}
            <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-[350px] relative order-1 md:order-2">
              <Image
                src="/group-people.svg"
                alt="Team collaboration in office"
                width={600}
                height={350}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content section */}
            <div className="w-full md:w-1/2 h-auto md:h-[350px] bg-[#07392A] px-6 sm:px-8 md:px-16 py-8 sm:py-12 md:py-20 flex flex-col justify-center order-2 md:order-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-6 sm:mb-8 md:mb-12">
                Care that covers it all—for the health of those who matter most.
              </h1>

              <button className="inline-flex items-center justify-center w-full md:w-52  gap-3 bg-white text-[#07392A] font-semibold px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                Get a Quote
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="pt-10 md:pt-0 md:min-h-screen flex items-center">
      <div className="px-5 md:px-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center md:text-left">
            {/* Tagline */}
            <p className="text-[#03704F] bg-[#ECFFF9] p-1 text-sm font-medium tracking-wide px-4 rounded-md inline-flex justify-center md:justify-start mx-auto md:mx-0">
              Insurance. Wellness. OPD—All in One Place
            </p>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-medium text-[#17AD7F] leading-tight">
                Health Solutions
              </h1>
              <h2 className="text-3xl md:text-5xl leading-tight">
                Built for Today
              </h2>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start">
              <Button className="bg-[#17AD7F] hover:bg-[#17AD7F]/80 text-white w-52 py-7 text-sm font-medium rounded-lg flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Statistics */}
            <div className="flex flex-wrap gap-8 lg:gap-12 pt-4 justify-center md:justify-start">
              <div className="space-y-1 border-r pr-8">
                <div className="text-2xl font-medium text-gray-900">210K+</div>
                <div className="text-gray-400 text-sm">Life Impacted</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-medium text-gray-900">120+</div>
                <div className="text-gray-400 text-sm">Companies</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-medium text-gray-900">70K+</div>
                <div className="text-gray-400 text-sm">Claimed Passed</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/service_hero.svg"
              alt="Health Solutions Hero"
              width={600}
              height={500}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

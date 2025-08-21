import Image from "next/image";
import React from "react";

const Values = () => {
  return (
    <div className="px-4 md:px-20 lg:px-24 pt-10">
      <div className="text-left mb-14">
        <p className="text-xs tracking-[8px] font-medium text-[#B2B7C2] uppercase mb-5">
          VALUES
        </p>
        <h2 className="text-2xl md:text-4xl font-medium text-gray-900 md:mb-5">
          The Values That Drive Us
        </h2>
      </div>

      <section className="md:py-8 pb-8 md:px-4">
        <div className="">
          <div className="grid lg:grid-cols-2 gap-12 items-center md:border-l md:border-y">
            {/* Left Content */}
            <div className="space-y-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Our Vision
              </h2>
              <div className="space-y-4 md:text-lg text-[#747C90] leading-relaxed">
                <p>
                  Raha was created to help organisations offer the best in
                  health and{" "}
                  <span className=" text-gray-900 font-medium">
                    organisational efficiency for delivery of employee benefits
                  </span>
                </p>
                <p className="text-[#747C90]">
                  We&apos;re redefining insurance as a proactive partner in
                  business growth, where security and ambition thrive together.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <Image
                  src="/about_right.svg"
                  alt="Professional team representing our vision"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:px-4">
        <div className="">
          <div className="grid lg:grid-cols-2 gap-12 items-center md:border-r md:border-y">
            {/* Left Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-full max-w-lg overflow-hidden">
                <div className="absolute top-8 w-80 h-80 bg-[#D7FEF1] rounded-full opacity-60 -z-10"></div>
                <Image
                  src="/about_left.svg"
                  alt="Professional team representing wellness programs"
                  width={500}
                  height={400}
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 order-1 lg:order-2 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Wellness Beyond Protection
              </h2>
              <div className="space-y-4 text-[#747C90] md:text-lg leading-relaxed">
                <p>
                  Our wellness programs are built on the belief that a joyful
                  life secures a stronger future. From fitness to mental health,
                  we help you protect and{" "}
                  <span className=" text-gray-900 font-medium">
                    elevate your employees&apos; well-being
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Values;

import Image from "next/image";
import React from "react";

const GetStarted = () => {
  return (
    <div className="bg-[#F5F6F7] py-8 px-5 md:px-0 md:py-16">
      <h1 className="text-4xl hidden md:block font-medium text-center">
        Get started in 3 simple steps
      </h1>
      <h1 className="md:hidden text-[22px]">
        <span className="text-[#03704F] font-medium"> Get started</span> in 3
        simple steps
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
        <div className="rounded-2xl border w-full md:w-[300px] h-[315px] relative overflow-hidden">
          <div className="relative h-[185px] bg-white z-10">
            <Image
              src="/onboard.svg"
              alt="Onboarding illustration"
              fill
              className="object-cover mt-5 max-h-[150px]"
            />
          </div>
          <div className="pt-5 px-4 relative z-20">
            <h3 className="text-[#03704F] text-3xl">1</h3>
            <p className="text-[#00150E] font-medium mt-2">Onboard your team</p>
            <p className="text-[#525C76] text-xs mt-1">
              Upload details securely
            </p>
          </div>
        </div>
        <div className="rounded-2xl border w-full md:w-[300px] h-[315px] relative overflow-hidden">
          <div className="relative h-[185px] bg-white z-10">
            <Image
              src="/insure.svg"
              alt="Onboarding illustration"
              fill
              className="object-cover mt-5 max-h-[150px]"
            />
          </div>
          <div className="pt-5 px-4 relative z-20">
            <h3 className="text-[#03704F] text-3xl">2</h3>
            <p className="text-[#00150E] font-medium mt-2">
              Insure effortlessly
            </p>
            <p className="text-[#525C76] text-xs mt-1">
              Choose plans and plug-ins
            </p>
          </div>
        </div>
        <div className="rounded-2xl border w-full md:w-[300px] h-[315px] relative overflow-hidden">
          <div className="relative h-[185px] bg-white z-10">
            <Image
              src="/manage.svg"
              alt="Onboarding illustration"
              fill
              className="object-cover mt-5 max-h-[150px]"
            />
          </div>
          <div className="pt-5 px-4 relative z-20">
            <h3 className="text-[#03704F] text-3xl">1</h3>
            <p className="text-[#00150E] font-medium mt-2">Manage everything</p>
            <p className="text-[#525C76] text-xs mt-1">
              Via your live dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

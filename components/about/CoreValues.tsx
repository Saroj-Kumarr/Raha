import Image from "next/image";
import React from "react";

const CoreValues = () => {
  return (
    <div className="bg-white px-5 py-8 md:py-20">
      <div>
        <h1 className="text-[22px] md:text-4xl md:text-center">
          Our Core <span className="font-medium text-[#03704F]">Values</span>
        </h1>
        <p className="md:text-center py-3 md:py-5 pb-7 text-[#747C90]">
          Your employees can choose from curated wellness benefits across
          categories that matter most.
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Clients */}
        <StatCard
          value="Healthy"
          label="Prioritizing physical, mental and emotional well-being. Fostering an environment that supports a balanced and thriving lifestyle, promoting health-conscious choices and habits."
        />

        {/* Companies */}
        <StatCard
          value="Engage"
          label="Actively engaging with organizations teams and communities emphasizing on open communication, collaboration and participation to cultivate a dynamic and inclusive environment."
        />

        {/* Claims Passed */}
        <StatCard
          value="Affordability"
          label="Ensuring affordability and accessibility of products, services or solutions to a wide section of society."
        />

        {/* App Rating */}
        <StatCard
          value="Longevity"
          label="Actively engaging with organizations teams and communities emphasizing on open communication, collaboration and participation to cultivate a dynamic and inclusive environment."
        />
      </div>
    </div>
  );
};

export default CoreValues;

type StatCardProps = {
  value: string;
  label: string;
};

/* ====== Reusable Stat Card Component ====== */
function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center w-full md:w-60 h-60 md:h-80 bg-white rounded-xl border border-gray-200 p-5 px-6">
      <Image
        src="/handshake.svg"
        alt="Handshake Icon"
        width={80}
        height={80}
        className="mb-4 w-[45px] h-[45px] md:h-[80px] md:w-[80px]"
      />
      <div className="text-[20px] text-left font-medium text-gray-900 mb-2">
        {value}
      </div>
      <div className="text-gray-500 text-xs text-left leading-5">{label}</div>
    </div>
  );
}

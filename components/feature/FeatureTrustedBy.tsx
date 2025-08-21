import React from "react";
import StatsCard from "./StatCard";

const statsData = [
  {
    id: 1,
    icon: "/fea_1.svg",
    value: "800K+",
    label: "Clients",
  },
  {
    id: 2,
    icon: "/fea_2.svg",
    value: "1200+",
    label: "Companies",
  },
  {
    id: 3,
    icon: "/fea_3.svg",
    value: "70K+",
    label: "Claims Passed",
  },
  {
    id: 4,
    icon: "/fea_4.svg",
    value: "4.5/5",
    label: "App Rating",
    hasStarIcon: true,
  },
];

const FeatureTrustedBy = () => {
  return (
    <div className="px-4 flex flex-col justify-center items-center">
      <div className="w-full mb-8">
        <div className="flex items-center gap-4 w-full">
          {/* Decorative line left */}
          <div className="flex-1 h-px bg-gray-300"></div>
          {/* Center text */}
          <div className="flex-shrink-0 text-center">
            <p className="text-lg text-[#787d88">
              Trusted by 240 HR and founders
            </p>
          </div>
          {/* Decorative line right */}
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
      </div>
      <section className="px-4 pt-5">
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-12">
            {statsData.map((stat) => (
              <StatsCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureTrustedBy;

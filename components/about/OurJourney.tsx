import Image from "next/image";
import React from "react";

const OurJourney = () => {
  return (
    <div className="bg-[#FAFAFB] px-5 md:px-0 py-8 md:py-20">
      <div>
        <h1 className="text-[22px] md:text-4xl md:text-center">
          Our <span className="font-medium text-[#B76F06]">Journey</span>,
          Backed by <span className="font-medium text-[#03704F]">Numbers</span>
        </h1>
        <p className="md:text-center py-3 md:py-5 pb-7 text-[#747C90]">
          {" "}
          Your employees can choose from curated wellness benefits across
          categories that matter most.
        </p>
      </div>
      <div className="w-full grid grid-cols-2 gap-4 md:flex md:items-center md:justify-center md:gap-20">
        {/* Clients */}
        <StatCard value="800K+" label="Clients" />

        {/* Companies */}
        <StatCard value="1200+" label="Companies" />

        {/* Claims Passed */}
        <StatCard value="70k+" label="Claims Passed" />

        {/* App Rating */}
        <StatCard value="4.5/5" label="App Rating" />
      </div>
    </div>
  );
};

export default OurJourney;

type StatCardProps = {
  value: string;
  label: string;
};

/* ====== Reusable Stat Card Component ====== */
function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="md:text-center px-4 md:px-0 md:w-56 bg-white rounded-xl border border-gray-200 py-5">
      <Image
        src="/handshake.svg"
        alt="Handshake Icon"
        width={90}
        height={90}
        className="md:mx-auto mb-4 w-[40px] h-[40px] md:w-[90px] md:h-[90px]"
      />
      <div className="text-3xl font-medium text-gray-900 mb-2">{value}</div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  );
}

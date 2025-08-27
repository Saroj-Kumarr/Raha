import React from "react";
import UnifiedDashboard from "./UnifiedDashboard";
import ClaimsMade from "./ClaimsMade";
import SeamlessEndorsment from "./SeamlessEndorsment";
import SmartAdmin from "./SmartAdmin";

const NewFeature = () => {
  return (
    <section className="px-4 md:px-20 lg:px-24 pt-[88px] pb-20">
      <div className="text-left md:mb-14 mb-20">
        <p className="text-xs tracking-[8px] font-medium text-[#B2B7C2] uppercase mb-5">
          Features
        </p>
        <h2 className="text-2xl md:text-4xl max-w-xl md:leading-12 font-medium text-gray-900 mb-5">
          You deserve better than spreadsheets & confusion
        </h2>
        <p className="text-[#747C90] max-w-5xl">
          Lorem ipsum dolor sit amet consectetur. Elem.
        </p>
      </div>
      <div className="space-y-16 md:space-y-20">
        <UnifiedDashboard />
        <ClaimsMade />
        <SeamlessEndorsment />
        <SmartAdmin />
      </div>
    </section>
  );
};

export default NewFeature;

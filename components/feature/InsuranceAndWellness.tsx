import React from "react";
import AddYourTeam from "./AddYourTeam";
import RaiseRequest from "./RaiseRequest";
import LiveClaim from "./LiveClaim";
import UpdatePolicy from "./UpdatePolicy";
import SmarterWay from "./SmarterWay";
import ReadPeople from "./ReadPeople";

const InsuranceAndWellness = () => {
  return (
    <div className="px-4 md:px-20 lg:px-24 pt-36 pb-20 bg-white">
      <div className="text-left mb-14">
        <p className="text-xs tracking-[8px] font-medium text-[#B2B7C2] uppercase mb-5">
          Product
        </p>
        <h2 className="text-2xl md:text-4xl font-medium text-gray-900 mb-5">
          Insurance & Wellness. Simplified
        </h2>
      </div>
      <div className="space-y-12 md:space-y-20">
        <AddYourTeam />
        <RaiseRequest />
        <UpdatePolicy />
        <LiveClaim />
        <ReadPeople />
        <SmarterWay />
      </div>
    </div>
  );
};

export default InsuranceAndWellness;

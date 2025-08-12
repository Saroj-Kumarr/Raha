import AddYourTeam from "@/components/feature/AddYourTeam";
import FAQSection from "@/components/feature/FAQSection";
import FeatureCTASection from "@/components/feature/FeatureCTASection";
import FeatureHero from "@/components/feature/FeatureHero";
import LiveClaim from "@/components/feature/LiveClaim";
import RahaStats from "@/components/feature/RahaStats";
import RaiseRequest from "@/components/feature/RaiseRequest";
import ReadPeople from "@/components/feature/ReadPeople";
import SmarterWay from "@/components/feature/SmarterWay";
import UpdatePolicy from "@/components/feature/UpdatePolicy";
import TestimonialSection from "@/components/shared/Testimonial";
import React from "react";

const page = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-8 md:pt-24pb-20">
      {/* Grid background */}
      <div
        className="
  absolute inset-0 -z-10 h-full w-full
  bg-[linear-gradient(to_right,#d3d3d333_1px,transparent_1px),linear-gradient(to_bottom,#d3d3d333_1px,transparent_1px)]
  bg-[size:100px_100px]
"
      />
      <FeatureHero />
      <RahaStats />
      <div className="md:space-y-32">
        <RaiseRequest />
        <AddYourTeam />
        <LiveClaim />
        <UpdatePolicy />
        <SmarterWay />
        <ReadPeople />
      </div>

      {/* <TestimonialSection /> */}
      <FAQSection />
      <FeatureCTASection />
    </div>
  );
};

export default page;

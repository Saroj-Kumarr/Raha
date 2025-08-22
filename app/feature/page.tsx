import AddYourTeam from "@/components/feature/AddYourTeam";
import FAQSection from "@/components/feature/FAQSection";
import FeatureCTASection from "@/components/feature/FeatureCTASection";
import FeatureHero from "@/components/feature/FeatureHero";
import FeatureTrustedBy from "@/components/feature/FeatureTrustedBy";
import InsuranceAndWellness from "@/components/feature/InsuranceAndWellness";

import HomeCTASection from "@/components/home/HomeCTASection";
import TestimonialSection from "@/components/shared/Testimonial";
import React from "react";

const page = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-8 md:pt-24">
      {/* Grid background */}
      <div
        className="
  absolute inset-0 -z-10 h-full w-full
  bg-[linear-gradient(to_right,#d3d3d333_1px,transparent_1px),linear-gradient(to_bottom,#d3d3d333_1px,transparent_1px)]
  bg-[size:100px_100px]
"
      />
      <FeatureHero />
      <FeatureTrustedBy />

      {/* <RahaStats /> */}
      <InsuranceAndWellness />

      <TestimonialSection />
      <FAQSection />
      <HomeCTASection />
    </div>
  );
};

export default page;

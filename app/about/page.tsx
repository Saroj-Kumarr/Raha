"use client";

import React from "react";
import AboutHero from "@/components/about/AboutHero";
import TrustedBy from "@/components/about/TrustedBy";
import Values from "@/components/about/Values";
import Humans from "@/components/about/Humans";
import FAQSection from "@/components/feature/FAQSection";
import HomeCTASection from "@/components/home/HomeCTASection";
import OpenPositionsClient from "@/components/about/OpenPositionClient";

const Page = () => {
  return (
    <div className="pb-20 relative min-h-screen">
      <div
        className="
        absolute inset-0 -z-10 h-full w-full
        bg-[linear-gradient(to_right,#d3d3d333_1px,transparent_1px),linear-gradient(to_bottom,#d3d3d333_1px,transparent_1px)]
        bg-[size:100px_100px]
        "
      />
      <AboutHero />
      <TrustedBy />
      <Values />
      <Humans />
      <OpenPositionsClient />
      <FAQSection />
      <HomeCTASection />
    </div>
  );
};

export default Page;

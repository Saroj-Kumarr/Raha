import TrustedBy from "@/components/about/TrustedBy";
import DeserveBetter from "@/components/home/DeserveBetter";
import Feature from "@/components/home/Feature";
import GetStarted from "@/components/home/GetStarted";
import HealthStats from "@/components/home/HealthStats";
import Hero from "@/components/home/hero/Hero";
import HomeCTASection from "@/components/home/HomeCTASection";
import NewFeature from "@/components/home/NewFeature";
import WeTakeCare from "@/components/home/WeTakeCare";
import Testimonial from "@/components/shared/Testimonial";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <TrustedBy />
      {/* <Feature /> */}
      <WeTakeCare />
      <HealthStats />
      <NewFeature />
      <Testimonial />
      <GetStarted />
      <HomeCTASection />
      {/* <HealthStats />
      <NewFeature /> */}
      {/* <DeserveBetter /> */}
      {/* <Testimonial />
      <GetStarted />
      <HomeCTASection /> */}
    </div>
  );
};

export default page;

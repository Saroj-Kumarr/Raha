import FAQSection from "@/components/feature/FAQSection";
import FeatureCTASection from "@/components/feature/FeatureCTASection";
import HomeCTASection from "@/components/home/HomeCTASection";
import CareSection from "@/components/services/CareSection";
import ServicesHero from "@/components/services/Hero";
import ServicesSection from "@/components/services/ServicesSection";
import TestimonialSection from "@/components/shared/Testimonial";
import React from "react";

const page = () => {
  return (
    <div className="pb-20">
      <ServicesHero />
      <CareSection />
      <ServicesSection />
      <TestimonialSection />
      <FAQSection />
      <HomeCTASection />
    </div>
  );
};

export default page;

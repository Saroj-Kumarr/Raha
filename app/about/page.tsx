import AboutHero from "@/components/about/AboutHero";
import ContactForm from "@/components/about/ContactForm";
import CoreValues from "@/components/about/CoreValues";
import DriveUs from "@/components/about/DriveUs";
import MeetOurPeople from "@/components/about/MeetOurPeople";
import OurJourney from "@/components/about/OurJourney";
import TrustedBy from "@/components/about/TrustedBy";
import FAQSection from "@/components/feature/FAQSection";
import React from "react";

const page = () => {
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
      <OurJourney />
      <DriveUs />
      <MeetOurPeople />
      <CoreValues />

      <ContactForm />
      <FAQSection />
    </div>
  );
};

export default page;

"use client";

import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { CornerDownRight } from "lucide-react";
import Image from "next/image";

const WeTakeCare = () => {
  const [activeTab, setActiveTab] = useState("insurance");

  const insuranceRef = useRef<HTMLDivElement>(null);
  const wellnessRef = useRef<HTMLDivElement>(null);
  const opdRef = useRef<HTMLDivElement>(null);

  const tabs = [
    {
      id: "insurance",
      label: "🛡️ Insurance",
      color: "blue",
      iconColor: "text-red-500",
      ref: insuranceRef,
    },
    {
      id: "wellness",
      label: "🧘 Wellness",
      color: "amber",
      iconColor: "text-amber-500",
      ref: wellnessRef,
    },
    {
      id: "opd",
      label: "👩‍⚕️️ OPD",
      color: "green",
      iconColor: "text-orange-500",
      ref: opdRef,
    },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const tab = tabs.find((t) => t.id === tabId);
    if (tab?.ref.current) {
      tab.ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="px-5 md:px-20 lg:px-24 pt-32 md:pb-20">
      <div className="text-left mb-14">
        <p className="text-xs tracking-[8px] font-medium text-[#B2B7C2] uppercase mb-5">
          PRODUCT
        </p>
        <h2 className="text-2xl md:text-4xl max-w-2xl md:leading-12 font-medium text-gray-900 mb-5">
          We take care of employee benefits, so you can take care of your team.
        </h2>
        <p className="text-[#747C90] max-w-5xl">
          We strive for enabling healthier workforce.
        </p>
      </div>
      <div className="md:max-w-7xl md:mx-auto md:px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4 md:gap-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex flex-1 min-w-[120px] max-w-[300px] items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id ? "bg-[#F5F6F7]" : "cs"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Insurance Section */}
        <div ref={insuranceRef} className="mb-24 pt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 border-l border-y p-4 md:p-8 py-6 md:py-10 rounded-sm">
              <h2 className="text-2xl md:text-5xl font-medium text-foreground leading-tight">
                Insurance for every employee
              </h2>
              <p className="md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Raha was conceptualized to empower organizations to provide the
                best health and insurance benefits to their employees.
              </p>
              <Button
                variant="ghost"
                className="p-0 h-auto mt-8 font-medium text-foreground hover:text-primary"
              >
                <CornerDownRight size={16} /> Learn more
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/home_wellness.svg"
                alt="Healthcare Dashboard"
                width={480}
                height={390}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Wellness Section */}
        <div ref={wellnessRef} className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 border-l border-y p-4 md:p-8 py-6 md:py-10 rounded-sm">
              <h2 className="text-2xl md:text-5xl font-medium text-foreground leading-tight">
                Employee Wellness
              </h2>
              <p className="md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                From fitness sessions to mental well-being support, we create a
                happier, healthier workplace.
              </p>
              <Button
                variant="ghost"
                className="p-0 h-auto mt-8 font-medium text-foreground hover:text-primary"
              >
                <CornerDownRight size={16} /> Learn more
              </Button>
            </div>
            {/* Empty div to maintain grid structure but hide image */}
            <div className="hidden lg:block"></div>
          </div>
        </div>

        {/* OPD Section */}
        <div ref={opdRef} className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 border-l border-y p-4 md:p-8 py-6 md:py-10 rounded-sm">
              <h2 className="text-2xl md:text-5xl font-medium text-foreground leading-tight">
                OPD Services
              </h2>
              <p className="md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                We simplify outpatient care, so employees can get the help they
                need, faster.
              </p>
              <Button
                variant="ghost"
                className="p-0 h-auto mt-8 font-medium text-foreground hover:text-primary"
              >
                <CornerDownRight size={16} /> Learn more
              </Button>
            </div>
            {/* Empty div to maintain grid structure but hide image */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeTakeCare;

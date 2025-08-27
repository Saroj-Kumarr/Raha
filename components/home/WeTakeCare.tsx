"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { CornerDownRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const WeTakeCare = () => {
  const [activeTab, setActiveTab] = useState("insurance");

  const tabs = [
    {
      id: "insurance",
      label: "🛡️ Insurance",
      title: "Insurance for every employee",
      description:
        "Raha was conceptualized to empower organizations to provide the best health and insurance benefits to their employees.",
    },
    {
      id: "wellness",
      label: "🧘 Wellness",
      title: "Employee Wellness",
      description:
        "From fitness sessions to mental well-being support, we create a happier, healthier workplace.",
    },
    {
      id: "opd",
      label: "👩‍⚕️ OPD",
      title: "OPD Services",
      description:
        "We simplify outpatient care, so employees can get the help they need, faster.",
    },
  ];

  const activeContent = tabs.find((t) => t.id === activeTab)!;

  return (
    <section className="md:px-20 lg:px-24 pt-16 md:pb-20">
      {/* Header */}
      <div className="text-left mb-14 px-5">
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

      <div>
        {/* Tabs Navigation */}
        <div
          className="
          flex md:justify-between gap-4 max-w-7xl mx-auto md:gap-10 mb-12
          overflow-x-auto md:overflow-visible 
          no-scrollbar
          "
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-shrink-0 md:flex-1   
                min-w-[120px] max-w-[600px]
                px-5 py-3 rounded-lg text-sm font-medium transition-all
                ${
                  activeTab === tab.id
                    ? "bg-[#F5F6F7] text-gray-900"
                    : "bg-white text-gray-500 border"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content: image first on mobile, image right on large screens */}
        <div className="px-5 flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="relative w-full max-w-lg mx-auto">
            <Image
              src="/home_wellness.svg"
              alt="Product Feature"
              width={480}
              height={390}
              className="w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="space-y-6 border-l border-y p-4 md:p-8 py-6 md:py-10 rounded-sm">
            <h2 className="text-2xl md:text-5xl font-medium text-foreground leading-tight">
              {activeContent.title}
            </h2>
            <p className="md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {activeContent.description}
            </p>
            <Link href="/services">
              <Button
                variant="ghost"
                className="p-0 h-10 font-medium text-foreground hover:text-primary"
              >
                <CornerDownRight size={16} /> Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeTakeCare;

"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  ClipboardCheck,
  CheckCircle,
} from "lucide-react";

interface Feature {
  id: string;
  title: string;
  imageSrc: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    id: "simple-dashboard",
    title: "Simple Dashboard",
    imageSrc: "/deserve_better.svg",
    icon: LayoutDashboard,
  },
  {
    id: "policy-details",
    title: "Policy Details",
    imageSrc: "/policy_details.svg",
    icon: FileText,
  },
  {
    id: "claim-details",
    title: "Claim Details",
    imageSrc: "/claim_details.svg",
    icon: ClipboardCheck,
  },
  {
    id: "easy-endorsements",
    title: "Easy Endorsements",
    imageSrc: "/ease_endorsment.svg",
    icon: CheckCircle,
  },
];

export default function DeserveBetter() {
  const [activeFeature, setActiveFeature] = useState<Feature>(features[0]);

  return (
    <section className="py-8 md:py-16 px-5 md:px-20 bg-[#F5F6F7]">
      <div>
        {/* Heading */}
        <div className="space-y-4">
          <h2 className="text-4xl hidden md:block leading-11">
            You deserve better than <br />
            <span className="text-[#03704F] font-medium">
              spreadsheets
            </span> &{" "}
            <span className="text-[#B76F06] font-medium">confusion</span>
          </h2>
          <h2 className="text-[22px] md:hidden">
            You deserve better than <br />
            <span className="text-[#03704F] font-medium">
              spreadsheets
            </span> &{" "}
            <span className="text-[#B76F06] font-medium">confusion</span>
          </h2>
          <p className="text-[#747C90] text-lg">
            Lorem ipsum dolor sit amet consectetur. Elem.
          </p>
        </div>

        {/* Feature Buttons — Horizontal scroll on mobile */}
        <div className="mt-8 overflow-x-auto no-scrollbar">
          <div className="flex md:justify-center gap-4 min-w-max">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={cn(
                  "flex items-center bg-white min-w-[190px] md:min-w-[230px] gap-3 p-2 pl-4 rounded-2xl border transition-all duration-300",
                  activeFeature.id === feature.id
                    ? "border border-black"
                    : "border border[#E2E4E8]"
                )}
              >
                <div
                  className={cn(
                    "p-[2px] rounded-full",
                    activeFeature.id === feature.id
                      ? "bg-[#17AD7F]"
                      : "bg-gray-100"
                  )}
                >
                  <Image
                    src="/handshake.svg"
                    width={32}
                    height={32}
                    className="object-cover"
                    alt=""
                  />
                </div>
                <span className="font-semibold text-gray-800">
                  {feature.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Feature Image — full-width on mobile */}
        <div className="relative flex justify-center mt-8 items-center w-full">
          <div className="relative w-full h-64 rounded-xl overflow-hidden md:hidden">
            <Image
              key={activeFeature.id}
              src={activeFeature.imageSrc || "/placeholder.svg"}
              alt={activeFeature.title}
              fill
              sizes="100vw"
              className="object-contain transition-all duration-500 ease-in-out"
              priority
            />
          </div>
          <div className="relative w-full max-w-[800px] aspect-[16/10] rounded-xl overflow-hidden hidden md:block">
            <Image
              key={activeFeature.id}
              src={activeFeature.imageSrc || "/placeholder.svg"}
              alt={activeFeature.title}
              fill
              sizes="(max-width: 1024px) 90vw, 60vw"
              className="object-contain transition-all duration-500 ease-in-out"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

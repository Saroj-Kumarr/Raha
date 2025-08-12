"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  FileText,
  CalendarDays,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    id: "policy-details",
    title: "Policy Details",
    description: "View and manage all your policy information.",
    imageSrc: "/feature_left.svg",
    icon: FileText,
  },
  {
    id: "monthly-reporting",
    title: "Monthly Reporting",
    description: "Access detailed monthly reports and analytics.",
    imageSrc: "/feature_left.svg",
    icon: CalendarDays,
  },
  {
    id: "claims-details",
    title: "Claims Details",
    description: "Track and manage all your claims efficiently.",
    imageSrc: "/feature_left.svg",
    icon: HeartHandshake,
  },
];

export default function Feature() {
  const [activeFeature, setActiveFeature] = useState<Feature>(features[0]);

  return (
    <section className="hidden md:block bg-white">
      <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Dynamic Image with indicator bar */}
        <div className="relative flex flex-col justify-center items-center min-h-[400px] lg:min-h-[600px] p-4">
          {/* Green organic shape background */}
          <div className="absolute w-[72%] h-[72%] bg-[#D9F2E6] rounded-full blur-3xl opacity-70 -z-10" />

          <div className="relative w-[95%] max-w-[570px] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <Image
              key={activeFeature.id} // key triggers re-mount for CSS transitions
              src={activeFeature.imageSrc || "/placeholder.svg"}
              alt={activeFeature.title}
              fill
              sizes="(max-width: 1024px) 64vw, 25.6vw" // reduced by 20%
              className="object-cover transition-opacity duration-500 ease-in-out"
              priority
            />
          </div>

          {/* Indicator bar container */}
          <div className="flex justify-center space-x-3 mt-4">
            {features.map((feature) => (
              <span
                key={feature.id}
                className={cn(
                  "block h-1 rounded-full transition-all duration-500",
                  activeFeature.id === feature.id
                    ? "bg-[#17AD7F] w-16"
                    : "bg-gray-300 w-12"
                )}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-normal leading-11">
              We Handle <span className="italic font-medium">Healthcare.</span>{" "}
              You <br /> Handle{" "}
              <span className="text-[#2FA581] font-medium">Growth.</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Complete employee healthcare management — covering insurance,
              enrollments, endorsements, and wellness —{" "}
              <span className="font-medium text-[#192648]">
                with zero hassle.
              </span>
            </p>
          </div>

          <Button className="inline-flex items-center gap-3 bg-[#00150E] hover:bg-[#00150E]/80 transition-all duration-300 text-white h-11 w-52 rounded-sm font-semibold">
            <span className="relative bottom-[2px]"> Schedule a Demo</span>
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Feature Boxes */}
          <div className="flex items-center gap-8 mt-5">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={cn(
                  "flex flex-col h-[180px] w-[170px] items-start p-6 rounded-xl border-2 transition-all duration-300 text-center",
                  activeFeature.id === feature.id
                    ? "border-[#17AD7F] shadow-md"
                    : "border-gray-200 bg-white hover:border-gray-300"
                )}
              >
                <div
                  className={cn(
                    "p-[2px] rounded-full mb-4",
                    activeFeature.id === feature.id
                      ? "bg-[#17AD7F]"
                      : "bg-gray-100"
                  )}
                >
                  <Image
                    src="/handshake.svg"
                    width={48}
                    height={48}
                    className="object-cover"
                    alt=""
                  />
                </div>
                <span className="font-semibold text-lg text-gray-800">
                  {feature.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

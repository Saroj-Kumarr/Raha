"use client";

import React, { useEffect } from "react";
import JobCard from "./JobCard";

const jobListings = [
  {
    id: 1,
    department: "Design",
    title: "Product Designer",
    description:
      "We're looking for a mid-level product designer to join our team.",
    location: "Hyderabad",
    type: "Full-time",
    departmentTag: "Design",
    tagColor: "bg-blue-100 text-blue-800 border border-blue-800 ",
  },
  {
    id: 2,
    department: "Software Development",
    title: "Engineering Manager",
    description:
      "We're looking for a mid-level product designer to join our team.",
    location: "Hyderabad",
    type: "Full-time",
    departmentTag: "Software",
    tagColor: "bg-pink-100 text-pink-800 border border-pink-800",
  },
  {
    id: 3,
    department: "Customer Success",
    title: "Customer Success Manager",
    description:
      "We're looking for a mid-level product designer to join our team.",
    location: "Hyderabad",
    type: "Full-time",
    departmentTag: "CX",
    tagColor: "bg-teal-100 text-teal-800 border border-teal-800",
  },
  {
    id: 4,
    department: "Sales",
    title: "Account Executive",
    description:
      "We're looking for a mid-level product designer to join our team.",
    location: "Hyderabad",
    type: "Full-time",
    departmentTag: "Sales",
    tagColor: "bg-blue-100 text-blue-800 border border-blue-800",
  },
  {
    id: 5,
    department: "Marketing",
    title: "SEO Marketing Manager",
    description:
      "We're looking for a mid-level product designer to join our team.",
    location: "Hyderabad",
    type: "Full-time",
    departmentTag: "Marketing",
    tagColor: "bg-orange-100 text-orange-800 border border-orange-800",
  },
];

const OpenPositions = ({ career }: { career: string }) => {
  useEffect(() => {
    if (career) {
      const el = document.getElementById(career);
      if (el) {
        const yOffset = -1; // offset in pixels (example: 40px from top)
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [career]);

  return (
    <div id="career" className="px-4 md:px-20 lg:px-24 pt-20 pb-20">
      <div className="text-left mb-14">
        <p className="text-xs tracking-[8px] font-medium text-[#B2B7C2] uppercase mb-5">
          Hiring
        </p>
        <h2 className="text-2xl md:text-4xl font-medium text-gray-900 mb-5">
          Open Positions
        </h2>
        <p className="text-[#747C90] max-w-5xl">
          Together, let&apos;s change how organizations support their people
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="space-y-10">
          {jobListings.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenPositions;

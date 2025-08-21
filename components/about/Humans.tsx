import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Aarav Sharma",
    title: "Vice President - Wellness and Strategic Partnerships",
    image: "/pic_1.svg",
  },
  {
    id: 2,
    name: "Nisha Verma",
    title: "Chief Partnerships Officer - Wellness",
    image: "/pic_2.svg",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    title: "Director of Strategic Collaborations - Health Programs",
    image: "/pic_3.svg",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    title: "Senior Vice President - Wellness Partnerships",
    image: "/pic_4.svg",
  },
  {
    id: 5,
    name: "Vikram Joshi",
    title: "Executive Director - Strategic Alliances in Health",
    image: "/pic_5.svg",
  },
  {
    id: 6,
    name: "Priya Iyer",
    title: "Head - Strategic Alliances & Partnerships",
    image: "/pic_6.svg",
  },
];

const Humans = () => {
  return (
    <div className="px-4 md:px-20 lg:px-24 pt-20">
      <div className="text-left mb-14">
        <p className="text-xs tracking-[8px] font-medium text-[#B2B7C2] uppercase mb-5">
          People
        </p>
        <h2 className="text-2xl md:text-4xl font-medium text-gray-900 mb-5">
          Humans at our core
        </h2>
        <p className="text-[#747C90] max-w-5xl">
          Thinkers, builders, and doers reshaping how organizations care for
          people.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-16">
        <Button className="bg-[#17AD7F] hover:bg-[#17AD7F]/80 text-white w-72 py-6 text-sm font-medium rounded-lg flex items-center gap-2 ">
          Join Us
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Humans;

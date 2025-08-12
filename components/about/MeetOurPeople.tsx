"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import PeopleCard from "./PeopleCard";

const MeetOurPeople = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data - replace with your actual data
  const peopleData = Array.from({ length: 6 }, (_, index) => ({
    id: index,
    name: "Priya Sharma",
    title: "Founder & CEO",
    description:
      "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    imageUrl:
      "https://i.pinimg.com/736x/db/58/70/db58703032a128277dc1653da48b4378.jpg",
    twitterIconUrl: "/twitter.svg",
    linkedinIconUrl: "/linkedin.svg",
    mediaIconUrl: "/media.svg",
  }));

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % peopleData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + peopleData.length) % peopleData.length
    );
  };

  return (
    <div className="bg-white px-5 py-8 md:py-20">
      <div>
        <div>
          <h1 className="text-[22px] md:text-4xl md:text-center">
            Meet Our People (Human at the Core)
          </h1>
        </div>
        <p className="text-[#747C90] md:hidden mt-5">
          A team of ~30-50 passionate professionals across Hyderabad and
          Bengaluru—people ops, tech, wellness experts, and dedicated associates
          trained to serve HRs and employees alike.
        </p>
        <p className="text-[#747C90] hidden md:block text-[20px] text-center mt-5 ">
          A team of ~30-50 passionate professionals across Hyderabad and
          Bengaluru—people ops, tech, wellness
        </p>
        <p className="text-[#747C90] hidden md:block text-[20px] text-center">
          experts, and dedicated associates trained to serve HRs and employees
          alike.
        </p>
        <div className="flex items-center md:justify-center mt-5 md:mt-9 space-x-4">
          <Button className="h-10 md:h-11 cursor-pointer bg-[#17AD7F] rounded-sm md:w-48 font-normal text-white">
            We&apos;re hiring!
          </Button>
          <Button className="h-10 md:h-11 cursor-pointer hover:bg-transparent  border border-black bg-transparent rounded-sm md:w-48 font-normal text-[#0F1D40]">
            Read our principles
          </Button>
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden mt-10">
        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 85}%)` }}
            >
              {peopleData.map((person, index) => (
                <div key={person.id} className="w-[85%] flex-shrink-0 pr-4">
                  <PeopleCard
                    name={person.name}
                    title={person.title}
                    description={person.description}
                    imageUrl={person.imageUrl}
                    twitterIconUrl={person.twitterIconUrl}
                    linkedinIconUrl={person.linkedinIconUrl}
                    mediaIconUrl={person.mediaIconUrl}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Left Aligned */}
          <div className="flex items-center space-x-3 mt-6">
            <Button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-50 shadow-sm flex items-center justify-center p-0"
              variant="outline"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </Button>

            <Button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white border border-gray-300 hover:bg-gray-50 shadow-sm flex items-center justify-center p-0"
              variant="outline"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="w-full justify-center mt-10 hidden md:flex">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
          {peopleData.map((person, index) => (
            <PeopleCard
              key={person.id}
              name={person.name}
              title={person.title}
              description={person.description}
              imageUrl={person.imageUrl}
              twitterIconUrl={person.twitterIconUrl}
              linkedinIconUrl={person.linkedinIconUrl}
              mediaIconUrl={person.mediaIconUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurPeople;

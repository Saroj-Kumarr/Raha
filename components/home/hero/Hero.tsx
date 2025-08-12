"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import "./Hero.css";
import Image from "next/image";

const Hero = ({ banner = [] }: { banner?: string[] }) => {
  const fallback = [
    { desktop: "/frame_1.svg" },
    { desktop: "/frame_2.svg" },
    { desktop: "/frame_3.svg" },
  ];

  const slides = banner.length ? banner.map((b) => ({ desktop: b })) : fallback;

  return (
    <>
      <div className="relative w-full hidden md:block">
        {/* Fixed left text overlay */}
        <div className="pointer-events-none absolute inset-y-0 left-20 z-20 flex items-center">
          <div className="px-6 space-y-6 sm:px-10 max-w-xl">
            <h1 className="text-white text-5xl leading-14 font-medium">
              Insurance Made Easy. <br />
              For<span className="italic"> Everyone.</span>
            </h1>
            <p className="text-[#FAFAFB] mt-4 max-w-md">
              From onboarding to claims, we manage it all—hassle-
              <br />
              free.
            </p>
            <div className="mt-6 pointer-events-auto">
              <Link href="/quote">
                <Button className="bg-[#17AD7F] h-11 w-48 hover:bg-[##17AD7F]/80 transition-all duration-300">
                  Get a Quote
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex gap-10 text-[#FEFAF0]">
              <div className="border-r pr-6">
                <div className="text-xl font-semibold">210K+</div>
                <div className="text-sm">Life Impacted</div>
              </div>
              <div className="border-r pr-6">
                <div className="text-xl font-semibold">120+</div>
                <div className="text-sm">Companies</div>
              </div>
              <div>
                <div className="text-xl font-semibold">70k+</div>
                <div className="text-sm">Claimed Passed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider underneath */}
        <Swiper
          centeredSlides
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                src={item.desktop}
                alt="banner"
                className="w-full h-[520px] object-cover brightness-90"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional: add left gradient so text is readable */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>
      <div className="md:hidden pt-28">
        <div className="px-5 space-y-6">
          <h1 className="text-4xl ">
            Insurance Made{" "}
            <span className="text-[#03704F] font-medium">Easy.</span> <br />
            For<span className="italic font-medium"> Everyone.</span>
          </h1>
          <p className="mt-4 text-[#747C90]">
            From onboarding to claims, we manage it <br />
            all—hassle- free.
          </p>
          <div className="mt-6 pointer-events-auto">
            <Link href="/quote">
              <Button className="bg-[#17AD7F] h-12 w-36 hover:bg-[##17AD7F]/80 transition-all duration-300">
                Get a Quote
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 py-6">
            <div className="border-r pr-6">
              <div className="font-semibold">210K+</div>
              <div className="text-sm text-[#747C90]">Life Impacted</div>
            </div>
            <div className="border-r pr-6">
              <div className="font-semibold">120+</div>
              <div className="text-sm text-[#747C90]">Companies</div>
            </div>
            <div>
              <div className="font-semibold">70k+</div>
              <div className="text-sm text-[#747C90]">Claimed Passed</div>
            </div>
          </div>

          <div className="relative min-h-[420px]">
            <Image
              src="/mobile_home.svg"
              alt="Mobile Home"
              fill
              className="cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

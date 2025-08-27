"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import "./Hero.css";

const Hero = ({ banner = [] }: { banner?: string[] }) => {
  const fallback = [{ desktop: "/new_hero_girl.svg" }];

  const slides = banner.length ? banner.map((b) => ({ desktop: b })) : fallback;

  return (
    <>
      <div className="relative w-full md:block">
        {/* Fixed left text overlay */}
        <div className="pointer-events-none absolute inset-y-0 left-20 z-20 hidden md:flex items-center">
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
                <Button className="bg-[#17AD7F] h-11 w-48 hover:bg-[#17AD7F]/80 transition-all duration-300">
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

        {/* Desktop Swiper */}
        <div className="hidden md:block">
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
                  src={item.desktop || "/placeholder.svg"}
                  alt="banner"
                  className="w-full h-[520px] object-cover brightness-90"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 z-10 bg-gradient-to-r from-[#0A1511] via-[#0A1511]/80 to-transparent" />
        </div>
        <div className="md:hidden relative">
          <div className="relative w-full max-w-full overflow-hidden min-h-[700px]">
            <Image
              src="/mobile_hero.svg"
              alt="Mobile Hero"
              fill
              className="object-cover brightness-90"
              priority
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="absolute top-28 left-5 z-10 space-y-6 text-white">
            <h1 className="text-4xl font-medium leading-snug">
              Insurance Made Easy
              <br />
              For<span className="italic"> Everyone.</span>
            </h1>
            <p className="mt-4 text-[#FAFAFB]">
              From onboarding to claims,
              <br /> we manage it all— hassle-free.
            </p>
            <div className="mt-6">
              <Link href="/quote">
                <Button className="bg-[#17AD7F] h-12 w-36 hover:bg-[#17AD7F]/80 transition-all duration-300">
                  Get a Quote
                </Button>
              </Link>
            </div>

            <div className="flex gap-6 mt-8">
              <div>
                <div className="font-semibold">210K+</div>
                <div className="text-sm text-[#FAFAFB]">Life Impacted</div>
              </div>
              <div>
                <div className="font-semibold">120+</div>
                <div className="text-sm text-[#FAFAFB]">Companies</div>
              </div>
              <div>
                <div className="font-semibold">70k+</div>
                <div className="text-sm text-[#FAFAFB]">Claims Passed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

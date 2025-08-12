"use client";

import { Button } from "@/components/ui/button";
import {
  Check,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ThankYou() {
  const handleBackToHomepage = () => {
    // Handle navigation to homepage
    console.log("Navigate to homepage");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ECFDF7] to-[#CBEEE1] flex flex-col items-center justify-center p-5 md:p-8">
      <div className="text-center md:max-w-md md:mx-auto">
        {/* Success Icon */}
        <Image
          src="/completed.svg"
          alt="completed"
          width={80}
          height={80}
          className="mx-auto mb-8 w-[60px] h-[60px] md:h-[80px] md:w-[80px]"
        />

        {/* Main Heading */}
        <h1 className="text-[22px] font-semibold text-[#00150E] mb-4">
          Thank You! We&apos;ve Received Your Details.
        </h1>

        {/* Subtext */}
        <p className="text-[#5C657D] text-sm font-medium mb-8 leading-relaxed">
          Our team will get in touch with you shortly to understand your needs
          and walk you through the Raha experience.
        </p>

        {/* Back to Homepage Button */}
        <Link href="/" passHref>
          <Button className="bg-gradient-to-r h-12 w-48 from-[#50A881] to-[#408968] text-white rounded-md mb-8">
            Back to homepage
          </Button>
        </Link>
        {/* Social Media Section */}
        <div className="space-y-8">
          <p className="text-gray-700 font-medium">
            Stay in the Loop with Raha
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 md:space-x-8">
            <a
              href="#"
              className="w-8 h-8 bg-black rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-black rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-black rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-black rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-black rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-black rounded-md flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Medium"
            >
              <div className="w-4 h-4 text-white font-bold text-sm flex items-center justify-center">
                M
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

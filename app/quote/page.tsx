"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import ThankYou from "@/components/sign-up/ThankYou";

export default function SignupForm() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    employees: "",
    workEmail: "",
    industry: "",
    product: "",
  });

  const handleSubmit = () => {
    setIsSubmit(true);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="">
      {isSubmit ? (
        <ThankYou />
      ) : (
        <div className="min-h-screen w-full flex flex-col lg:flex-row">
          {/* Left Side - Form */}
          <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-20 flex flex-col order-1">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#00150E]">
                  Request Demo
                </h2>
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-1">
              <div className="space-y-7">
                {/* Name & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label className="text-sm text-[#2C3857]" htmlFor="name">
                      Name
                    </Label>
                    <Input
                      className="h-10"
                      id="name"
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                    />
                  </div>

                  {/* Mobile */}
                  <div className="space-y-2">
                    <Label className="text-sm text-[#2C3857]" htmlFor="mobile">
                      Mobile no.
                    </Label>
                    <div className="flex w-full">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md h-10">
                        +91
                      </span>
                      <Input
                        className="h-10 rounded-l-none w-full"
                        id="mobile"
                        placeholder="Enter mobile number"
                        value={formData.mobile}
                        onChange={(e) =>
                          updateFormData("mobile", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Employees & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Employees */}
                  <div className="space-y-2">
                    <Label
                      className="text-sm text-[#2C3857]"
                      htmlFor="employees"
                    >
                      Employees
                    </Label>
                    <Select
                      value={formData.employees}
                      onValueChange={(value) =>
                        updateFormData("employees", value)
                      }
                    >
                      <SelectTrigger
                        id="employees"
                        className="h-10 min-h-10 px-4 pr-8 text-base w-full"
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="w-[var(--radix-select-trigger-width)]">
                        <SelectItem value="1-10">1-10</SelectItem>
                        <SelectItem value="11-50">11-50</SelectItem>
                        <SelectItem value="51-200">51-200</SelectItem>
                        <SelectItem value="201-500">201-500</SelectItem>
                        <SelectItem value="500+">500+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Work Email */}
                  <div className="space-y-2">
                    <Label
                      className="text-sm text-[#2C3857]"
                      htmlFor="workEmail"
                    >
                      Work Email <span className="text-slate-800">*</span>
                    </Label>
                    <Input
                      className="h-10"
                      id="workEmail"
                      type="email"
                      placeholder="Enter your work email"
                      value={formData.workEmail}
                      onChange={(e) =>
                        updateFormData("workEmail", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                {/* Industry */}
                <div className="space-y-2">
                  <Label className="text-sm text-[#2C3857]" htmlFor="industry">
                    Choose your industry
                  </Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) => updateFormData("industry", value)}
                  >
                    <SelectTrigger className="w-full h-10 px-4 pr-8 text-base">
                      <SelectValue placeholder="Select your company's industry" />
                    </SelectTrigger>
                    <SelectContent className="w-[var(--radix-select-trigger-width)]">
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="manufacturing">
                        Manufacturing
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Product */}
                <div className="space-y-2">
                  <Label className="text-sm text-[#2C3857]" htmlFor="product">
                    Which product are you interested in?
                  </Label>
                  <Select
                    value={formData.product}
                    onValueChange={(value) => updateFormData("product", value)}
                  >
                    <SelectTrigger className="w-full h-10 px-4 pr-8 text-base">
                      <SelectValue placeholder="Select product(s)" />
                    </SelectTrigger>
                    <SelectContent className="w-[var(--radix-select-trigger-width)]">
                      <SelectItem value="product1">Product 1</SelectItem>
                      <SelectItem value="product2">Product 2</SelectItem>
                      <SelectItem value="product3">Product 3</SelectItem>
                      <SelectItem value="product4">Product 4</SelectItem>
                      <SelectItem value="product5">Product 5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <Button
                onClick={handleSubmit}
                className="w-full h-11 bg-[#04110C] hover:bg-[#04110C]/80 transition-all duration-300 text-white py-3 rounded-md"
              >
                Submit
              </Button>
            </div>

            {/* Footer */}
            <div className="mt-8 hidden md:flex flex-col sm:flex-row justify-between items-center text-sm text-[#475467] gap-2">
              <span>© Raha Health 2025</span>
              <span>help@rahainsure.com</span>
            </div>
          </div>

          {/* Right Side - Image Slider */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#ECFDF7] to-[#CBEEE1] flex flex-col items-center justify-center order-2">
            <div className="relative z-50 flex flex-col items-center p-6">
              <Image
                src="/signup_big_banner.svg"
                alt="Sign Up Banner"
                width={400}
                height={250}
              />
              <Image
                src="/uploading.svg"
                className="absolute top-32 -left-12 hidden lg:block"
                alt="Uploading"
                width={210}
                height={185}
              />
              <Image
                className="absolute top-44 -right-20 hidden lg:block"
                src="/claims.svg"
                alt="Claims"
                width={210}
                height={145}
              />
            </div>

            <div className="text-center mt-8 max-w-md px-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#00150E] mb-4">
                Transparent. Simple. Stress-free.
              </h3>
              <p className="text-[#5C657D] text-xs leading-6 tracking-wide sm:text-sm font-medium mb-8">
                Stay updated on claims, wellness benefits, and coverage usage
                without the back-and-forth. One platform that keeps everything
                clear and accessible.
              </p>
            </div>

            <div className="mt-8 mb-8 md:hidden flex flex-col sm:flex-row justify-between items-center text-sm text-[#475467] gap-2">
              <span>© Raha Health 2025</span>
              <span>help@rahainsure.com</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

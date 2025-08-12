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
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import ThankYou from "@/components/sign-up/ThankYou";

export default function SignupForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    employees: "",
    workEmail: "",
    industry: "",
    // Step 2 fields - using generic names as shown in the image
    field1: "",
    field2: "",
    field3: "",
    field4: "",
    field5: "",
    field6: "",
    field7: "",
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Introducing AutoReports 2.0®",
      description:
        "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.",
      bgColor: "bg-blue-100",
    },
    {
      title: "Advanced Analytics Dashboard",
      description:
        "Get deep insights into user behavior and track key metrics that matter for your business growth.",
      bgColor: "bg-purple-100",
    },
    {
      title: "Real-time Reporting",
      description:
        "Monitor your business performance with live data updates and customizable report generation.",
      bgColor: "bg-green-100",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmit(true);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      {isSubmit ? (
        <ThankYou />
      ) : (
        <div className="h-screen w-full flex">
          {/* Left Side - Form */}
          <div className="w-1/2 p-20 flex flex-col">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-green-600 mb-8"></h1>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-4xl font-semibold text-[#00150E]">
                  Request Quotation
                </h2>
                <span className="text-xs text-gray-500">
                  <span className="text-[#192648] font-medium">
                    Step {currentStep}
                  </span>{" "}
                  of 2
                </span>
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-1">
              {currentStep === 1 ? (
                <div className="space-y-6">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        className="text-sm text-[#2C3857]"
                        htmlFor="firstName"
                      >
                        First Name
                      </Label>
                      <Input
                        className="h-10"
                        id="firstName"
                        placeholder="Enter First Name"
                        value={formData.firstName}
                        onChange={(e) =>
                          updateFormData("firstName", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        className="text-sm text-[#2C3857]"
                        htmlFor="lastName"
                      >
                        Last Name
                      </Label>
                      <Input
                        className="h-10"
                        id="lastName"
                        placeholder="Enter Last Name"
                        value={formData.lastName}
                        onChange={(e) =>
                          updateFormData("lastName", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  {/* Mobile & Employees */}
                  <div className="grid grid-cols-2 gap-4">
                    {" "}
                    <div className="space-y-2">
                      {" "}
                      <Label
                        className="text-sm text-[#2C3857]"
                        htmlFor="mobile"
                      >
                        Mobile no.
                      </Label>{" "}
                      <div className="flex w-full">
                        {" "}
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                          {" "}
                          +91{" "}
                        </span>{" "}
                        <Input
                          className="h-10 rounded-l-none w-full"
                          id="mobile"
                          placeholder="Enter mobile number"
                          value={formData.mobile}
                          onChange={(e) =>
                            updateFormData("mobile", e.target.value)
                          }
                        />{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="space-y-2">
                      {" "}
                      <Label
                        className="text-sm text-[#2C3857]"
                        htmlFor="employees"
                      >
                        Employees
                      </Label>{" "}
                      <Select
                        value={formData.employees}
                        onValueChange={(value) =>
                          updateFormData("employees", value)
                        }
                      >
                        {" "}
                        <SelectTrigger
                          id="employees"
                          className="h-10 min-h-10 px-4 pr-8 text-base w-full"
                        >
                          {" "}
                          <SelectValue placeholder="Select no. of employees" />{" "}
                        </SelectTrigger>{" "}
                        <SelectContent className="w-[var(--radix-select-trigger-width)]">
                          {" "}
                          <SelectItem value="1-10">1-10</SelectItem>{" "}
                          <SelectItem value="11-50">11-50</SelectItem>{" "}
                          <SelectItem value="51-200">51-200</SelectItem>{" "}
                          <SelectItem value="201-500">201-500</SelectItem>{" "}
                          <SelectItem value="500+">500+</SelectItem>{" "}
                        </SelectContent>{" "}
                      </Select>{" "}
                    </div>{" "}
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

                  {/* Industry */}
                  <div className="space-y-2">
                    {" "}
                    <Label
                      className="text-sm text-[#2C3857]"
                      htmlFor="industry"
                    >
                      {" "}
                      Choose your industry{" "}
                    </Label>{" "}
                    <Select
                      value={formData.industry}
                      onValueChange={(value) =>
                        updateFormData("industry", value)
                      }
                    >
                      {" "}
                      <SelectTrigger className="w-full h-10 min-h-10 px-4 pr-8 text-base">
                        {" "}
                        <SelectValue placeholder="Select your company's industry" />{" "}
                      </SelectTrigger>{" "}
                      <SelectContent className="w-[var(--radix-select-trigger-width)]">
                        {" "}
                        <SelectItem value="technology">
                          Technology
                        </SelectItem>{" "}
                        <SelectItem value="healthcare">Healthcare</SelectItem>{" "}
                        <SelectItem value="finance">Finance</SelectItem>{" "}
                        <SelectItem value="education">Education</SelectItem>{" "}
                        <SelectItem value="retail">Retail</SelectItem>{" "}
                        <SelectItem value="manufacturing">
                          Manufacturing
                        </SelectItem>{" "}
                        <SelectItem value="other">Other</SelectItem>{" "}
                      </SelectContent>{" "}
                    </Select>{" "}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Step 2 Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        className="text-sm text-[#2C3857]"
                        htmlFor="field1"
                      >
                        Untitled
                      </Label>
                      <Input
                        className="h-10"
                        id="field1"
                        placeholder="Enter Untitled"
                        value={formData.field1}
                        onChange={(e) =>
                          updateFormData("field1", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        className="text-sm text-[#2C3857]"
                        htmlFor="field2"
                      >
                        Untitled
                      </Label>
                      <Input
                        className="h-10"
                        id="field2"
                        placeholder="Enter Untitled"
                        value={formData.field2}
                        onChange={(e) =>
                          updateFormData("field2", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        className="text-sm text-[#2C3857]"
                        htmlFor="field3"
                      >
                        Untitled
                      </Label>
                      <Input
                        className="h-10"
                        id="field3"
                        placeholder="Enter Untitled"
                        value={formData.field3}
                        onChange={(e) =>
                          updateFormData("field3", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        className="text-sm text-[#2C3857]"
                        htmlFor="field4"
                      >
                        Untitled
                      </Label>
                      <Input
                        className="h-10"
                        id="field4"
                        placeholder="Enter Untitled"
                        value={formData.field4}
                        onChange={(e) =>
                          updateFormData("field4", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        className="text-sm text-[#2C3857]"
                        htmlFor="field5"
                      >
                        Untitled
                      </Label>
                      <Input
                        className="h-10"
                        id="field5"
                        placeholder="Enter Untitled"
                        value={formData.field5}
                        onChange={(e) =>
                          updateFormData("field5", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        className="text-sm text-[#2C3857]"
                        htmlFor="field6"
                      >
                        Untitled
                      </Label>
                      <Input
                        className="h-10"
                        id="field6"
                        placeholder="Enter Untitled"
                        value={formData.field6}
                        onChange={(e) =>
                          updateFormData("field6", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm text-[#2C3857]" htmlFor="field7">
                      Untitled
                    </Label>
                    <Input
                      className="h-10"
                      id="field7"
                      placeholder="Enter Untitled"
                      value={formData.field7}
                      onChange={(e) => updateFormData("field7", e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <Button
                onClick={currentStep === 1 ? handleNext : handleSubmit}
                className="w-full h-11 bg-[#04110C] hover:bg-[#04110C]/80 transition-all duration-300 text-white py-3 rounded-md"
              >
                {currentStep === 1 ? "Next" : "Submit"}
              </Button>
            </div>

            {/* Footer */}
            <div className="mt-8 flex justify-between items-center text-sm text-[#475467]">
              <span>© Raha Health 2025</span>
              <span>help@rahainsure.com</span>
            </div>
          </div>

          {/* Right Side - Functional Image Slider */}
          <div className="w-1/2 bg-gradient-to-br from-[#ECFDF7] to-[#CBEEE1] flex flex-col items-center justify-center">
            <div className="relative z-50">
              <Image
                src="/signup_big_banner.svg"
                alt="Sign Up Banner"
                width={400}
                height={250}
                objectFit="cover"
              />
              <Image
                src="/uploading.svg"
                className="absolute top-32 -left-12"
                alt="Uploading"
                width={210}
                height={185}
                objectFit="cover"
              />
              <Image
                className="absolute top-44 -right-20"
                src="/claims.svg"
                alt="Claims"
                width={210}
                height={145}
                objectFit="cover"
              />
            </div>

            <div className="text-center mt-16 max-w-md">
              <h3 className="text-2xl font-semibold text-[#00150E] mb-4 transition-all duration-300">
                {slides[currentSlide].title}
              </h3>
              <p className="text-[#5C657D] text-xs font-medium mb-8 transition-all duration-300">
                {slides[currentSlide].description}
              </p>

              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-[#ade3cf] transition-all duration-300"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <div
                      key={index}
                      className={`w-8 h-1 rounded cursor-pointer transition-all duration-300 ${
                        index === currentSlide ? "bg-gray-900" : "bg-gray-300"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    ></div>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-[#ade3cf] transition-all duration-300"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

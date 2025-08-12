"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
    agreeToPrivacy: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      agreeToPrivacy: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen md:bg-[#FAFAFB] py-20 px-4">
      <div className="md:max-w-xl md:mx-auto">
        <div className="bg-white md:border rounded-2xl md:shadow-lg md:p-8 relative">
          {/* Header */}
          <div className="md:text-center mb-6 md:mb-12">
            <h1 className="text-[22px] md:text-4xl font-normal text-[#00150E] mb-4">
              Get in <span className="font-bold">touch</span>
            </h1>
            <p className="text-[#747C90]">
              We&apos;d love to hear from you. Please fill out this form.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  htmlFor="firstName"
                  className="text-sm font-medium text-[#2C3857]"
                >
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="h-10"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="lastName"
                  className="text-sm font-medium text-[#2C3857]"
                >
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="h-10"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-[#2C3857]"
              >
                Email Id <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email Id"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-10"
              />
            </div>

            {/* Mobile Number */}
            <div className="space-y-2">
              <Label
                htmlFor="mobile"
                className="text-sm font-medium text-[#2C3857]"
              >
                Mobile no.
              </Label>
              <div className="flex">
                <div className="flex items-center px-3 bg-gray-50 border border-r-0 rounded-l-md">
                  <span className="text-gray-600 text-sm">+91</span>
                </div>
                <Input
                  id="mobile"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="h-10 rounded-l-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label
                htmlFor="message"
                className="text-sm font-medium text-[#2C3857]"
              >
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type here"
                value={formData.message}
                onChange={handleInputChange}
                className="min-h-[100px] resize-none"
              />
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="flex items-center space-x-3">
              <Checkbox
                id="privacy"
                checked={formData.agreeToPrivacy}
                onCheckedChange={handleCheckboxChange}
              />
              <Label
                htmlFor="privacy"
                className="text-xs font-normal text-[#747C90] cursor-pointer"
              >
                You agree to our friendly privacy policy.
              </Label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-11 bg-[#17AD7F] hover:bg-[#17AD7F]/80 transition-all duration-300 text-white font-normal text-lg rounded-md"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

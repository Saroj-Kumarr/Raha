"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "How quickly can we onboard our team onto Raha?",
    answer:
      "Our onboarding process typically takes 2-3 weeks from contract signing to full deployment, depending on your team size and integration requirements.",
  },
  {
    question: "Can Raha integrate with our existing HRMS or payroll system?",
    answer:
      "Yes, Raha seamlessly integrates with most major HRMS and payroll systems including BambooHR, Workday, ADP, and many others through our API connections.",
  },
  {
    question: "What kind of claims visibility will we get as HR?",
    answer:
      "You'll have complete visibility into all claims through our HR dashboard, including claim status, processing times, and detailed analytics to help you manage your team's benefits effectively.",
  },
  {
    question: "Who handles employee claim support—our HR team or Raha?",
    answer:
      "Raha handles all employee claim support directly. Our dedicated support team works with your employees throughout the entire claims process, reducing the burden on your HR team.",
  },
  {
    question: "Can we manage endorsements and exits from the platform too?",
    answer:
      "Our platform allows you to manage employee additions, removals, and policy endorsements in real-time, giving you complete control over your insurance coverage.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-8 md:py-20 bg-white px-5 md:px-20 lg:px-24">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 md:gap-16 items-start">
          {/* Left side - Heading and description */}
          <div className="lg:pr-8">
            <h2 className="text-4xl hidden md:block text-[#00150E] mb-2">
              Still Have{" "}
              <span className="text-medium  hidden md:inline-block text-4xl text-[#03704F] mb-4">
                Questions?
              </span>
            </h2>

            <h2 className="text-[22px] md:hidden text-[#00150E] mb-2">
              Still Have{" "}
              <span className="text-[#03704F] font-medium">Questions?</span>
            </h2>
            <p className="md:text-xl text-[#747C90] leading-relaxed max-w-sm">
              We&apos;ve got answers. Here&apos;s what HR teams typically ask
              before getting started with Raha&apos;s insurance platform.
            </p>
          </div>

          {/* Right side - FAQ items */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`${
                  index !== faqData.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 md:px-6 py-4  md:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className=" font-medium text-[#192648] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 border p-[1px] rounded-md text-gray-500 transition-transform flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 text-sm pb-5 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

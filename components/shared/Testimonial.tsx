"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  logoSrc: string;
  customerName: string;
  customerTitle: string;
  customerImageSrc: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    rating: 5,
    quote:
      "Love the simplicity of the service and the prompt customer support. We can't imagine working without it.",
    logoSrc:
      "https://media.istockphoto.com/id/1311957094/photo/handsome-smiling-young-man-with-crossed-arms-portrait.jpg?s=612x612&w=0&k=20&c=zALF0xV8gL-W9IooXcbEE95aejQhYYkBslwjPMqlUxA=",
    customerName: "Bobby Armstrong",
    customerTitle: "Marketing Manager at Acme Company",
    customerImageSrc:
      "https://media.istockphoto.com/id/1311957094/photo/handsome-smiling-young-man-with-crossed-arms-portrait.jpg?s=612x612&w=0&k=20&c=zALF0xV8gL-W9IooXcbEE95aejQhYYkBslwjPMqlUxA=",
  },
  {
    id: "2",
    rating: 5,
    quote:
      "The platform has revolutionized our workflow. The intuitive design and robust features are exactly what we needed.",
    logoSrc:
      "https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg",
    customerName: "Sarah Chen",
    customerTitle: "Operations Lead at Tech Solutions",
    customerImageSrc:
      "https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg",
  },
  {
    id: "3",
    rating: 4,
    quote:
      "Excellent product with great potential. Customer service is responsive and helpful. Highly recommend!",
    logoSrc:
      "https://media.istockphoto.com/id/1311957094/photo/handsome-smiling-young-man-with-crossed-arms-portrait.jpg?s=612x612&w=0&k=20&c=zALF0xV8gL-W9IooXcbEE95aejQhYYkBslwjPMqlUxA=",
    customerName: "David Lee",
    customerTitle: "Product Manager at Innovate Corp",
    customerImageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
];

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="px-4 md:px-20 lg:px-24 py-8 sm:py-12 lg:py-16 bg-white">
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
          What our customers talk about us!
        </h2>
        <p className="text-[#747C90] pt-4">
          Real stories from people who&apos;ve experienced the Raha difference
        </p>

        <div className="relative flex justify-center items-center mt-8 sm:mt-12 lg:mt-20">
          {/* Previous Testimonial Image (Left) - Desktop Only */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[100px] h-full rounded-xl overflow-hidden z-10 hidden lg:block">
            <img
              src={currentTestimonial.customerImageSrc || "/placeholder.svg"}
              alt={currentTestimonial.customerName}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button
                onClick={handlePrev}
                className="p-2 lg:p-3 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
            </div>
          </div>

          {/* Main Testimonial Card */}
          <div className="relative bg-[#F5F6F7] rounded-t-xl rounded-x-2xl max-w-[1024px] w-full z-20 flex flex-col lg:flex-row overflow-hidden">
            {/* Mobile Content - Reordered to match reference */}
            <div className="lg:hidden">
              {/* Stars, Quote, Logo, Name/Title */}
              <div className="p-6">
                <div className="flex justify-start mb-4">
                  {Array.from({ length: currentTestimonial.rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>
                <p className="text-lg font-medium text-[#101828] mb-6 leading-relaxed">
                  {currentTestimonial.quote}
                </p>
                <div className="flex justify-start mb-4">
                  <img
                    src={currentTestimonial.logoSrc || "/placeholder.svg"}
                    alt="Company Logo"
                    className="w-20 h-10 object-contain"
                  />
                </div>
                <p className="font-medium text-base text-[#101828]">
                  {currentTestimonial.customerName}
                </p>
                <p className="text-gray-600 text-sm">
                  {currentTestimonial.customerTitle}
                </p>
              </div>

              {/* Customer Image with Navigation Buttons */}
              <div className="relative">
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={
                      currentTestimonial.customerImageSrc || "/placeholder.svg"
                    }
                    alt={currentTestimonial.customerName}
                    className="w-full h-64 object-cover transition-opacity duration-500"
                  />
                </div>

                <div className="flex gap-4">
                  {/* Smaller images stack */}
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="relative overflow-hidden">
                      <img
                        src={
                          currentTestimonial.customerImageSrc ||
                          "/placeholder.svg"
                        }
                        alt={currentTestimonial.customerName}
                        className="w-full h-20 object-cover transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={handlePrev}
                          className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors shadow-lg"
                          aria-label="Previous testimonial"
                        >
                          <ChevronLeft className="w-5 h-5 text-white drop-shadow-lg" />
                        </button>
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <img
                        src={
                          currentTestimonial.customerImageSrc ||
                          "/placeholder.svg"
                        }
                        alt={currentTestimonial.customerName}
                        className="w-full h-20 object-cover transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={handleNext}
                          className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors shadow-lg"
                          aria-label="Next testimonial"
                        >
                          <ChevronRight className="w-5 h-5 text-white drop-shadow-lg" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Content - Unchanged */}
            <div className="hidden lg:flex flex-1 p-8 text-left flex-col justify-between">
              <div>
                <div className="flex justify-start mb-4">
                  {Array.from({ length: currentTestimonial.rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>
                <p className="text-2xl font-medium text-[#101828] mb-6 leading-relaxed">
                  &quot;{currentTestimonial.quote}&quot;
                </p>
                <div className="flex justify-start mb-6">
                  <img
                    src={currentTestimonial.logoSrc || "/placeholder.svg"}
                    alt="Company Logo"
                    className="w-24 h-12 object-contain"
                  />
                </div>
                <p className="font-medium text-lg text-[#101828]">
                  {currentTestimonial.customerName}
                </p>
                <p className="text-gray-600 text-base">
                  {currentTestimonial.customerTitle}
                </p>

                {/* Desktop Indicators */}
                <div className="flex gap-2 items-center mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={cn(
                        "w-8 h-1 rounded-sm transition-all duration-300",
                        currentIndex === index
                          ? "bg-[#1A1A1A]"
                          : "bg-gray-300 border-b-2 border-dashed border-gray-300"
                      )}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Customer Image - Desktop (Right) */}
            <div className="relative w-full lg:w-64 min-h-[200px] lg:min-h-0 lg:h-auto rounded-lg overflow-hidden hidden lg:block">
              <img
                src={currentTestimonial.customerImageSrc || "/placeholder.svg"}
                alt={currentTestimonial.customerName}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Next Testimonial Image (Right) - Desktop Only */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[100px] h-full rounded-xl overflow-hidden z-10 hidden lg:block">
            <img
              src={currentTestimonial.customerImageSrc || "/placeholder.svg"}
              alt={currentTestimonial.customerName}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button
                onClick={handleNext}
                className="p-2 lg:p-3 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

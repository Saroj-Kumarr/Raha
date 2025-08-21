import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface Service {
  icon: string;
  title: string;
  items: {
    name: string;
    description: string;
  }[];
}

interface ServiceCardProps {
  service: Service;
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 h-full">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={service.icon || "/placeholder.svg"}
          alt={service.title}
          className="w-10 h-10"
        />
        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
      </div>

      <div className="space-y-5">
        {service.items.map((item, index) => (
          <div key={index} className="border-l-2 border-[#17AD7F] pl-4">
            <h4 className="font-medium text-gray-900 mb-1">{item.name}</h4>
            <p className="text-sm text-[#747C90] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      icon: "/image_1.svg",
      title: "Physical Well-being",
      items: [
        {
          name: "Wellness Workshops",
          description:
            "Lifestyle guidance from experts to inspire healthier habits.",
        },
        {
          name: "Preventive Healthcare",
          description:
            "Early detection checkups & fitness routines to stay ahead of risks.",
        },
        {
          name: "Fitness Programs",
          description:
            "Strength & cardio programs that boost physical and mental strength.",
        },
      ],
    },
    {
      icon: "/image_2.svg",
      title: "Mental & Emotional Well-being",
      items: [
        {
          name: "Counselling & Therapy",
          description: "Professional support to manage stress and anxieties.",
        },
        {
          name: "Mindfulness & Meditation",
          description: "Techniques for focus, calm, and resilience.",
        },
        {
          name: "Emotional Wellness Activities",
          description: "Programs that nurture positivity and balance.",
        },
      ],
    },
    {
      icon: "/image_3.svg",
      title: "Chronic Care Management",
      items: [
        {
          name: "Tailored programs",
          description:
            "Tailored programs for Diabetes, Heart Health, PCOD/PCOS, and Weight Management.",
        },
        {
          name: "Additional Support",
          description:
            "Includes monitoring, scans, consultations, and ongoing support.",
        },
      ],
    },
    {
      icon: "/image_4.svg",
      title: "Emergency & At-Home Care",
      items: [
        {
          name: "Ambulance & Concierge Services",
          description: "Quick response during emergencies.",
        },
        {
          name: "Home & Palliative Care",
          description: "Compassionate support for patients and families.",
        },
      ],
    },
    {
      icon: "/image_5.svg",
      title: "Everyday Health Assistance",
      items: [
        {
          name: "Health Concierge",
          description: "End-to-end claim & admin support.",
        },
        {
          name: "Telehealth Consultations",
          description:
            "Doctors, nutritionists, and therapists available on demand.",
        },
        {
          name: "Health Monitoring Apps",
          description: "Easy-to-use tools for real-time tracking and alerts.",
        },
      ],
    },
    {
      icon: "/image_6.svg",
      title: "Specialized Care Programs",
      items: [
        {
          name: "Nutrition Guidance",
          description:
            "Customized diets for weight, heart health, diabetes, PCOS.",
        },
        {
          name: "Women's Wellness",
          description: "Maternal care and pelvic health programs.",
        },
        {
          name: "Elderly & Physiotherapy Care",
          description: "Support for seniors and musculoskeletal recovery.",
        },
      ],
    },
  ];

  return (
    <section className="px-4 md:px-20 lg:px-24 pt-32 pb-20">
      <div className="text-left mb-14">
        <p className="text-xs tracking-[8px] font-medium text-[#B2B7C2] uppercase mb-5">
          Offerings
        </p>
        <h2 className="text-2xl md:text-4xl font-medium text-gray-900 mb-5">
          Health & Wellness Services
        </h2>
        <p className="text-[#747C90] max-w-5xl">
          Gift your employees the priceless benefit of health and well-being.
          Raha partners with leading wellness providers to deliver customizable
          programs—designed around your organization&apos;s goals
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-16">
        <Button className="bg-[#17AD7F] hover:bg-[#17AD7F]/80 text-white w-72 py-6 text-sm font-medium rounded-lg flex items-center gap-2 ">
          Book a Demo
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}

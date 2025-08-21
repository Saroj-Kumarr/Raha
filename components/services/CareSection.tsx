import Image from "next/image";

interface CareCardProps {
  icon: string;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

function CareCard({
  icon,
  title,
  description,
  gradientFrom,
  gradientTo,
}: CareCardProps) {
  return (
    <div className={`relative rounded-2xl overflow-hidden cs`}>
      <div
        className={`h-32 ${gradientFrom} ${gradientTo} bg-gradient-to-b relative flex items-center justify-start pl-6`}
      >
        {" "}
        <img
          src={icon || "/placeholder.svg"}
          alt={title}
          className="w-[90px] h-[90px]"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>

        <p className="text-[#747C90] text-sm leading-relaxed mb-6">
          {description}
        </p>

        <button className="text-[#2561ED] font-medium flex items-center gap-1 hover:text-blue-600 transition-colors">
          <Image
            src="/reply.svg"
            alt="Schedule a Demo"
            width={18}
            height={18}
          />
          Schedule a Demo
        </button>
      </div>
    </div>
  );
}

export default function CareSection() {
  const careCards = [
    {
      icon: "/doctor.svg",
      title: "Health Insurance",
      description:
        "Step into the world of bespoke insurance solutions, meticulously designed to provide unparalleled protection and financial assurance for your manpower.",
      gradientFrom: "from-[#1CAB7F]/80",
      gradientTo: "to-white",
    },
    {
      icon: "/health_check.svg",
      title: "OPD Benefits",
      description:
        "Allow your employees to discover the rewards of inner well-being and holistic healing with health strategies designed to nurture, restore and rejuvenate the mind, body and soul.",
      gradientFrom: "from-[#59A8E7]/80",
      gradientTo: "to-white",
    },
    {
      icon: "/heart.svg",
      title: "Wellness",
      description:
        "Provide your team access to experience exceptional outpatient services and through a fusion of advanced medical expertise and state-of-the-art facilities.",
      gradientFrom: "from-[#BC7CC6]/80",
      gradientTo: "to-white",
    },
  ];

  return (
    <section className="px-4 pt-20 md:pt-0 md:px-20 lg:px-24">
      <div className="text-left mb-14">
        <p className="text-xs tracking-[8px] font-medium text-[#B2B7C2] uppercase mb-5">
          PRODUCT
        </p>
        <h2 className="text-2xl md:text-4xl font-medium text-gray-900 mb-5">
          Complete Care for Your Workforce
        </h2>
        <p className="text-[#747C90]">
          Insurance, OPD, and Wellness programs designed to protect, support,
          and empower your employees—all on one platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {careCards.map((card, index) => (
          <CareCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            gradientFrom={card.gradientFrom}
            gradientTo={card.gradientTo}
          />
        ))}
      </div>
    </section>
  );
}

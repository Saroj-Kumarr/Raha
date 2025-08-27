import React from "react";

const GetStarted = () => {
  return (
    <div className="px-4 md:px-20 lg:px-24 pt-20 pb-16">
      <h1 className="text-2xl md:text-4xl font-medium">
        Get started in 3 simple steps
      </h1>

      {/* Steps Data */}
      {(() => {
        const steps = [
          {
            id: 1,
            image: "/onboard.svg",
            alt: "Onboarding illustration",
            title: "Onboard your team",
            description: "Upload details securely",
          },
          {
            id: 2,
            image: "/insure.svg",
            alt: "Insurance illustration",
            title: "Insure effortlessly",
            description: "Choose plans and plug-ins",
          },
          {
            id: 3,
            image: "/manage.svg",
            alt: "Management illustration",
            title: "Manage everything",
            description: "Via your live dashboard",
          },
        ];

        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-20">
            {steps.map((step) => (
              <div
                key={step.id}
                className="rounded-2xl border border-gray-200 w-full h-[385px] relative overflow-hidden bg-white shadow-sm"
              >
                {/* Image Container - Full Width */}
                <div className="relative h-[248px] px-4 pt-6 w-full overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="pt-5 px-4">
                  <h3 className="text-[#03704F] text-3xl font-bold">
                    {step.id}
                  </h3>
                  <p className="text-[#00150E] font-medium mt-2 text-lg">
                    {step.title}
                  </p>
                  <p className="text-[#525C76] text-sm mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        );
      })()}
    </div>
  );
};

export default GetStarted;

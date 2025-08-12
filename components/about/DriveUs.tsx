import Image from "next/image";
import React from "react";

const DriveUs = () => {
  return (
    <div className="px-5 md:px-0 py-8 md:py-20 bg-transparent">
      <div>
        <h1 className="text-[22px] md:text-4xl md:text-center mb-6 md:mb-16">
          The <span className="font-medium">Values</span> That{" "}
          <span className="font-medium">Drive</span> Us
        </h1>
      </div>

      {/* First div - Customer's Vision */}
      <div className="flex flex-col md:flex-row ">
        <div className="hidden md:block flex-1 bg-[#08392A] rounded-r-2xl px-8 py-20">
          <div className="relative w-full h-[280px]">
            <Image
              src="/feature_left.svg"
              alt="Dashboard Interface"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        <div className="md:hidden relative w-full h-[280px]">
          <Image
            src="/mobile_second.svg"
            alt="Dashboard Interface"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <div className="flex-1 md:p-8 md:flex md:items-center md:justify-center md:flex-col">
          <h1 className="text-[22px] md:text-4xl text-left">
            The Customer&apos;s{" "}
            <span className="text-[#B76F06] font-medium">Vision</span>
          </h1>
          <p className="text-[#747C90] mt-6 max-w-md leading-6">
            Raha was conceptualized to empower organizations to provide the best
            health and insurance benefits for their employees, prioritizing the
            well-being and aspirations of their workforce. Our journey began
            with the understanding that insurance should empower and connect
            businesses to their wellness goals while ensuring financial peace of
            mind. Raha seeks to redefine the insurance experience for
            organizations, making it a proactive partner in their growth and
            success rather than just a fallback option. We are completely
            focused on building a future where security and ambition can coexist
            harmoniously for businesses.
          </p>
        </div>
      </div>

      {/* Second div - Raha's Commitment */}
      <div className="flex mt-8 md:mt-0 flex-col md:flex-row">
        <div className="md:hidden relative w-full h-[280px]">
          <Image
            src="/mobile_second.svg"
            alt="Dashboard Interface"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <div className="flex-1 md:p-8 md:flex md:items-center md:justify-center md:flex-col">
          <h1 className="text-[22px] md:text-4xl text-left">
            Raha&apos;s{" "}
            <span className="text-[#03704F] font-medium">Commitment</span>
          </h1>
          <p className="text-[#747C90] mt-6 max-w-md leading-6">
            Our commitment transcends the limitations of conventional insurance
            providers. We are more than just a company; we are your most trusted
            advisors for insurance and wellness. <br /> <br /> Every program we
            create is infused with our promise to deliver not just health
            coverage, but genuine peace of mind. We design personalized
            insurance and wellness solutions that align seamlessly with your
            organization`s unique needs and aspirations.
          </p>
        </div>

        <div className="hidden md:block flex-1 bg-[#08392A] rounded-l-2xl px-8 py-20">
          <div className="relative w-full h-[280px]">
            <Image
              src="/feature_left.svg"
              alt="Dashboard Interface"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Third div - Wellness Beyond Protection */}
      <div className="flex mt-8 md:mt-0 flex-col md:flex-row">
        <div className="hidden md:block flex-1 bg-[#08392A] rounded-r-2xl px-8 py-20">
          <div className="relative w-full h-[280px]">
            <Image
              src="/feature_left.svg"
              alt="Dashboard Interface"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        <div className="md:hidden relative w-full h-[280px]">
          <Image
            src="/mobile_second.svg"
            alt="Dashboard Interface"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <div className="flex-1 md:p-8 md:flex md:items-center md:justify-center md:flex-col">
          <h1 className="text-[22px] md:text-4xl text-left">
            <span className="text-[#B76F06] font-medium">Wellness </span> Beyond
            Protection
          </h1>
          <p className="text-[#747C90] mt-6 max-w-md leading-6">
            At Raha, we believe in assisting organizations to provide the best
            insurance and wellness facilities to their employees. <br /> <br />
            Our wellness programs focus on the idea that a joyful life is vital
            for a secure future. From fitness initiatives to mental health
            support, we stand by you, empowering you to provide a lifestyle that
            protects and elevates the well-being of your employees.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DriveUs;

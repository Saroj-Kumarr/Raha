import Image from "next/image";

export default function HealthStats() {
  return (
    <section className="px-5 md:px-20 lg:px-24">
      <div className="">
        <div className="text-left mb-14">
          <p className="text-xs tracking-[8px] font-medium text-[#B2B7C2] uppercase mb-5">
            IMPACT
          </p>
          <h2 className="text-2xl md:text-4xl max-w-2xl md:leading-12 font-medium text-gray-900 mb-5">
            Beyond the platform, we&apos;ve made a real difference
          </h2>
          <p className="text-[#747C90] max-w-5xl">
            We&apos;re enabling healthier, happier workforces—one organization
            at a time.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg h-[320px] md:h-[400px]">
            <Image
              src="/first.svg"
              alt="Group of smiling professionals"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-3xl font-medium">40 Lakhs +</h3>
              <p className="text-lg">Lives covered</p>
            </div>
          </div>

          {/* Column 2 — Two cards horizontally on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-6">
            {/* Card 2 Top */}
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[160px] md:h-[192px]">
              <Image
                src="/second.svg"
                alt="People working on a laptop"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3 md:p-6 text-white">
                <h3 className="text-3xl font-medium">95%</h3>
                <p className="text-lg">Clients retention</p>
              </div>
            </div>

            {/* Card 2 Bottom */}
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[160px] md:h-[192px]">
              <Image
                src="/third.svg"
                alt="Man looking at his phone"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3 md:p-6 text-white">
                <h3 className="text-3xl font-medium">4 Lakhs +</h3>
                <p className="text-lg">Claims settled</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg h-[320px] md:h-[400px]">
            <Image
              src="/fourth.svg"
              alt="Group of friends outdoors"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-3xl font-medium">₹ 50 Crore</h3>
              <p className="text-lg">Worth claims settled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

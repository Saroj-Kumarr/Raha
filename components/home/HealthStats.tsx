import Image from "next/image";

export default function HealthStats() {
  return (
    <section className="max-w-7xl mx-auto py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-[22px] md:text-4xl font-normal md:text-center mb-8 md:mb-12">
          Caring for health. Changing{" "}
          <span className="text-[#03704F]">lives.</span>
        </h2>

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

import { Shield } from "lucide-react";
import Image from "next/image";

export default function RahaStats() {
  return (
    <div className="bg-[#FAFAFB] md:min-h-screen px-4 relative bottom-40 -z-10 py-16 flex flex-col justify-center items-center">
      {/* ==== Full Width Header with Decorative Lines ==== */}
      <div className="w-full mb-16 mt-20">
        <div className="flex items-center gap-2 sm:gap-4 w-full">
          {/* Decorative line left */}
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#03704F]"></div>

          {/* Center text */}
          <div className="flex-shrink-0 text-center px-2 sm:px-0">
            <p className="text-sm sm:text-lg text-center">
              <span className="text-[#014832] font-semibold">Raha</span> is
              trusted by{" "}
              <span className="text-[#B76F06] font-medium">
                fast-
                <br className="md:hidden" />
                growing
              </span>{" "}
              teams across India
            </p>
          </div>

          {/* Decorative line right */}
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#03704F]"></div>
        </div>
      </div>

      {/* ==== Stats Grid (Centered with Max Width) ==== */}
      <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        {/* Clients */}
        <StatCard value="800K+" label="Clients" />

        {/* Companies */}
        <StatCard value="1200+" label="Companies" />

        {/* Claims Passed */}
        <StatCard value="70k+" label="Claims Passed" />

        {/* App Rating */}
        <StatCard value="4.5/5" label="App Rating" />
      </div>
    </div>
  );
}

type StatCardProps = {
  value: string;
  label: string;
};

/* ====== Reusable Stat Card Component ====== */
function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-left sm:text-center w-full sm:w-56 bg-white rounded-xl border border-gray-200 py-3 sm:py-5 px-3 sm:px-4">
      <Image
        src="/handshake.svg"
        alt="Handshake Icon"
        width={60}
        height={60}
        className="mb-2 sm:mb-4 sm:mx-auto"
      />
      <div className="text-2xl sm:text-3xl font-medium text-gray-900 mb-1 sm:mb-2">
        {value}
      </div>
      <div className="text-gray-500 text-xs sm:text-sm">{label}</div>
    </div>
  );
}

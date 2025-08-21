import Image from "next/image";

interface StatsCardProps {
  stat: {
    id: number;
    icon: string;
    value: string;
    label: string;
    hasStarIcon?: boolean;
  };
}

export default function StatsCard({ stat }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg w-80 md:w-60 border border-gray-200 px-6 py-5 flex items-center gap-4 shadow-sm">
      <div className="flex-shrink-0">
        <Image
          src={stat.icon || "/placeholder.svg"}
          alt={`${stat.label} icon`}
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1">
          <span className="text-2xl font-medium text-gray-900">
            {stat.value}
          </span>
          {stat.hasStarIcon && (
            <span className="text-yellow-400 text-xl">⭐</span>
          )}
        </div>
        <p className="text-gray-600 text-sm">{stat.label}</p>
      </div>
    </div>
  );
}

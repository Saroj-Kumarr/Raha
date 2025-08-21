import { MapPin, Clock, ArrowUpRight } from "lucide-react";

interface JobCardProps {
  job: {
    id: number;
    department: string;
    title: string;
    description: string;
    location: string;
    type: string;
    departmentTag: string;
    tagColor: string;
  };
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 transition-shadow duration-200">
      {/* Header with department and view job link */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-blue-600 text-sm font-medium mb-2">
            {job.department}
          </p>
          <div className="flex items-center gap-3">
            <h3 className="md:text-xl font-semibold text-gray-900">
              {job.title}
            </h3>
            <span
              className={`inline-flex items-center px-2 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-medium ${job.tagColor}`}
            >
              {job.departmentTag}
            </span>
          </div>
        </div>
        <a
          href="#"
          className="text-[#17AD7F] flex items-center gap-1 text-sm font-medium"
        >
          View job
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>

      {/* Location and Type */}
      <div className="flex items-center gap-4 text-gray-500 text-sm">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{job.type}</span>
        </div>
      </div>
    </div>
  );
}

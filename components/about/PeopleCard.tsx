import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface PeopleCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  twitterIconUrl: string;
  linkedinIconUrl: string;
  mediaIconUrl: string;
}

const PeopleCard: React.FC<PeopleCardProps> = ({
  name,
  title,
  description,
  imageUrl,
  twitterIconUrl,
  linkedinIconUrl,
  mediaIconUrl,
}) => {
  return (
    <div className="w-[280px] h-[348px] relative rounded-3xl overflow-hidden">
      <Image
        src={imageUrl}
        alt={`Meet ${name}`}
        layout="fill"
        objectFit="cover"
      />
      <div className="flex items-center justify-center">
        <div className="glass-card px-3 pb-3 pt-1 w-full md:w-[230px] h-[180px] absolute bottom-0 md:bottom-10">
          <div className="flex items-center justify-between mb-2">
            <h2 className="relative text-lg top-1">{name}</h2>
            <ArrowUpRight size={16} />
          </div>
          <p className="font-medium">{title}</p>
          <p className="text-xs mt-1">{description}</p>
          <div className="flex items-center mt-6 gap-2">
            <Image src={twitterIconUrl} alt="Twitter" width={18} height={18} />
            <Image
              src={linkedinIconUrl}
              alt="LinkedIn"
              width={18}
              height={18}
            />
            <Image src={mediaIconUrl} alt="Media" width={18} height={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;

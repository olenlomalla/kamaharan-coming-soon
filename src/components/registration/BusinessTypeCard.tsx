import React from "react";

interface BusinessTypeCardProps {
  title: string;
  isSelected?: boolean;
  onClick: (type: string) => void;
  className?: string;
}

const BusinessTypeCard: React.FC<BusinessTypeCardProps> = ({
  title,
  isSelected = false,
  onClick,
  className,
}) => {
  return (
    <button
      className={`h-[80px] min-h-[56px] w-full rounded-[3px] border px-3 transition-all ${
        isSelected
          ? "border-[#8B9B8B] bg-white shadow-md"
          : "border-[#8B9B8B] bg-white hover:border-[#E74C3C] hover:shadow-sm"
      } ${className}`}
      onClick={() => onClick(title)}
    >
      <span className="text-[18px] font-normal text-[#33475B]">{title}</span>
    </button>
  );
};

export default BusinessTypeCard;

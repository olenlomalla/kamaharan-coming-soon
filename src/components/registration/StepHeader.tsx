import React from "react";

interface StepHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const StepHeader: React.FC<StepHeaderProps> = ({
  title,
  description,
  centered = true,
  className,
}) => {
  return (
    <div
      className={`flex w-full flex-col ${centered ? "items-center text-center" : ""} gap-3 ${className}`}
    >
      <h1 className="font-heading text-[32px] font-semibold leading-[36px] tracking-[1px] text-[#363537]">
        {title}
      </h1>
      {description && (
        <p className="font-body text-[16px] leading-[18px] tracking-[0.75px] text-[#424144]">
          {description}
        </p>
      )}
    </div>
  );
};

export default StepHeader;

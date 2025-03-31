import React from "react";

interface SelectCustomProps {
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  title?: string;
  className?: string;
  position?: "left" | "right";
}

const SelectCustom: React.FC<SelectCustomProps> = ({
  options,
  selectedValue,
  onChange,
  title,
  className,
  position = "right",
}) => {
  return (
    <div
      className={`flex w-full flex-row items-center ${position === "right" ? "justify-between" : "flex-row-reverse justify-between"} gap-6`}
    >
      {title && (
        <label className="font-body text-[16px] font-normal leading-[18px] tracking-[0.75px] text-[#363537]">
          {title}
        </label>
      )}
      <div
        className={`relative h-[58px] ${position === "right" ? "w-[228px]" : "w-[448px]"} ${className}`}
      >
        <select
          value={selectedValue}
          onChange={(e) => onChange(e.target.value)}
          className={`block h-full w-full appearance-none rounded-[16px] bg-[#EFEFEF] px-4 pr-8 font-body text-[16px] leading-tight text-[#363537] focus:border-[#FF5D3A] focus:outline-none focus:ring-1 focus:ring-[#FF5D3A] ${className}`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute bottom-0 right-1 top-1 flex items-center px-4">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.75928 4.24023L6.24086 7.72182L9.72245 4.24023"
              stroke="#14142B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectCustom;

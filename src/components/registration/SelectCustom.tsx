import React from "react";

interface SelectCustomProps {
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
  title?: string;
  className?: string;
}

const SelectCustom: React.FC<SelectCustomProps> = ({
  options,
  selectedValue,
  onChange,
  title,
  className,
}) => {
  return (
    <div className="flex w-full flex-row items-center justify-between gap-6">
      <label className="font-body text-[16px] font-normal leading-[18px] tracking-[0.75px]">
        {title}
      </label>
      <div className={`relative h-[58px] w-[228px] ${className}`}>
        <select
          value={selectedValue}
          onChange={(e) => onChange(e.target.value)}
          className="block h-full w-full appearance-none rounded-[16px] bg-[#EFEFEF] px-6 pr-8 font-body text-[16px] leading-tight text-[#5B5A5E] focus:border-red-500 focus:outline-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 flex items-center px-4">
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectCustom;

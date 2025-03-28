import React from "react";

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search",
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="absolute left-6 top-1/2 -translate-y-1/2 transform">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.80758 16.2498C12.9289 16.2498 16.2659 12.9127 16.2659 8.79139C16.2659 4.67007 12.9289 1.33301 8.80758 1.33301C4.68625 1.33301 1.3492 4.67007 1.3492 8.79139C1.3492 12.9127 4.68625 16.2498 8.80758 16.2498Z"
            stroke="#F54D33"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.0209 17.9996L14.0209 13.9996"
            stroke="#F54D33"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-[64px] w-full rounded-[16px] bg-[#EFEFEF] pl-[64px] pr-4 text-[16px] focus:outline-none focus:ring-2 focus:ring-[#E74C3C]"
      />
    </div>
  );
};

export default SearchInput;

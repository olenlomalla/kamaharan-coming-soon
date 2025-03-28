import React from "react";

interface ContactInputProps {
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon: React.ReactNode;
}

const ContactInput: React.FC<ContactInputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
}) => {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-6 flex items-center">
        {icon}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="text-body h-[58px] w-full rounded-[16px] bg-[#EFEFEF] py-4 pl-[64px] pr-4 text-[16px] text-black focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#E74C3C]"
      />
    </div>
  );
};

export default ContactInput;

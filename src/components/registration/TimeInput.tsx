import React from "react";

interface TimeInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const TimeInput: React.FC<TimeInputProps> = () => {
  return (
    <input
      className="h-[40px] w-[125px] rounded-[24px] bg-[#EFEFEF] pl-3 font-body text-[11px]"
      placeholder="09 am"
    />
  );
};

export default TimeInput;

import React from "react";

interface CheckBoxInputProps {
  checked: boolean;
  onChange: (value?: boolean) => void;
}

const CheckBoxCustom: React.FC<CheckBoxInputProps> = ({
  checked,
  onChange,
}) => {
  return (
    <label className="relative inline-flex cursor-pointer justify-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="peer sr-only"
      />
      <div className="peer flex h-9 w-[64px] items-center justify-center rounded-full bg-gray-200 after:absolute after:left-[-2px] after:top-[2px] after:h-8 after:w-8 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#E74C3C] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
    </label>
  );
};

export default CheckBoxCustom;

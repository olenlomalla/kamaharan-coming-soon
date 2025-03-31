import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import SelectCustom from "@/components/registration/SelectCustom";
import { RegistrationStepProps } from "@/types/registration";

const LanguagesServedStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  const languageOptions = [
    { value: "English", label: "English" },
    { value: "Spanish", label: "Spanish" },
    { value: "French", label: "French" },
    { value: "German", label: "German" },
    { value: "Italian", label: "Italian" },
    { value: "Portuguese", label: "Portuguese" },
    { value: "Russian", label: "Russian" },
    { value: "Chinese", label: "Chinese" },
    { value: "Japanese", label: "Japanese" },
    { value: "Korean", label: "Korean" },
    { value: "Arabic", label: "Arabic" },
    { value: "Hindi", label: "Hindi" },
  ];

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value);
  };

  const handleNext = () => {
    updateRegistrationData({
      selectedLanguage,
    });
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-[450px] flex-col items-center justify-center gap-12 p-6">
      {/* Header */}
      <div className="flex w-[400px] flex-col gap-4 text-center">
        <h1 className="font-heading text-[32px] font-semibold leading-[36px] tracking-[1px] text-[#363537]">
          {title || "Languages Served"}
        </h1>
        <p className="font-body text-[16px] leading-[18px] tracking-[0.75px] text-[#424144]">
          {description || "What languages do you serve customers in?"}
        </p>
      </div>

      {/* Content */}
      <div className="w-[450px]">
        <SelectCustom
          options={languageOptions}
          selectedValue={selectedLanguage}
          onChange={handleLanguageChange}
          title=""
          className="w-[450px]"
        />
      </div>

      <ButtonCustom title="Next" onClick={handleNext} className="w-full" />
    </div>
  );
};

export default LanguagesServedStep;

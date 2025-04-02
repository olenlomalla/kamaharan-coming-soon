import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import SelectCustom from "@/components/registration/SelectCustom";
import StepHeader from "@/components/registration/StepHeader";
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
      language: selectedLanguage,
    });
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-[450px] flex-col items-center justify-center gap-12 p-6">
      <StepHeader title={title} description={description} />
      <div className="w-full lg:w-[450px]">
        <SelectCustom
          options={languageOptions}
          selectedValue={selectedLanguage}
          onChange={handleLanguageChange}
          className="w-full lg:w-[450px]"
        />
      </div>

      <ButtonCustom title="Next" onClick={handleNext} className="w-full" />
    </div>
  );
};
export default LanguagesServedStep;

import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import SelectCustom from "@/components/registration/SelectCustom";
import StepHeader from "@/components/registration/StepHeader";
import {
  PersonalPreferences,
  RegistrationStepProps,
} from "@/types/registration";

const PreferencesStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
  registrationData,
}) => {
  const [formData, setFormData] = useState<PersonalPreferences>({
    preferredLanguage:
      registrationData.personalPreferences?.preferredLanguage || "",
    dateOfBirth: registrationData.personalPreferences?.dateOfBirth || "",
    gender: registrationData.personalPreferences?.gender || "",
  });
  const handleLanguageChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredLanguage: value,
    }));
  };

  const handleInputChange =
    (field: "dateOfBirth" | "gender") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]:
          field === "gender"
            ? (e.target.value as "male" | "female")
            : e.target.value,
      }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateRegistrationData({
      personalPreferences: formData,
    });
    onNext();
  };

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "french", label: "French" },
    { value: "spanish", label: "Spanish" },
    { value: "german", label: "German" },
    { value: "italian", label: "Italian" },
    { value: "portuguese", label: "Portuguese" },
  ];

  const inputClass =
    "h-[58px] w-full rounded-[16px] bg-[#EFEFEF] px-6 font-body text-[16px] leading-[18px] text-[#5B5A5E]";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-[448px] flex-col items-center justify-center gap-12 p-6"
    >
      <StepHeader title={title} description={description} />

      <div className="flex w-full flex-col gap-4">
        <SelectCustom
          options={languageOptions}
          selectedValue={formData.preferredLanguage}
          onChange={handleLanguageChange}
          className="w-full"
        />
        <input
          type="text"
          placeholder="Date of Birth: (DD/MM/YYYY)"
          value={formData.dateOfBirth}
          onChange={handleInputChange("dateOfBirth")}
          className={inputClass}
          required
        />
        <input
          type="text"
          placeholder="Gender: Male - Female"
          value={formData.gender}
          onChange={handleInputChange("gender")}
          className={inputClass}
          required
        />
      </div>

      <ButtonCustom title="Next" type="submit" className="w-full" />
    </form>
  );
};

export default PreferencesStep;

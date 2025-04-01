import React, { useState } from "react";

import BusinessTypeCard from "@/components/registration/BusinessTypeCard";
import ButtonCustom from "@/components/registration/ButtonCustom";
import StepHeader from "@/components/registration/StepHeader";
import { RegistrationStepProps } from "@/types/registration";

const CulturalPreferencesStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
}) => {
  const [selectedPreference, setSelectedPreference] = useState<string>("");

  const preferenceOptions = [
    "Halal-certified",
    "Kosher-certified",
    "Vegan-friendly",
    "Gluten-free options",
    "No Meat",
    "No Eggs",
    "No Nuts",
    "No Pork",
    "No Alcohol",
  ];

  const handlePreferenceSelect = (preference: string) => {
    setSelectedPreference(preference === selectedPreference ? "" : preference);
  };

  const handleNext = () => {
    updateRegistrationData({
      selectedPreference,
    });
    onNext();
  };

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-12 p-6 lg:w-[940px]">
      <StepHeader title={title} description={description} className="gap-6" />

      {/* Content */}
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {preferenceOptions.map((preference) => (
          <BusinessTypeCard
            key={preference}
            title={preference}
            isSelected={selectedPreference === preference}
            onClick={() => handlePreferenceSelect(preference)}
            className="h-[80px] w-[280px]"
          />
        ))}
      </div>

      <ButtonCustom
        title="Next"
        onClick={handleNext}
        className="w-full lg:w-[448px]"
      />
    </div>
  );
};

export default CulturalPreferencesStep;

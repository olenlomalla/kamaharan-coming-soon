import React, { useState } from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import StepHeader from "@/components/registration/StepHeader";

import BusinessTypeCard from "../../../../components/registration/BusinessTypeCard";
import { RegistrationStepProps } from "../../../../types/registration";

const DietaryRestrictionsStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  registrationData,
  updateRegistrationData,
}) => {
  const [selectedDiets, setSelectedDiets] = useState<string[]>(
    registrationData.diningPreferences?.dietaryRestrictions || [],
  );

  const dietaryOptions = [
    "Halal",
    "Kosher",
    "Vegan",
    "Gluten-Free",
    "No Seafood",
    "No Lactose",
  ];

  const handleDietSelect = (diet: string) => {
    const updatedDiets = selectedDiets.includes(diet)
      ? selectedDiets.filter((d) => d !== diet)
      : [...selectedDiets, diet];

    setSelectedDiets(updatedDiets);
    updateRegistrationData({
      diningPreferences: {
        foodTypes: [],
        diningStyle: [],
        dietaryRestrictions: updatedDiets,
      },
    });
  };

  return (
    <div className="mx-auto flex w-full max-w-[940px] flex-col items-center justify-center gap-8 p-6">
      <StepHeader title={title} description={description} />
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {dietaryOptions.map((diet) => (
          <BusinessTypeCard
            key={diet}
            title={diet}
            isSelected={selectedDiets.includes(diet)}
            onClick={() => handleDietSelect(diet)}
          />
        ))}
      </div>
      <ButtonCustom
        title="Next"
        onClick={onNext}
        className="w-full lg:w-[448px]"
      />
    </div>
  );
};

export default DietaryRestrictionsStep;

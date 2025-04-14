import React from "react";

import ButtonCustom from "@/components/registration/ButtonCustom";
import StepHeader from "@/components/registration/StepHeader";

import BusinessTypeCard from "../../../../components/registration/BusinessTypeCard";
import { RegistrationStepProps } from "../../../../types/registration";

const DiningPreferencesStep: React.FC<RegistrationStepProps> = ({
  onNext,
  registrationData,
  updateRegistrationData,
  title,
  description,
}) => {
  const diningOptions = ["Dining In", "Takeaways", "Delivery"];

  const handlePreferenceSelect = (preference: string) => {
    updateRegistrationData({
      diningPreferences: {
        foodTypes: registrationData.diningPreferences?.foodTypes || [],
        diningStyle: [preference],
        dietaryRestrictions:
          registrationData.diningPreferences?.dietaryRestrictions || [],
      },
    });
  };

  return (
    <div className="mx-auto flex w-full max-w-[940px] flex-col items-center justify-center gap-8 p-6">
      <StepHeader title={title} description={description} />
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {diningOptions.map((option) => (
          <BusinessTypeCard
            key={option}
            title={option}
            isSelected={registrationData.diningPreferences?.diningStyle.includes(
              option,
            )}
            onClick={() => handlePreferenceSelect(option)}
          />
        ))}
      </div>
      <ButtonCustom
        onClick={onNext}
        className="w-full lg:w-[448px]"
        title="Next"
      />
    </div>
  );
};

export default DiningPreferencesStep;

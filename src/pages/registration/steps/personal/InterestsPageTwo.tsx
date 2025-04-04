import React, { useState } from "react";

import InterestSelectionStep from "@/components/registration/InterestSelectionStep";
import { RegistrationStepProps } from "@/types/registration";

const InterestsPageTwo: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
  registrationData,
}) => {
  const [selectedInterest, setSelectedInterest] = useState<string>(
    registrationData.interests?.categories?.[1] || "",
  );

  const interests = [
    "Middle Eastern",
    "Asian",
    "Italian",
    "Somali",
    "Western",
    "Vegan",
    "Halal",
    "Kosher",
    "Exclusive Vegan",
  ];

  const handleSelectInterest = (interest: string) => {
    setSelectedInterest(interest);
  };

  const handleNext = () => {
    if (selectedInterest) {
      updateRegistrationData({
        diningPreferences: {
          foodTypes: [selectedInterest],
          diningStyle: registrationData.diningPreferences?.diningStyle || [],
          dietaryRestrictions:
            registrationData.diningPreferences?.dietaryRestrictions || [],
        },
      });
      onNext();
    }
  };

  return (
    <InterestSelectionStep
      title={title}
      description={description}
      interests={interests}
      selectedInterest={selectedInterest}
      onSelectInterest={handleSelectInterest}
      onNext={handleNext}
    />
  );
};

export default InterestsPageTwo;

import React, { useState } from "react";

import InterestSelectionStep from "@/components/registration/InterestSelectionStep";
import { RegistrationStepProps } from "@/types/registration";

const InterestsPageOne: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
  registrationData,
}) => {
  const [selectedInterest, setSelectedInterest] = useState<string>(
    registrationData.interests?.categories?.[0] || "",
  );

  const interests = [
    "Food Reviews",
    "Beauty & Grooming",
    "Shopping & Retail",
    "Fitness & Wellness",
    "Travel & Experiences",
    "Business & Entrepreneurship",
    "Community Events & Local News",
    "Youth Programmes & Opportunities",
    "Exclusive Deals & Discounts",
  ];

  const handleSelectInterest = (interest: string) => {
    setSelectedInterest(interest);
  };

  const handleNext = () => {
    if (selectedInterest) {
      updateRegistrationData({
        interests: {
          categories: [selectedInterest],
          explorationFrequency:
            registrationData.interests?.explorationFrequency || "daily",
          followsInfluencers:
            registrationData.interests?.followsInfluencers || false,
          preferredPlatforms:
            registrationData.interests?.preferredPlatforms || "",
          preferredContent: registrationData.interests?.preferredContent || [],
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

export default InterestsPageOne;

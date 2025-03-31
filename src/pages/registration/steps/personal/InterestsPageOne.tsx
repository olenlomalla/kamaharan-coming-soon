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
    registrationData.personalInterests?.interests?.[0] || "",
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
        personalInterests: {
          interests: [selectedInterest],
          explorationFrequency:
            registrationData.personalInterests?.explorationFrequency || "daily",
          followsInfluencers:
            registrationData.personalInterests?.followsInfluencers || false,
          socialPlatform: registrationData.personalInterests?.socialPlatform,
        },
      });
      onNext();
    }
  };

  return (
    <InterestSelectionStep
      title={title || "Personal Interests & Preferences"}
      description={
        description || "What type of content do you enjoy from influencers?"
      }
      interests={interests}
      selectedInterest={selectedInterest}
      onSelectInterest={handleSelectInterest}
      onNext={handleNext}
    />
  );
};

export default InterestsPageOne;

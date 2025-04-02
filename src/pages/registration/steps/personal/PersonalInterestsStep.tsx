import React, { useState } from "react";

import BusinessTypeCard from "@/components/registration/BusinessTypeCard";
import ButtonCustom from "@/components/registration/ButtonCustom";
import StepHeader from "@/components/registration/StepHeader";
import { PersonalInterests, RegistrationStepProps } from "@/types/registration";

interface InterestOption {
  id: string;
  label: string;
}

const INTEREST_OPTIONS: InterestOption[] = [
  { id: "food_dining", label: "Food & Dining" },
  { id: "beauty_grooming", label: "Beauty & Grooming" },
  { id: "shopping_retail", label: "Shopping & Retail" },
  { id: "fitness_wellness", label: "Fitness & Wellness" },
  { id: "travel_experiences", label: "Travel & Experiences" },
  { id: "business_entrepreneurship", label: "Business & Entrepreneurship" },
  { id: "community_events", label: "Community Events & Local News" },
  { id: "youth_programmes", label: "Youth Programmes & Opportunities" },
  { id: "exclusive_deals", label: "Exclusive Deals & Discounts" },
];

const PersonalInterestsStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
  registrationData,
}) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    registrationData.interests?.categories || [],
  );

  const handleInterestToggle = (id: string) => {
    setSelectedInterests((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const handleSubmit = () => {
    const currentInterests: PersonalInterests = {
      categories: selectedInterests,
      followsInfluencers:
        registrationData.interests?.followsInfluencers || false,
      explorationFrequency:
        registrationData.interests?.explorationFrequency || "daily",
      preferredPlatforms: registrationData.interests?.preferredPlatforms || "",
      preferredContent: registrationData.interests?.preferredContent || [],
    };

    updateRegistrationData({
      interests: currentInterests,
    });
    onNext();
  };

  return (
    <div
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-[760px] flex-col items-center justify-center gap-8 p-6"
    >
      <StepHeader title={title} description={description} />

      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {INTEREST_OPTIONS.map((option) => (
          <BusinessTypeCard
            key={option.id}
            title={option.label}
            isSelected={selectedInterests.includes(option.id)}
            onClick={() => handleInterestToggle(option.id)}
            className="h-[58px]"
          />
        ))}
      </div>

      <ButtonCustom
        title="Next"
        type="submit"
        onClick={handleSubmit}
        className="w-full lg:w-[448px]"
      />
    </div>
  );
};

export default PersonalInterestsStep;

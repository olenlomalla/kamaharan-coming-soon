import React, { useState } from "react";

import BusinessTypeCard from "@/components/registration/BusinessTypeCard";
import ButtonCustom from "@/components/registration/ButtonCustom";
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
    registrationData.personalInterests?.interests || [],
  );

  const handleInterestToggle = (id: string) => {
    setSelectedInterests((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentInterests: PersonalInterests = {
      interests: selectedInterests,
      explorationFrequency:
        registrationData.personalInterests?.explorationFrequency || "daily",
      followsInfluencers:
        registrationData.personalInterests?.followsInfluencers || false,
      socialPlatform: registrationData.personalInterests?.socialPlatform,
    };

    updateRegistrationData({
      personalInterests: currentInterests,
    });
    onNext();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-[760px] flex-col items-center justify-center gap-8"
    >
      <div className="flex w-full flex-col items-center gap-4 text-center">
        <h1 className="font-heading text-[32px] font-semibold leading-[36px] tracking-[1px] text-[#363537]">
          {title || "Personal Interests & Preferences"}
        </h1>
        <p className="font-body text-[16px] leading-[18px] tracking-[0.75px] text-[#424144]">
          {description ||
            "What are you most interested in? (Select all that apply)"}
        </p>
      </div>

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

      <ButtonCustom title="Next" type="submit" className="w-[448px]" />
    </form>
  );
};

export default PersonalInterestsStep;

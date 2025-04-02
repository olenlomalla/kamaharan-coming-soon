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
  const [selectedCommunityEngagement, setSelectedCommunityEngagement] =
    useState<string>("");

  const communityOptions = [
    "African",
    "MiddleEastern",
    "Asian",
    "Western",
    "Latino",
    "Ukrainian",
    "Italian",
    "Mongolian",
    "Irish",
  ];

  const handlePreferenceSelect = (community: string) => {
    setSelectedCommunityEngagement(
      community === selectedCommunityEngagement ? "" : community,
    );
  };

  const handleNext = () => {
    updateRegistrationData({
      communityEngagement: {
        culturalNeeds: selectedCommunityEngagement
          ? [selectedCommunityEngagement]
          : [],
        hasStudentDiscounts: false,
        supportsLocalCharities: false,
        wantsCommunitySupport: false,
        interestedInSkillSharing: false,
      },
    });
    onNext();
  };

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 p-6 lg:w-[940px]">
      <StepHeader title={title} description={description} className="gap-4" />
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
        {communityOptions.map((community) => (
          <BusinessTypeCard
            key={community}
            title={community}
            isSelected={selectedCommunityEngagement === community}
            onClick={() => handlePreferenceSelect(community)}
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

import React, { useState } from "react";

import BusinessTypeCard from "@/components/registration/BusinessTypeCard";
import ButtonCustom from "@/components/registration/ButtonCustom";
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
      selectedCommunityEngagement,
    });
    onNext();
  };

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 p-6 lg:w-[940px]">
      {/* Header */}
      <div className="flex flex-col gap-6 text-center">
        <h1 className="font-heading text-[32px] font-semibold leading-[36px] tracking-[1px] text-[#363537]">
          {title}
        </h1>
        <p className="font-body text-[16px] leading-[18px] tracking-[0.75px] text-[#424144]">
          {description}
        </p>
      </div>

      {/* Content */}
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

      <ButtonCustom title="Next" onClick={handleNext} className="w-[448px]" />
    </div>
  );
};

export default CulturalPreferencesStep;

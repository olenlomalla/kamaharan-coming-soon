import React, { useState } from "react";

import ButtonCustom from "../../../../components/registration/ButtonCustom";
import CheckBoxCustom from "../../../../components/registration/CheckBoxCustom";
import StepHeader from "../../../../components/registration/StepHeader";
import type {
  InfluencerPreferences,
  RegistrationStepProps,
} from "../../../../types/registration";

interface ExtendedInfluencerPreferences extends InfluencerPreferences {
  influencersNames?: string;
}

const InfluencerPreferencesStep: React.FC<RegistrationStepProps> = ({
  title = "Influencer & Content Preferences",
  onNext,
  registrationData,
  updateRegistrationData,
}) => {
  const [formData, setFormData] = useState<ExtendedInfluencerPreferences>({
    followsInfluencers: false,
    wantsRecommendations: false,
    interestedInBusinessContent: false,
    influencersNames: "",
  });

  const handleToggleChange = (field: string) => (value?: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value || false }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      influencersNames: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const { influencersNames, ...standardPreferences } = formData;

    updateRegistrationData({
      personalPreferences: {
        preferredLanguage:
          registrationData.personalPreferences?.preferredLanguage || "",
        dateOfBirth: registrationData.personalPreferences?.dateOfBirth || "",
        gender: registrationData.personalPreferences?.gender || "",
        ...registrationData.personalPreferences,
        influencerPreferences: standardPreferences,
        influencersNames: formData.followsInfluencers
          ? influencersNames
          : undefined,
      },
    });
    onNext();
  };

  return (
    <div className="mx-auto flex w-full max-w-[760px] flex-col items-center justify-center gap-12 p-6 lg:p-0">
      <StepHeader title={title} />
      <div className="w-full space-y-6 lg:px-[100px]">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between gap-6">
            <span className="flex-1 font-body text-[16px] font-normal leading-[18px] tracking-[0.75px] text-[#363537]">
              Do you follow any specific influencers or content creators?
            </span>
            <CheckBoxCustom
              checked={formData.followsInfluencers}
              onChange={handleToggleChange("followsInfluencers")}
            />
          </div>

          {formData.followsInfluencers && (
            <input
              type="text"
              value={formData.influencersNames}
              onChange={handleInputChange}
              className="text-body h-[58px] w-full rounded-[16px] bg-[#EFEFEF] px-[24px] text-[16px] leading-[18px] tracking-[0.75px] text-[#5B5A5E]"
              placeholder="If yes, please list their names or handles."
            />
          )}
        </div>
        <div className="flex items-center justify-between gap-6">
          <span className="flex-1 font-body text-[16px] font-normal leading-[18px] tracking-[0.75px] text-[#363537]">
            Would you like Kamaharan to suggest influencer-recommended
            businesses?
          </span>
          <CheckBoxCustom
            checked={formData.wantsRecommendations}
            onChange={handleToggleChange("wantsRecommendations")}
          />
        </div>
        <div className="flex items-center justify-between gap-6">
          <span className="flex-1 font-body text-[16px] font-normal leading-[18px] tracking-[0.75px] text-[#363537]">
            Are you interested in watching business-related content (e.g.
            behind-the-scenes videos, special promotions)?
          </span>
          <CheckBoxCustom
            checked={formData.interestedInBusinessContent}
            onChange={handleToggleChange("interestedInBusinessContent")}
          />
        </div>
      </div>

      <ButtonCustom
        title="Next"
        onClick={handleSubmit}
        className="mb-[20px] w-full lg:w-[448px]"
      />
    </div>
  );
};

export default InfluencerPreferencesStep;

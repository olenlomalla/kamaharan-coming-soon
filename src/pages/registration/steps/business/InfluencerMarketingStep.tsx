import React, { useState } from "react";

import ToggleQuestionStep from "@/components/registration/ToggleQuestionStep";
import {
  InfluencerMarketing,
  RegistrationStepProps,
} from "@/types/registration";

const InfluencerMarketingStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  updateRegistrationData,
}) => {
  const [formData, setFormData] = useState<InfluencerMarketing>({
    openToInfluencers: false,
    influencerType: "Food",
    wantsSponsoredContent: false,
    wantsAiContent: false,
    hasProContent: false,
    wantsPromoContent: false,
  });

  const influencerOptions = [
    { value: "Food", label: "Food" },
    { value: "Fashion", label: "Fashion" },
    { value: "Lifestyle", label: "Lifestyle" },
    { value: "Tech", label: "Tech" },
    { value: "Beauty", label: "Beauty" },
    { value: "Travel", label: "Travel" },
  ];

  const handleToggleChange = (field: string) => (value?: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value || false }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, influencerType: value }));
  };

  const handleSubmit = () => {
    updateRegistrationData({ influencerMarketing: formData });
    onNext();
  };

  const questions = [
    {
      question: "Are you open to working with influencers?",
      field: "openToInfluencers",
      value: formData.openToInfluencers,
    },
    {
      question:
        "Would you like to feature in sponsored content on social media?",
      field: "wantsSponsoredContent",
      value: formData.wantsSponsoredContent,
    },
    {
      question: "Would you like AI to help generate marketing content for you?",
      field: "wantsAiContent",
      value: formData.wantsAiContent,
    },
    {
      question: "Do you have professional photos and videos of your business?",
      field: "hasProContent",
      value: formData.hasProContent,
    },
    {
      question: "Would you like help creating promotional content?",
      field: "wantsPromoContent",
      value: formData.wantsPromoContent,
    },
  ];

  const selectQuestion = {
    question: "What type of influencers would you like to work with?",
    field: "influencerType",
    value: formData.influencerType,
    options: influencerOptions,
    position: "right" as const,
    order: 1,
  };

  return (
    <ToggleQuestionStep
      title={title || "Influencer & Marketing Integration"}
      description={description}
      questions={questions}
      selectQuestion={selectQuestion}
      onToggleChange={handleToggleChange}
      onSelectChange={handleSelectChange}
      onSubmit={handleSubmit}
    />
  );
};

export default InfluencerMarketingStep;

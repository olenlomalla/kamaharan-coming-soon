import React, { useState } from "react";

import ToggleQuestionStep from "@/components/registration/ToggleQuestionStep";
import {
  CommunityEngagement,
  RegistrationStepProps,
} from "@/types/registration";

const CommunityEngagementStep: React.FC<RegistrationStepProps> = ({
  title,
  onNext,
  updateRegistrationData,
}) => {
  const [formData, setFormData] = useState<CommunityEngagement>({
    hasDiscountsForSpecialGroups: false,
    supportsLocalCharities: false,
    productType: "Physical",
    wantsFeatureInCommunity: false,
    interestedInSkillSharing: false,
  });

  const productOptions = [
    { value: "Physical", label: "Physical" },
    { value: "Digital", label: "Digital" },
    { value: "Both", label: "Both" },
  ];

  const handleToggleChange = (field: string) => (value?: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value || false }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, productType: value }));
  };

  const handleSubmit = () => {
    updateRegistrationData({ communityEngagement: formData });
    onNext();
  };

  const questions = [
    {
      question:
        "Do you offer discounts for students, seniors, Emergency Services or low-income individuals?",
      field: "hasDiscountsForSpecialGroups",
      value: formData.hasDiscountsForSpecialGroups,
    },
    {
      question: "Do you support local charities or community projects?",
      field: "supportsLocalCharities",
      value: formData.supportsLocalCharities,
    },
    {
      question:
        "Would you like to be featured in Kamaharan's community support initiatives?",
      field: "wantsFeatureInCommunity",
      value: formData.wantsFeatureInCommunity,
    },
    {
      question: "Are you interested in skill-sharing or mentorship programs?",
      field: "interestedInSkillSharing",
      value: formData.interestedInSkillSharing,
    },
  ];

  const selectQuestion = {
    question: "Do you sell physical or digital products?",
    field: "productType",
    value: formData.productType,
    options: productOptions,
    order: 2,
  };

  return (
    <ToggleQuestionStep
      title={title}
      questions={questions}
      selectQuestion={selectQuestion}
      onToggleChange={handleToggleChange}
      onSelectChange={handleSelectChange}
      onSubmit={handleSubmit}
    />
  );
};

export default CommunityEngagementStep;

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
    culturalNeeds: [],
    hasStudentDiscounts: false,
    supportsLocalCharities: false,
    wantsCommunitySupport: false,
    interestedInSkillSharing: false,
  });

  const handleToggleChange = (field: string) => (value?: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value || false }));
  };

  const handleSubmit = () => {
    updateRegistrationData({ communityEngagement: formData });
    onNext();
  };

  const questions = [
    {
      question:
        "Do you offer discounts for students, seniors, Emergency Services or low-income individuals?",
      field: "hasStudentDiscounts",
      value: formData.hasStudentDiscounts,
    },
    {
      question: "Do you support local charities or community projects?",
      field: "supportsLocalCharities",
      value: formData.supportsLocalCharities,
    },
    {
      question:
        "Would you like to be featured in Kamaharan's community support initiatives?",
      field: "wantsCommunitySupport",
      value: formData.wantsCommunitySupport,
    },
    {
      question: "Are you interested in skill-sharing or mentorship programs?",
      field: "interestedInSkillSharing",
      value: formData.interestedInSkillSharing,
    },
  ];

  return (
    <ToggleQuestionStep
      title={title}
      questions={questions}
      onToggleChange={handleToggleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default CommunityEngagementStep;

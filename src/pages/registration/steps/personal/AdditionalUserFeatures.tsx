import React, { useState } from "react";

import ToggleQuestionStep from "@/components/registration/ToggleQuestionStep";
import type {
  AdditionalFeatures,
  RegistrationStepProps,
} from "@/types/registration";

const AdditionalUserPreferences: React.FC<RegistrationStepProps> = ({
  title,
  onNext,
  updateRegistrationData,
}) => {
  const [formData, setFormData] = useState<AdditionalFeatures>({
    wantsEarlyAccess: false,
    wantsToParticipateInSurveys: false,
    wantsToTestBetaFeatures: false,
  });
  const questions = [
    {
      question:
        "Would you like early access to new features, deals, and community events?",
      field: "wantsEarlyAccess",
      value: formData.wantsEarlyAccess,
    },
    {
      question:
        "Would you like to participate in user surveys and provide feedback?",
      field: "wantsToParticipateInSurveys",
      value: formData.wantsToParticipateInSurveys,
    },
    {
      question:
        "Would you like to test beta features, new businesses and services for discounts or free trials before they are released?",
      field: "wantsToTestBetaFeatures",
      value: formData.wantsToTestBetaFeatures,
    },
  ];
  const handleToggleChange = (field: string) => (value?: boolean) => {
    setFormData((prev: AdditionalFeatures) => ({
      ...prev,
      [field]: value || false,
    }));
  };
  const onSubmit = () => {
    updateRegistrationData({
      additionalFeatures: formData,
    });
    onNext();
  };
  return (
    <ToggleQuestionStep
      title={title}
      questions={questions}
      onSubmit={onSubmit}
      onToggleChange={handleToggleChange}
    />
  );
};
export default AdditionalUserPreferences;

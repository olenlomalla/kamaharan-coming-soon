import React, { useState } from "react";

import ToggleQuestionStep from "@/components/registration/ToggleQuestionStep";
import type {
  AdditionalUserPreference,
  RegistrationStepProps,
} from "@/types/registration";

const AdditionalUserPreferences: React.FC<RegistrationStepProps> = ({
  title,
  onNext,
  registrationData,
  updateRegistrationData,
}) => {
  const [formData, setFormData] = useState<AdditionalUserPreference>({
    accessToNewFeature: false,
    participateInUserSurveys: false,
    testBetaFeature: false,
  });
  const questions = [
    {
      question:
        "Would you like early access to new features, deals, and community events?",
      field: "accessToNewFeature",
      value: formData.accessToNewFeature,
    },
    {
      question:
        "Would you like to participate in user surveys and provide feedback?",
      field: "participateInUserSurveys",
      value: formData.participateInUserSurveys,
    },
    {
      question:
        "Would you like to test beta features, new businesses and services for discounts or free trials before they are released?",
      field: "testBetaFeature",
      value: formData.testBetaFeature,
    },
  ];
  const handleToggleChange = (field: string) => (value?: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value || false }));
  };
  const onSubmit = () => {
    updateRegistrationData({
      personalPreferences: {
        preferredLanguage:
          registrationData.personalPreferences?.preferredLanguage || "",
        dateOfBirth: registrationData.personalPreferences?.dateOfBirth || "",
        gender: registrationData.personalPreferences?.gender || "",
        ...registrationData.personalPreferences,
        additionalUserPreference: formData,
      },
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

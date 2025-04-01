import React, { useState } from "react";

import ToggleQuestionStep from "@/components/registration/ToggleQuestionStep";
import type {
  AccessibilityPreferences,
  RegistrationStepProps,
} from "@/types/registration";

const AccessibilityPreferences: React.FC<RegistrationStepProps> = ({
  title,
  onNext,
  registrationData,
  updateRegistrationData,
}) => {
  const [formData, setFormData] = useState<AccessibilityPreferences>({
    offerAccessibilityFeratures: false,
    womanOnly: false,
  });
  const questions = [
    {
      question: "Do you require businesses that offer accessibility features?",
      field: "offerAccessibilityFeratures",
      value: formData.offerAccessibilityFeratures,
    },
    {
      question: "Are you interested in women-only or family-friendly spaces?",
      field: "womanOnly",
      value: formData.womanOnly,
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
        accessibilityPreferences: formData,
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
export default AccessibilityPreferences;

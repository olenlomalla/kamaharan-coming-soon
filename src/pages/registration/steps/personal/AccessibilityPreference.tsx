import React, { useState } from "react";

import ToggleQuestionStep from "@/components/registration/ToggleQuestionStep";
import type {
  AccessibilityPreferences,
  RegistrationStepProps,
} from "@/types/registration";

const AccessibilityPreferences: React.FC<RegistrationStepProps> = ({
  title,
  onNext,
  updateRegistrationData,
}) => {
  const [formData, setFormData] = useState<AccessibilityPreferences>({
    requiresAccessibilityFeatures: false,
    interestedInWomenOnlySpaces: false,
  });
  const questions = [
    {
      question: "Do you require businesses that offer accessibility features?",
      field: "requiresAccessibilityFeatures",
      value: formData.requiresAccessibilityFeatures,
    },
    {
      question: "Are you interested in women-only or family-friendly spaces?",
      field: "interestedInWomenOnlySpaces",
      value: formData.interestedInWomenOnlySpaces,
    },
  ];
  const handleToggleChange = (field: string) => (value?: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value || false }));
  };
  const onSubmit = () => {
    updateRegistrationData({
      accessibilityPreferences: formData,
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

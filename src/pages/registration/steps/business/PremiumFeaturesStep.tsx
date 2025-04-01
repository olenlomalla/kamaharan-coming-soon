import React, { useState } from "react";

import ToggleQuestionStep from "@/components/registration/ToggleQuestionStep";
import { RegistrationStepProps } from "@/types/registration";

const PremiumFeaturesStep: React.FC<RegistrationStepProps> = ({
  title,
  onNext,
  updateRegistrationData,
  registrationData,
}) => {
  const [formData, setFormData] = useState({
    wantsPriorityListing:
      registrationData.premiumFeatures?.wantsPriorityListing || false,
    wantsHomepageFeature:
      registrationData.premiumFeatures?.wantsHomepageFeature || false,
    wantsAnalytics: registrationData.premiumFeatures?.wantsAnalytics || false,
    wantsTrendNotifications:
      registrationData.premiumFeatures?.wantsTrendNotifications || false,
  });

  const handleToggleChange = (field: string) => (value?: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value || false,
    }));
  };

  const handleSubmit = () => {
    updateRegistrationData({
      premiumFeatures: formData,
    });
    onNext();
  };

  const questions = [
    {
      question:
        "Would you like priority listing in searches for your industry?",
      field: "wantsPriorityListing",
      value: formData.wantsPriorityListing,
      onChange: handleToggleChange("wantsPriorityListing"),
    },
    {
      question:
        "Would you like to feature on Kamaharan's homepage for added exposure?",
      field: "wantsHomepageFeature",
      value: formData.wantsHomepageFeature,
      onChange: handleToggleChange("wantsHomepageFeature"),
    },
    {
      question: "Would you like analytics on customer visits & interactions?",
      field: "wantsAnalytics",
      value: formData.wantsAnalytics,
      onChange: handleToggleChange("wantsAnalytics"),
    },
    {
      question:
        "Would you like to be notified of trends and insights related to your industry?",
      field: "wantsTrendNotifications",
      value: formData.wantsTrendNotifications,
      onChange: handleToggleChange("wantsTrendNotifications"),
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

export default PremiumFeaturesStep;

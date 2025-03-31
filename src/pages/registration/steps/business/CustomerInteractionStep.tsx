import React, { useState } from "react";

import ToggleQuestionStep from "@/components/registration/ToggleQuestionStep";
import { RegistrationStepProps } from "@/types/registration";

const CustomerInteractionStep: React.FC<RegistrationStepProps> = ({
  title,
  onNext,
  updateRegistrationData,
  registrationData,
}) => {
  const [formData, setFormData] = useState({
    allowsDirectMessages:
      registrationData.customerInteraction?.allowsDirectMessages || false,
    wantsAiAutoRespond:
      registrationData.customerInteraction?.wantsAiAutoRespond || false,
    allowsPublicReviews:
      registrationData.customerInteraction?.allowsPublicReviews || false,
    collectsEmails:
      registrationData.customerInteraction?.collectsEmails || false,
    enablesFeedbackSurveys:
      registrationData.customerInteraction?.enablesFeedbackSurveys || false,
  });

  const handleToggleChange = (field: string) => (value?: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value || false,
    }));
  };

  const handleSubmit = () => {
    updateRegistrationData({
      customerInteraction: formData,
    });
    onNext();
  };

  const questions = [
    {
      question:
        "Would you like to receive direct messages from customers on Kamaharan?",
      field: "allowsDirectMessages",
      value: formData.allowsDirectMessages,
      onChange: handleToggleChange("allowsDirectMessages"),
    },
    {
      question: "Would you like AI to auto-respond to FAQs for you?",
      field: "wantsAiAutoRespond",
      value: formData.wantsAiAutoRespond,
      onChange: handleToggleChange("wantsAiAutoRespond"),
    },
    {
      question: "Do you want customers to leave public reviews on your page?",
      field: "allowsPublicReviews",
      value: formData.allowsPublicReviews,
      onChange: handleToggleChange("allowsPublicReviews"),
    },
    {
      question:
        "Would you like to collect customer emails for newsletters & promotions?",
      field: "collectsEmails",
      value: formData.collectsEmails,
      onChange: handleToggleChange("collectsEmails"),
    },
    {
      question: "Would you like to enable customer feedback surveys?",
      field: "enablesFeedbackSurveys",
      value: formData.enablesFeedbackSurveys,
      onChange: handleToggleChange("enablesFeedbackSurveys"),
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

export default CustomerInteractionStep;

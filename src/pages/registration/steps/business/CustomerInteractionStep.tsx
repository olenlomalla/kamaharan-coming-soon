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
    acceptsDirectMessages:
      registrationData.customerInteraction?.acceptsDirectMessages || false,
    wantsAIFAQResponses:
      registrationData.customerInteraction?.wantsAIFAQResponses || false,
    allowsPublicReviews:
      registrationData.customerInteraction?.allowsPublicReviews || false,
    collectsCustomerEmails:
      registrationData.customerInteraction?.collectsCustomerEmails || false,
    hasFeedbackSurveys:
      registrationData.customerInteraction?.hasFeedbackSurveys || false,
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
      field: "acceptsDirectMessages",
      value: formData.acceptsDirectMessages,
      onChange: handleToggleChange("acceptsDirectMessages"),
    },
    {
      question: "Would you like AI to auto-respond to FAQs for you?",
      field: "wantsAIFAQResponses",
      value: formData.wantsAIFAQResponses,
      onChange: handleToggleChange("wantsAIFAQResponses"),
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
      field: "collectsCustomerEmails",
      value: formData.collectsCustomerEmails,
      onChange: handleToggleChange("collectsCustomerEmails"),
    },
    {
      question: "Would you like to enable customer feedback surveys?",
      field: "hasFeedbackSurveys",
      value: formData.hasFeedbackSurveys,
      onChange: handleToggleChange("hasFeedbackSurveys"),
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

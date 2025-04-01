import React, { useState } from "react";

import ToggleQuestionStep from "@/components/registration/ToggleQuestionStep";
import {
  DealsAndPromotions,
  RegistrationStepProps,
} from "@/types/registration";

const DealsPromotionsStep: React.FC<RegistrationStepProps> = ({
  title,
  onNext,
  updateRegistrationData,
}) => {
  const [formData, setFormData] = useState<DealsAndPromotions>({
    dealFrequency: "Daily",
    wantsFeaturedDeals: false,
    wantsSeasonalOffers: false,
    hasReferralRewards: false,
    hasLoyaltyPoints: false,
    hasEventDiscounts: false,
    wantsAiSuggestions: false,
  });

  const frequencyOptions = [
    { value: "Daily", label: "Daily" },
    { value: "Weekly", label: "Weekly" },
    { value: "Monthly", label: "Monthly" },
    { value: "Quarterly", label: "Quarterly" },
    { value: "Seasonal", label: "Seasonal" },
  ];

  const handleToggleChange = (field: string) => (value?: boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value || false }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, dealFrequency: value }));
  };

  const handleSubmit = () => {
    updateRegistrationData({ dealsAndPromotions: formData });
    onNext();
  };

  const questions = [
    {
      question:
        "Are you interested in featuring your deals on Kamaharan's homepage?",
      field: "wantsFeaturedDeals",
      value: formData.wantsFeaturedDeals,
    },
    {
      question:
        "Would you like to participate in Kamaharan's exclusive seasonal offers?",
      field: "wantsSeasonalOffers",
      value: formData.wantsSeasonalOffers,
    },
    {
      question: "Do you offer referral rewards for customers?",
      field: "hasReferralRewards",
      value: formData.hasReferralRewards,
    },
    {
      question: "Would you like to enable customer loyalty points?",
      field: "hasLoyaltyPoints",
      value: formData.hasLoyaltyPoints,
    },
    {
      question:
        "Do you offer Celebration or Special Event discounts for customers?",
      field: "hasEventDiscounts",
      value: formData.hasEventDiscounts,
    },
    {
      question: "Would you like AI to suggest deal ideas for your business?",
      field: "wantsAiSuggestions",
      value: formData.wantsAiSuggestions,
    },
  ];

  const selectQuestion = {
    question: "How often do you offer deals or promotions?",
    field: "dealFrequency",
    value: formData.dealFrequency,
    options: frequencyOptions,
    order: 0,
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

export default DealsPromotionsStep;

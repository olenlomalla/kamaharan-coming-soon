import React, { useState } from "react";

import ToggleQuestionStep from "@/components/registration/ToggleQuestionStep";
import {
  PaymentPreferences,
  RegistrationStepProps,
} from "@/types/registration";

const PAYMENT_OPTIONS = [
  { value: "Cash", label: "Cash" },
  { value: "Card", label: "Card" },
  { value: "Bank_transfer", label: "Bank Transfer" },
  { value: "Digital_wallet", label: "Digital Wallet" },
];

const PaymentBookingStep: React.FC<RegistrationStepProps> = ({
  title,
  onNext,
  updateRegistrationData,
  registrationData,
}) => {
  const [formData, setFormData] = useState<PaymentPreferences>({
    acceptedPaymentMethods:
      registrationData.paymentPreferences?.acceptedPaymentMethods || "Cash",
    requiresDeposit:
      registrationData.paymentPreferences?.requiresDeposit || false,
    hasMemberships:
      registrationData.paymentPreferences?.hasMemberships || false,
    hasPaymentPlans:
      registrationData.paymentPreferences?.hasPaymentPlans || false,
  });

  const handleToggleChange = (field: string) => (value?: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value || false,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      acceptedPaymentMethods: value,
    }));
  };

  const handleSubmit = () => {
    updateRegistrationData({
      paymentPreferences: formData,
    });
    onNext();
  };

  const questions = [
    {
      question: "Do you require a deposit for bookings?",
      field: "requiresDeposit",
      value: formData.requiresDeposit,
      onChange: handleToggleChange("requiresDeposit"),
    },
    {
      question: "Do you offer memberships or subscription services?",
      field: "hasMemberships",
      value: formData.hasMemberships,
      onChange: handleToggleChange("hasMemberships"),
    },
    {
      question:
        "Do you offer payment plans or instalments for high-value services?",
      field: "hasPaymentPlans",
      value: formData.hasPaymentPlans,
      onChange: handleToggleChange("hasPaymentPlans"),
    },
  ];

  const selectQuestion = {
    question: "Which payment methods do you accept?",
    field: "acceptedPaymentMethods",
    value: formData.acceptedPaymentMethods,
    onChange: handleSelectChange,
    options: PAYMENT_OPTIONS,
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

export default PaymentBookingStep;

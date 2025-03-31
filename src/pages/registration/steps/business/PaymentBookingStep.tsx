import React, { useState } from "react";

import ToggleQuestionStep from "@/components/registration/ToggleQuestionStep";
import { RegistrationStepProps } from "@/types/registration";

const PAYMENT_OPTIONS = [
  { value: "cash", label: "Cash" },
  { value: "card", label: "Card" },
  { value: "bank_transfer", label: "Bank Transfer" },
  { value: "digital_wallet", label: "Digital Wallet" },
];

const PaymentBookingStep: React.FC<RegistrationStepProps> = ({
  title,
  onNext,
  updateRegistrationData,
  registrationData,
}) => {
  const [formData, setFormData] = useState({
    paymentMethods:
      registrationData.paymentBookingPreferences?.paymentMethods || "cash",
    requiresDeposit:
      registrationData.paymentBookingPreferences?.requiresDeposit || false,
    offersMemberships:
      registrationData.paymentBookingPreferences?.offersMemberships || false,
    offersPaymentPlans:
      registrationData.paymentBookingPreferences?.offersPaymentPlans || false,
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
      paymentMethods: value,
    }));
  };

  const handleSubmit = () => {
    updateRegistrationData({
      paymentBookingPreferences: formData,
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
      field: "offersMemberships",
      value: formData.offersMemberships,
      onChange: handleToggleChange("offersMemberships"),
    },
    {
      question:
        "Do you offer payment plans or instalments for high-value services?",
      field: "offersPaymentPlans",
      value: formData.offersPaymentPlans,
      onChange: handleToggleChange("offersPaymentPlans"),
    },
  ];

  const selectQuestion = {
    question: "Which payment methods do you accept?",
    field: "paymentMethods",
    value: formData.paymentMethods,
    onChange: handleSelectChange,
    options: PAYMENT_OPTIONS,
  };

  return (
    <ToggleQuestionStep
      title={title}
      questions={questions}
      selectQuestion={selectQuestion}
      onToggleChange={handleToggleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default PaymentBookingStep;

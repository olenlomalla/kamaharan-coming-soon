import React, { useState } from "react";

import FormStep from "@/components/registration/FormStep";
import { RegistrationStepProps } from "@/types/registration";

const ContactInfoStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  onBack,
  updateRegistrationData,
  registrationData,
  isFirstStep,
  isLastStep,
  currentStep,
  totalSteps,
}) => {
  const [formData, setFormData] = useState({
    phone: registrationData.personalContactInfo?.phone || "",
    cityAndCountry: registrationData.personalContactInfo?.cityAndCountry || "",
  });

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = () => {
    updateRegistrationData({
      personalContactInfo: formData,
    });
    onNext();
  };

  const fields = [
    {
      name: "phone",
      type: "tel",
      placeholder: "Phone",
      value: formData.phone,
      required: true,
    },
    {
      name: "cityAndCountry",
      type: "text",
      placeholder: "City & Country",
      value: formData.cityAndCountry,
      required: true,
    },
  ];

  return (
    <FormStep
      title={title}
      description={description}
      fields={fields}
      onFieldChange={handleChange}
      onNext={onNext}
      onBack={onBack}
      onSubmit={handleSubmit}
      isFirstStep={isFirstStep}
      isLastStep={isLastStep}
      currentStep={currentStep}
      totalSteps={totalSteps}
      registrationData={registrationData}
      updateRegistrationData={updateRegistrationData}
    />
  );
};

export default ContactInfoStep;

import React, { useState } from "react";

import FormStep from "@/components/registration/FormStep";
import { RegistrationStepProps } from "@/types/registration";

const BasicInfoStep: React.FC<RegistrationStepProps> = ({
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
    firstName: registrationData.personalBasicInfo?.firstName || "",
    lastName: registrationData.personalBasicInfo?.lastName || "",
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
      personalBasicInfo: formData,
    });
    onNext();
  };

  const fields = [
    {
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      value: formData.firstName,
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      value: formData.lastName,
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

export default BasicInfoStep;

import React, { useState } from "react";

import FormStep from "@/components/registration/FormStep";
import { PersonalBasicInfo, RegistrationStepProps } from "@/types/registration";

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
  const [formData, setFormData] = useState<PersonalBasicInfo>({
    firstName: registrationData.personalInfo?.firstName || "",
    lastName: registrationData.personalInfo?.lastName || "",
    phone: registrationData.personalInfo?.phone || "",
    location: {
      city: registrationData.personalInfo?.location?.city || "",
      address: registrationData.personalInfo?.location?.address || "",
    },
    dateOfBirth: registrationData.personalInfo?.dateOfBirth || null,
    gender: registrationData.personalInfo?.gender || "",
    language: registrationData.personalInfo?.language || "",
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
      personalInfo: formData,
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

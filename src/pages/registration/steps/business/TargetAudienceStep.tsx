import React from "react";

import CustomRegistrationStep from "@/components/registration/CustomerRegistrtationStep";
import { RegistrationStepProps, TargetAudience } from "@/types/registration";

const TargetAudienceStep: React.FC<RegistrationStepProps> = ({
  title,
  description,
  onNext,
  onBack,
  isFirstStep,
  isLastStep,
  currentStep,
  totalSteps,
  registrationData,
  updateRegistrationData,
  registrationType,
}) => {
  return (
    <CustomRegistrationStep<TargetAudience>
      title={title}
      description={description}
      onNext={onNext}
      onBack={onBack}
      isFirstStep={isFirstStep}
      isLastStep={isLastStep}
      currentStep={currentStep}
      totalSteps={totalSteps}
      registrationData={registrationData}
      updateRegistrationData={updateRegistrationData}
      registrationType={registrationType}
      initialState={{
        businessUniqueness: "",
        vipServices: false,
        accessibilityOptions: false,
        seasonalTrends: false,
      }}
      textAreaFields={[
        {
          key: "businessUniqueness",
          label: "What makes your business unique?",
          placeholder:
            "Short description for AI-based SEO & marketing insights.",
        },
      ]}
      toggleQuestions={[
        {
          key: "vipServices",
          question: "Do you offer VIP or exclusive services?",
        },
        {
          key: "accessibilityOptions",
          question:
            "Do you provide accessibility options for disabled customers?",
        },
        {
          key: "seasonalTrends",
          question:
            "Are there specific seasonal trends that impact your business?",
        },
      ]}
      onUpdateData={(data) => updateRegistrationData({ targetAudience: data })}
    />
  );
};

export default TargetAudienceStep;

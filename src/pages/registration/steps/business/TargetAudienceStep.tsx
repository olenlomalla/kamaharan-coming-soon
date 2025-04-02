import React from "react";

import CustomRegistrationStep from "@/components/registration/CustomerRegistrtationStep";
import {
  CustomerPreference,
  RegistrationStepProps,
} from "@/types/registration";

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
    <CustomRegistrationStep<CustomerPreference>
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
        primaryAudience: registrationData.targetAudience?.primaryAudience || "",
        requiresAppointments:
          registrationData.targetAudience?.requiresAppointments || false,
        acceptsWalkIns:
          registrationData.targetAudience?.acceptsWalkIns || false,
        uniqueSellingPoint: "",
        hasVipServices: false,
        hasAccessibilityOptions: false,
        hasSeasonalTrends: false,
      }}
      textAreaFields={[
        {
          key: "uniqueSellingPoint",
          label: "What makes your business unique?",
          placeholder:
            "Short description for AI-based SEO & marketing insights.",
        },
      ]}
      toggleQuestions={[
        {
          key: "hasVipServices",
          question: "Do you offer VIP or exclusive services?",
        },
        {
          key: "hasAccessibilityOptions",
          question:
            "Do you provide accessibility options for disabled customers?",
        },
        {
          key: "hasSeasonalTrends",
          question:
            "Are there specific seasonal trends that impact your business?",
        },
      ]}
      onUpdateData={(data) => updateRegistrationData({ targetAudience: data })}
    />
  );
};

export default TargetAudienceStep;

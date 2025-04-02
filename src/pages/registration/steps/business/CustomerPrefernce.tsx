import React from "react";

import CustomRegistrationStep from "@/components/registration/CustomerRegistrtationStep";
import { RegistrationStepProps } from "@/types/registration";

const CustomerPreferenceStep: React.FC<RegistrationStepProps> = ({
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
    <CustomRegistrationStep
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
        primaryAudience: "Men",
        requiresAppointments: false,
        acceptsWalkIns: false,
        uniqueSellingPoint: "",
        hasVipServices: false,
        hasAccessibilityOptions: false,
        hasSeasonalTrends: false,
      }}
      selectOptions={[
        { value: "Men", label: "Men" },
        { value: "Women", label: "Women" },
      ]}
      selectTitle="Who is your business primarily for?"
      toggleQuestions={[
        {
          key: "requiresAppointments",
          question: "Does your business require appointments or bookings?",
        },
        {
          key: "acceptsWalkIns",
          question: "Are you open to walk-ins?",
        },
      ]}
      onUpdateData={(data) => updateRegistrationData({ targetAudience: data })}
    />
  );
};

export default CustomerPreferenceStep;

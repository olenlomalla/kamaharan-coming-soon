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
        businessPrimarilyFor: "Men",
        requiredAppointments: false,
        openToWalkIns: false,
      }}
      selectOptions={[
        { value: "men", label: "Men" },
        { value: "woman", label: "Women" },
      ]}
      selectTitle="Who is your business primarily for?"
      toggleQuestions={[
        {
          key: "requiredAppointments",
          question: "Does your business require appointments or bookings?",
        },
        {
          key: "openToWalkIns",
          question: "Are you open to walk-ins?",
        },
      ]}
      onUpdateData={(data) =>
        updateRegistrationData({ customerPreference: data })
      }
    />
  );
};

export default CustomerPreferenceStep;

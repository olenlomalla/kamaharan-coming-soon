import React from "react";

import CustomRegistrationStep from "@/components/registration/CustomerRegistrtationStep";
import { RegistrationStepProps } from "@/types/registration";

const BusinessOnlinePresenceStep: React.FC<RegistrationStepProps> = ({
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
        yearsInOperation: "0-3 years",
        hasOnlinePresence: false,
        wantsToImprovePresence: false,
      }}
      selectOptions={[
        { value: "0-3 years", label: "0-3 years" },
        { value: "4-7 years", label: "4-7 years" },
        { value: "8-10 years", label: "8-10 years" },
        { value: "10+ years", label: "10+ years" },
      ]}
      selectTitle="Years in Operation"
      toggleQuestions={[
        {
          key: "hasOnlinePresence",
          question:
            "Do you currently have an online presence (website or social media)?",
        },
        {
          key: "wantsToImprovePresence",
          question:
            "Would you like Kamaharan to help improve your online presence?",
        },
      ]}
      onUpdateData={(data) =>
        updateRegistrationData({ onlinePresenceInfo: data })
      }
    />
  );
};

export default BusinessOnlinePresenceStep;

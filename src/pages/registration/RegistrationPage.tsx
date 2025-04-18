import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import RegistrationHeader from "@/components/registration/header/RegistrationHeader";
import {
  businessStepConfigs,
  personalStepConfigs,
} from "@/constants/registration";
import { RegistrationData, RegistrationType } from "@/types/registration";

const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get("type") as RegistrationType | null;

  const [registrationType, setRegistrationType] = useState<RegistrationType>(
    typeParam && (typeParam === "personal" || typeParam === "business")
      ? typeParam
      : "personal",
  );

  const [currentStep, setCurrentStep] = useState(0);
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    email: "",
    password: "",
    typeAccount: "personal",
    language: "English",
    allows: {
      location: false,
      notification: false,
    },
    yearsInOperation: "",
    hasOnlinePresence: false,
    wantsOnlinePresenceHelp: false,
  });

  // При зміні типу реєстрації скидаємо крок на початковий
  useEffect(() => {
    setCurrentStep(0);
  }, [registrationType]);

  // Filter step configs based on conditionDisplay
  const filteredStepConfigs = useMemo(() => {
    const configs =
      registrationType === "personal"
        ? personalStepConfigs
        : businessStepConfigs;
    return configs.filter(
      (config) =>
        !config.conditionDisplay || config.conditionDisplay(registrationData),
    );
  }, [registrationType, registrationData]);

  // Ensure current step is valid when filtered steps change
  useEffect(() => {
    // Make sure currentStep is not out of bounds
    if (currentStep >= filteredStepConfigs.length) {
      setCurrentStep(filteredStepConfigs.length - 1);
    }
  }, [filteredStepConfigs]);

  const updateRegistrationData = (newData: Partial<RegistrationData>) => {
    setRegistrationData((prevData) => {
      const updatedData = { ...prevData, ...newData };
      return updatedData;
    });
  };

  const nextStep = () => {
    if (currentStep < filteredStepConfigs.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      // Final step - complete registration
      handleRegistrationComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleRegistrationComplete = async () => {
    try {
      navigate("/home");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const currentStepConfig = filteredStepConfigs[currentStep];
  const CurrentStepComponent = currentStepConfig?.component;

  if (!CurrentStepComponent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      <RegistrationHeader onNext={nextStep} />
      <CurrentStepComponent
        title={currentStepConfig.title}
        description={currentStepConfig.description}
        onNext={nextStep}
        onBack={prevStep}
        isFirstStep={currentStep === 0}
        isLastStep={currentStep === filteredStepConfigs.length - 1}
        currentStep={currentStep + 1}
        totalSteps={filteredStepConfigs.length}
        registrationData={registrationData}
        updateRegistrationData={updateRegistrationData}
        registrationType={registrationType}
        setRegistrationType={setRegistrationType}
      />
    </div>
  );
};

export default RegistrationPage;

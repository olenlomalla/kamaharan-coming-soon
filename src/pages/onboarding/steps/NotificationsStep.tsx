// pages/onboarding/steps/NotificationsStep.tsx
import React, { useState } from "react";
import { CheckCircle, X } from "lucide-react";
import { OnboardingStepProps } from "@/types/onboarding";

const NotificationsStep: React.FC<OnboardingStepProps> = ({
  title,
  description,
  updateUserData,
  onNext,
  onBack,
}) => {
  const [enableNotifications, setEnableNotifications] = useState(false);

  const handleNotificationsToggle = () => {
    setEnableNotifications(!enableNotifications);
  };

  const handleContinue = () => {
    updateUserData({
      notifications: {
        email: enableNotifications,
        sms: enableNotifications,
        pushNotifications: enableNotifications,
      },
    });
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="text-4xl font-bold font-syne">{title}</div>
        <p className="text-lg text-gray-700">{description}</p>
        <div className="flex items-center justify-center space-x-4">
          <button
            className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
              enableNotifications
                ? "bg-primary-default text-white hover:bg-primary-dark"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={handleNotificationsToggle}
          >
            {enableNotifications ? (
              <>
                <CheckCircle className="mr-2 w-5 h-5" />
                Enable
              </>
            ) : (
              <>
                <X className="mr-2 w-5 h-5" />
                Disable
              </>
            )}
          </button>
          <button
            className="bg-primary-default text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
        <button
          className="text-gray-700 hover:text-gray-900 transition-colors"
          onClick={onBack}
        >
          Skip for now
        </button>
      </div>
    </div>
  );
};

export default NotificationsStep;

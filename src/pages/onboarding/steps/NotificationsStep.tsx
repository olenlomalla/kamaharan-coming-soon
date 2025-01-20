// pages/onboarding/steps/NotificationsStep.tsx
import React, { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface NotificationsStepProps {
  onComplete: () => void;
  onSkip: () => void;
}

const NotificationsStep: React.FC<NotificationsStepProps> = ({ onComplete, onSkip }) => {
  const [enableNotifications, setEnableNotifications] = useState(false);

  const handleNotificationsToggle = () => {
    setEnableNotifications(!enableNotifications);
  };

  const handleContinue = () => {
    onComplete();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="text-4xl font-bold font-syne">Allow Notifications?</div>
        <p className="text-lg text-gray-700">
          Enable notifications to stay up to date on the latest deals, events, and updates from your favorite local businesses.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <button
            className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
              enableNotifications
                ? 'bg-primary-default text-white hover:bg-primary-dark'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
          onClick={onSkip}
        >
          Skip for now
        </button>
      </div>
    </div>
  );
};

export default NotificationsStep;
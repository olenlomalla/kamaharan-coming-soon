export interface OnboardingStepProps {
  title: string;
  description: string;
  backgroundImage: string;
  mobileBackgroundImage: string;
  roundedShapeColor: string;
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  currentStep: number;
  totalSteps: number;
  userData: UserData;
  updateUserData: (newData: Partial<UserData>) => void;
}

export interface UserData {
  userType?: "business" | "customer";
  categories?: string[];
  location?: {
    city: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  notifications?: {
    email: boolean;
    sms: boolean;
    pushNotifications: boolean;
  };
}

export interface OnboardingProps {
  onComplete: () => void;
}

export interface OnboardingStep {
  title: string;
  description: string;
  backgroundImage: string;
  onNext: () => void;
  onBack: () => void;
  currentStep: number;
  totalSteps: number;
  roundedShapeColor: string;
}

export interface OnboardingHeaderProps {
  onNext: () => void;
  className?: string;
}

export interface StepButtonProps {
  onNext: () => void;
  text: string;
}

export interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

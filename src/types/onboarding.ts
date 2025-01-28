export interface OnboardingStepProps {
  title: string;
  description: string;
  image: string;
  mobileImage: string;
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

export type RegistrationType = "personal" | "business";

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  website: string;
  twitter: string;
  instagram: string;
}

export interface OnlinePresenceInfo {
  yearsInOperation: string;
  hasOnlinePresence: boolean;
  wantsToImprovePresence: boolean;
}
export interface CustomerPreference {
  businessPrimarilyFor: string;
  requiredAppointments: boolean;
  openToWalkIns: boolean;
}
export interface RegistrationData {
  email: string;
  password: string;
  verificationCode?: string;
  firstName?: string;
  lastName?: string;
  businessName?: string;
  businessLocation?: string;
  locationAccess?: boolean;
  notificationAccess?: boolean;
  businessType?: string;
  showIndustrySearch?: boolean;
  showFullIndustrySearch?: boolean;
  searchQuery?: string;
  locations?: { address: string }[];
  hasMultipleLocations?: boolean;
  contactInfo?: ContactInfo;
  onlinePresenceInfo?: OnlinePresenceInfo;
  customerPreference?: CustomerPreference;
}

export interface RegistrationStepProps {
  title: string;
  description?: string;
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  currentStep: number;
  totalSteps: number;
  registrationData: RegistrationData;
  updateRegistrationData: (data: Partial<RegistrationData>) => void;
  registrationType: RegistrationType;
  setRegistrationType?: (type: RegistrationType) => void;
}

export interface RegistrationStepConfig {
  component: React.FC<RegistrationStepProps>;
  title: string;
  description?: string;
  conditionDisplay?: (registrationData: RegistrationData) => boolean;
  id?: string;
}

export type RegistrationType = "personal" | "business";
export interface ContactInformation {
  phone: string;
  whatsapp: string;
  website: string;
  twitter: string;
  instagram: string;
}
export interface CustomerPreference {
  primaryAudience: string;
  requiresAppointments: boolean;
  acceptsWalkIns: boolean;
  uniqueSellingPoint: string;
  hasVipServices: boolean;
  hasAccessibilityOptions: boolean;
  hasSeasonalTrends: boolean;
}

export interface CulturalPreferences {
  certifications: string[];
}

export interface TargetAudience {
  businessUniqueness: string;
  vipServices: boolean;
  accessibilityOptions: boolean;
  seasonalTrends: boolean;
}

export interface BusinessHours {
  schedule: {
    day:
      | "Monday"
      | "Tuesday"
      | "Wednesday"
      | "Thursday"
      | "Friday"
      | "Saturday"
      | "Sunday";
    start: string;
    finish: string;
  }[];
  hasFlexibleHours: boolean;
  closesForHolidays: boolean;
  has24_7Support: boolean;
}

export interface ProductsAndServices {
  services: string;
  hasSpecialPackages: boolean;
  hasDeliveryTakeaway: boolean;
  hasEcoFriendlyOptions: boolean;
  hasWholesaleDiscounts: boolean;
  productType: "physical" | "digital" | "both";
}

export interface CommunityEngagement {
  culturalNeeds: string[];
  hasStudentDiscounts: boolean;
  supportsLocalCharities: boolean;
  wantsCommunitySupport: boolean;
  interestedInSkillSharing: boolean;
}

export interface DealsAndPromotions {
  wantsHomepageFeature: boolean;
  wantsSeasonalOffers: boolean;
  hasReferralRewards: boolean;
  hasLoyaltyPoints: boolean;
  hasSpecialEventDiscounts: boolean;
  wantsAIDealSuggestions: boolean;
  dealFrequency: string;
}

export interface InfluencerMarketing {
  openToInfluencers: boolean;
  wantsSponsoredContent: boolean;
  wantsAIMarketingHelp: boolean;
  hasProfessionalMedia: boolean;
  wantsPromotionalContentHelp: boolean;
  preferredInfluencerType: string;
}

export interface PaymentPreferences {
  requiresDeposit: boolean;
  hasMemberships: boolean;
  hasPaymentPlans: boolean;
  acceptedPaymentMethods: string;
}

export interface CustomerInteraction {
  acceptsDirectMessages: boolean;
  wantsAIFAQResponses: boolean;
  allowsPublicReviews: boolean;
  collectsCustomerEmails: boolean;
  hasFeedbackSurveys: boolean;
}

export interface PremiumFeatures {
  wantsPriorityListing: boolean;
  wantsHomepageFeature: boolean;
  wantsAnalytics: boolean;
  wantsTrendInsights: boolean;
}

export interface PersonalBasicInfo {
  firstName: string;
  lastName: string;
  phone: string;
  location: {
    city: string;
    address: string;
  };
  dateOfBirth: Date | null;
  gender: "male" | "female" | "";
  language: string;
}

export interface PersonalInterests {
  categories: string[];
  followsInfluencers: boolean;
  explorationFrequency: string;
  preferredPlatforms: string;
  preferredContent: string[];
}

export interface DiningPreferences {
  foodTypes: string[];
  diningStyle: string[];
  dietaryRestrictions: string[];
}

export interface CommunityPreferences {
  interestedInLocalEvents: boolean;
  interestedInNetworking: boolean;
  interestedInVolunteering: boolean;
  interestedInSkillSharing: boolean;
  wantsToConnectWithOthers: boolean;
}

export interface YouthPrograms {
  hasChildren: boolean;
  interestedInNetworking: boolean;
  interestedInYouthPrograms: boolean;
  interestedInScholarships: boolean;
}

export interface DealPreferences {
  wantsExclusiveDiscounts: boolean;
  preferredDealTypes: string[];
  wantsPromotionNotifications: boolean;
}

export interface AccessibilityPreferences {
  requiresAccessibilityFeatures: boolean;
  interestedInWomenOnlySpaces: boolean;
}

export interface InfluencerPreferences {
  followsSpecificInfluencers: boolean;
  wantsInfluencerRecommendations: boolean;
  interestedInBusinessContent: boolean;
}

export interface AdditionalFeatures {
  wantsEarlyAccess: boolean;
  wantsToParticipateInSurveys: boolean;
  wantsToTestBetaFeatures: boolean;
}

export interface NavigationState {
  showIndustrySearch?: boolean;
  showFullIndustrySearch?: boolean;
}

export interface RegistrationData extends NavigationState {
  email: string;
  password: string;
  verificationCode?: string;
  typeAccount: RegistrationType;
  language: string;
  allows: {
    location: boolean;
    notification: boolean;
  };
  // Business specific fields
  businessName?: string;
  businessLocation?: string;
  businessType?:
    | "retail"
    | "restaurant"
    | "cafe"
    | "beautySalon"
    | "fitnessCenter"
    | "travelAgency"
    | "professionalServices"
    | "automotive"
    | "deals";
  multipleLocation?: {
    isEnabled: boolean;
    locations: string[];
  };
  contactInformation?: ContactInformation;
  yearsInOperation: string;
  hasOnlinePresence: boolean;
  wantsOnlinePresenceHelp: boolean;
  targetAudience?: CustomerPreference;
  culturalPreferences?: CulturalPreferences;
  productsAndServices?: ProductsAndServices;
  communityEngagement?: CommunityEngagement;
  dealsAndPromotions?: DealsAndPromotions;
  influencerMarketing?: InfluencerMarketing;
  operatingHours?: BusinessHours;
  paymentPreferences?: PaymentPreferences;
  customerInteraction?: CustomerInteraction;
  premiumFeatures?: PremiumFeatures;
  personalInfo?: PersonalBasicInfo;
  interests?: PersonalInterests;
  diningPreferences?: DiningPreferences;
  communityPreferences?: CommunityPreferences;
  youthPrograms?: YouthPrograms;
  dealPreferences?: DealPreferences;
  accessibilityPreferences?: AccessibilityPreferences;
  influencerPreferences?: InfluencerPreferences;
  additionalFeatures?: AdditionalFeatures;
  createdAt?: Date;
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
('User validation failed: personalInfo.dateOfBirth: Cast to date failed for value "22.02.2004" (type string) at path "personalInfo.dateOfBirth", personalInfo.gender: `Male` is not a valid enum value for path `personalInfo.gender`., interests.categories.1: `Halal` is not a valid enum value for path `interests.categories.1`.');

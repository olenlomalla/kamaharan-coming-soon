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

export interface TargetAudience {
  businessUniqueness: string;
  vipServices: boolean;
  accessibilityOptions: boolean;
  seasonalTrends: boolean;
}

export interface BusinessHours {
  monday: { open: string; close: string; isOpen: boolean };
  tuesday: { open: string; close: string; isOpen: boolean };
  wednesday: { open: string; close: string; isOpen: boolean };
  thursday: { open: string; close: string; isOpen: boolean };
  friday: { open: string; close: string; isOpen: boolean };
  saturday: { open: string; close: string; isOpen: boolean };
  sunday: { open: string; close: string; isOpen: boolean };
}

export interface ProductsServices {
  serviceType: string;
  hasSpecialPackages: boolean;
  hasDeliveryService: boolean;
  productType: string;
  isEcoFriendly: boolean;
  hasWholesaleDiscounts: boolean;
}

export interface CommunityEngagement {
  hasDiscountsForSpecialGroups: boolean;
  supportsLocalCharities: boolean;
  productType: string;
  wantsFeatureInCommunity: boolean;
  interestedInSkillSharing: boolean;
}

export interface DealsAndPromotions {
  dealFrequency: string;
  wantsFeaturedDeals: boolean;
  wantsSeasonalOffers: boolean;
  hasReferralRewards: boolean;
  hasLoyaltyPoints: boolean;
  hasEventDiscounts: boolean;
  wantsAiSuggestions: boolean;
}

export interface InfluencerMarketing {
  openToInfluencers: boolean;
  influencerType: string;
  wantsSponsoredContent: boolean;
  wantsAiContent: boolean;
  hasProContent: boolean;
  wantsPromoContent: boolean;
}

export interface BusinessHoursAdditionalInfo {
  isFlexibleHours: boolean;
  closesForHolidays: boolean;
  has24HourSupport: boolean;
}

export interface PaymentBookingPreferences {
  paymentMethods: string;
  requiresDeposit: boolean;
  offersMemberships: boolean;
  offersPaymentPlans: boolean;
}

export interface CustomerInteraction {
  allowsDirectMessages: boolean;
  wantsAiAutoRespond: boolean;
  allowsPublicReviews: boolean;
  collectsEmails: boolean;
  enablesFeedbackSurveys: boolean;
}

export interface PremiumFeatures {
  wantsPriorityListing: boolean;
  wantsHomepageFeature: boolean;
  wantsAnalytics: boolean;
  wantsTrendNotifications: boolean;
}

export interface PersonalBasicInfo {
  firstName: string;
  lastName: string;
}

export interface PersonalContactInfo {
  phone: string;
  cityAndCountry: string;
}

export interface PersonalPreferences {
  preferredLanguage: string;
  dateOfBirth: string;
  gender: "male" | "female" | "";
}

export interface PersonalInterests {
  interests: string[];
  explorationFrequency: string;
  followsInfluencers: boolean;
  socialPlatform?: string;
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
  targetAudience?: TargetAudience;
  selectedPreference?: string;
  selectedLanguage?: string;
  businessHours?: BusinessHours;
  isFlexibleHours?: boolean;
  closesForHolidays?: boolean;
  has24HourSupport?: boolean;
  productsServices?: ProductsServices;
  selectedCommunityEngagement?: string;
  communityEngagement?: CommunityEngagement;
  dealsAndPromotions?: DealsAndPromotions;
  influencerMarketing?: InfluencerMarketing;
  paymentBookingPreferences?: PaymentBookingPreferences;
  customerInteraction?: CustomerInteraction;
  premiumFeatures?: PremiumFeatures;
  personalBasicInfo?: PersonalBasicInfo;
  personalContactInfo?: PersonalContactInfo;
  personalPreferences?: PersonalPreferences;
  personalInterests?: PersonalInterests;
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

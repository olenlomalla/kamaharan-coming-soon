import AccountTypeStep from "@/pages/registration/steps/AccountTypeStep";
import EmailStep from "@/pages/registration/steps/EmailStep";
import FinishPage from "@/pages/registration/steps/FinishPage";
import PasswordStep from "@/pages/registration/steps/PasswordStep";
import VerificationStep from "@/pages/registration/steps/VerificationStep";
import BusinessContactStep from "@/pages/registration/steps/business/BusinessContactStep";
import BusinessHoursStep from "@/pages/registration/steps/business/BusinessHoursStep";
import BusinessInfoStep from "@/pages/registration/steps/business/BusinessInfoStep";
import BusinessOnlinePresenceStep from "@/pages/registration/steps/business/BusinessOnlinePresenceStep";
import BusinessTypeStep from "@/pages/registration/steps/business/BusinessTypeStep";
import CommunityEngagement from "@/pages/registration/steps/business/CommunityEngagement";
import CommunityEngagementStep from "@/pages/registration/steps/business/CommunityEngagementStep";
import CompanyNameStep from "@/pages/registration/steps/business/CompanyNameStep";
import CompanyWebsiteStep from "@/pages/registration/steps/business/CompanyWebsiteStep";
import CulturalPreferencesStep from "@/pages/registration/steps/business/CulturalPreferencesStep";
import CustomerInteractionStep from "@/pages/registration/steps/business/CustomerInteractionStep";
import CustomerPreferenceStep from "@/pages/registration/steps/business/CustomerPrefernce";
import DealsPromotionsStep from "@/pages/registration/steps/business/DealsPromotionsStep";
import FullIndustrySearchStep from "@/pages/registration/steps/business/FullIndustrySearchStep";
import IndustrySearchStep from "@/pages/registration/steps/business/IndustrySearchStep";
import InfluencerMarketingStep from "@/pages/registration/steps/business/InfluencerMarketingStep";
import LanguagesServedStep from "@/pages/registration/steps/business/LanguagesServedStep";
import LocationNotificationStep from "@/pages/registration/steps/business/LocationNotificationStep";
import MultipleLocationsStep from "@/pages/registration/steps/business/MultipleLocationsStep";
import PaymentBookingStep from "@/pages/registration/steps/business/PaymentBookingStep";
import PremiumFeaturesStep from "@/pages/registration/steps/business/PremiumFeaturesStep";
import ProductsServicesStep from "@/pages/registration/steps/business/ProductsServicesStep";
import TargetAudienceStep from "@/pages/registration/steps/business/TargetAudienceStep";
import AccessibilityPreference from "@/pages/registration/steps/personal/AccessibilityPreference";
import AdditionalUserPreferences from "@/pages/registration/steps/personal/AdditionalUserFeatures";
import BasicInfoStep from "@/pages/registration/steps/personal/BasicInfoStep";
import CommunityEngagementPersonalStep from "@/pages/registration/steps/personal/CommunityEngagementStep";
import ContactInfoStep from "@/pages/registration/steps/personal/ContactInfoStep";
import DietaryRestrictionsStep from "@/pages/registration/steps/personal/DietaryRestrictionsStep";
import DiningPreferencesStep from "@/pages/registration/steps/personal/DiningPreferencesStep";
import ExclusiveDealsStep from "@/pages/registration/steps/personal/ExclusiveDealsStep";
import InfluencerPreferencesStep from "@/pages/registration/steps/personal/InfluencerPreferencesStep";
import InterestsPageOne from "@/pages/registration/steps/personal/InterestsPageOne";
import InterestsPageTwo from "@/pages/registration/steps/personal/InterestsPageTwo";
import PersonalInterestsDetailsStep from "@/pages/registration/steps/personal/PersonalInterestsDetailsStep";
import PersonalInterestsStep from "@/pages/registration/steps/personal/PersonalInterestsStep";
import PreferencesStep from "@/pages/registration/steps/personal/PreferencesStep";
import YouthFamilyProgramsStep from "@/pages/registration/steps/personal/YouthFamilyProgramsStep";
import { RegistrationData, RegistrationStepConfig } from "@/types/registration";

const commonSteps: RegistrationStepConfig[] = [
  {
    component: AccountTypeStep,
    title: "Choose Account Type",
    description: "Select how you want to use Kamaharan",
  },
  {
    component: EmailStep,
    title: "Create Your Account",
    description: "Choose how you want to use Kamaharan",
  },
  {
    component: VerificationStep,
    title: "Check your email",
    description: "We've sent your verification link to ",
  },
  {
    component: PasswordStep,
    title: "Create your password",
  },
];

export const personalStepConfigs: RegistrationStepConfig[] = [
  ...commonSteps,
  {
    component: BasicInfoStep,
    title: "Tell us about yourself",
    description: "Let's get to know you better",
    id: "basic_info",
  },
  {
    component: ContactInfoStep,
    title: "Tell us about yourself",
    description: "Let's get to know you better",
    id: "contact_info",
  },
  {
    component: PreferencesStep,
    title: "Tell us about yourself",
    description: "Let's get to know you better",
    id: "preferences",
  },
  {
    component: LocationNotificationStep,
    title: "Location & Notifications",
    description: "Help us personalize your experience",
    id: "location_notification",
  },
  {
    component: PersonalInterestsStep,
    title: "Personal Interests & Preference",
    description: "What are you most interested in? (Select all that apply)",
    id: "personal_interests",
  },
  {
    component: PersonalInterestsDetailsStep,
    title: "Personal Interests & Preference",
    id: "preferences",
  },
  {
    component: InterestsPageOne,
    title: "Personal Interests & Preferences",
    description: "What type of content do you enjoy from influencers?",
    id: "preferences",
  },
  {
    component: InterestsPageTwo,
    title: "Dining & Shopping Preferences",
    description: "What type of food do you enjoy?",
    id: "preferences",
  },
  {
    component: DiningPreferencesStep,
    title: "Dining & Shopping Preferences",
    description: "Do you prefer dining in, takeaways, or delivery?",
    id: "dining",
  },
  {
    component: DietaryRestrictionsStep,
    title: "Dining & Shopping Preferences",
    description: "Do you have any dietary restrictions or preferences?",
    id: "dietary",
  },
  {
    component: CommunityEngagementPersonalStep,
    title: "Community Engagement",
    id: "community",
  },
  {
    component: YouthFamilyProgramsStep,
    title: "Youth & Family Programmes",
    id: "family",
  },
  {
    component: ExclusiveDealsStep,
    title: "Exclusive Deals & Personalised Offers",
    id: "exclusive_deals",
  },
  {
    component: AccessibilityPreference,
    title: "Safety and Accessibility Preferences",
    id: "accesbility_preference",
  },
  {
    component: InfluencerPreferencesStep,
    title: "Influencer & Content Preferences",
    id: "influencer_preferences",
  },
  {
    component: AdditionalUserPreferences,
    title: "Additional User Features",
    id: "additional_user_feature",
  },
  {
    component: FinishPage,
    title: "Congrats",
    id: "finish",
  },
];

export const businessStepConfigs: RegistrationStepConfig[] = [
  ...commonSteps,
  {
    component: BusinessInfoStep,
    title: "Basic Business Information",
    description: "Let's get to know you better",
    id: "business_info",
  },
  {
    component: LocationNotificationStep,
    title: "Location & Notifications",
    description: "Help us personalize your experience",
    id: "location_notification",
  },
  {
    component: BusinessTypeStep,
    title: "Business Type/Industry",
    description: "What type of business do you run?",
    conditionDisplay: (registrationData: RegistrationData): boolean => {
      console.log("BusinessTypeStep condition check:", registrationData);
      return (
        !registrationData.showIndustrySearch &&
        !registrationData.showFullIndustrySearch
      );
    },
    id: "business_type",
  },
  {
    component: IndustrySearchStep,
    title: "What industry are you in?",
    conditionDisplay: (registrationData: RegistrationData): boolean => {
      console.log("IndustrySearchStep condition check:", registrationData);
      return (
        registrationData.showIndustrySearch === true &&
        registrationData.showFullIndustrySearch !== true
      );
    },
    id: "industry_search",
  },
  {
    component: FullIndustrySearchStep,
    title: "What industry are you in?",
    conditionDisplay: (registrationData: RegistrationData): boolean => {
      return (
        registrationData.showFullIndustrySearch === true &&
        registrationData.showIndustrySearch !== true
      );
    },
    id: "full_industry_search",
  },
  {
    component: MultipleLocationsStep,
    title: "Multiple Locations",
    description: "Let's get to know you better",
    id: "multiple_locations",
  },
  {
    component: BusinessContactStep,
    title: "Business Contact Information",
    description:
      "Provide your phone number, WhatsApp, email, website, and social media links.",
    id: "business_contact",
  },
  {
    component: BusinessOnlinePresenceStep,
    title: "Business Contact Information",
    description:
      "Provide your phone number, WhatsApp, email, website, and social media links.",
    id: "business_contact_continue",
  },
  {
    component: CustomerPreferenceStep,
    title: "Target Audience & Customer Preferences",
    description: "Your answer will help us to give you the best start.",
    id: "customer_preference",
  },
  {
    component: CompanyNameStep,
    title: "What is your company's name?",
    id: "company_name",
  },
  {
    component: CompanyWebsiteStep,
    title: "What is your company's website?",
    id: "company's_website",
  },
  {
    component: TargetAudienceStep,
    title: "Target Audience & Customer Preferences",
    description: "Your answer will help us to give you the best start.",
    id: "target_audience",
  },

  {
    component: CulturalPreferencesStep,
    title: "Cultural/Religious Preferences",
    description: "Do you cater to specific cultural or religious preferences?",
    id: "culture_preference",
  },
  {
    component: LanguagesServedStep,
    title: "Languages Served",
    description: "What languages do you serve customers in?",
    id: "languages_served",
  },
  {
    component: ProductsServicesStep,
    title: "Products & Services",
    description: "Your answer will help us to give you the best start.",
    id: "products_services",
  },
  {
    component: CommunityEngagement,
    title: "Community Engagement & Cultural Preferences",
    description: "Do you cater to specific cultural or ethnic needs?",
    id: "community_engagement",
  },
  {
    component: CommunityEngagementStep,
    title: "Community Engagement & Cultural Preferences",
    id: "culture_preference",
  },
  {
    component: DealsPromotionsStep,
    title: "Deals, Promotions & Customer Engagement",
    id: "deals_promotions",
  },
  {
    component: InfluencerMarketingStep,
    title: "Influencer & Marketing Integration",
    id: "influencer",
  },
  {
    component: BusinessHoursStep,
    title: "Operating Hours & Business Availability",
    description: "What are your business hours?",
    id: "business_hours",
  },
  {
    component: PaymentBookingStep,
    title: "Payment & Booking Preferences",
    id: "payment_booking",
  },
  {
    component: CustomerInteractionStep,
    title: "Customer Interaction & Communication",
    id: "customer_interaction",
  },
  {
    component: PremiumFeaturesStep,
    title: "Additional Premium Features",
    id: "premium_features",
  },
  {
    component: FinishPage,
    title: "Congrats",
    id: "finish",
  },
];

import AccountTypeStep from "@/pages/registration/steps/AccountTypeStep";
import EmailStep from "@/pages/registration/steps/EmailStep";
import PasswordStep from "@/pages/registration/steps/PasswordStep";
import VerificationStep from "@/pages/registration/steps/VerificationStep";
import BusinessContactStep from "@/pages/registration/steps/business/BusinessContactStep";
import BusinessInfoStep from "@/pages/registration/steps/business/BusinessInfoStep";
import BusinessOnlinePresenceStep from "@/pages/registration/steps/business/BusinessOnlinePresenceStep";
import BusinessTypeStep from "@/pages/registration/steps/business/BusinessTypeStep";
import CustomerPreferenceStep from "@/pages/registration/steps/business/CustomerPrefernce";
import FullIndustrySearchStep from "@/pages/registration/steps/business/FullIndustrySearchStep";
import IndustrySearchStep from "@/pages/registration/steps/business/IndustrySearchStep";
import LocationNotificationStep from "@/pages/registration/steps/business/LocationNotificationStep";
import MultipleLocationsStep from "@/pages/registration/steps/business/MultipleLocationsStep";
import PersonalDetailsStep from "@/pages/registration/steps/personal/PersonalDetailsStep";
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
    component: PersonalDetailsStep,
    title: "Personal Details",
    description: "Tell us more about yourself",
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
];

import LocationStep from "@/pages/onboarding/steps/LocationStep";
import NotificationsStep from "@/pages/onboarding/steps/NotificationsStep";
import SuccessStep from "@/pages/onboarding/steps/SuccessStep";

import WelcomeStep from "@/pages/onboarding/steps/WelcomeStep";

export const stepConfigs = [
  {
    component: WelcomeStep,
    title: "Find your new favourite spots",
    description:
      "From top-rated restaurants to trusted handymen, we’ve got London covered",
    backgroundImage: "/images/onboarding/backgrounds/welcome.svg",
    mobileBackgroundImage:
      "/images/onboarding/backgrounds/mobile/welcome-mobile.svg",
    roundedShapeColor: "#B7D6F5",
  },
  {
    component: LocationStep,
    title: "Set Your Location",
    description: "Help us customize your experience by sharing your location",
    backgroundImage: "/images/onboarding/backgrounds/location.svg",
    mobileBackgroundImage:
      "/images/onboarding/backgrounds/mobile/location-mobile.svg",
    roundedShapeColor: "#FBC1BA",
  },
  {
    component: NotificationsStep,
    title: "Enable Notifications",
    description: "Stay updated with important alerts and information",
    backgroundImage: "/images/onboarding/backgrounds/notifications.svg",
    mobileBackgroundImage:
      "/images/onboarding/backgrounds/mobile/notifications-mobile.svg",
    roundedShapeColor: "#FFE4BC",
  },
  {
    component: SuccessStep,
    title: "All Set!",
    description: "You're ready to start using our app",
    backgroundImage: "/images/onboarding/backgrounds/success.svg",
    mobileBackgroundImage:
      "/images/onboarding/backgrounds/mobile/success-mobile.svg",
    roundedShapeColor: "#B2E7B1",
  },
];

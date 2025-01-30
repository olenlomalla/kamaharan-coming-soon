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
    backgroundImage: "/onboarding-blue.svg",
    mobileBackgroundImage: "/onboarding-blue-mobile.svg",
    roundedShapeColor: "#B7D6F5",
  },
  {
    component: LocationStep,
    title: "Set Your Location",
    description: "Help us customize your experience by sharing your location",
    backgroundImage: "/onboarding-pink.svg",
    mobileBackgroundImage: "/onboarding-pink-mobile.svg",
    roundedShapeColor: "#FBC1BA",
  },
  {
    component: NotificationsStep,
    title: "Enable Notifications",
    description: "Stay updated with important alerts and information",
    backgroundImage: "/onboarding-yellow.svg",
    mobileBackgroundImage: "/onboarding-yellow-mobile.svg",
    roundedShapeColor: "#FFE4BC",
  },
  {
    component: SuccessStep,
    title: "All Set!",
    description: "You're ready to start using our app",
    backgroundImage: "/onboarding-green.svg",
    mobileBackgroundImage: "/onboarding-green-mobile.svg",
    roundedShapeColor: "#B2E7B1",
  },
];

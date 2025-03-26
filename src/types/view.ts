import { ReactNode } from "react";

import { Business } from "./businesses";

export interface FeaturedSectionProps {
  currentBusiness: Business;
}

export interface AboutSectionProps {
  currentBusiness: Business;
}
export interface ContentSectionProps {
  currentBusiness: Business;
}

export interface SocialNetworkItemProps {
  image: ReactNode;
  link: string;
}

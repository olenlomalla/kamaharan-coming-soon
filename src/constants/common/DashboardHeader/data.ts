import {
  DashboardActionButtons,
  DashboardDropdownIcon,
  DashboardFormIcons,
  DashboardHeaderIcons,
  DashboardHeaderLogo,
} from "@/types/dashboardHeader";

export const headerLogo: DashboardHeaderLogo = {
  imageUrl: "/icons/logo.svg",
  imageLabel: "Logo",
};

export const dashboardHeaderIcons: DashboardHeaderIcons[] = [
  {
    id: 1,
    icon: "/icons/dashboard/header/navigation/explore.svg",
    label: "Explore",
    url: "/explore",
  },
  {
    id: 2,
    icon: "/icons/dashboard/header/navigation/deals.svg",
    label: "Deals",
    url: "/deals",
  },
  {
    id: 3,
    icon: "/icons/dashboard/header/navigation/services.svg",
    label: "Services",
    url: "/services",
  },
  {
    id: 4,
    icon: "/icons/dashboard/header/navigation/blog.svg",
    label: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    icon: "/icons/dashboard/header/navigation/around-me.svg",
    label: "Around Me",
    url: "/find-business",
  },
];

export const inputSearchIcon: DashboardFormIcons[] = [
  {
    imageUrl: "/icons/dashboard/header/input-search.svg",
    imageLabel: "Search",
    imageId: 1,
  },
];

export const dashboardActionButtons: DashboardActionButtons[] = [
  {
    imageUrl: "/icons/dashboard/header/actionButtons/help.svg",
    imageLabel: "Help Icon",
    label: "Help",
    imageId: 1,
  },
  {
    imageUrl: "/icons/dashboard/header/actionButtons/saved.svg",
    imageLabel: "Saved Icon",
    label: "Saved",
    imageId: 2,
  },
];

export const dropdownButton: DashboardDropdownIcon = {
  imageUrl: "/icons/dashboard/header/dropdown-arrow.svg",
  imageLabel: "Dropdown Button",
};

export const buttonsData = [
  { text: "K. for business", path: "/kamaharan-for-business" },
  { text: "Start a Project", path: "/start-a-project" },
];

export const accountPopupSections = [
  {
    id: 0,
    name: "Profile",
    image: "/icons/dashboard/header/user.svg",
    route: "/profile",
  },
  {
    id: 1,
    name: "My Activities",
    image: "/icons/dashboard/header/activity.svg",
    route: "/activities",
  },
  {
    id: 2,
    name: "Settings",
    image: "/icons/dashboard/header/settings.svg",
    route: "/settings",
  },
];

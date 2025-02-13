import {
  DashboardActionButtons,
  DashboardDropdownIcon,
  DashboardFormIcons,
  DashboardHeaderIcons,
  DashboardHeaderLogo,
  DashboardUserIcon,
} from "@/types/dashboardHeader";

export const headerLogo: DashboardHeaderLogo = {
  imageUrl: "/icons/logo.svg",
  imageLabel: "Logo",
};

export const dashboardHeaderIcons: DashboardHeaderIcons[] = [
  {
    imageUrl: "/icons/dashboard/header/navigation/explore.svg",
    imageLabel: "Explore",
    url: "/explore",
    imageId: 1,
  },
  {
    imageUrl: "/icons/dashboard/header/navigation/deals.svg",
    imageLabel: "Deals",
    url: "/deals",
    imageId: 2,
  },
  {
    imageUrl: "/icons/dashboard/header/navigation/services.svg",
    imageLabel: "Services",
    url: "/services",
    imageId: 3,
  },
  {
    imageUrl: "/icons/dashboard/header/navigation/blog.svg",
    imageLabel: "Blog",
    url: "/blog",
    imageId: 4,
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

export const userButton: DashboardUserIcon = {
  imageUrl: "/icons/dashboard/header/user.svg",
  imageLabel: "User Button",
  label: "You",
};

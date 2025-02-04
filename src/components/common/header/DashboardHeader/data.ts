interface DashboardHeaderIcons {
  imageUrl: string;
  imageLabel: string;
  imageId: number;
}

interface DashboardFormIcons {
  imageUrl: string;
  imageLabel: string;
  imageId: number;
}

interface DashboardActionButtons {
  imageUrl: string;
  imageLabel: string;
  imageId: number;
}

interface DashboardDropdownIcon {
  imageUrl: string;
  imageLabel: string;
}

interface DashboardUserIcon {
  imageUrl: string;
  imageLabel: string;
}

interface DashboardHeaderLogo {
  imageUrl: string;
  imageLabel: string;
}

export const headerLogo: DashboardHeaderLogo = {
  imageUrl: "/icons/logo.svg",
  imageLabel: "Logo",
};

export const dashboardHeaderIcons: DashboardHeaderIcons[] = [
  {
    imageUrl: "/icons/dashboard/header/navigation/explore.svg",
    imageLabel: "Explore",
    imageId: 1,
  },
  {
    imageUrl: "/icons/dashboard/header/navigation/deals.svg",
    imageLabel: "Deals",
    imageId: 2,
  },
  {
    imageUrl: "/icons/dashboard/header/navigation/services.svg",
    imageLabel: "Services",
    imageId: 3,
  },
  {
    imageUrl: "/icons/dashboard/header/navigation/blog.svg",
    imageLabel: "Blog",
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
    imageId: 1,
  },
  {
    imageUrl: "/icons/dashboard/header/actionButtons/saved.svg",
    imageLabel: "Saved Icon",
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
};

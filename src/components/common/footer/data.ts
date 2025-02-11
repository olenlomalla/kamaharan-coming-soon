interface IFooterLogo {
  imageUrl: string;
  imageLabel: string;
}

interface IFooterItems {
  label: string;
  items: { name: string; url: string }[];
  id: number;
}

interface IFooterSocialMediaIcons {
  imageUrl: string;
  imageLabel: string;
  id: number;
}

interface IDownloadApp {
  imageUrl: string;
  imageLabel: string;
  id: number;
}

export const footerLogo: IFooterLogo = {
  imageUrl: "/images/logo/logo.png",
  imageLabel: "Logo",
};

export const footerItems: IFooterItems[] = [
  {
    label: "Services",
    items: [
      { name: "Get a listing", url: "/" },
      { name: "Get a listing", url: "/" },
      { name: "Help and Contact", url: "/" },
    ],
    id: 1,
  },
  {
    label: "Discover",
    items: [
      { name: "Eating Out", url: "/" },
      { name: "Home Services", url: "/" },
      { name: "Car Services", url: "/" },
      { name: "Deals", url: "/" },
      { name: "Explore", url: "/" },
      { name: "Find a Business", url: "/find-business" },
    ],
    id: 2,
  },
  {
    label: "K Blog",
    items: [
      { name: "Blog Home", url: "/" },
      { name: "Trades", url: "/" },
      { name: "Hot Deals", url: "/" },
      { name: "Explore London", url: "/" },
      { name: "Most popular in Winter", url: "/" },
      { name: "Promote a Business", url: "/find-business" },
    ],
    id: 3,
  },
  {
    label: "Company",
    items: [
      { name: "Digital Marketing Solutions", url: "/" },
      { name: "Find Your Solution", url: "/" },
      { name: "Contact", url: "/" },
      { name: "About", url: "/" },
    ],
    id: 4,
  },
  {
    label: "Info",
    items: [
      { name: "Privacy Policy", url: "/" },
      { name: "Cookie Policy", url: "/" },
      { name: "Conditions of use", url: "/" },
      { name: "Reviews policy", url: "/" },
      { name: "Modern Slavery Act Statement", url: "/" },
    ],
    id: 5,
  },
];

export const socialMediaIcons: IFooterSocialMediaIcons[] = [
  {
    imageUrl: "/icons/dashboard/footer/instagram.svg",
    imageLabel: "Instagram",
    id: 1,
  },
  {
    imageUrl: "/icons/dashboard/footer/x.svg",
    imageLabel: "X",
    id: 2,
  },
  {
    imageUrl: "/icons/dashboard/footer/facebook.svg",
    imageLabel: "Facebook",
    id: 3,
  },
];

export const downloadApp: IDownloadApp[] = [
  {
    imageUrl: "/icons/dashboard/footer/download/playmarket.svg",
    imageLabel: "Play market download",
    id: 1,
  },
  {
    imageUrl: "/icons/dashboard/footer/download/appstore.svg",
    imageLabel: "App store download",
    id: 2,
  },
];

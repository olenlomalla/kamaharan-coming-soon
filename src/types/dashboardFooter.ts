export interface IFooterLogo {
  imageUrl: string;
  imageLabel: string;
}

export interface IFooterItems {
  label: string;
  items: { name: string; url: string }[];
  id: number;
}

export interface IFooterSocialMediaIcons {
  imageUrl: string;
  imageLabel: string;
  id: number;
}

export interface IDownloadApp {
  imageUrl: string;
  imageLabel: string;
  id: number;
}

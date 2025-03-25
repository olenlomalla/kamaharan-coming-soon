export interface TextElement {
  id: number;
  head: string;
  price: string;
  rate: string;
  reviews: string;
}

export interface Images {
  id: number;
  image: string;
  business: string;
}

export interface CustomSliderModifiedProps {
  images: Images[];
  title: string;
  showActionButtons?: boolean;
  showSliderDescription?: boolean;
  buttonTitlesArray?: string[];
  descriptionArray?: TextElement[];
  onClick?: (id: number) => void;
}

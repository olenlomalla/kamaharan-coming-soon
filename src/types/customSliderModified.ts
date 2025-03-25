export interface TextElement {
  id: number;
  head: string;
  price: string;
  rate: string;
  reviews: string;
}

export interface CustomSliderModifiedProps {
  images: string[];
  title: string;
  showActionButtons?: boolean;
  showSliderDescription?: boolean;
  buttonTitlesArray?: string[];
  descriptionArray?: TextElement[];
}

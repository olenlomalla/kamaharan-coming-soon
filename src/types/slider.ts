import Slider from "react-slick";

export interface SliderActionButtonProps {
  onClick: () => void;
  image: string;
  imageAlt: string;
}

export interface SliderActionButtonsProps {
  nextSlide: () => void;
  prevSlide: () => void;
}

export interface SlideItemProps {
  image: {
    src: string;
    text: string;
    description: string;
  };
  absoluteIndex: number;
  liked: boolean;
  onLike: (index: number) => void;
}

export interface SliderRowProps {
  images: {
    src: string;
    text: string;
    description: string;
  }[];
  offset: number;
  sliderRef: React.RefObject<Slider>;
  settings: any;
  likedSlides: number[];
  handleLikeClick: (index: number) => void;
}

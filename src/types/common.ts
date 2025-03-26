import { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
}

export interface BackButtonProps {
  onClick: () => void;
  size?: string;
  className?: string;
}

export interface BusinessCardProps {
  image: string;
  className?: string;
}

export interface ServiceCardProps {
  title: string;
  time: string;
  value: string;
  rating: number;
  review: string;
  className?: string;
}

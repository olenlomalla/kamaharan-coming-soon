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
}
